import React from 'react';
import Editor from './Editor';

const MemoPage = ({ memos, onSave }) => {
  return (
    <div className='Memo-container'>
      {/* 메모 작성 */}
      <Editor onSave={onSave} />

      {/* 메모 리스트 */}
      {/* <div className="memo-list">
        <h3>저장된 메모</h3>
        {memos.length > 0 ? (
          <ul>
            {memos.map((memo) => (
              <li key={memo.id} className="memo-item">
                <h4>{memo.title}</h4>
                <p>{memo.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>메모가 없습니다.</p>
        )}
      </div> */}
    </div>
  );
};

export default MemoPage;
