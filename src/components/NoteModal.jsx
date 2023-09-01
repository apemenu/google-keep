import { useRef } from "react";
import { useNote } from "../context/UseNote";
import PropTypes from "prop-types";
import { BsPin, BsPinFill, BsArrowBarUp } from "react-icons/bs";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { PiArchiveBox } from "react-icons/pi";

export default function NoteModal({ note }) {
  const { setNotes, getModal, darkMode, addPinned, archiveNote, moveToTrash } =
    useNote();
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
              <BsPinFill
                className="icon note-icon"
                onClick={() => addPinned(note.id)}
              />
            ) : (
              <BsPin
                className="icon note-icon"
                onClick={() => addPinned(note.id)}
              />
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
            {note.archived ? (
              <BsArrowBarUp
                onClick={() => archiveNote(note.id)}
                className="icon note-icon"
              />
            ) : (
              <PiArchiveBox
                onClick={() => archiveNote(note.id)}
                className="icon note-icon"
              />
            )}
            <AiOutlineMinusSquare
              onClick={() => moveToTrash(note.id)}
              className="icon note-icon"
            />
            <button onClick={() => editNote(note.id)} className="btn">
              Close
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
