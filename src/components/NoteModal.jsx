import { useRef } from "react";
import { useNote } from "../context/UseNote";
import PropTypes from "prop-types";

export default function NoteModal({ note }) {
  const { setNotes, getModal, darkMode } = useNote();
  const titleEditRef = useRef();
  const textEditRef = useRef();

  function editNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            title: titleEditRef.current.textContent,
            text: textEditRef.current.textContent,
          };
        } else {
          return note;
        }
      });
    });
    getModal(note.id);
  }

  //   function getCurrentTime() {
  //     const now = new Date();
  //     const hours = String(now.getHours()).padStart(2, "0");
  //     const minutes = String(now.getMinutes()).padStart(2, "0");

  //     return `Edited: ${hours}:${minutes}`;
  //   }

  return (
    note.modal && (
      <div className="note-modal">
        <div className={darkMode ? "note modal dark" : "note modal"}>
          <div
            contentEditable
            suppressContentEditableWarning
            ref={titleEditRef}
            className="input-box"
          >
            {note.title}
          </div>
          <div
            contentEditable
            suppressContentEditableWarning
            ref={textEditRef}
            className="input-box"
          >
            {note.text}
          </div>
          {/* <small>{getCurrentTime()}</small> */}
          <div className="footer">
            <button onClick={() => editNote(note.id)} className="btn">
              Save
            </button>
          </div>
        </div>
      </div>
    )
  );
}

NoteModal.propTypes = {
  note: PropTypes.object,
};
