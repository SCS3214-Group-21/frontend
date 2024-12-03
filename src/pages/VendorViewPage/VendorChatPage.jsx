// import React, { useState, useEffect } from 'react';
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

//     const [clients,setClients] = useState([]);
//     const [selectedClient, setSelectedClient] = useState(null);
//     const [messages, setMessages] = useState([]);
//     const [currentConversationId, setCurrentConversationId] = useState(null);

//     const token = localStorage.getItem('token');
//     const userId = localStorage.getItem('id');

//     useEffect(() => {
//         const fetchClients = async () => {
//             try {
//                 const { data } = await axios.get('http://localhost:5000/chat/clients', {
//                     headers: { Authorization: `Bearer ${token}` },
//                 });
    
//                 // Ensure the data is an array
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
//             console.log('Selected Client ID:', clientId);
//             console.log('Vendor ID:', userId);
    
//             // Start a conversation or fetch an existing one
//             const { data: conversation } = await axios.post(
//                 'http://localhost:5000/conversation/start-conversation',
//                 { clientId: parseInt(clientId), vendorId: parseInt(userId) }, // Ensure integers are sent
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
    
//             const { data: sentMessage } = await axios.post(
//                 'http://localhost:5000/messages/send-message',
//                 newMessage,
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );
    
//             setMessages((prevMessages) => [...prevMessages, sentMessage]);
//         } catch (error) {
//             console.error('Error sending message:', error.response?.data || error.message);
//         }
//     };
    

//     return (
//         <>
//             <RegisterHeader />
//             <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
//                 <div className="w-[5%] sm:w-[10%] md:w-[20%]">
//                     <VendorSidebar/>
//                 </div>
//                 <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
//                 <div className="pb-5">
//                         <Breadcrumb items={breadcrumbItems} />
//                     </div>
//                     <div className="pb-5">
//                         <h1 className="text-4xl font-bold text-custom-primary">Chat</h1>
//                     </div>
//                     <div className="relative flex gap-4 h-[calc(100vh-200px)]"> {/* Adjust the height calculation */}
//     <div className="w-1/3 bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-4 max-h-full overflow-y-auto">
//         {clients.length > 0 ? (
//             <ChatList
//                 conversations={clients.map((client) => ({
//                     id: client.id,
//                     name: client.email,
//                     lastMessage: 'Click to start chatting',
//                 }))}
//                 onSelect={handleChatSelect}
//             />
//         ) : (
//             <div className="flex items-center justify-center h-full">
//                 <p>No clients available for chat.</p>
//             </div>
//         )}
//     </div>
//     <div className="w-2/3 bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-4 max-h-full overflow-y-auto">
//         {selectedClient ? (
//             <ChatWindow messages={messages} onSend={handleSend} />
//         ) : (
//             <div className="flex flex-col items-center justify-center h-full bg-gray-50">
//                 <p>Select a chat to start messaging</p>
//             </div>
//         )}
//     </div>
// </div>

//                 </div>
//             </div>
//         </>
//     );
    
// };

// export default VendorChatPage;

import React, { useState, useEffect } from 'react';
import ChatList from '../../components/common/ChatList';
import ChatWindow from '../../components/common/ChatWindow';
import RegisterHeader from '../../components/common/RegisterHeader';
import Breadcrumb from '../../components/ui/Breadcrumb';
import axios from 'axios';
import VendorSidebar from '../../components/vendor/VendorSidebar';
import io from 'socket.io-client';

const VendorChatPage = () => {
    const breadcrumbItems = [
        { label: 'Dashboard', href: '/vendor/dashboard' },
        { label: 'Chat' },
    ];

    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);
    const [messages, setMessages] = useState([]);
    const [currentConversationId, setCurrentConversationId] = useState(null);
    const [socket, setSocket] = useState(null); // State for socket connection

    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('id');

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/chat/clients', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setClients(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Error fetching clients:', error.response || error.message);
                setClients([]);
            }
        };
        fetchClients();

        // Set up the socket connection
        const socketConnection = io('http://localhost:5000', {
            query: { token }, // You can pass token here for authentication if needed
        });
        setSocket(socketConnection);

        // Clean up socket connection on unmount
        return () => socketConnection.disconnect();
    }, [token]);

    useEffect(() => {
        if (socket && currentConversationId) {
            // Listen for new messages in the conversation
            socket.on('newMessage', (message) => {
                setMessages((prevMessages) => [...prevMessages, message]);
            });
        }
        return () => {
            if (socket) {
                socket.off('newMessage');
            }
        };
    }, [socket, currentConversationId]);

    const handleChatSelect = async (clientId) => {
        try {
            setSelectedClient(clientId);

            // Start a conversation or fetch an existing one
            const { data: conversation } = await axios.post(
                'http://localhost:5000/conversation/start-conversation',
                { clientId: parseInt(clientId), vendorId: parseInt(userId) },
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

            // Emit the new message to the server using socket
            socket.emit('sendMessage', newMessage);

            // Optimistically add the sent message to the local state
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        } catch (error) {
            console.error('Error sending message:', error.response?.data || error.message);
        }
    };

    return (
        <>
            <RegisterHeader />
            <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
                <div className="w-[5%] sm:w-[10%] md:w-[20%]">
                    <VendorSidebar />
                </div>
                <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
                    <div className="pb-5">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="pb-5">
                        <h1 className="text-4xl font-bold text-custom-primary">Chat</h1>
                    </div>
                    <div className="relative flex gap-4 h-[calc(100vh-200px)]">
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


