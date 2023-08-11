import { useRef, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { useNote } from "../context/UseNote";
import { nanoid } from "nanoid";

export default function Input() {
  const [typeTitle, setTypeTitle] = useState("");
  const [typeText, setTypeText] = useState("");
  const titleRef = useRef();
  const textRef = useRef();
  const { setNotes } = useNote();

  function addNote() {
    if (
      titleRef.current.textContent === "" &&
      textRef.current.textContent === ""
    ) {
      return;
    } else {
      const newNote = {
        id: nanoid(),
        title: titleRef.current.textContent,
        text: textRef.current.textContent,
        modal: false,
        isPinned: false,
      };
      setNotes((prevNote) => {
        return [newNote, ...prevNote];
      });

      titleRef.current.textContent = "";
      textRef.current.textContent = "";
      setTypeTitle("");
      setTypeText("");
    }
  }

  return (
    <div className="input-container">
      <div className="input-box">
        <div
          className="placeholder"
          style={{ display: typeTitle === "" ? "block" : "none" }}
        >
          Title
        </div>
        <div
          className="input-content input-title"
          contentEditable
          ref={titleRef}
          onInput={(e) => setTypeTitle(e.target.textContent)}
          suppressContentEditableWarning
        ></div>
      </div>
      <div className="input-box">
        <div
          className="placeholder"
          style={{ display: typeText === "" ? "block" : "none" }}
        >
          Type Note..
        </div>
        <div
          className="input-content input-text"
          contentEditable
          ref={textRef}
          onInput={(e) => setTypeText(e.target.textContent)}
          suppressContentEditableWarning
        ></div>
      </div>
      <div className="footer">
        <BiPlus className="add" onClick={addNote} />
      </div>
    </div>
  );
}
