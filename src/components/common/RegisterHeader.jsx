import React, { useState } from "react";

function RegisterHeader() {
  const [notificationCount, setNotificationCount] = useState(5); // Example count

  return (
    <div className="sticky top-0 z-50">
      <div
        className="flex flex-row items-center justify-between w-full h-14 bg-[#FFF8F5]  px-5 flex-wrap z-50"
      >
        <div className="flex flex-row flex-wrap items-center justify-between gap-5">
          <img
            src="../../../src/assets/images/Images/logo2.png"
            alt="logo"
            className="hidden w-10 h-10 sm:block"
          />
          <img
            src="../../../src/assets/images/Images/logo1.png"
            alt="logo"
            className="w-44 sm:w-56 sm:h-12"
          />
        </div>

        <div className="relative flex flex-row gap-5">
          <img
            src="../../../src/assets/images/Images/wishlist.png"
            alt="wishlist"
            className="w-5 h-5 mt-3 md:w-6 md:h-6"
          />
          <div className="relative">
            <img
              src="../../../src/assets/images/Images/notification1.png"
              alt="notification"
              className="w-6 h-6 mt-2 md:w-7 md:h-7"
            />
            {notificationCount > 0 && (
              <div className="absolute right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-600 rounded-full top-2 sm:w-4 sm:h-4 sm:text-sm">
                {notificationCount}
              </div>
            )}
          </div>
          <img
            src="../../../src/assets/images/Images/profile.png"
            alt="profile"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterHeader;
