import React, { useState, useEffect } from 'react';
import ClientSidebar from '../../components/client/ClientSidebar';
import ChatList from '../../components/common/ChatList';
import ChatWindow from '../../components/common/ChatWindow';
import RegisterHeader from '../../components/common/RegisterHeader';
import Breadcrumb from '../../components/ui/Breadcrumb';
import axios from 'axios';

const ChatPage = () => {

    const breadcrumbItems = [
        { label: 'My Wedding', href: './../mywedding' },
        { label: 'Chat' },
        
    ];

    const [vendors, setVendors] = useState([]);
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [messages, setMessages] = useState([]);
    const [currentConversationId, setCurrentConversationId] = useState(null);

    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('id');

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/chat/vendors', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setVendors(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Error fetching vendors:', error.response || error.message);
                setVendors([]);
            }
        };

        fetchVendors();
    }, [token]);

    
    const handleChatSelect = async (vendorId) => {
        try {
            setSelectedVendor(vendorId);
            console.log('Selected Vendor ID:', vendorId);
            console.log('Client ID:', userId);
    
            // Start a conversation or fetch an existing one
            const { data: conversation } = await axios.post(
                'http://localhost:5000/conversation/start-conversation',
                { clientId: parseInt(userId), vendorId: parseInt(vendorId) }, // Ensure integers are sent
                { headers: { Authorization: `Bearer ${token}` } }
            );
    
            setCurrentConversationId(conversation.conversationId);
    
            // Fetch existing messages for the conversation
            const { data: fetchedMessages } = await axios.get(
                `http://localhost:5000/messages/${conversation.conversationId}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
    
            setMessages(fetchedMessages || []);
        } catch (error) {
            console.error('Error selecting chat:', error.response?.data || error.message);
            alert('Error fetching messages. Please try again.');
            setMessages([]);
        }
    };
    
    
    const handleSend = async (text) => {
        if (!currentConversationId) {
            console.error('No conversation selected.');
            return;
        }
    
        try {
            const newMessage = {
                conversationId: currentConversationId,
                senderId: parseInt(userId),
                receiverId: selectedVendor,
                text,
            };
    
            const { data: sentMessage } = await axios.post(
                'http://localhost:5000/messages/send-message',
                newMessage,
                { headers: { Authorization: `Bearer ${token}` } }
            );
    
            setMessages((prevMessages) => [...prevMessages, sentMessage]);
        } catch (error) {
            console.error('Error sending message:', error.response?.data || error.message);
        }
    };
    

    return (
        <>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <ClientSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className="text-4xl font-bold text-custom-primary">Chat</h1>
                    </div>
                    <div className="relative flex gap-4 h-[calc(100vh-200px)]"> {/* Adjust the height calculation */}
    <div className="w-1/3 bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-4 max-h-full overflow-y-auto">
        {vendors.length > 0 ? (
            <ChatList
                conversations={vendors.map((vendor) => ({
                    id: vendor.id,
                    name: vendor.email,
                    lastMessage: 'Click to start chatting',
                }))}
                onSelect={handleChatSelect}
            />
        ) : (
            <div className="flex items-center justify-center h-full">
                <p>No vendors available for chat.</p>
            </div>
        )}
    </div>
    <div className="w-2/3 bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-4 max-h-full overflow-y-auto">
        {selectedVendor ? (
            <ChatWindow messages={messages} onSend={handleSend} />
        ) : (
            <div className="flex flex-col items-center justify-center h-full bg-gray-50">
                <p>Select a chat to start messaging</p>
            </div>
        )}
    </div>
</div>

                </div>
            </div>
        </>
    );
    
};

export default ChatPage;

//////use socket.io//////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import ClientSidebar from '../../components/client/ClientSidebar';
// import ChatList from '../../components/common/ChatList';
// import ChatWindow from '../../components/common/ChatWindow';
// import RegisterHeader from '../../components/common/RegisterHeader';
// import Breadcrumb from '../../components/ui/Breadcrumb';
// import axios from 'axios';
// import io from 'socket.io-client';

// const socket = io('http://localhost:5000'); // Connect to Socket.IO server

// const ChatPage = () => {
//     const breadcrumbItems = [
//         { label: 'My Wedding', href: './../mywedding' },
//         { label: 'Chat' },
//     ];

//     const [vendors, setVendors] = useState([]);
//     const [selectedVendor, setSelectedVendor] = useState(null);
//     const [messages, setMessages] = useState([]);
//     const [currentConversationId, setCurrentConversationId] = useState(null);

//     const token = localStorage.getItem('token');
//     const userId = localStorage.getItem('id');

//     useEffect(() => {
//         // Fetch vendors on component mount
//         const fetchVendors = async () => {
//             try {
//                 const { data } = await axios.get('http://localhost:5000/chat/vendors', {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
//                 setVendors(Array.isArray(data) ? data : []);
//             } catch (error) {
//                 console.error('Error fetching vendors:', error.response || error.message);
//                 setVendors([]);
//             }
//         };

//         fetchVendors();
//     }, [token]);

//     // Listen for incoming messages via socket.io
//     useEffect(() => {
//         socket.on('receiveMessage', (message) => {
//             if (message.conversationId === currentConversationId) {
//                 setMessages((prevMessages) => [...prevMessages, message]);
//             }
//         });

//         return () => {
//             socket.off('receiveMessage');
//         };
//     }, [currentConversationId]);

//     const handleChatSelect = async (vendorId) => {
//         try {
//             setSelectedVendor(vendorId);
    
//             // Start a conversation or fetch an existing one
//             const { data: conversation } = await axios.post(
//                 'http://localhost:5000/conversation/start-conversation',
//                 { clientId: parseInt(userId), vendorId: parseInt(vendorId) },
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );
    
//             setCurrentConversationId(conversation.conversationId);
    
//             // Fetch existing messages for the conversation
//             const { data: fetchedMessages } = await axios.get(
//                 `http://localhost:5000/messages/${conversation.conversationId}`,
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );
    
//             setMessages(fetchedMessages || []);
//         } catch (error) {
//             console.error('Error selecting chat:', error.response?.data || error.message);
//             alert('Error fetching messages. Please try again.');
//             setMessages([]);
//         }
//     };

//     const handleSend = (text) => {
//         if (!currentConversationId) {
//             console.error('No conversation selected.');
//             return;
//         }
    
//         const newMessage = {
//             conversationId: currentConversationId,
//             senderId: parseInt(userId),
//             receiverId: parseInt(selectedVendor), // Ensure receiverId is parsed correctly
//             text,
//         };
    
//         // Emit the message
//         socket.emit('sendMessage', newMessage);
    
//         // Update the UI locally
//         setMessages((prevMessages) => [...prevMessages, newMessage]);
//     };
    

//     return (
//         <>
//             <RegisterHeader />
//             <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
//                 <div className="w-[5%] sm:w-[10%] md:w-[20%]">
//                     <ClientSidebar />
//                 </div>
//                 <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
//                     <div className="pb-5">
//                         <Breadcrumb items={breadcrumbItems} />
//                     </div>
//                     <div className="pb-5">
//                         <h1 className="text-4xl font-bold text-custom-primary">Chat</h1>
//                     </div>
//                     <div className="relative flex gap-4 h-[calc(100vh-200px)]">
//                         <div className="w-1/3 bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-4 max-h-full overflow-y-auto">
//                             {vendors.length > 0 ? (
//                                 <ChatList
//                                     conversations={vendors.map((vendor) => ({
//                                         id: vendor.id,
//                                         name: vendor.email,
//                                         lastMessage: 'Click to start chatting',
//                                     }))}
//                                     onSelect={handleChatSelect}
//                                 />
//                             ) : (
//                                 <div className="flex items-center justify-center h-full">
//                                     <p>No vendors available for chat.</p>
//                                 </div>
//                             )}
//                         </div>
//                         <div className="w-2/3 bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-4 max-h-full overflow-y-auto">
//                             {selectedVendor ? (
//                                 <ChatWindow messages={messages} onSend={handleSend} />
//                             ) : (
//                                 <div className="flex flex-col items-center justify-center h-full bg-gray-50">
//                                     <p>Select a chat to start messaging</p>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ChatPage;
