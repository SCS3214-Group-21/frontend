import React from 'react';

function ServiceCard(props) {
    const {img, title, text} = props;

    return (
        <div class="flex flex-col bg-white w-full p-4 gap-2 rounded-xl relative h-full border-2 border-[#D9D9D9]">
            <img src={img} alt="photo01" class="h-[70%] w-full object-cover" />
            <h1 class="text-black text-2xl h-[10%]">{title}</h1>
            <h4 class="text-[#757575] text-lg h-[20%]">{text}</h4>
        </div>
    );
}

export default ServiceCard;
