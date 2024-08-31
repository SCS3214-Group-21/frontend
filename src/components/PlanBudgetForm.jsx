import React, { useState } from 'react';
import Swal from 'sweetalert2';
import ServiceSection from './ServiceSection';
import PrimaryNoneFillButton from './ui/PrimaryNoneFillButton';
import PrimaryButton from './ui/PrimaryButton';
import CheckboxField from './ui/CheckboxField';

function PlanBudgetForm() {
    const [totalBudget, setTotalBudget] = useState(0); // State for total budget
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
        // add more services as needed
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
        // add more services as needed
    });

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
            // Optionally, you might want to reset the input to the previous value or keep the old total budget.
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

    const handleCheckboxChange = (key) => (newCheckedState) => {
        setCheckboxes((prev) => ({
            ...prev,
            [key]: newCheckedState,
        }));
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
                <div className='w-full flex flex-row justify-end items-end gap-5 mb-5'>
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
                <div className='flex flex-row min-h-8 mb-5'>
                    <ServiceSection
                        serviceKey="hotels"
                        serviceName="Hotels"
                        minPrice={100000}
                        avgPrice={350000}
                        imageSrc="../src/assets/images/services/hotel.png"
                        allocatedPrice={allocatedPrices.hotels}
                        handlePriceChange={handlePriceChange}
                    />
                    <div className='flex justify-center w-[15%] border-2 border-black'>
                        <CheckboxField
                            id="hotels"
                            checked={checkboxes.hotels}
                            onChange={handleCheckboxChange('hotels')}
                        />
                    </div>
                </div>

                <div className='flex flex-row min-h-8 mb-5'>
                    <ServiceSection
                        serviceKey="dressers"
                        serviceName="Dressers"
                        minPrice={100000}
                        avgPrice={350000}
                        imageSrc="../src/assets/images/services/dress.png"
                        allocatedPrice={allocatedPrices.dressers}
                        handlePriceChange={handlePriceChange}
                    />
                    <div className='flex justify-center w-[15%] border-2 border-black'>
                        <CheckboxField
                            id="dressers"
                            checked={checkboxes.dressers}
                            onChange={handleCheckboxChange('dressers')}
                        />
                    </div>
                </div>
                
                <div className='flex flex-row min-h-8 mb-5'>
                    <ServiceSection
                        serviceKey="photographers"
                        serviceName="Photography"
                        minPrice={100000}
                        avgPrice={350000}
                        imageSrc="../src/assets/images/services/photography.jpg"
                        allocatedPrice={allocatedPrices.photographers}
                        handlePriceChange={handlePriceChange}
                    />
                    <div className='flex justify-center w-[15%] border-2 border-black'>
                        <CheckboxField
                            id="photographers"
                            checked={checkboxes.photographers}
                            onChange={handleCheckboxChange('photographers')}
                        />
                    </div>
                </div>

                <div className='flex flex-row min-h-8 mb-5'>
                    <ServiceSection
                        serviceKey="floral"
                        serviceName="Floral"
                        minPrice={50000}
                        avgPrice={150000}
                        imageSrc="../src/assets/images/services/floral.png"
                        allocatedPrice={allocatedPrices.floral}
                        handlePriceChange={handlePriceChange}
                    />
                    <div className='flex justify-center w-[15%] border-2 border-black'>
                        <CheckboxField
                            id="floral"
                            checked={checkboxes.floral}
                            onChange={handleCheckboxChange('floral')}
                        />
                    </div>
                </div>

                <div className='flex flex-row min-h-8 mb-5'>
                    <ServiceSection
                        serviceKey="jewellery"
                        serviceName="Jewellery"
                        minPrice={50000}
                        avgPrice={150000}
                        imageSrc="../src/assets/images/services/jewellery.png"
                        allocatedPrice={allocatedPrices.jewellery}
                        handlePriceChange={handlePriceChange}
                    />
                    <div className='flex justify-center w-[15%] border-2 border-black'>
                        <CheckboxField
                            id="jewellery"
                            checked={checkboxes.jewellery}
                            onChange={handleCheckboxChange('jewellery')}
                        />
                    </div>
                </div>

                <div className='flex flex-row min-h-8 mb-5'>
                    <ServiceSection
                        serviceKey="dancing"
                        serviceName="Dancing Groups"
                        minPrice={50000}
                        avgPrice={150000}
                        imageSrc="../src/assets/images/services/dancing.png"
                        allocatedPrice={allocatedPrices.dancing}
                        handlePriceChange={handlePriceChange}
                    />
                    <div className='flex justify-center w-[15%] border-2 border-black'>
                        <CheckboxField
                            id="dancing"
                            checked={checkboxes.dancing}
                            onChange={handleCheckboxChange('dancing')}
                        />
                    </div>
                </div>

                <div className='flex flex-row min-h-8 mb-5'>
                    <ServiceSection
                        serviceKey="ashtaka"
                        serviceName="Ashtaka"
                        minPrice={50000}
                        avgPrice={150000}
                        imageSrc="../src/assets/images/services/ashtaka.jpg"
                        allocatedPrice={allocatedPrices.ashtaka}
                        handlePriceChange={handlePriceChange}
                    />
                    <div className='flex justify-center w-[15%] border-2 border-black'>
                        <CheckboxField
                            id="ashtaka"
                            checked={checkboxes.ashtaka}
                            onChange={handleCheckboxChange('ashtaka')}
                        />
                    </div>
                </div>

                <div className='flex flex-row min-h-8 mb-5'>
                    <ServiceSection
                        serviceKey="saloons"
                        serviceName="Salons"
                        minPrice={50000}
                        avgPrice={150000}
                        imageSrc="../src/assets/images/services/hair.jpeg"
                        allocatedPrice={allocatedPrices.saloons}
                        handlePriceChange={handlePriceChange}
                    />
                    <div className='flex justify-center w-[15%] border-2 border-black'>
                        <CheckboxField
                            id="saloons"
                            checked={checkboxes.saloons}
                            onChange={handleCheckboxChange('saloons')}
                        />
                    </div>
                </div>

                <div className='flex flex-row min-h-8 mb-5'>
                    <ServiceSection
                        serviceKey="djs"
                        serviceName="DJs"
                        minPrice={50000}
                        avgPrice={150000}
                        imageSrc="../src/assets/images/services/dj.jpg"
                        allocatedPrice={allocatedPrices.djs}
                        handlePriceChange={handlePriceChange}
                    />
                    <div className='flex justify-center w-[15%] border-2 border-black'>
                        <CheckboxField
                            id="djs"
                            checked={checkboxes.djs}
                            onChange={handleCheckboxChange('djs')}
                        />
                    </div>
                </div>

                <div className='flex flex-row min-h-8 mb-5'>
                    <ServiceSection
                        serviceKey="honeymoon"
                        serviceName="Honeymoon"
                        minPrice={50000}
                        avgPrice={150000}
                        imageSrc="../src/assets/images/services/honeymoon.jpg"
                        allocatedPrice={allocatedPrices.honeymoon}
                        handlePriceChange={handlePriceChange}
                    />
                    <div className='flex justify-center w-[15%] border-2 border-black'>
                        <CheckboxField
                            id="honeymoon"
                            checked={checkboxes.honeymoon}
                            onChange={handleCheckboxChange('honeymoon')}
                        />
                    </div>
                </div>

                <div className='flex flex-row min-h-8 mb-5'>
                    <ServiceSection
                        serviceKey="cars"
                        serviceName="Cars"
                        minPrice={50000}
                        avgPrice={150000}
                        imageSrc="../src/assets/images/services/car.jpg"
                        allocatedPrice={allocatedPrices.cars}
                        handlePriceChange={handlePriceChange}
                    />
                    <div className='flex justify-center w-[15%] border-2 border-black'>
                        <CheckboxField
                            id="cars"
                            checked={checkboxes.cars}
                            onChange={handleCheckboxChange('cars')}
                        />
                    </div>
                </div>

                <div className='flex flex-row min-h-8 mb-5'>
                    <ServiceSection
                        serviceKey="cards"
                        serviceName="Invitation Cards"
                        minPrice={50000}
                        avgPrice={150000}
                        imageSrc="../src/assets/images/services/invitation.jpg"
                        allocatedPrice={allocatedPrices.cards}
                        handlePriceChange={handlePriceChange}
                    />
                    <div className='flex justify-center w-[15%] border-2 border-black'>
                        <CheckboxField
                            id="cards"
                            checked={checkboxes.cards}
                            onChange={handleCheckboxChange('cards')}
                        />
                    </div>
                </div>

                <div className='flex flex-row min-h-8 mb-5'>
                    <ServiceSection
                        serviceKey="poruwa"
                        serviceName="Poruwa"
                        minPrice={50000}
                        avgPrice={150000}
                        imageSrc="../src/assets/images/services/poruwa.jpg"
                        allocatedPrice={allocatedPrices.poruwa}
                        handlePriceChange={handlePriceChange}
                    />
                    <div className='flex justify-center w-[15%] border-2 border-black'>
                        <CheckboxField
                            id="poruwa"
                            checked={checkboxes.poruwa}
                            onChange={handleCheckboxChange('poruwa')}
                        />
                    </div>
                </div>
                <div className='flex flex-row min-h-8 mb-5'>
                    <ServiceSection
                        serviceKey="catering"
                        serviceName="Catering"
                        minPrice={50000}
                        avgPrice={150000}
                        imageSrc="../src/assets/images/services/catering.jpg"
                        allocatedPrice={allocatedPrices.catering}
                        handlePriceChange={handlePriceChange}
                    />
                    <div className='flex justify-center w-[15%] border-2 border-black'>
                        <CheckboxField
                            id="catering"
                            checked={checkboxes.catering}
                            onChange={handleCheckboxChange('catering')}
                        />
                    </div>
                </div>

                <div className='flex flex-wrap justify-end items-center gap-2 sm:gap-5 py-3'>
                    <PrimaryNoneFillButton text={"Reset"} link={"/planbudget"} />
                    <PrimaryButton text={"Next    >>"} link={"/"} />
                </div>
            </form>
        </div>
    );
}

export default PlanBudgetForm;
