import React from 'react';
import ListItem from './ListItem';
import "../Style/List.css";

const List = ({ memos=[], onDelete }) => {
  return (
    <div className='List'>
      <h2>메모 리스트</h2>
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
