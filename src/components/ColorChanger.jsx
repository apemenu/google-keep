import { useNote } from "../context/UseNote";
import { BsCheckCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";

export default function ColorChanger({ note, id }) {
  const { changeColor, darkMode } = useNote();

  const background = [
    { id: 1, nightMode: "inherit", lightMode: "inherit" },
    { id: 2, nightMode: "#77172e", lightMode: "#faafa8" },
    { id: 3, nightMode: "#692b17", lightMode: "#e2f6d3" },
    { id: 4, nightMode: "#264d3b", lightMode: "#b4ddd3" },
    { id: 5, nightMode: "#0c625d", lightMode: "#aeccdc" },
    { id: 6, nightMode: "#256377", lightMode: "#f6e2dd" },
    { id: 7, nightMode: "#284255", lightMode: "#d4e4ed" },
    { id: 8, nightMode: "#472e5b", lightMode: "#e9e3d4" },
    { id: 9, nightMode: "#6c394f", lightMode: "#efeff1" },
  ];

  if (!note.openColor) return null;
  return (
    <div
      className="color-box ignore"
      style={{ backgroundColor: darkMode ? "#212529" : "white" }}
    >
      {background.map((back) => {
        return (
          <div
            className="color ignore"
            style={{
              backgroundColor: darkMode ? back.nightMode : back.lightMode,
            }}
            onClick={() => changeColor(id, back.nightMode, back.lightMode)}
            key={back.id}
          >
            {note.backgroundColor.nightMode === back.nightMode && (
              <BsCheckCircleFill className="check" />
            )}
          </div>
        );
      })}
    </div>
  );
}

ColorChanger.propTypes = {
  note: PropTypes.object,
  id: PropTypes.string,
};
