import { useState, useRef } from "react";
import "../Style/Editor.css";

const Editor = () => {
  const [title, setTitle] = useState("");     // 제목 상태
  const [content, setContent] = useState(""); // 본문 상태

  const titleRef = useRef();    // 제목 입력창 참조
  const contentRef = useRef();  // 본문 입력창 참조

  const onChangeTitle = (e) => {
    setTitle(e.target.value); // 제목 상태 업데이트
  }
  
  const onChangeContent = (e) => {
    setContent(e.target.value); // 본문 상태 업데이트
  }

  const onSubmit = () => {
    if (title === "") {
      titleRef.current.focus();
      return;
    }
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    console.log("제목:", title, "본문:", content); // 상태 출력
  };

  return (
    <div className="Memo-Editor">
      <input 
        ref={titleRef}
        type="text"
        placeholder='제목을 입력해주세요'
        value={title}
        onChange={onChangeTitle}
        />
      <textarea 
        ref={contentRef}
        placeholder='본문을 입력해주세요'
        value={content}
        onChange={onChangeContent}
        ></textarea>
      <button
        onClick={onSubmit}>확인</button>
    </div>
  )
}

export default Editor;