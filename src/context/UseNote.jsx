import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

const NoteContext = React.createContext();

export function useNote() {
  return useContext(NoteContext);
}

export function NoteProvier({ children }) {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [searchNote, setSearchNote] = useState("");

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== id;
      });
    });
  }

  function getModal(id) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, modal: !note.modal };
        } else {
          return note;
        }
      });
    });
  }

  function addPinned(id) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, isPinned: !note.isPinned };
        } else {
          return note;
        }
      });
    });
  }

  function truncateSentence(sentence, maxLength) {
    if (sentence.length <= maxLength) {
      return sentence;
    } else {
      const truncatedSentence = sentence.substring(0, maxLength).trim();
      return (
        truncatedSentence.substring(0, truncatedSentence.lastIndexOf(" ")) +
        "..."
      );
    }
  }

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        deleteNote,
        getModal,
        addPinned,
        darkMode,
        setDarkMode,
        searchNote,
        setSearchNote,
        truncateSentence,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

NoteProvier.propTypes = {
  children: PropTypes.object,
};
