import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import ServiceSection from './ServiceSection';
import PrimaryNoneFillButton from '../ui/PrimaryNoneFillButton';
import PrimaryButton from '../ui/PrimaryButton';
import CheckboxField from '../ui/CheckboxField';
import ChangeBudget from '../common/ChangeBudget';
import { getMinPackages, createBudget, getBudgetAmount, updateBudgetAmount } from '../../services/budgetServices';

function PlanBudgetForm() {
    const [guestCount, setGuestCount] = useState(0);
    const [totalBudget, setTotalBudget] = useState(0);
    const [allocatedPrices, setAllocatedPrices] = useState({
        hotels: 0,
        dressers: 0,
        Photography: 0,
        floral: 0,
        jewellary: 0,
        dancing_groups: 0,
        ashtaka: 0,
        salons: 0,
        djs: 0,
        honeymoon: 0,
        cakes: 0,
        cars: 0,
        invitation_cards: 0,
        poruwa: 0,
        catering: 0,
    });
    const [remainingBudget, setRemainingBudget] = useState(totalBudget);
    const [checkboxes, setCheckboxes] = useState({
        hotels: false,
        dressers: false,
        Photography: false,
        floral: false,
        jewellary: false,
        dancing_groups: false,
        ashtaka: false,
        salons: false,
        djs: false,
        honeymoon: false,
        cakes: false,
        cars: false,
        invitation_cards: false,
        poruwa: false,
        catering: false,
    });

    const [serviceData, setServiceData] = useState([
        { key: 'hotels', name: 'Hotels', minPrice: 0, imageSrc: '../src/assets/images/services/hotel.png' },
        { key: 'dressers', name: 'Dressers', minPrice: 0, imageSrc: '../src/assets/images/services/dress.png' },
        { key: 'Photography', name: 'Photography', minPrice: 0, imageSrc: '../src/assets/images/services/photography.jpg' },
        { key: 'floral', name: 'Floral', minPrice: 0, imageSrc: '../src/assets/images/services/floral.png' },
        { key: 'jewellary', name: 'Jewellary', minPrice: 0, imageSrc: '../src/assets/images/services/jewellery.png' },
        { key: 'dancing_groups', name: 'Dancing Groups', minPrice: 0, imageSrc: '../src/assets/images/services/dancing.png' },
        { key: 'ashtaka', name: 'Ashtaka', minPrice: 0, imageSrc: '../src/assets/images/services/ashtaka.jpg' },
        { key: 'salons', name: 'Salons', minPrice: 0, imageSrc: '../src/assets/images/services/hair.jpeg' },
        { key: 'djs', name: 'DJs', minPrice: 0, imageSrc: '../src/assets/images/services/dj.jpg' },
        { key: 'honeymoon', name: 'Honeymoon', minPrice: 0, imageSrc: '../src/assets/images/services/honeymoon.jpg' },
        { key: 'cars', name: 'Cars', minPrice: 0, imageSrc: '../src/assets/images/services/car.jpg' },
        { key: 'invitation_cards', name: 'Invitation Cards', minPrice: 0, imageSrc: '../src/assets/images/services/invitation.jpg' },
        { key: 'poruwa', name: 'Poruwa', minPrice: 0, imageSrc: '../src/assets/images/services/poruwa.jpg' },
        { key: 'catering', name: 'Catering', minPrice: 0, imageSrc: '../src/assets/images/services/catering.jpg' }
    ]);

    useEffect(() => {
        const fetchMinPackages = async () => {
            try {
                const budgetResponse = await getBudgetAmount();
                setTotalBudget(budgetResponse.budget);
                setRemainingBudget(budgetResponse.budget);
                setGuestCount(budgetResponse.guest);

                const minPackages = await getMinPackages();
                const updatedServiceData = serviceData.map(service => {
                    const matchedPackage = minPackages.minPackages.find(
                        pkg => pkg.role.toLowerCase() === service.key.toLowerCase()
                    );
    
                    if (matchedPackage) {
                        // If service is Photography or Catering, adjust the minPrice by guestCount
                        if (service.key.toLowerCase() === 'hotels' || service.key.toLowerCase() === 'catering') {
                            return { ...service, minPrice: matchedPackage.min_price * guestCount };
                        }
    
                        return { ...service, minPrice: matchedPackage.min_price };
                    }
    
                    return service;
                });
    
                setServiceData(updatedServiceData);
            } catch (error) {
                console.error("Error fetching minimum packages:", error);
            }
        };
    
        fetchMinPackages();
    }, [guestCount]); // Add guestCount as a dependency    

    const handleTotalBudgetChange = (e) => {
        const newTotalBudget = parseFloat(e.target.value.replace(/[^\d]/g, '')) || 0;
        const totalAllocated = Object.values(allocatedPrices).reduce((acc, curr) => acc + curr, 0);

        if (newTotalBudget < totalAllocated) {
            Swal.fire({
                title: 'Error!',
                text: 'Total budget cannot be less than the allocated budget!',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }

        setTotalBudget(newTotalBudget);
        setRemainingBudget(newTotalBudget - totalAllocated);
    };

    const handlePriceChange = (key) => (e) => {
        const value = parseFloat(e.target.value.replace(/[^\d]/g, '')) || 0;
        const totalAllocated = Object.values({
            ...allocatedPrices,
            [key]: value,
        }).reduce((acc, curr) => acc + curr, 0);

        if (totalAllocated > totalBudget) {
            Swal.fire({
                title: 'Error!',
                text: 'You cannot allocate more than the remaining budget!',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            e.target.value = allocatedPrices[key];
        } else {
            setAllocatedPrices((prev) => {
                const updatedPrices = { ...prev, [key]: value };
                setRemainingBudget(totalBudget - totalAllocated);
                return updatedPrices;
            });
        }
    };

    const handleCheckboxChange = (key) => (checked) => {
        if (checked) {
            setCheckboxes((prev) => ({
                ...prev,
                [key]: true,
            }));
        } else {
            setCheckboxes((prev) => ({
                ...prev,
                [key]: false,
            }));
            setAllocatedPrices((prev) => {
                const updatedPrices = { ...prev, [key]: 0 };
                setRemainingBudget(totalBudget - Object.values(updatedPrices).reduce((acc, curr) => acc + curr, 0));
                return updatedPrices;
            });
        }
    };

    const handleReset = () => {
        setTotalBudget(0);
        setAllocatedPrices({
            hotels: 0,
            dressers: 0,
            Photography: 0,
            floral: 0,
            jewellary: 0,
            dancing_groups: 0,
            ashtaka: 0,
            salons: 0,
            djs: 0,
            honeymoon: 0,
            cakes: 0,
            cars: 0,
            invitation_cards: 0,
            poruwa: 0,
            catering: 0,
        });
        setRemainingBudget(0);
        setCheckboxes({
            hotels: false,
            dressers: false,
            Photography: false,
            floral: false,
            jewellary: false,
            dancing_groups: false,
            ashtaka: false,
            salons: false,
            djs: false,
            honeymoon: false,
            cakes: false,
            cars: false,
            invitation_cards: false,
            poruwa: false,
            catering: false,
        });
    };

    const handleNext = async () => {
        const isAnyServiceSelected = Object.values(checkboxes).some((isChecked) => isChecked);
    
        if (!isAnyServiceSelected) {
            Swal.fire({
                title: 'Error!',
                text: 'Please select at least one service before proceeding!',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }
    
        // Collect the allocated prices for the selected services
        const selectedPrices = Object.keys(checkboxes).reduce((acc, key) => {
            if (checkboxes[key]) {
                acc[key] = allocatedPrices[key];
            }
            return acc;
        }, {});
        console.log("totalBudget", totalBudget)
        console.log("hotel", selectedPrices.hotels)
        console.log("hotel", selectedPrices.Photography)
        
        // Divide hotels and catering prices by guestCount and round up
        const adjustedHotels = selectedPrices.hotels ? Math.ceil(selectedPrices.hotels / guestCount) : 0;
        const adjustedCatering = selectedPrices.catering ? Math.ceil(selectedPrices.catering / guestCount) : 0;

        try {
            // Update total budget in the backend
            await updateBudgetAmount(totalBudget);
            // Call the createBudget function with the selected prices
            const response = await createBudget(
                adjustedHotels,
                selectedPrices.dressers || 0,
                selectedPrices.Photography || 0,
                selectedPrices.floral || 0,
                selectedPrices.jewellary || 0,
                selectedPrices.dancing_groups || 0,
                selectedPrices.ashtaka || 0,
                selectedPrices.salons || 0,
                selectedPrices.djs || 0,
                selectedPrices.honeymoon || 0,
                selectedPrices.cars || 0,
                selectedPrices.invitation_cards || 0,
                selectedPrices.poruwa || 0,
                adjustedCatering
            );
            
            // Assuming the response contains the newly created budget's ID, e.g. response.data.id
            const newBudgetId = response.budget.plan_id; // Adjust this based on how your backend sends the ID    
            // Show success message
            Swal.fire({
                title: 'Success!',
                text: 'Your budget has been created successfully!',
                icon: 'success',
                confirmButtonText: 'OK',
            }).then(() => {
                // After the success alert is closed, navigate to the next page with the new budget ID
                window.location.href = `/client/viewbudget/${newBudgetId}`; // Dynamic URL with the ID
            });
//             // Show success message
//             Swal.fire({
//                 title: 'Success!',
//                 text: 'Your budget has been created successfully!',
//                 icon: 'success',
//                 confirmButtonText: 'OK',
//             }).then(() => {
//                 // After the success alert is closed, navigate to the next page with the new budget ID
//                 window.location.href = `/client/viewbudget/${newBudgetId}`; // Dynamic URL with the ID
//             });
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: `Budget creation failed: ${error.message}`,
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };        

    return (
        <div>
            <style>{`
                .d-coolinput {
                    display: flex;
                    flex-direction: column;
                    width: 40%;
                    position: relative;
                }

                .d-coolinput label.d-text {
                    font-size: 1rem;
                    color: #000000;
                    font-weight: 500;
                    position: relative;
                    top: 0.5rem;
                    margin: 0 0 0 7px;
                    padding: 0 3px;
                    background: #FFF8F5;
                    width: fit-content;
                    z-index: 10;
                }

                .d-coolinput .d-input-wrapper {
                    position: relative;
                    width: 100%;
                }

                .d-coolinput .d-input {
                    width: 100%;
                    padding: 11px 10px;
                    font-size: 1rem;
                    border: 1px #000000 solid;
                    border-radius: 5px;
                    background: #FFF8F5;
                    height: 100%;
                    color: #000000;
                    text-align: center;
                }

                .d-coolinput .d-input::placeholder {
                    color: #888888;
                }

                .d-coolinput .d-input:focus {
                    outline: none;
                }

                .d-coolinput .d-input-2 {
                    width: 100%;
                    padding: 11px 10px;
                    font-size: 1rem;
                    background: transparent;
                    height: 100%;
                    color: #000000;
                    border-bottom: 1px #000000 solid;
                    text-align: center;
                }

                .d-coolinput .d-input-2::placeholder {
                    color: #888888;
                }
            `}</style>
            <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-5'>
                <div className='flex flex-row items-end justify-end w-full gap-5 mb-5'>
                    <div className="d-coolinput">
                        <label htmlFor="total-budget" className="d-text">Total Budget</label>
                        <div className="d-input-wrapper">
                            <input
                                id="total-budget"
                                type="text"
                                value={totalBudget}
                                onChange={handleTotalBudgetChange}
                                name="total-budget"
                                className="d-input"
                                placeholder='Enter your total budget'
                            />
                        </div>
                    </div>
                    <div className="d-coolinput">
                        <label htmlFor="remaining-budget" className="d-text">Remaining Budget</label>
                        <div className="d-input-wrapper">
                            <input
                                id="remaining-budget"
                                type="text"
                                value={`Rs ${remainingBudget}/=`}
                                name="remaining-budget"
                                className="d-input"
                                disabled
                            />
                        </div>
                    </div>
                    {/* <PrimaryNoneFillButton text={"Change"} onClick={handleChangeButtonClick} /> */}
                </div>


                {/* Service Sections */}
                {serviceData.map((service) => (
                    <div key={service.key} className='flex flex-row mb-5 min-h-8'>
                        <ServiceSection
                            serviceKey={service.key}
                            serviceName={service.name}
                            minPrice={service.minPrice}
                            imageSrc={service.imageSrc}
                            allocatedPrice={allocatedPrices[service.key]}
                            handlePriceChange={handlePriceChange}
                            checked={checkboxes[service.key]}
                            onCheckboxChange={handleCheckboxChange(service.key)}
                        />
                        <div className='flex justify-center w-[15%] border-2 border-black'>
                            <CheckboxField
                                id={service.key}
                                checked={checkboxes[service.key]}
                                onChange={handleCheckboxChange(service.key)}
                            />
                        </div>
                    </div>
                ))}

                <div className='flex flex-wrap items-center justify-end gap-2 py-3 sm:gap-5'>
                    <PrimaryNoneFillButton text={"Reset"} onClick={() => window.location.reload()} />
                    {/* <PrimaryButton text={"Next    >>"} onClick={handleNext} /> */}
                    <button
                        type="button"
                        onClick={handleNext}
                        className="border-0 rounded-full px-8 h-10 bg-custom-primary text-white"
                    >
                        {"Next    >>"} 
                    </button>
                </div>
            </form>
        </div>
    );
}


export default PlanBudgetForm;

