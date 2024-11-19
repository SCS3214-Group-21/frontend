import React, { useState, useEffect } from 'react';
import ChatList from '../../components/common/ChatList';
import ChatWindow from '../../components/common/ChatWindow';
import RegisterHeader from '../../components/common/RegisterHeader';
import Breadcrumb from '../../components/ui/Breadcrumb';
import axios from 'axios';
import VendorSidebar from '../../components/vendor/VendorSidebar';

const VendorChatPage = () => {

    const breadcrumbItems = [
        { label: 'Dashboard', href: '/vendor/dashboard' },
        { label: 'Chat' },
        
    ];

    const [clients,setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);
    const [messages, setMessages] = useState([]);
    const [currentConversationId, setCurrentConversationId] = useState(null);

    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('id');

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/chat/clients', {
                    headers: { Authorization: `Bearer ${token}` },
                });
    
                // Ensure the data is an array
                setClients(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Error fetching clients:', error.response || error.message);
                setClients([]);
            }
        };
    
        fetchClients();
    }, [token]);
    

    
    const handleChatSelect = async (clientId) => {
        try {
            setSelectedClient(clientId);
            console.log('Selected Client ID:', clientId);
            console.log('Vendor ID:', userId);
    
            // Start a conversation or fetch an existing one
            const { data: conversation } = await axios.post(
                'http://localhost:5000/conversation/start-conversation',
                { clientId: parseInt(clientId), vendorId: parseInt(userId) }, // Ensure integers are sent
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
                receiverId: selectedClient,
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
                    <VendorSidebar/>
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
        {clients.length > 0 ? (
            <ChatList
                conversations={clients.map((client) => ({
                    id: client.id,
                    name: client.email,
                    lastMessage: 'Click to start chatting',
                }))}
                onSelect={handleChatSelect}
            />
        ) : (
            <div className="flex items-center justify-center h-full">
                <p>No clients available for chat.</p>
            </div>
        )}
    </div>
    <div className="w-2/3 bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-4 max-h-full overflow-y-auto">
        {selectedClient ? (
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

export default VendorChatPage;


// import React, { useState, useEffect, useRef } from 'react';
// import { io } from 'socket.io-client';
// import ChatList from '../../components/common/ChatList';
// import ChatWindow from '../../components/common/ChatWindow';
// import RegisterHeader from '../../components/common/RegisterHeader';
// import Breadcrumb from '../../components/ui/Breadcrumb';
// import axios from 'axios';
// import VendorSidebar from '../../components/vendor/VendorSidebar';

// const VendorChatPage = () => {
//     const breadcrumbItems = [
//         { label: 'Dashboard', href: '/vendor/dashboard' },
//         { label: 'Chat' },
//     ];

//     const [clients, setClients] = useState([]);
//     const [selectedClient, setSelectedClient] = useState(null);
//     const [messages, setMessages] = useState([]);
//     const [currentConversationId, setCurrentConversationId] = useState(null);

//     const token = localStorage.getItem('token');
//     const userId = localStorage.getItem('id');
//     const socket = useRef(null); // Use `useRef` for socket to persist across renders

//     // Initialize Socket.IO connection
//     useEffect(() => {
//         socket.current = io('http://localhost:5000', {
//             query: { userId }, // Send the userId as a query parameter for identification
//         });

//         // Join the vendor's chat room (if applicable)
//         socket.current.emit('joinVendor', userId);

//         // Handle incoming messages
//         socket.current.on('receiveMessage', (message) => {
//             if (message.conversationId === currentConversationId) {
//                 setMessages((prevMessages) => [...prevMessages, message]);
//             }
//         });

//         // Cleanup on component unmount
//         return () => {
//             socket.current.disconnect();
//         };
//     }, [userId, currentConversationId]);

//     useEffect(() => {
//         const fetchClients = async () => {
//             try {
//                 const { data } = await axios.get('http://localhost:5000/chat/clients', {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });

//                 setClients(Array.isArray(data) ? data : []);
//             } catch (error) {
//                 console.error('Error fetching clients:', error.response || error.message);
//                 setClients([]);
//             }
//         };

//         fetchClients();
//     }, [token]);

//     const handleChatSelect = async (clientId) => {
//         try {
//             setSelectedClient(clientId);

//             // Start a conversation or fetch an existing one
//             const { data: conversation } = await axios.post(
//                 'http://localhost:5000/conversation/start-conversation',
//                 { clientId: parseInt(clientId), vendorId: parseInt(userId) },
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );

//             setCurrentConversationId(conversation.conversationId);

//             // Join the specific conversation room
//             socket.current.emit('joinConversation', conversation.conversationId);

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

//     const handleSend = async (text) => {
//         if (!currentConversationId) {
//             console.error('No conversation selected.');
//             return;
//         }

//         try {
//             const newMessage = {
//                 conversationId: currentConversationId,
//                 senderId: parseInt(userId),
//                 receiverId: selectedClient,
//                 text,
//             };

//             // Emit the message through Socket.IO
//             socket.current.emit('sendMessage', newMessage);

//             // Optimistically add the message to the chat
//             setMessages((prevMessages) => [...prevMessages, { ...newMessage, senderId: parseInt(userId) }]);

//             // Optionally, save the message via HTTP (if server requires it)
//             await axios.post('http://localhost:5000/messages/send-message', newMessage, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//         } catch (error) {
//             console.error('Error sending message:', error.response?.data || error.message);
//         }
//     };

//     return (
//         <>
//             <RegisterHeader />
//             <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
//                 <div className="w-[5%] sm:w-[10%] md:w-[20%]">
//                     <VendorSidebar />
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
//                             {clients.length > 0 ? (
//                                 <ChatList
//                                     conversations={clients.map((client) => ({
//                                         id: client.id,
//                                         name: client.email,
//                                         lastMessage: 'Click to start chatting',
//                                     }))}
//                                     onSelect={handleChatSelect}
//                                 />
//                             ) : (
//                                 <div className="flex items-center justify-center h-full">
//                                     <p>No clients available for chat.</p>
//                                 </div>
//                             )}
//                         </div>
//                         <div className="w-2/3 bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-4 max-h-full overflow-y-auto">
//                             {selectedClient ? (
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

// export default VendorChatPage;
