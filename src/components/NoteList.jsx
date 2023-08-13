import Note from "./Note";
import { useNote } from "../context/UseNote";

export default function NoteList() {
  const { notes, grid } = useNote();
  const filter = notes.filter((note) => !note.isPinned);

  return (
    <>
      {filter.length > 0 && <small>Others</small>}
      <div className={grid ? "grid" : "note-list"}>
        {notes.map((note) => {
          if (!note.isPinned) {
            return <Note note={note} key={note.id} />;
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
}
