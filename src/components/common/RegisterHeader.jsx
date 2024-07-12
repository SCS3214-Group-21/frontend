import React, { useState } from "react";

function RegisterHeader() {
  const [notificationCount, setNotificationCount] = useState(5); // Example count

  return (
    <div className="sticky top-0 z-50">
      <div
        className="flex flex-row items-center justify-between w-full h-20 bg-[#FFF8F5]  px-5 flex-wrap z-50"
      >
        <div className="flex flex-row gap-5 items-center justify-between flex-wrap">
          <img
            src="../src/assets/images/Images/logo2.png"
            alt="logo"
            className="hidden sm:block w-12 h-12"
          />
          <img
            src="../src/assets/images/Images/logo1.png"
            alt="logo"
            className="w-44 sm:w-56 sm:h-14"
          />
        </div>
        
        <div className="flex flex-row gap-5 relative">
          <div className="relative">
            <img
              src="../src/assets/images/Images/notification.png"
              alt="notification"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            {notificationCount > 0 && (
              <div className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                {notificationCount}
              </div>
            )}
          </div>
          <img
            src="../src/assets/images/Images/profile.png"
            alt="profile"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterHeader;
