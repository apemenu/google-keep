import { useNote } from "../context/UseNote";
import TrashNote from "../components/TrashNote";
import { BsTrash } from "react-icons/bs";

export default function TrashPage() {
  const { notes, grid } = useNote();

  const trashNote = notes.filter((note) => note.trash);

  return (
    <div
      className="note-list-container"
      style={{ width: grid ? "auto" : "100%" }}
    >
      {trashNote.length > 0 ? (
        <div className={grid ? "grid" : "note-list"}>
          {trashNote.map((note) => {
            return <TrashNote key={note.id} note={note} />;
          })}
        </div>
      ) : (
        <div className="archive-note">
          <BsTrash />
          <span>No notes in trash</span>
        </div>
      )}
    </div>
  );
}
