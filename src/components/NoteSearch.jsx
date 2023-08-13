import PropTypes from "prop-types";
import Note from "./Note";
import { useNote } from "../context/UseNote";

export default function NoteSearch({ notes }) {
  const { grid } = useNote();
  return (
    <div className={grid ? "grid" : "note-list"}>
      {notes.length === 0 ? (
        <p className="matching">No matching results</p>
      ) : (
        notes.map((note) => {
          return <Note note={note} key={note.id} />;
        })
      )}
    </div>
  );
}

NoteSearch.propTypes = {
  notes: PropTypes.array,
};
