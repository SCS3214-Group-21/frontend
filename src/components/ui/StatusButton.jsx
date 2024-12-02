import React from 'react';
import PropTypes from 'prop-types';

function StatusButton(props) {
    const { status } = props;

    // Define the styles for each status
    const statusStyles = {
        pending: {
            bgColor: 'bg-custom-primary',
            textColor: 'text-white',
            text: 'Pending',
        },
        accept: {
            bgColor: 'bg-green-700',
            textColor: 'text-white',
            text: 'Accept',
        },
        reject: {
            bgColor: 'bg-red-600',
            textColor: 'text-white',
            text: 'Reject',
        },
    };

    // Default to pending if the status is not found
    const currentStatus = statusStyles[status] || statusStyles['pending'];

    return (
        <>
            <div
                className={`inline-block px-5 py-1 text-xs font-medium text-center ${currentStatus.textColor} ${currentStatus.bgColor} rounded-lg shadow-xl`}
            >
                <span className={status === 'pending' ? 'pending-animation' : ''}>
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
                    0%,
                    20% {
                        content: '...';
                    }
                    40% {
                        content: '....';
                    }
                    60% {
                        content: '.....';
                    }
                    80%,
                    100% {
                        content: '......';
                    }
                }
            `}</style>
        </>
    );
}

StatusButton.propTypes = {
    status: PropTypes.oneOf(['pending', 'accept', 'reject']).isRequired,
};

export default StatusButton;
