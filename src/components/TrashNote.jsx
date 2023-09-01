import { motion } from "framer-motion";
import { useNote } from "../context/UseNote";
import PropTypes from "prop-types";
import TrashNoteModal from "./TrashNoteModal";
import Highlighter from "react-highlight-words";
import { BsArrowBarUp, BsTrash } from "react-icons/bs";

export default function TrashNote({ note }) {
  const {
    getModal,
    truncateSentence,
    grid,
    darkMode,
    searchNote,
    deleteNote,
    moveToTrash,
    getNoteSize,
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
        className={`note ${getNoteSize(note.text.length)} ${
          grid ? `grid` : ``
        }`}
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
              textToHighlight={
                grid
                  ? truncateSentence(note.title, 70)
                  : truncateSentence(note.title, 30)
              }
            />
          </span>
        </div>
        <span className="note-text">
          <Highlighter
            searchWords={[searchNote]}
            autoEscape={true}
            textToHighlight={truncateSentence(note.text, 300)}
          />
        </span>
        <div className="footer">
          <BsTrash
            className="icon note-icon"
            onClick={() => deleteNote(note.id)}
          />
          <BsArrowBarUp
            className="icon note-icon"
            onClick={() => moveToTrash(note.id)}
          />
        </div>
      </motion.div>
      <TrashNoteModal note={note} />
    </>
  );
}

TrashNote.propTypes = {
  note: PropTypes.object,
};
