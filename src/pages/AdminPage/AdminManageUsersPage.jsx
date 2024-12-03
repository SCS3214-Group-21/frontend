import React, { useState, useEffect } from "react";
import api from "../../api.jsx";
import Breadcrumb from "../../components/ui/Breadcrumb.jsx";
import AdminSidebar from "../../components/admin/AdminSidebar.jsx";
import AdminHeader from "../../components/common/AdminHeader.jsx";
import { FaEye, FaBan, FaUndo } from "react-icons/fa";
import Swal from "sweetalert2"; // Import SweetAlert2

function AdminManageUserPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [selectedUser, setSelectedUser] = useState(null); // For the popup
  const [popupType, setPopupType] = useState(null); // To differentiate between client and non-client popups
  const [popupError, setPopupError] = useState(null); // For popup error message
  const [bannedUser, setbannedUser] = useState([]); // To track banned users

  const breadcrumbItems = [
    { label: "Dashboard", href: "/admindashboard" },
    { label: "Manage User" },
  ];

  // Fetch users from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users/all", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUsers(response.data?.data || []);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to fetch users.");
      }

      try {
        const bannedUserResponse = await api.get("/users/banned", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        // Handle empty response gracefully
        const bannedUsers = Array.isArray(bannedUserResponse.data?.data)
          ? bannedUserResponse.data.data
          : [];

        // Use the correct state setter
        setbannedUser(bannedUsers);
      } catch (error) {
        console.error("Error fetching banned users:", error);
        setError("Failed to fetch banned users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Check if the user is banned
  const isUserBanned = (userId) => {
    return bannedUser.some((ban) => ban.user_id === userId);
  };

  // Handle user ban action
  const handleBanUser = async (userId) => {
    console.log(userId);
    const { value: reason } = await Swal.fire({
      title: "Ban User",
      input: "textarea",
      inputPlaceholder: "Please enter the reason for banning this user...",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      inputValidator: (value) => {
        if (!value) {
          return "Please enter a reason.";
        }
      },
    });

    if (reason) {
      try {
        const response = await api.post(
          "users/ban",
          {
            userId,
            reason,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          Swal.fire(
            "Banned!",
            "The user has been banned successfully.",
            "success"
          );
          setUsers(users.filter((user) => user.id !== userId)); // Remove banned user from the list
          window.location.reload();
        } else {
          Swal.fire(
            "Failed!",
            "There was an error banning the user. Please try again.",
            "error"
          );
        }
      } catch (error) {
        console.error("Error banning user:", error);
        Swal.fire(
          "Error",
          "Something went wrong. Please try again later.",
          "error"
        );
      }
    }
  };

  // Handle user unban action
  const handleUnbanUser = async (userId) => {
    console.log("Uid", userId);
    const { value: confirmation } = await Swal.fire({
      title: "Unban User",
      text: "Are you sure you want to unban this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Unban!",
      cancelButtonText: "Cancel",
    });

    if (confirmation) {
      try {
        const response = await api.delete(`/users/delete/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        // Adjust check for successful response
        if (response.status === 200 && response.data.message) {
          Swal.fire(
            "Unbanned!",
            "The user has been unbanned successfully.",
            "success"
          );
          setbannedUser(bannedUser.filter((ban) => ban.user_id !== userId)); // Remove from banned users
          window.location.reload();
        } else {
          Swal.fire(
            "Failed!",
            "There was an error unbanning the user. Please try again.",
            "error"
          );
        }
      } catch (error) {
        console.error("Error unbanning user:", error);
        Swal.fire(
          "Error",
          "Something went wrong. Please try again later.",
          "error"
        );
      }
    }
  };

  // Handle view button click with SweetAlert2 for user profile details
  const handleViewUser = async (user) => {
    try {
      const response = await api.post(
        "/users/details",
        {
          userId: user.id,
          role: user.role,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.data) {
        setSelectedUser(response.data.data); // Set the fetched user details
        setPopupType(user.role === "client" ? "client" : "non-client"); // Determine popup type
        setPopupError(null); // Clear any previous error
      } else {
        setPopupError("User has not created a profile yet."); // Set error if no details
        setSelectedUser(null); // Clear any previous user details
      }
    } catch (error) {
      console.error("Error viewing user:", error);
      Swal.fire("Error", "Failed to view user. Please try again.", "error");
    }
  };

  // Close the popup
  const handleClosePopup = () => {
    setSelectedUser(null);
    setPopupType(null);
  };

  // Filter and paginate users
  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(search.toLowerCase())
  );
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      <AdminHeader />
      <div className="bg-[#FFF8F5] min-h-screen w-full flex flex-row">
        <div className="w-[5%] sm:w-[10%] md:w-[20%]">
          <AdminSidebar />
        </div>
        <div className="w-[95%] sm:w-[90%] md:w-[80%] px-5 sm:px-10 md:pr-20 md:pl-32 xl:pl-5 xl:pr-16">
          <div className="pb-5">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="pb-5">
            <h1 className="text-4xl font-bold text-custom-primary">Users</h1>
          </div>

          <div className="pb-5">
            <input
              type="text"
              placeholder="Search by email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 border rounded-lg w-full mb-4 bg-white focus:outline-none"
            />
            <div className="w-full bg-white border border-[#FFDBC8] rounded-xl border-b-8 p-8 flex flex-row gap-10 sm:gap-5 flex-wrap">
              <table className="w-full border-collapse rounded-xl flex-wrap text-black">
                <thead>
                  <tr className="text-black">
                    <th className="px-4 py-2 border-b">User ID</th>
                    <th className="px-4 py-2 border-b">Email</th>
                    <th className="px-4 py-2 border-b">Role</th>
                    <th className="px-4 py-2 border-b">Reg-Date</th>
                    <th className="px-4 py-2 border-b">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedUsers.map((user) => (
                    <tr key={user.id} className="text-center">
                      <td className="px-4 py-2 border-b">{user.id}</td>
                      <td className="px-4 py-2 border-b">{user.email}</td>
                      <td className="px-4 py-2 border-b">{user.role}</td>
                      <td className="px-4 py-2 border-b">
                        {new Date(user.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-[0.8rem] space-x-2 border-b text-center flex flex-row items-center justify-center">
                        {user.is_admin !== 1 ? (
                          <FaEye
                            className="text-custom-secondary cursor-pointer hover:text-custom-primary transition duration-300"
                            onClick={() => handleViewUser(user)}
                          />
                        ) : (
                          <FaEye className="text-gray-400 cursor-not-allowed" />
                        )}
                        {/* <FaBan
                            className="text-red-500 cursor-pointer hover:text-red-700 transition duration-300"
                            onClick={() => handleBanUser(user.id)} // Call handleBanUser
                        /> */}
                        {user.is_admin !== 1 ? (
                            isUserBanned(user.id) ? (
                                <FaUndo
                                    className="text-green-500 cursor-pointer hover:text-green-700 transition duration-300"
                                    onClick={() => handleUnbanUser(user.id)} // Call handleUnbanUser
                                />
                            ) : (
                                <FaBan
                                    className="text-red-500 cursor-pointer hover:text-red-700 transition duration-300"
                                    onClick={() => handleBanUser(user.id)} // Call handleBanUser
                                />
                            )
                        ) : (
                            <FaBan className="text-gray-400 cursor-not-allowed" />
                        )}

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 border rounded ${
                      page === currentPage
                        ? "bg-custom-primary text-white"
                        : "bg-white text-custom-primary"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Popup logic */}
      {selectedUser || popupError ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[60%]">
            <h2 className="text-2xl font-bold mb-4">User Details</h2>
            {popupError ? (
              <div className="text-red-500">{popupError}</div>
            ) : popupType === "client" ? (
              <div>
                <p>
                  <strong>Bride Name:</strong> {selectedUser.bride_name}
                </p>
                <p>
                  <strong>Groom Name:</strong> {selectedUser.groom_name}
                </p>
                <p>
                  <strong>Location:</strong> {selectedUser.location}
                </p>
              </div>
            ) : (
              <div>
                <p>
                  <strong>Business Name:</strong> {selectedUser.business_name}
                </p>
                <p>
                  <strong>Email:</strong> {selectedUser.email}
                </p>
                <p>
                  <strong>Contact Number:</strong> {selectedUser.contact_number}
                </p>
              </div>
            )}
            <div className="flex justify-end space-x-4 mt-4">
              {selectedUser && (
                <div className="flex justify-end space-x-4 mt-4">
                  {!isUserBanned(selectedUser.id) ? (
                      <button
                        onClick={() => handleBanUser(selectedUser.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Ban User
                      </button>
                  ) : (
                    <button
                      onClick={() => handleUnbanUser(selectedUser.id)}
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Unban User
                    </button>
                  )}
                  <button
                    onClick={handleClosePopup}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    Close
                  </button>
                </div>
              )}

              {/* <button
                onClick={handleClosePopup}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Close
              </button> */}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default AdminManageUserPage;
