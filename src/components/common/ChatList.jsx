import React from 'react';

const ChatList = ({ conversations, onSelect }) => {
    return (
        <div className="w-full h-full overflow-y-auto bg-white">
            
            <ul className="divide-y divide-[#FFDBC8]">
                {conversations.map((chat) => (
                    <li
                        key={chat.id}
                        className="p-4 hover:bg-[#FFF3EB] cursor-pointer"
                        onClick={() => onSelect(chat.id)}
                    >
                        <h3 className="text-lg font-semibold text-gray-800">{chat.name}</h3>
                        <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatList;
