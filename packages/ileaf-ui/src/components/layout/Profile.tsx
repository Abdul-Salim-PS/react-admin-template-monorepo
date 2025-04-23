"use client";
import { useConfirmPrompt } from "@context/ConfirmContext";
import { cn } from "@lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { LuChevronDown, LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";

export interface ProfileLink {
  path: string;
  label: string;
  Icon?: IconType;
  onClick?: () => void;
}

interface ProfileProps {
  profileImg: string;
  userName: string;
  profileLinks?: ProfileLink[];
  linkClass?: string;
}

const Profile: React.FC<ProfileProps> = ({
  profileImg = "",
  userName = "",
  profileLinks = [],
  linkClass = "text-base text-black",
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { showModal } = useConfirmPrompt();
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  const handleLogout = () => {
    showModal({
      title: "Logout",
      description: "Are you sure you want to logout?",
      onConfirm: () => {
        // handle logout
      },
      Icon: LuLogOut,
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="relative text-black">
      <button
        onClick={toggleMenu}
        className="flex gap-x-2 md:rounded-[50px] py-1 md:bg-white md:px-3 items-center cursor-pointer"
      >
        {profileImg ? (
          <div className="h-8 w-8 md:h-10 md:w-10 rounded-full">
            <img
              src={profileImg}
              alt="profile"
              className="object-contain w-full h-full rounded-full"
            />
          </div>
        ) : (
          <div className="h-8 w-8 md:w-10 md:h-10 bg-gray-300 rounded-full"></div>
        )}
        <p className="hidden md:block">{userName}</p>
        <span className="hidden md:block">
          <LuChevronDown />
        </span>
      </button>
      {showMenu ? (
        <div
          className={`absolute right-0 top-14 w-64 px-5 pt-4 pb-2 bg-white shadow-lg rounded-2xl`}
          ref={menuRef}
        >
          <div className="flex flex-col">
            <div className="flex flex-col items-center gap-y-1 py-3">
              {profileImg ? (
                <div className="h-16 w-16 rounded-full border border-gray-100">
                  <img
                    src={profileImg}
                    alt="profile"
                    className="object-contain w-full h-full rounded-full"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              )}
              <p>{userName}</p>
            </div>

            <div className="flex flex-col gap-y-2">
              {profileLinks && profileLinks?.length > 0
                ? profileLinks?.map(({ Icon, label, path }) => (
                    <Link
                      key={path}
                      onClick={handleLinkClick}
                      to={path}
                      className={cn(
                        "flex gap-2 items-center py-1 rounded w-full px-1",
                        linkClass
                      )}
                    >
                      {Icon ? <Icon /> : ""}
                      {label}
                    </Link>
                  ))
                : ""}
            </div>

            <hr className="w-full border-secondary bg-secondary my-2" />
            <button
              onClick={handleLogout}
              className="flex gap-2 items-center py-1 cursor-pointer px-1 rounded"
            >
              <LuLogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Profile;
