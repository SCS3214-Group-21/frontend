import React, { useState } from 'react';

const ChatWindow = ({ messages, onSend }) => {
    const [newMessage, setNewMessage] = useState('');
    const userId = parseInt(localStorage.getItem('id')); // Parse userId for comparison

    const handleSend = () => {
        if (newMessage.trim()) {
            onSend(newMessage);
            setNewMessage('');
        }
    };

    return (
        <div className="flex flex-col w-full h-full bg-white border border-[#FFDBC8] rounded-xl">
            {/* Chat Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                {messages.length > 0 ? (
                    messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${
                                message.senderId === userId ? 'justify-end' : 'justify-start'
                            }`}
                        >
                            <div
                                className={`p-3 rounded-3xl max-w-[70%] text-sm ${
                                    message.senderId === userId
                                        ? 'bg-[#F0DFD7] text-black rounded-br-none'
                                        : 'bg-[#FFDBC8] text-gray-800 rounded-bl-none'
                                }`}
                            >
                                {message.text || 'No content available'}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No messages yet.</p>
                )}
            </div>

            {/* Input and Send Section */}
            <div className="p-4 bg-white border-t border-[#FFDBC8]">
                <div className="flex">
                    <input
                        type="text"
                        className="flex-grow p-3 bg-white border border-gray-300 rounded-l-lg outline-none focus:ring-2 focus:ring-custom-secondary"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button
                        className="px-6 text-white rounded-r-lg bg-custom-secondary hover:bg-custom-blue-dark"
                        onClick={handleSend}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
