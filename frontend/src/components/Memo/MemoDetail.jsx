import "../Style/memodetail.css";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MemoDetail = ({ memos, onDelete, onSave }) => {
  const { id } = useParams(); // URL 파라미터에서 메모 ID 가져오기
  const navigate = useNavigate();

  // 메모 찾기
  const memo = Array.isArray(memos) ? memos.find((memo) => memo.id === parseInt(id)) : null;

  // 상태 관리  
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부 
  const [title, setTitle] = useState(memo?.title || ""); // 제목 상태 
  const [content, setContent] = useState(memo?.content || ""); // 내용 상태 

  // 삭제 처리
  const handleDelete = () => {
    onDelete(memo.id); // 메모 삭제
    navigate("/"); // 홈으로 이동
  };

  // 저장 처리
  const handleSave = () => {
    onSave(memo.id, title, content); 
    setIsEditing(false); // 수정 모드 종료 
  };

  // 메모가 없을 때 처리
  if (!memo) {
    return <div>메모를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="MemoDetail">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button onClick={handleSave}>저장</button>
        </>
      ) : (
        <>
          <div className="detail-div">
            <h2 className="detail-title">{memo.title}</h2>
            <p className="detail-content">{memo.content}</p>
          </div>
          <div className="button-container">
            <button onClick={() => setIsEditing(true)}>수정</button>
            <button onClick={handleDelete}>삭제</button>
          </div>

        </>
      )}
    </div>
  );
};

export default MemoDetail;
