import PropTypes from "prop-types";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { BsPin, BsPinFill, BsArrowBarUp } from "react-icons/bs";
import { MdOutlineColorLens } from "react-icons/md";
import { PiArchiveBox } from "react-icons/pi";
import { useNote } from "../context/UseNote";
import NoteModal from "./NoteModal";
import { motion } from "framer-motion";
import ColorChanger from "./ColorChanger";
import Highlighter from "react-highlight-words";

export default function Note({ note }) {
  const {
    getModal,
    addPinned,
    truncateSentence,
    grid,
    openColor,
    darkMode,
    searchNote,
    archiveNote,
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
        <span className="note-text">
          <Highlighter
            searchWords={[searchNote]}
            autoEscape={true}
            textToHighlight={truncateSentence(note.text, 300)}
          />
        </span>
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

          <MdOutlineColorLens
            onClick={() => openColor(note.id)}
            className="icon note-icon"
          />
          <AiOutlineMinusSquare
            onClick={() => moveToTrash(note.id)}
            className="icon note-icon"
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
