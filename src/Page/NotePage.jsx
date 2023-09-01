import Input from "../components/Input";
import NoteList from "../components/NoteList";
import NotePinned from "../components/NotePinned";
import { useNote } from "../context/UseNote";

export default function NotePage() {
  const { notes } = useNote();
  const isTrash = notes.filter((note) => note.trash === false);

  return (
    <>
      <Input />
      {isTrash.length === 0 && <p>Add Note</p>}
      <NotePinned />
      <NoteList />
    </>
  );
}
