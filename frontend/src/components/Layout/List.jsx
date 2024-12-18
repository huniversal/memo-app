import React from 'react';
import ListItem from './ListItem';
import "../Style/List.css";
import { useNavigate } from 'react-router';

const List = ({ memos=[], onDelete }) => {
  const navigate = useNavigate();
  const handleWriteClick = () => {
    navigate('/');
  }

  return (
    <div className='List'>
      <div className="list-header">
        <h2>메모 리스트</h2>
        <button className="write-btn" onClick={handleWriteClick}>글쓰기</button>
      </div>
      <div className='memo-wrapper'>
        {memos.map((memo) => (
          <ListItem 
            key={memo.id}
            id={memo.id}
            title={memo.title}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default List
