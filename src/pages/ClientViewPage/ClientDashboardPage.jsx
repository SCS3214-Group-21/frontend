
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientSidebar from '../../components/client/ClientSidebar.jsx';
import RegisterHeader from '../../components/common/RegisterHeader.jsx';
import { AiOutlineEdit } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ProgressBar from '../../components/client/ProgressBar.jsx';
import CheckboxField from '../../components/ui/CheckboxField.jsx';
import PrimaryNoneFillButton from '../../components/ui/PrimaryNoneFillButton.jsx';

function ClientDashboardPage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [brideName, setBrideName] = useState('Anna');
    const [partnerName, setPartnerName] = useState('Devid');
    const [editingNames, setEditingNames] = useState(false);
    const [weddingDate, setWeddingDate] = useState(null);
    const [location, setLocation] = useState('');
    const [budget, setBudget] = useState('');
    const [guestCount, setGuestCount] = useState('');

    // Handlers for form fields
    const handleFirstNameChange = (event) => setBrideName(event.target.value);
    const handlePartnerNameChange = (event) => setPartnerName(event.target.value);
    const handleLocationChange = (event) => setLocation(event.target.value);
    const handleBudgetChange = (event) => setBudget(event.target.value);
    const handleGuestCountChange = (event) => setGuestCount(event.target.value);

    // Image upload handler
    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setSelectedImage(file);

            // Generate preview URL
            const previewURL = URL.createObjectURL(file);
            setImagePreview(previewURL);

            // Clean up previous preview URL
            return () => {
                if (imagePreview) {
                    URL.revokeObjectURL(imagePreview);
                }
            };
        }
    };

    // Date validation handler
    const handleDateChange = (date) => {
        if (date) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const selectedDate = new Date(date);
            selectedDate.setHours(0, 0, 0, 0);

            if (selectedDate <= today) {
                alert('Please select a future wedding date.');
            } else {
                setWeddingDate(date);
            }
        }
    };

    const daysUntilWedding = () => {
                if (!weddingDate) return 0;
                const today = new Date();
                const diffTime = Math.abs(weddingDate - today);
                return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            };

    
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/client/profile/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
    
                const { client } = response.data;
                if (client) {
                    const {
                        bride_name,
                        groom_name,
                        location,
                        wedding_date,
                        budget,
                        guest_count,
                        pic,
                    } = client;
    
                    // Update form fields with fetched data
                    setBrideName(bride_name || '');
                    setPartnerName(groom_name || '');
                    setLocation(location || '');
                    setWeddingDate(wedding_date ? new Date(wedding_date) : null);
                    setBudget(budget || '');
                    setGuestCount(guest_count || '');
    
                    // Set image preview or fallback to default
                    if (pic) {
                        setSelectedImage(pic);
                        setImagePreview(`http://localhost:5000/${pic}`);
                    } else {
                        setImagePreview('http://localhost:5000/uploads/client/profilepics/1732247247769-4236879.jpg');
                    }
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };
    
        fetchProfile();
    }, []);
    
    // Save profile data
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('bride_name', brideName);
        formData.append('groom_name', partnerName);
        formData.append('location', location);
        formData.append('wedding_date', weddingDate ? weddingDate.toISOString() : '');
        formData.append('budget', budget);
        formData.append('guest_count', guestCount);
        if (selectedImage) formData.append('pic', selectedImage);

        try {
            const token = localStorage.getItem('token');
            await axios.patch('http://localhost:5000/client/profile/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('Profile saved successfully!');
        } catch (error) {
            console.error(error);
            alert('An error occurred while saving the profile.');
        }
    };

    return (
        <>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-col md:flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <ClientSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16 mb-3">
                    <div className="pb-5">
                        <h1 className="text-4xl font-bold text-custom-primary">My Wedding</h1>
                    </div>
                    <div className="pb-5">
                        <form className="w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-col gap-3">
                            <div className="flex flex-col md:flex-row">
                                {/* Image Upload */}
                                <div className="flex flex-col items-center w-full md:w-1/3">
                                    {/* Profile Picture Upload */}
                                    <div className="relative flex items-center justify-center w-full bg-gray-100 border-2 border-gray-600 border-dashed h-60">
                                        {imagePreview ? (
                                            <img
                                                src={imagePreview}
                                                alt="Profile"
                                                className="object-cover w-full h-full"
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center">
                                                <p className="text-gray-600">No image selected</p>
                                            </div>
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            onChange={handleImageChange}
                                        />
                                    </div>

                                </div>

                                {/* Names and Details */}
                                <div className="flex flex-col justify-between w-full ml-5 text-black md:w-1/2">
                                    <div className="relative flex items-center mt-4 mb-2">
                                        {editingNames ? (
                                            <>
                                                <input
                                                    type="text"
                                                    value={brideName}
                                                    onChange={handleFirstNameChange}
                                                    onBlur={() => setEditingNames(false)}
                                                    className="w-full text-4xl font-semibold bg-transparent border-b-2 border-dotted md:w-1/2 md:text-5xl"
                                                />
                                                <span className="mx-2 text-4xl font-semibold md:text-6xl">&</span>
                                                <input
                                                    type="text"
                                                    value={partnerName}
                                                    onChange={handlePartnerNameChange}
                                                    onBlur={() => setEditingNames(false)}
                                                    className="w-full text-4xl font-semibold bg-transparent border-b-2 border-dotted md:w-1/2 md:text-5xl"
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <h2 className="text-4xl font-semibold md:text-5xl">
                                                    {brideName} & {partnerName}
                                                </h2>
                                                <AiOutlineEdit
                                                    className="mt-2 ml-3 cursor-pointer md:mt-8"
                                                    size={20}
                                                    onClick={() => setEditingNames(true)}
                                                />
                                            </>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-4 mb-4 md:flex-row">
                                        <DatePicker
                                            selected={weddingDate}
                                            onChange={handleDateChange}
                                            className="p-2 text-black bg-gray-200 border-2 rounded-full border-custom-primary"
                                            dateFormat="MMMM d, yyyy"
                                            placeholderText="Wedding Date"
                                        />
                                        <input
                                            type="text"
                                            value={location}
                                            onChange={handleLocationChange}
                                            className="flex-grow p-2 text-black bg-gray-200 border-2 rounded-full border-custom-primary"
                                            placeholder="Location"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 mb-4 md:flex-row">
                                        <input
                                            type="text"
                                            value={budget}
                                            onChange={handleBudgetChange}
                                            className="p-2 text-black bg-gray-200 border-2 rounded-full border-custom-primary"
                                            placeholder="Budget"
                                        />
                                        <input
                                            type="number"
                                            min="0"
                                            value={guestCount}
                                            onChange={handleGuestCountChange}
                                            className="p-2 text-black bg-gray-200 border-2 rounded-full border-custom-primary"
                                            placeholder="Number of Guests"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center w-full md:w-1/3">
                                    <div className="flex flex-col items-center p-5 bg-gray-200 rounded-3xl text-custom-secondary">
                                        {weddingDate ? (
                                            <>
                                                <span className="text-6xl font-bold">{daysUntilWedding()}</span>
                                                <span className="text-sm font-semibold text-black">Days left</span>
                                            </>
                                        ) : (
                                            <div className="flex flex-col items-center text-center">
                                                <svg className="w-12 h-12 mb-2 text-custom-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                                                </svg>
                                                <span className="text-xl font-semibold text-custom-primary">
                                                    Add Your<br />Wedding Date
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="px-8 py-3 mt-8 text-white bg-custom-primary rounded-xl hover:scale-105"
                                >
                                    Save
                                </button>
                            </div>
                            </div>
                            {/* <div className="flex items-center justify-between mt-3"> */}
                            
                        </form>
                    </div>
                    {/* Progress Bar Section (Full Width) */}
                    <div className="w-full mt-2 p-4 bg-white rounded-xl border text-black border-[#FFDBC8]">
                       <h3 className="mb-8 text-2xl font-semibold">Progress</h3>
                          {/* {tasks.map((task) => (
                             <CheckboxField key={task.id} id={task.id} label={task.label} checked={task.checked} />
                        ))} */}
                        {/* <div className="flex gap-2 mt-4">
                             <input
                                 type="text"
                                 className="flex-grow p-2 text-black bg-gray-200 border-2 rounded-full border-custom-primary"
                                 placeholder="Add new task"
                                // value={newTaskLabel}
                                //onChange={(e) => setNewTaskLabel(e.target.value)}
                            />
                            <PrimaryNoneFillButton text="Add Task" onClick={addTask} />
                        </div>   */}

                         <ProgressBar />
                     </div> 
                </div>
            </div>
        </>
    );
}

export default ClientDashboardPage;
