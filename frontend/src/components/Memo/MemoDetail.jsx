import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";

const MemoDetail = ({ memos, onDelete, onSave }) => {
  const { id } = useParams(); // URL 파라미터에서 메모 ID 가져오기
  const navigate = useNavigate();
  const memo = memos.find((memo) => memo.id === parent(id));  // 해당 메모 찾기 

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(memo?.title || "");

  const handleDelete = () => {
    onDelete(memo.id);
    navigate("/");
  };

  if (!memo) {
    return <div>메모를 찾을 수 없습니다.</div>
  }

  return (
    <div className='MemoDetail'>
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e)=> SVGTextContentElement(e.target.value)}
          ></textarea>
        </>
      ) : (
        <>
          <h2>{memo.title}</h2>
          <p>{memo.content}</p>
          <button onClick={() => setIsEditing(true)}>수정</button>
        </>
      )}
      <button onClick={handleDelete}>삭제</button>      
    </div>
  )
}

export default MemoDetail
