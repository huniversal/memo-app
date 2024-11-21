import React from 'react';
import ListItem from './ListItem';

const List = ({ memos=[], onDelete }) => {
  return (
    <div className='List'>
      <h3>메모 리스트</h3>
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
