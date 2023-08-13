import { useNote } from "../context/UseNote";
import Note from "./Note";

export default function NotePinned() {
  const { notes, grid } = useNote();

  const filter = notes.filter((note) => note.isPinned);

  return (
    filter.length > 0 && (
      <>
        <small>Pinned</small>
        <div className={grid ? "grid" : "note-list"}>
          {notes.map((note) => {
            if (note.isPinned) {
              return <Note note={note} key={note.id} />;
            } else {
              return null;
            }
          })}
        </div>
      </>
    )
  );
}
