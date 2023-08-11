import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import { BsPin, BsPinFill } from "react-icons/bs";
import { useNote } from "../context/UseNote";
import NoteModal from "./NoteModal";
import { motion } from "framer-motion";

export default function Note({ note }) {
  const { deleteNote, getModal, addPinned, truncateSentence } = useNote();

  function openModal(e) {
    const clickElement = e.target;
    if (clickElement.nodeName === "svg" || clickElement.nodeName === "path") {
      return;
    }
    getModal(note.id);
  }

  return (
    <>
      <motion.div
        className="note"
        layout
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: -200 }}
        // transition={{ duration: 0.3 }}
        onClick={openModal}
      >
        <div className="note-top">
          <span className="note-title">{truncateSentence(note.title, 30)}</span>
          {note.isPinned ? (
            <BsPinFill className="pin" onClick={() => addPinned(note.id)} />
          ) : (
            <BsPin className="pin" onClick={() => addPinned(note.id)} />
          )}
        </div>
        <span className="note-text">{truncateSentence(note.text, 250)}</span>
        <div className="footer">
          <AiFillDelete
            onClick={() => deleteNote(note.id)}
            className="delete"
          />
        </div>
      </motion.div>
      <NoteModal note={note} />
    </>
  );
}

Note.propTypes = {
  note: PropTypes.object,
};
