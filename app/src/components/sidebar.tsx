import React, { useState, useEffect } from "react";
import "../css/Sidebar.css";
import { useNavigate } from "react-router";

import menuItems from "../util/menuItems";
import { motion } from "motion/react";
import Profile from "./Profile";

// Icons for menu
import { FaArrowAltCircleLeft } from "react-icons/fa";

interface SidebarProps {
  OpenContent: string;
  isContentOpen: boolean;
  setOpenContent: (content: string) => void;
  setisContentOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  setisContentOpen,
  isContentOpen,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [currentLabel, setCurrentLabel] = useState<string>(
    menuItems[0]?.items[0]?.label || ""
  );

  const router = useNavigate();

  const toggleSubMenu = (menu: string) => {
    if (openSubMenu === menu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(menu);
      {
        !isOpen && toggleSidebar();
      }
      console.log("Submenu toggled", menu);
    }
  };

  const toggleSidebar = () => {
    setIsOpen((prev) => {
      const newState = !prev;

      // If we are closing the sidebar, also close the open submenu
      if (!newState) {
        setOpenSubMenu(null);
      }

      if (isMobile && !newState) {
        setisContentOpen(false);
      }

      return newState;
    });

    console.log("Sidebar toggled");
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 768;

  const handleContentChange = (content: string, label?: string) => {
    router(`${content}`);
    setIsOpen(false);
    setisContentOpen(true);
    setOpenSubMenu(null);
    if (label) setCurrentLabel(label);
  };

  useEffect(() => {
    console.log("closing", isContentOpen);
  }, [isContentOpen]);

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className={"sidebar-header"}>
          {isOpen && <span className="sidebar-title">Game Fundamentals</span>}

          <button className="toggle-btn" onClick={toggleSidebar}>
            {!isOpen && isMobile && (
              <span style={{ marginRight: 10 }}>{currentLabel}</span>
            )}
            <motion.div
              className="icon-placeholder"
              initial={false}
              animate={{
                rotate: isMobile
                  ? isOpen
                    ? 270 // open: up
                    : 90 // closed: down
                  : isOpen
                  ? 0 // open: left
                  : 180, // closed: right
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <FaArrowAltCircleLeft size={28} />
            </motion.div>
          </button>
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
                className={`menu-item ${openSubMenu === key ? "Wborder" : ""}`}
              >
                <div className="menu-title" onClick={() => toggleSubMenu(key)}>
                  <div className="menu-icon">{icon}</div>
                  {isOpen && title + " "}
                </div>
                <div
                  className={`sub-menu ${openSubMenu === key ? "open" : ""}`}
                >
                  {items.map(({ label, value }, idx) => (
                    <div
                      key={idx}
                      className="fundamentals-item"
                      onClick={() => handleContentChange(value, label)}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </motion.ul>
        </nav>
        <Profile isOpen={isOpen} />
      </div>
    </>
  );
};

export default Sidebar;
