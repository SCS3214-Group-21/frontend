import React from 'react';

function ManageUserPopup({ user, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">User Details</h2>
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Type:</strong> {user.type}</p>
                <p><strong>Registration Date:</strong> {user.regDate}</p>
                <p><strong>Location:</strong> {user.location}</p>
                <button
                    onClick={onClose}
                    className="mt-5 px-4 py-2 bg-red-500 text-white rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default ManageUserPopup;
