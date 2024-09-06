import React from 'react';
import PropTypes from 'prop-types';

function StatusButton(props) {
    const { status } = props;

    // Define the styles for each status
    const statusStyles = {
        Pending: {
            bgColor: 'bg-custom-primary',
            textColor: 'text-white',
            text: 'Pending',
        },
        Accepted: {
            bgColor: 'bg-green-700', // Use custom-secondary color for accepted status
            textColor: 'text-white',
            text: 'Accepted',
        },
        // Add more status styles if needed
    };

    const currentStatus = statusStyles[status] || statusStyles['Pending'];

    return (
        <>
            <div className={`inline-block px-5 py-1 text-xs font-medium text-center ${currentStatus.textColor} ${currentStatus.bgColor} rounded-lg shadow-xl`}>
                <span className={status === 'Pending' ? 'pending-animation' : ''}>
                    {currentStatus.text}
                </span>
            </div>
            <style jsx>{`
                .pending-animation::after {
                    content: '...';
                    display: inline-block;
                    animation: dots 1.5s steps(5, end) infinite;
                }

                @keyframes dots {
                    0%, 20% {
                        content: '...';
                    }
                    40% {
                        content: '....';
                    }
                    60% {
                        content: '.....';
                    }
                    80%, 100% {
                        content: '......';
                    }
                }
            `}</style>
        </>
    );
}

StatusButton.propTypes = {
    status: PropTypes.oneOf(['pending', 'accepted']).isRequired,
};

export default StatusButton;
