import "../Style/Editor.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router";


const Editor = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleRef = useRef();
  const contentRef = useRef();
  const navigate = useNavigate();

  const onSubmit = () => {
    if (title.trim() === "") {
      alert("제목을 입력해주세요.");
      titleRef.current.focus();
      return;
    }
    if (content.trim() === "") {
      alert("본문을 입력해주세요.");
      contentRef.current.focus();
      return;
    }

    const newMemoId = onSave(title, content); // 저장하고 새 메모 ID 받기
    setTitle("");
    setContent("");
    navigate(`/memo/${newMemoId}`); // 해당 메모 디테일 페이지로 이동
  };


  return (
    <div className="Memo-Editor">
      <input
        ref={titleRef}
        type="text"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        ref={contentRef}
        placeholder="본문을 입력해주세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button  className="save-button" onClick={onSubmit}>저장</button>
    </div>
  );
};

export default Editor;
