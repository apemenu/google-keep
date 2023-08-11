import { useNote } from "../context/UseNote";
import { AnimatePresence } from "framer-motion";
import Note from "./Note";

export default function NotePinned() {
  const { notes } = useNote();

  const filter = notes.filter((note) => note.isPinned);

  return (
    filter.length > 0 && (
      <>
        <small>Pinned</small>
        <div className="note-list">
          <AnimatePresence>
            {notes.map((note) => {
              if (note.isPinned) {
                return <Note note={note} key={note.id} />;
              } else {
                return null;
              }
            })}
          </AnimatePresence>
        </div>
      </>
    )
  );
}
