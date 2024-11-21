import "../Style/Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onSave }) => {
  const [title, setTitle] = useState("");     // 제목 상태
  const titleRef = useRef();    // 제목 입력창 참조

  // 제목 상태 업데이트
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const [content, setContent] = useState(""); // 본문 상태
  const contentRef = useRef();  // 본문 입력창 참조

  // 본문 상태 업데이트
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 저장 버튼 클릭 시 호출
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

    // 저장 콜백 실행 (상위 컴포넌트로 데이터 전달)
    onSave(title, content);

    // 입력 초기화
    setTitle("");
    setContent("");
  };

  return (
    <div className="Memo-Editor">
      <input
        ref={titleRef}
        type="text"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={onChangeTitle}
      />
      <textarea
        ref={contentRef}
        placeholder="본문을 입력해주세요"
        value={content}
        onChange={onChangeContent}
      ></textarea>
      <button  className="save-button" onClick={onSubmit}>저장</button>
    </div>
  );
};

export default Editor;
