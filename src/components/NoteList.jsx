import Note from "./Note";
import { useNote } from "../context/UseNote";

export default function NoteList() {
  const { notes, grid } = useNote();
  const isNotPinned = notes.filter((note) => note.isPinned === false);
  const isPinned = notes.filter((note) => note.isPinned === true);

  return (
    <div
      className="note-list-container"
      style={{ width: grid ? "auto" : "100%" }}
    >
      {isNotPinned.length > 0 && isPinned.length > 0 && <small>Others</small>}
      <div className={grid ? "grid" : "note-list"}>
        {notes.map((note) => {
          if (!note.isPinned && !note.archived && !note.trash) {
            return <Note note={note} key={note.id} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
