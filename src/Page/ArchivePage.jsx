import { useNote } from "../context/UseNote";
import Note from "../components/Note";
import { PiArchiveBox } from "react-icons/pi";

export default function ArchivePage() {
  const { notes, grid } = useNote();

  const archiveNote = notes.filter((note) => note.archived && !note.trash);

  return (
    <div
      className="note-list-container"
      style={{ width: grid ? "auto" : "100%" }}
    >
      {archiveNote.length > 0 ? (
        <div className={grid ? "grid" : "note-list"}>
          {archiveNote.map((note) => {
            return <Note key={note.id} note={note} />;
          })}
        </div>
      ) : (
        <div className="archive-note">
          <PiArchiveBox />
          <span>Your archived notes appear here</span>
        </div>
      )}
    </div>
  );
}
