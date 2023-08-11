import Header from "./components/Header";
import Input from "./components/Input";
import NoteList from "./components/NoteList";
import NotePinned from "./components/NotePinned";
import NoteSearch from "./components/NoteSearch";
import { useNote } from "./context/UseNote";

export default function App() {
  const { searchNote, notes } = useNote();

  return (
    <>
      <Header />
      <div className="container">
        <Input />
        {notes.length === 0 && <p>Add Note</p>}
        {searchNote !== "" && (
          <NoteSearch
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchNote) ||
              note.title.toLowerCase().includes(searchNote)
            )}
          />
        )}
        {searchNote === "" && (
          <>
            <NotePinned />
            <NoteList />
          </>
        )}
      </div>
    </>
  );
}
