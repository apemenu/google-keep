import { useNote } from "../context/UseNote";
import { FiSun, FiMoon, FiMenu } from "react-icons/fi";
import { BsGrid } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
export default function Header() {
  const {
    darkMode,
    setDarkMode,
    searchNote,
    setSearchNote,
    changeGrid,
    grid,
    setOpenNav,
  } = useNote();

  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <div className="header">
      <FiMenu
        className="header-icon icon"
        onClick={() => setOpenNav((nav) => !nav)}
      />
      <input
        type="text"
        placeholder="Search note..."
        value={searchNote}
        onChange={(e) => setSearchNote(e.target.value)}
      />
      {grid ? (
        <BsGrid
          onClick={() => changeGrid()}
          className="header-icon marleft icon"
        />
      ) : (
        <CiGrid2H
          onClick={() => changeGrid()}
          className="header-icon marleft icon"
        />
      )}
      {darkMode ? (
        <FiMoon
          className="header-icon icon"
          onClick={() => setDarkMode((prevMode) => !prevMode)}
        />
      ) : (
        <FiSun
          className="header-icon icon"
          onClick={() => setDarkMode((prevMode) => !prevMode)}
        />
      )}
    </div>
  );
}
