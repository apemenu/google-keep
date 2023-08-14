import { useNote } from "../context/UseNote";
import Note from "./Note";

export default function NotePinned() {
  const { notes, grid } = useNote();

  const filter = notes.filter((note) => note.isPinned);

  return (
    filter.length > 0 && (
      <div
        className="note-list-container"
        style={{ width: grid ? "auto" : "100%" }}
      >
        <small>Pinned</small>
        <div className={grid ? "grid" : "note-list"}>
          {notes.map((note) => {
            if (note.isPinned && !note.archived && !note.trash) {
              return <Note note={note} key={note.id} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    )
  );
}
