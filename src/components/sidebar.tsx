import React, { useState, useEffect } from "react";
import "../css/Sidebar.css";

import menuItems from "../util/menuItems";
import { motion } from "motion/react";
import Profile from "./Profile";

menuItems;

interface SidebarProps {
  OpenContent: string;
  isContentOpen: boolean;
  setOpenContent: (content: string) => void;
  setisContentOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  setOpenContent,
  OpenContent,
  setisContentOpen,
  isContentOpen,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (menu: string) => {
    if (openSubMenu === menu) {
      setOpenSubMenu(null); // Close the menu if it's already open
    } else {
      setOpenSubMenu(menu); // Open the clicked menu
    }
  };

  const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
  };

  const isMobile = useWindowWidth() <= 768; // or whatever breakpoint you use

  const handleContentChange = (content: string) => {
    setOpenContent(content);
    setIsOpen(false);
    setisContentOpen(true);
  };
  
  useEffect(() => {
    console.log("closing", isContentOpen);
  }, [isContentOpen]);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
    console.log("Sidebar opens");
    if (isMobile) {
      if (!isOpen) {
        setisContentOpen(false); // Close content when sidebar is closed
      }
    }
    console.log("opening");
  };
  
  return (
    <>
      {isOpen ? (
        <div className={`sidebar ${isOpen ? "open overflow-y-auto" : "closed overflow-y-hidden"}`}>
          <div className="sidebar-header">
            {isOpen && (
              <span className="sidebar-title">Game Fundamentals2</span>
            )}
           {!isMobile && <button className="toggle-btn" onClick={toggleSidebar}>
              <div className="icon-placeholder">≡</div>
            </button>}
          </div>

          {/* Search Input */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search... ( DISABLED )"
              className="search-input"
            />
          </div>
          {/* Navigation Links */}
          <nav className="nav-links">
            {/* nav */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {menuItems.map(({ title, key, items }) => (
                <li key={key} className="menu-item">
                  <div
                    className="menu-title"
                    onClick={() => toggleSubMenu(key)}
                  >
                    {title + " "}
                    <span className="arrow">
                      {openSubMenu === key ? "▲" : "▼"}
                    </span>
                  </div>
                  <div
                    className={`sub-menu ${openSubMenu === key ? "open" : ""}`}
                  >
                    {items.map(({ label, value, color, icon }, idx) => (
                      <div
                        key={idx}
                        className={`fundamentals-item ${
                          color ? `color-${color}` : ""
                        }`}
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
          {/* Profile Section */}
          {isOpen && (
            <Profile/>
          )}
        </div>
      ) : (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
          <div className={`sidebar-header ${isOpen ? "open" : "closed"}`}>
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
            {isOpen && <span className="sidebar-title">Game Fundamentals</span>}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
