import React, { useEffect, useRef, useState } from "react";

function Calender() {
    const calendarRef = useRef(null);
    const currentMonthRef = useRef(null);

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

    const appointments = [
        { date: '2024-07-15', title: 'Doctor Appointment', start: '10:00 AM', end: '11:00 AM' },
        { date: '2024-07-20', title: 'Meeting with Client', start: '10:00 AM', end: '11:00 AM' },
        { date: '2024-08-15', title: 'Dressing Appointment', start: '10:00 AM', end: '11:00 AM' },
        { date: '2024-08-05', title: 'Salon Appointment', start: '10:00 AM', end: '11:00 AM' }
    ];

    useEffect(() => {
        // Function to generate the calendar for a specific month and year
        function generateCalendar(year, month) {
            const calendarElement = calendarRef.current;
            const currentMonthElement = currentMonthRef.current;

            // Create a date object for the first day of the specified month
            const firstDayOfMonth = new Date(year, month, 1);
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            // Clear the calendar
            calendarElement.innerHTML = '';

            // Set the current month text
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            currentMonthElement.innerText = `${monthNames[month]} ${year}`;

            // Calculate the day of the week for the first day of the month (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
            const firstDayOfWeek = firstDayOfMonth.getDay();

            // Create headers for the days of the week
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            daysOfWeek.forEach(day => {
                const dayElement = document.createElement('div');
                dayElement.className = 'font-semibold text-center';
                dayElement.innerText = day;
                calendarElement.appendChild(dayElement);
            });

            // Create empty boxes for days before the first day of the month
            for (let i = 0; i < firstDayOfWeek; i++) {
                const emptyDayElement = document.createElement('div');
                calendarElement.appendChild(emptyDayElement);
            }

            // Create boxes for each day of the month
            for (let day = 1; day <= daysInMonth; day++) {
                const dayElement = document.createElement('div');
                dayElement.className = 'py-2 text-center border';
                dayElement.innerText = day;

                // Check if this date is the current date
                const currentDate = new Date();
                if (year === currentDate.getFullYear() && month === currentDate.getMonth() && day === currentDate.getDate()) {
                    dayElement.classList.add('bg-blue-400', 'text-black'); // Add classes for the indicator
                }

                // Check if this date has an appointment
                const appointmentDate = new Date(year, month, day).toISOString().split('T')[0];
                const appointment = appointments.find(app => app.date === appointmentDate);
                if (appointment) {
                    dayElement.classList.add('bg-custom-secondary', 'text-white'); // Highlight the day with an appointment
                }

                calendarElement.appendChild(dayElement);
            }
        }

        generateCalendar(currentYear, currentMonth);
    }, [currentYear, currentMonth]);

    const handlePrevMonth = () => {
        setCurrentMonth((prevMonth) => {
            const newMonth = prevMonth - 1;
            if (newMonth < 0) {
                setCurrentYear((prevYear) => prevYear - 1);
                return 11;
            }
            return newMonth;
        });
    };

    const handleNextMonth = () => {
        setCurrentMonth((prevMonth) => {
            const newMonth = prevMonth + 1;
            if (newMonth > 11) {
                setCurrentYear((prevYear) => prevYear + 1);
                return 0;
            }
            return newMonth;
        });
    };

    return (
        <div className="flex items-center justify-center">
            {/* <div className="p-4 mx-auto lg:w-7/12 md:w-9/12 sm:w-10/12"> */}
            <div className="w-full p-4 mx-auto">
                <div className="overflow-hidden bg-white rounded-lg shadow-lg h-">
                    <div className="flex items-center justify-between px-6 py-3 bg-custom-primary">
                        <button onClick={handlePrevMonth} className="text-white">Previous</button>
                        <h2 id="currentMonth" className="text-white" ref={currentMonthRef}></h2>
                        <button onClick={handleNextMonth} className="text-white">Next</button>
                    </div>
                    <div className="grid grid-cols-7 gap-2 p-4" id="calendar" ref={calendarRef}></div>
                </div>
            </div>
        </div>
    );
}

export default Calender;
