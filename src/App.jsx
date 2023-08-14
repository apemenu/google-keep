import ArchivePage from "./Page/ArchivePage";
import NotePage from "./Page/NotePage";
import TrashPage from "./Page/TrashPage";
import Header from "./components/Header";
import NoteSearch from "./components/NoteSearch";
import Sidebar from "./components/Sidebar";
import { useNote } from "./context/UseNote";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const { searchNote, notes } = useNote();

  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Sidebar />
          <div className="mainbar">
            {searchNote !== "" && (
              <NoteSearch
                searchNotes={notes.filter(
                  (note) =>
                    note.text.toLowerCase().includes(searchNote) ||
                    note.title.toLowerCase().includes(searchNote)
                )}
              />
            )}
            {searchNote === "" && (
              <>
                <Routes>
                  <Route path="/" element={<NotePage />} />
                  <Route path="/archive" element={<ArchivePage />} />
                  <Route path="/trash" element={<TrashPage />} />
                </Routes>
              </>
            )}
          </div>
        </div>
      </Router>
    </>
  );
}
