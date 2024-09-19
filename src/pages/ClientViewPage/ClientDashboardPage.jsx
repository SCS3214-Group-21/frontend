import React, { useState } from 'react';
import ClientSidebar from '../../components/client/ClientSidebar.jsx';
import RegisterHeader from '../../components/common/RegisterHeader.jsx';
import { AiOutlineEdit } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CheckboxField from '../../components/ui/CheckboxField.jsx';
import PrimaryNoneFillButton from '../../components/ui/PrimaryNoneFillButton.jsx';

function ClientDashboardPage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [brideName, setBrideName] = useState('Anna');
    const [partnerName, setPartnerName] = useState('Devid');
    const [editingNames, setEditingNames] = useState(false);
    const [weddingDate, setWeddingDate] = useState(null);
    const [location, setLocation] = useState('');
    const [showCountdown, setShowCountdown] = useState(false);
    const [tasks, setTasks] = useState([
        { id: 1, label: "Book a hotel", checked: true },
        { id: 2, label: "Add guest count", checked: true },
        { id: 3, label: "Book wedding dresser", checked: true },
        { id: 4, label: "Search floral vendors", checked: false },
        { id: 5, label: "Book wedding car", checked: false },
        { id: 6, label: "Book honeymoon hotel", checked: false },
    ]);
    const [newTaskLabel, setNewTaskLabel] = useState('');
    const [guestCount, setGuestCount] = useState(2); // State for guest count

    const sampleImage = "../src/assets/Images/Images/01.png";

    // const handleImageChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         setSelectedImage(URL.createObjectURL(file));
    //     }
    // };

    const handleFirstNameChange = (event) => {
        setBrideName(event.target.value);
    };

    const handlePartnerNameChange = (event) => {
        setPartnerName(event.target.value);
    };

    const handleDateChange = (date) => {
        if (date) {
            const today = new Date();
            // Set time to start of the day for comparison
            today.setHours(0, 0, 0, 0);
            const selectedDate = new Date(date);
            selectedDate.setHours(0, 0, 0, 0);

            if (selectedDate <= today) {
                // Show an alert if the selected date is today or in the past
                alert("Please select a future wedding date.");
            } else {
                // Set the date and show countdown if it's a valid future date
                setWeddingDate(date);
                setShowCountdown(true);
            }
        }
    };


    const daysUntilWedding = () => {
        if (!weddingDate) return 0;
        const today = new Date();
        const diffTime = Math.abs(weddingDate - today);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    const addTask = () => {
        if (newTaskLabel.trim() !== '') {
            const newTask = { id: tasks.length + 1, label: newTaskLabel.trim(), checked: false };
            setTasks([...tasks, newTask]);
            setNewTaskLabel('');
        }
    };

    const incrementGuestCount = () => {
        setGuestCount(guestCount + 1);
    };

    const handleGuestCountChange = (e) => {
        const value = e.target.value;
        const numberValue = parseInt(value, 10);
        if (!isNaN(numberValue) && numberValue >= 0) {
            setGuestCount(numberValue);
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log(brideName, partnerName, weddingDate, location)

    // const formData = {
    //     bride_name: brideName,
    //     groom_name: partnerName,
    //     wed_date: weddingDate,
    //     location
    // };

    // try {
    //     const response = await axios.post('/api/profile/create', formData); // Replace with your API endpoint
    //     console.log('Profile creation successful:', response.data);
    //     navigate('/mywedding'); // Redirect to the wedding page or another page
    // } catch (error) {
    //     console.error('Error creating profile:', error);
    //     setError(error.response ? error.response.data.message : 'An error occurred');
    // }
    // };

    return (
        <>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-col md:flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <ClientSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16 mb-5">
                    <div className="pb-5">
                        <h1 className='text-4xl font-bold text-custom-primary'>My Wedding</h1>
                    </div>
                    <div className="pb-5">
                        <form className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-col md:flex-row gap-5'>

                            {/* Left Part: Image Upload */}
                            <div className="flex flex-col items-center w-full md:w-1/3">
                                <div className="relative flex items-center justify-center w-full bg-gray-100 border-2 border-gray-600 border-dashed h-60">
                                    {selectedImage ? (
                                        <img src={selectedImage} alt="Uploaded" className="object-cover w-full h-full" />
                                    ) : (
                                        <>
                                            <img src={sampleImage} alt="Sample" className="object-cover w-full h-full opacity-40" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="p-2 text-lg font-semibold text-gray-700 border border-gray-500 rounded-full">Upload your photo</span>
                                            </div>
                                        </>
                                    )}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                    // onChange={handleImageChange}
                                    />
                                </div>
                            </div>
                            {/* Middle Part: Names, Date, and Location */}
                            <div className="flex flex-col justify-between w-full ml-5 text-black md:w-1/2">
                                <div className="relative flex items-center mt-4 mb-2 ">
                                    {editingNames ? (
                                        <>
                                            <input
                                                type="text"
                                                value={brideName}
                                                onChange={handleFirstNameChange}
                                                onBlur={() => setEditingNames(false)}
                                                className="w-full text-4xl font-semibold bg-transparent border-b-2 border-dotted md:w-1/2 md:text-5xl"
                                                style={{ color: brideName === 'Anna' ? 'gray' : 'black' }}
                                            />
                                            <span className="mx-2 text-4xl font-semibold md:text-6xl">&</span>
                                            <input
                                                type="text"
                                                value={partnerName}
                                                onChange={handlePartnerNameChange}
                                                onBlur={() => setEditingNames(false)}
                                                className="w-full text-4xl font-semibold bg-transparent border-b-2 border-dotted md:w-1/2 md:text-5xl"
                                                style={{ color: partnerName === 'Devid' ? 'gray' : 'black' }}
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <h2 className="text-4xl font-semibold md:text-5xl" style={{ color: (brideName === 'Anna' && partnerName === 'Devid') ? 'gray' : 'black' }}>
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
                                <div className='flex flex-col gap-4 mb-16 md:flex-row'>
                                    <div className="flex items-center">
                                        <DatePicker
                                            selected={weddingDate}
                                            onChange={handleDateChange}
                                            className="p-2 text-black bg-gray-200 border-2 rounded-full border-custom-primary"
                                            dateFormat="MMMM d, yyyy"
                                            placeholderText='  Wedding Date'
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            className="flex-grow p-2 text-black bg-gray-200 border-2 rounded-full border-custom-primary"
                                            placeholder="  Location"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Right Part: Countdown */}
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
                            </div>
                            <button type="submit">Save</button>

                        </form>
                    </div>
                    <div className='flex flex-col w-full gap-5 text-black md:flex-row'>
                        <div className='w-full md:w-1/2 bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-col gap-5'>
                            <h1 className='text-3xl font-semibold text-center md:text-5xl'>To-Do List</h1>
                            <div className='h-full m-4 bg-blue-50'>
                                <div className='p-10'>
                                    {tasks.map((task) => (
                                        <CheckboxField
                                            key={task.id}
                                            id={task.id}
                                            label={task.label}
                                            checked={task.checked}
                                        />
                                    ))}
                                    <div className='flex justify-center mt-5'>
                                        <input
                                            type="text"
                                            value={newTaskLabel}
                                            onChange={(e) => setNewTaskLabel(e.target.value)}
                                            placeholder="Enter new task"
                                            className="p-2 text-black bg-transparent border-2 rounded-lg border-custom-primary"
                                        />
                                        <button
                                            onClick={addTask}
                                            className="px-4 ml-3 text-2xl bg-transparent border-2 rounded-lg text-custom-primary border-custom-primary"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 w-full gap-5'>
                            <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row mb-5'>
                                <div className='flex flex-col w-2/3'>
                                    <h1 className='text-4xl font-semibold '>Guests</h1>
                                    <p className='mt-3'>A complete guest list is the best way to get an accurate headcount. Keep it up!</p>
                                    <div className='w-full mt-3' onClick={incrementGuestCount}>
                                        <PrimaryNoneFillButton text="Add guest" />
                                    </div>

                                </div>
                                <div className="flex flex-col items-center justify-center w-full md:w-1/3">
                                    <div className="p-4 text-5xl font-bold bg-gray-200 rounded-3xl text-custom-secondary">
                                        <input
                                            type="number"
                                            min="0"
                                            value={guestCount}
                                            onChange={handleGuestCountChange}
                                            className="w-full text-5xl font-bold text-center bg-transparent"
                                        />
                                        <span className='ml-8 text-sm text-black'>Guests</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row gap-5'>
                                <div className='flex flex-col'>
                                    <h1 className='text-4xl font-semibold '>Budget</h1>
                                    <p className='mt-3'>Track all your spending in one place. Plus, payment reminders and helpful tips!</p>
                                    <div className='w-full mt-3'>
                                        <PrimaryNoneFillButton text="Create your budget" link="/budget" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClientDashboardPage;
