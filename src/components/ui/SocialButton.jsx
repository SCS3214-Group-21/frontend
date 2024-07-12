import React from 'react';

export default function SocialButton(props) {

    const { icon, alt } = props

    return (
        <button>
            <img src={icon} alt={alt} className="w-10 h-10" />
        </button>
    );
}