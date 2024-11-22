import React from 'react';
import Editor from './Editor';

const MemoPage = ({ memos, onSave }) => {
  return (
    <div className='Memo-container'>
      {/* 메모 작성 */}
      <Editor onSave={onSave} />
    </div>
  );
};

export default MemoPage;
