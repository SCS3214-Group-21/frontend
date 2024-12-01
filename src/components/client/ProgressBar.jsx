import { useEffect, useState } from 'react';
import brideImage from "../../../src/assets/images/Images/bride.png";
import groomImage from "../../../src/assets/images/Images/groom1.png";
import CheckboxField from '../ui/CheckboxField';
import { getEnableBudget, getProgressById, updateProgress } from '../../services/progressService'; // Import Axios functions

const ProgressBar = () => {
    const [checkboxes, setCheckboxes] = useState([]);
    const [progress, setProgress] = useState(0);
    const [budgetId, setBudgetId] = useState(null);

    // Fetch enabled budget and progress on component mount
    useEffect(() => {
        const fetchBudgetDetails = async () => {
            try {
                // Fetch enabled budget
                const budget = await getEnableBudget();
                setBudgetId(budget.budget.plan_id);
    
                // Fetch progress
                const progressData = await getProgressById(budget.budget.plan_id);
                console.log("Progress Data: ", progressData);

                // Ensure the progress is a valid number
                const progressValue = typeof progressData?.progress?.progress === "number" ? progressData.progress.progress : 0;
    
                // Map progress data to checkboxes
                const mappedCheckboxes = Object.keys(progressData?.progress || {})
                    .filter(key => !["progress_id", "plan_id", "client_id", "progress"].includes(key)) // Exclude unwanted fields
                    .map((field, index) => ({
                        id: index + 1,
                        label: field,
                        checked: progressData?.progress[field] > 0, // Checked if progress value is positive
                    }));
    
                setCheckboxes(mappedCheckboxes);
                setProgress(progressValue); // Ensure that progress is a number
            } catch (error) {
                console.error("Error fetching budget or progress:", error.message);
            }
        };
    
        fetchBudgetDetails();
    }, []);
    

    const toggleCheckbox = async (field) => {
        try {
            // Find the clicked checkbox
            const checkbox = checkboxes.find(box => box.label === field);
            if (!checkbox) return;
    
            // Calculate the new value (toggle checked status)
            const newValue = checkbox.checked ? 0 : 1;  // If checked, set to 0; if unchecked, set to 1
    
            // Call API to update progress
            await updateProgress(budgetId, field, newValue);
    
            // Refresh progress and checkboxes
            const updatedProgress = await getProgressById(budgetId);
    
            // Update progress
            setProgress(updatedProgress?.progress?.progress || 0);
    
            // Update checkboxes
            setCheckboxes(prevState =>
                prevState.map(box =>
                    box.label === field ? { ...box, checked: !box.checked } : box  // Toggle the checked state
                )
            );
        } catch (error) {
            console.error("Error updating progress:", error.message);
        }
    };
    

    return (
        <div className="text-black flex flex-row w-full justify-between gap-20 mb-8">
            <div className="relative w-1/2 pl-4">
                {/* Progress bar */}
                <div className="relative h-5 bg-gray-200 rounded-lg border-2 border-[#006972] overflow-visible">
                    <div
                        className="h-full bg-[#006972] transition-width duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>

                    {/* Bride image that moves with progress */}
                    <img
                        src={brideImage}
                        alt="bride"
                        className="absolute z-50 w-20 h-20"
                        style={{ top: '-40px', left: `${progress}%`, transform: 'translateX(-50%)' }}
                    />

                    {/* Groom image that stays at the end */}
                    <img
                        src={groomImage}
                        alt="groom"
                        className="absolute z-50 w-16 h-20"
                        style={{ top: '-38px', left: '100%', transform: 'translateX(-50%)' }}
                    />
                </div>
                <div className=' flex w-full h-full items-end justify-center'>
                    <h1 className='text-3xl font-bold'>{progress}% completed</h1>
                </div>
            </div>

            <div className="w-1/2 flex flex-col items-start justify-start">
                <h1 className='mb-4 text-xl font-bold'>Budget Details</h1>
                {checkboxes.map((box) => (
                    <CheckboxField
                        key={box.id}
                        id={box.id}
                        label={box.label}
                        checked={box.checked}
                        onChange={() => toggleCheckbox(box.label)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProgressBar;
