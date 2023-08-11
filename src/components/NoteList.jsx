import Note from "./Note";
import { useNote } from "../context/UseNote";
import { AnimatePresence } from "framer-motion";

export default function NoteList() {
  const { notes } = useNote();
  const filter = notes.filter((note) => !note.isPinned);

  return (
    <>
      {filter.length > 0 && <small>Others</small>}
      <div className="note-list">
        <AnimatePresence>
          {notes.map((note) => {
            if (!note.isPinned) {
              return <Note note={note} key={note.id} />;
            } else {
              return null;
            }
          })}
        </AnimatePresence>
      </div>
    </>
  );
}
