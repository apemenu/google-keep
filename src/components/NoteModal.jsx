import { useRef } from "react";
import { useNote } from "../context/UseNote";
import PropTypes from "prop-types";
import { BsPin, BsPinFill } from "react-icons/bs";

export default function NoteModal({ note }) {
  const { setNotes, getModal, darkMode, addPinned } = useNote();
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

  function closeModal(e) {
    if (e.target.classList.contains("note-modal")) {
      setNotes((prevNotes) => {
        return prevNotes.map((note) => {
          return { ...note, modal: false };
        });
      });
    }
  }

  //   function getCurrentTime() {
  //     const now = new Date();
  //     const hours = String(now.getHours()).padStart(2, "0");
  //     const minutes = String(now.getMinutes()).padStart(2, "0");

  //     return `Edited: ${hours}:${minutes}`;
  //   }

  return (
    note.modal && (
      <div className="note-modal" onClick={(e) => closeModal(e)}>
        <div
          className={darkMode ? "note modal dark" : "note modal"}
          style={{
            backgroundColor: darkMode
              ? note.backgroundColor.nightMode
              : note.backgroundColor.lightMode,
          }}
        >
          <div className="note-top">
            <div
              contentEditable
              suppressContentEditableWarning
              ref={titleEditRef}
              className="input-box"
            >
              {note.title}
            </div>
            {note.isPinned ? (
              <BsPinFill className="pin icon" onClick={() => addPinned(note.id)} />
            ) : (
              <BsPin className="pin icon" onClick={() => addPinned(note.id)} />
            )}
          </div>
          <div
            contentEditable
            suppressContentEditableWarning
            ref={textEditRef}
            className="input-box"
          >
            {note.text}
          </div>
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
