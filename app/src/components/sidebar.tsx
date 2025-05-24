import React, { useState, useEffect } from "react";
import "../css/Sidebar.css";
import { useNavigate } from "react-router";

import menuItems from "../util/menuItems";
import { motion } from "motion/react";
import Profile from "./Profile";

// Icons for menu
import { FaLightbulb } from "react-icons/fa";

import { IoGameController } from "react-icons/io5";

import { GiWhistle } from "react-icons/gi";

import { BiNotepad } from "react-icons/bi";

import { FaRegFolderOpen } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

interface SidebarProps {
  OpenContent: string;
  isContentOpen: boolean;
  setOpenContent: (content: string) => void;
  setisContentOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  OpenContent,
  setisContentOpen,
  isContentOpen,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [width, setWidth] = useState(window.innerWidth);

  const router = useNavigate();

  const toggleSubMenu = (menu: string) => {
    if (openSubMenu === menu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(menu);
      console.log("Submenu toggled", menu);
    }
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 768;

  const handleContentChange = (content: string) => {
    router(`${content}`);

    setIsOpen(false);
    setisContentOpen(true);
  };

  useEffect(() => {
    console.log("closing", isContentOpen);
  }, [isContentOpen]);

  const toggleSidebar = () => {
    setIsOpen((prev) => {
      const newState = !prev;

      if (isMobile && !newState) {
        setisContentOpen(false);
      }

      return newState;
    });

    console.log("Sidebar toggled");
  };

  return (
    <>
      {isOpen ? (
        <div className={`sidebar open overflow-y-auto `}>
          <div className="sidebar-header">
            <span className="sidebar-title">Game Fundamentals</span>
            {!isMobile && (
              <button className="toggle-btn" onClick={toggleSidebar}>
                <motion.div
                  className="icon-placeholder"
                  initial={false}
                  animate={{ rotate: isOpen ? 0 : 180 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {isOpen ? (
                    <FaArrowAltCircleLeft size={28} />
                  ) : (
                    <FaArrowAltCircleRight size={28} />
                  )}
                </motion.div>
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="nav-links">
            {/* nav */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.23 }}
            >
              {menuItems.map(({ title, key, items, icon }) => (
                <li
                  key={key}
                  className={`menu-item ${
                    openSubMenu === key ? "Wborder" : ""
                  }`}
                >
                  <div
                    className="menu-title flex gap-5"
                    onClick={() => toggleSubMenu(key)}
                  >
                    <div className="w-10 flex justify-center items-center">
                      {icon}
                    </div>
                    {title + " "}
                  </div>
                  <div
                    className={`sub-menu ${openSubMenu === key ? "open" : ""}`}
                  >
                    {items.map(({ label, value, icon }, idx) => (
                      <div
                        key={idx}
                        className={`fundamentals-item `} //${color ? `color-${color}` : ""}
                        onClick={() => handleContentChange(value)}
                      >
                        {icon}
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </motion.ul>
          </nav>

          <Profile />
        </div>
      ) : (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
          <div className={`sidebar-headerclosed`}>
            <div className="mobile-content">
              {openSubMenu ? (
                <div className="mobile-welcome-message">
                  <button className="toggle-btn2" onClick={toggleSidebar}>
                    {isMobile && <h3>{OpenContent}</h3>}
                    {!isMobile && <h3>≡</h3>}
                  </button>
                </div>
              ) : (
                <div className="mobile-welcome-message">
                  <button className="toggle-btn2" onClick={toggleSidebar}>
                    {isMobile && <h3>welcome</h3>}
                    {!isMobile && <h3>≡</h3>}
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className={`icon-container ${isOpen ? "open" : "closed"}`}>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.23 }}
            >
              <FaLightbulb
                size={width <= 2000 ? 25 : 26}
                onClick={toggleSidebar}
                className={`btn-icon ${isOpen ? "open" : "closed"} ${
                  openSubMenu == "fundamentals" ? "colored-icon" : ""
                }`}
              />
              <IoGameController
                size={width <= 2000 ? 25 : 26}
                onClick={toggleSidebar}
                className={`btn-icon ${isOpen ? "open" : "closed"} ${
                  openSubMenu == "mechanics" ? "colored-icon" : ""
                }`}
              />
              <GiWhistle
                size={width <= 2000 ? 25 : 26}
                onClick={toggleSidebar}
                className={`btn-icon ${isOpen ? "open" : "closed"}`}
              />
              <BiNotepad
                size={width <= 2000 ? 25 : 26}
                onClick={toggleSidebar}
                className={`btn-icon ${isOpen ? "open" : "closed"}`}
              />
              <FaRegFolderOpen
                size={width <= 2000 ? 25 : 26}
                onClick={toggleSidebar}
                className={`btn-icon ${isOpen ? "open" : "closed"}`}
              />
            </motion.ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
