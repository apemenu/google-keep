import Input from "../components/Input";
import NoteList from "../components/NoteList";
import NotePinned from "../components/NotePinned";
import { useNote } from "../context/UseNote";

export default function NotePage() {
  const { notes } = useNote();

  return (
    <>
      <Input />
      {notes.length === 0 && <p>Add Note</p>}
      <NotePinned />
      <NoteList />
    </>
  );
}
