import { CiStickyNote } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";
import { PiArchiveBox } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useNote } from "../context/UseNote";
import { useState } from "react";

export default function Sidebar() {
  const { openNav, darkMode } = useNote();

  const navList = [
    { id: 1, icon: <CiStickyNote />, link: "", text: "Notes", active: true },
    {
      id: 2,
      icon: <PiArchiveBox />,
      link: "archive",
      text: "Archive",
      active: false,
    },
    { id: 3, icon: <BsTrash />, link: "trash", text: "Trash", active: false },
  ];

  const [links, setLinks] = useState(navList);

  const styles = {
    width: openNav ? "100%" : "48px",
    borderRadius: openNav ? "0 25px 25px 0" : "50%",
    marginLeft: openNav ? "0" : "12px",
    justifyContent: openNav ? "start" : "center",
    paddingLeft: openNav ? "24px" : "0",
    color: darkMode ? "#fff" : "#202124",
  };

  function activeLink(id) {
    setLinks((prevLinks) => {
      return prevLinks.map((link) => {
        if (link.id === id) {
          return { ...link, active: true };
        } else {
          return { ...link, active: false };
        }
      });
    });
  }

  return (
    <div
      className="sidebar"
      style={{
        width: openNav ? "240px" : "fit-content",
      }}
    >
      {links.map((nav) => {
        return (
          <Link
            key={nav.id}
            className={`sidebar-icon ${nav.active ? "active" : ""} ${
              darkMode ? "dark" : ""
            }`}
            to={nav.link}
            style={styles}
            onClick={() => activeLink(nav.id)}
          >
            <div className="div-icon">{nav.icon}</div>{" "}
            <span style={{ display: openNav ? "block" : "none" }}>
              {nav.text}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
