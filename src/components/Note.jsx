import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import { BsPin, BsPinFill } from "react-icons/bs";
import { MdOutlineColorLens } from "react-icons/md";
import { useNote } from "../context/UseNote";
import NoteModal from "./NoteModal";
import { motion } from "framer-motion";
import ColorChanger from "./ColorChanger";
import Highlighter from "react-highlight-words";

export default function Note({ note }) {
  const {
    deleteNote,
    getModal,
    addPinned,
    truncateSentence,
    grid,
    openColor,
    darkMode,
    searchNote,
  } = useNote();

  function openModal(e) {
    const clickElement = e.target;
    if (
      clickElement.nodeName === "svg" ||
      clickElement.nodeName === "path" ||
      clickElement.classList.contains("ignore")
    ) {
      return;
    }
    getModal(note.id);
  }

  return (
    <>
      <motion.div
        className={`note ${grid ? `grid` : ``}`}
        layout
        onClick={openModal}
        style={{
          backgroundColor: darkMode
            ? note.backgroundColor.nightMode
            : note.backgroundColor.lightMode,
        }}
      >
        <div className="note-top">
          <span className="note-title">
            <Highlighter
              searchWords={[searchNote]}
              autoEscape={true}
              textToHighlight={truncateSentence(note.title, 30)}
            />
          </span>
          {note.isPinned ? (
            <BsPinFill
              className="pin icon"
              onClick={() => addPinned(note.id)}
            />
          ) : (
            <BsPin className="pin icon" onClick={() => addPinned(note.id)} />
          )}
        </div>
        <span className="note-text">
          <Highlighter
            searchWords={[searchNote]}
            autoEscape={true}
            textToHighlight={truncateSentence(note.text, 250)}
          />
        </span>
        <div className="footer">
          <MdOutlineColorLens
            onClick={() => openColor(note.id)}
            className="icon"
          />
          <AiFillDelete
            onClick={() => deleteNote(note.id)}
            className="delete icon"
          />
        </div>
        <ColorChanger id={note.id} note={note} />
      </motion.div>
      <NoteModal note={note} />
    </>
  );
}

Note.propTypes = {
  note: PropTypes.object,
};
