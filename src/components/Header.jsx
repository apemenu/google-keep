import { useNote } from "../context/UseNote";
import { FiSun, FiMoon } from "react-icons/fi";
export default function Header() {
  const { darkMode, setDarkMode, searchNote, setSearchNote } = useNote();

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
