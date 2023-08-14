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
  const [grid, setGrid] = useState(false);
  const [openNav, setOpenNav] = useState(false);

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
          return { ...note, modal: !note.modal, openColor: false };
        } else {
          return { ...note, openColor: false };
        }
      });
    });
  }

  function addPinned(id) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, isPinned: !note.isPinned, archived: false };
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

  function changeGrid() {
    setGrid((prevGrid) => !prevGrid);
  }

  function changeColor(id, nightModeColor, lightModeColor) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            backgroundColor: {
              nightMode: nightModeColor,
              lightMode: lightModeColor,
            },
          };
        } else {
          return note;
        }
      });
    });
  }

  function openColor(id) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, openColor: !note.openColor };
        } else {
          return { ...note, openColor: false };
        }
      });
    });
  }

  function archiveNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            archived: !note.archived,
            isPinned: false,
            modal: false,
          };
        } else {
          return note;
        }
      });
    });
  }
  function moveToTrash(id) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, trash: !note.trash, isPinned: false, modal: false };
        } else {
          return note;
        }
      });
    });
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
        grid,
        changeGrid,
        changeColor,
        openColor,
        archiveNote,
        moveToTrash,
        openNav,
        setOpenNav,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

NoteProvier.propTypes = {
  children: PropTypes.object,
};
