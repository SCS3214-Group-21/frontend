import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import ServiceSection from './ServiceSection';
import PrimaryNoneFillButton from '../ui/PrimaryNoneFillButton';
import PrimaryButton from '../ui/PrimaryButton';
import CheckboxField from '../ui/CheckboxField';
import ChangeBudget from '../common/ChangeBudget';
import { getMinPackages, createBudget } from '../../services/budgetServices';

function PlanBudgetForm() {
    const [totalBudget, setTotalBudget] = useState(0);
    const [allocatedPrices, setAllocatedPrices] = useState({
        hotels: 0,
        dressers: 0,
        photographers: 0,
        floral: 0,
        jewellary: 0,
        dancing: 0,
        ashtaka: 0,
        saloons: 0,
        djs: 0,
        honeymoon: 0,
        cakes: 0,
        cars: 0,
        cards: 0,
        poruwa: 0,
        catering: 0,
    });
    const [remainingBudget, setRemainingBudget] = useState(totalBudget);
    const [checkboxes, setCheckboxes] = useState({
        hotels: false,
        dressers: false,
        photographers: false,
        floral: false,
        jewellary: false,
        dancing: false,
        ashtaka: false,
        saloons: false,
        djs: false,
        honeymoon: false,
        cakes: false,
        cars: false,
        cards: false,
        poruwa: false,
        catering: false,
    });

    const [serviceData, setServiceData] = useState([
        { key: 'hotels', name: 'Hotels', minPrice: 100000, imageSrc: '../src/assets/images/services/hotel.png' },
        { key: 'dressers', name: 'Dressers', minPrice: 100000, imageSrc: '../src/assets/images/services/dress.png' },
        { key: 'photographers', name: 'Photography', minPrice: 100000, imageSrc: '../src/assets/images/services/photography.jpg' },
        { key: 'floral', name: 'Floral', minPrice: 50000, imageSrc: '../src/assets/images/services/floral.png' },
        { key: 'jewellary', name: 'Jewellary', minPrice: 50000, imageSrc: '../src/assets/images/services/jewellery.png' },
        { key: 'dancing', name: 'Dancing Groups', minPrice: 50000, imageSrc: '../src/assets/images/services/dancing.png' },
        { key: 'ashtaka', name: 'Ashtaka', minPrice: 50000, imageSrc: '../src/assets/images/services/ashtaka.jpg' },
        { key: 'saloons', name: 'Salons', minPrice: 50000, imageSrc: '../src/assets/images/services/hair.jpeg' },
        { key: 'djs', name: 'DJs', minPrice: 50000, imageSrc: '../src/assets/images/services/dj.jpg' },
        { key: 'honeymoon', name: 'Honeymoon', minPrice: 50000, imageSrc: '../src/assets/images/services/honeymoon.jpg' },
        { key: 'cars', name: 'Cars', minPrice: 50000, imageSrc: '../src/assets/images/services/car.jpg' },
        { key: 'cards', name: 'Invitation Cards', minPrice: 50000, imageSrc: '../src/assets/images/services/invitation.jpg' },
        { key: 'poruwa', name: 'Poruwa', minPrice: 50000, imageSrc: '../src/assets/images/services/poruwa.jpg' },
        { key: 'catering', name: 'Catering', minPrice: 50000, imageSrc: '../src/assets/images/services/catering.jpg' }
    ]);

    useEffect(() => {
        const fetchMinPackages = async () => {
            try {
                const minPackages = await getMinPackages();
                const updatedServiceData = serviceData.map(service => {
                    const matchedPackage = minPackages.minPackages.find(
                        pkg => pkg.role.toLowerCase() === service.key.toLowerCase()
                    );
                    return matchedPackage ? { ...service, minPrice: matchedPackage.min_price } : service;
                });
                setServiceData(updatedServiceData);
            } catch (error) {
                console.error("Error fetching minimum packages:", error);
            }
        };
    
        fetchMinPackages();
    }, []);

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
            photographers: 0,
            floral: 0,
            jewellary: 0,
            dancing: 0,
            ashtaka: 0,
            saloons: 0,
            djs: 0,
            honeymoon: 0,
            cakes: 0,
            cars: 0,
            cards: 0,
            poruwa: 0,
            catering: 0,
        });
        setRemainingBudget(0);
        setCheckboxes({
            hotels: false,
            dressers: false,
            photographers: false,
            floral: false,
            jewellary: false,
            dancing: false,
            ashtaka: false,
            saloons: false,
            djs: false,
            honeymoon: false,
            cakes: false,
            cars: false,
            cards: false,
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
    
        try {
            // Call the createBudget function with the selected prices
            const response = await createBudget(
                selectedPrices.hotels || 0,
                selectedPrices.dressers || 0,
                selectedPrices.photographers || 0,
                selectedPrices.floral || 0,
                selectedPrices.jewellary || 0,
                selectedPrices.dancing || 0,
                selectedPrices.ashtaka || 0,
                selectedPrices.saloons || 0,
                selectedPrices.djs || 0,
                selectedPrices.honeymoon || 0,
                selectedPrices.cars || 0,
                selectedPrices.cards || 0,
                selectedPrices.poruwa || 0,
                selectedPrices.catering || 0
            );
            
            // Show success message
            Swal.fire({
                title: 'Success!',
                text: 'Your budget has been created successfully!',
                icon: 'success',
                confirmButtonText: 'OK',
            }).then(() => {
                // After the success alert is closed, navigate to the next page
                window.location.href = "/client/viewbudget"; // Or use React Router's navigate
            });
    
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
