import React from 'react'
import '../Style/sidebar.css';
import ListItem from "./ListItem";

const Sidebar = ({ memos = [] }) => {
  return (
    <div className="Sidebar">
      <h2>메모 리스트</h2>
      {memos.length > 0 ? (
        memos.map((memo) => (
          <div key={memo.id} className="memo-item">
            {memo.title}
          </div>
        ))
      ) : (
        <p>저장된 메모가 없습니다.</p>
      )}
    </div>
  );
};

export default Sidebar;