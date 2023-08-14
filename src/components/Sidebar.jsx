import { CiStickyNote } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";
import { PiArchiveBox } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useNote } from "../context/UseNote";

export default function Sidebar() {
  const { openNav } = useNote();

  const navList = [
    { id: 1, icon: <CiStickyNote />, link: "", text: "Notes" },
    { id: 2, icon: <PiArchiveBox />, link: "archive", text: "Archive" },
    { id: 3, icon: <BsTrash />, link: "trash", text: "Trash" },
  ];

  const styles = {
    width: openNav ? "100%" : "48px",
    borderRadius: openNav ? "0 25px 25px 0" : "50%",
    marginLeft: openNav ? "0" : "12px",
    justifyContent: openNav ? "start" : "center",
    paddingLeft: openNav ? "24px" : "0",
  };

  return (
    <div
      className="sidebar"
      style={{
        width: openNav ? "240px" : "fit-content",
      }}
    >
      {navList.map((nav) => {
        return (
          <NavLink
            key={nav.id}
            className="sidebar-icon"
            to={nav.link}
            style={styles}
          >
            <div className="div-icon">{nav.icon}</div>{" "}
            <span style={{ display: openNav ? "block" : "none" }}>
              {nav.text}
            </span>
          </NavLink>
        );
      })}
    </div>
  );
}
