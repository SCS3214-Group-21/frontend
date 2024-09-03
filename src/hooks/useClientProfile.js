import React from 'react'
import toast from 'react-hot-toast'

const useClientProfile = () => {
  
    const addFormData = async(brideName, partnerName, weddingDate, location)=>{
        const success = handleInputErrors({weddingDate, location})

        if(!success) return;

        try {
            const res = await fetch("http://localhost:4000/profile",{
method:" POST",
headers:{"Content-Type":"application/json"},
body: JSON({brideName,partnerName,weddingDate,location})
            })

            const data = await res.json();
            console.log(data)
            
        } catch (error) {
            toast.error(error.message)
        }



    }
    return addFormData;
}

export default useClientProfile

function handleInputErrors({weddingDate, location}){
    if(!weddingDate|| !location){
        toast.error("Please add your wedding date and location");
        return false;
    }
    return true;
}