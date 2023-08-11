import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import Note from "./Note";

export default function NoteSearch({ notes }) {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p className="matching">No matching results</p>
      ) : (
        <AnimatePresence>
          {notes.map((note) => {
            return <Note note={note} key={note.id} />;
          })}
        </AnimatePresence>
      )}
    </div>
  );
}

NoteSearch.propTypes = {
  notes: PropTypes.object,
};
