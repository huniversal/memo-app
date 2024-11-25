import React from 'react';
import Editor from './Editor';

const MemoPage = ({ memos, onSave }) => {
  return (
    <div className='Memo-container'>
      <Editor onSave={onSave} />
    </div>
  );
};

export default MemoPage;
