import React, { useState } from 'react';
import Swal from 'sweetalert2';
import ServiceSection from './ServiceSection';
import PrimaryNoneFillButton from '../ui/PrimaryNoneFillButton';
import PrimaryButton from '../ui/PrimaryButton';
import CheckboxField from '../ui/CheckboxField';
import ChangeBudget from '../common/ChangeBudget';

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

    const serviceData = [
        { key: 'hotels', name: 'Hotels', minPrice: 100000, avgPrice: 350000, imageSrc: '../src/assets/images/services/hotel.png' },
        { key: 'dressers', name: 'Dressers', minPrice: 100000, avgPrice: 350000, imageSrc: '../src/assets/images/services/dress.png' },
        { key: 'photographers', name: 'Photography', minPrice: 100000, avgPrice: 350000, imageSrc: '../src/assets/images/services/photography.jpg' },
        { key: 'floral', name: 'Floral', minPrice: 50000, avgPrice: 150000, imageSrc: '../src/assets/images/services/floral.png' },
        { key: 'jewellary', name: 'Jewellary', minPrice: 50000, avgPrice: 150000, imageSrc: '../src/assets/images/services/jewellery.png' },
        { key: 'dancing', name: 'Dancing Groups', minPrice: 50000, avgPrice: 150000, imageSrc: '../src/assets/images/services/dancing.png' },
        { key: 'ashtaka', name: 'Ashtaka', minPrice: 50000, avgPrice: 150000, imageSrc: '../src/assets/images/services/ashtaka.jpg' },
        { key: 'saloons', name: 'Salons', minPrice: 50000, avgPrice: 150000, imageSrc: '../src/assets/images/services/hair.jpeg' },
        { key: 'djs', name: 'DJs', minPrice: 50000, avgPrice: 150000, imageSrc: '../src/assets/images/services/dj.jpg' },
        { key: 'honeymoon', name: 'Honeymoon', minPrice: 50000, avgPrice: 150000, imageSrc: '../src/assets/images/services/honeymoon.jpg' },
        { key: 'cars', name: 'Cars', minPrice: 50000, avgPrice: 150000, imageSrc: '../src/assets/images/services/car.jpg' },
        { key: 'cards', name: 'Invitation Cards', minPrice: 50000, avgPrice: 150000, imageSrc: '../src/assets/images/services/invitation.jpg' },
        { key: 'poruwa', name: 'Poruwa', minPrice: 50000, avgPrice: 150000, imageSrc: '../src/assets/images/services/poruwa.jpg' },
        { key: 'catering', name: 'Catering', minPrice: 50000, avgPrice: 150000, imageSrc: '../src/assets/images/services/catering.jpg' }
    ];

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
                            avgPrice={service.avgPrice}
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
                    <PrimaryNoneFillButton text={"Reset"} link={"/client/planbudget"} />
                    <PrimaryButton text={"Next    >>"} link={"/client/viewbudget"} />
                </div>
            </form>
        </div>
    );
}

export default PlanBudgetForm;
