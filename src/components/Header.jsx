import { useNote } from "../context/UseNote";
import { FiSun, FiMoon } from "react-icons/fi";
import { BsGrid } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
export default function Header() {
  const { darkMode, setDarkMode, searchNote, setSearchNote, changeGrid, grid } =
    useNote();

  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <div className="header">
      <input
        type="text"
        placeholder="Search note..."
        value={searchNote}
        onChange={(e) => setSearchNote(e.target.value)}
      />
      <div className="grid-icon">
        {grid ? (
          <BsGrid onClick={() => changeGrid()} />
        ) : (
          <CiGrid2H onClick={() => changeGrid()} />
        )}
      </div>
      <div className={darkMode ? "shadow dark" : "shadow"}>
        {darkMode ? (
          <FiMoon
            className="btn-mode"
            onClick={() => setDarkMode((prevMode) => !prevMode)}
          />
        ) : (
          <FiSun
            className="btn-mode"
            onClick={() => setDarkMode((prevMode) => !prevMode)}
          />
        )}
      </div>
    </div>
  );
}
