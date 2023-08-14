import PropTypes from "prop-types";
import Note from "./Note";
import { useNote } from "../context/UseNote";

export default function NoteSearch({ searchNotes }) {
  const { grid, notes } = useNote();

  const noteFilter = notes.filter((note) => !note.trash);

  return (
    <div className={grid ? "grid" : "note-list"}>
      {searchNotes.length === 0 || noteFilter.length === 0 ? (
        <p className="matching">No matching results</p>
      ) : (
        searchNotes.map((note) => {
          if (!note.trash) {
            return <Note note={note} key={note.id} />;
          }
        })
      )}
    </div>
  );
}

NoteSearch.propTypes = {
  searchNotes: PropTypes.array,
};
