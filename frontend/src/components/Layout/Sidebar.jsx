import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Style/sidebar.css';
import List from './List';

const Sidebar = ({ memos, onDelete }) => {
  const location = useLocation(); // 현재 경로 가져오기

  // 숨기고 싶은 경로 정의
  const hideOnRoutes = ["/todo", "/mypage"];

  // 특정 경로에서는 Sidebar를 렌더링하지 않음
  if (hideOnRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <div className="Sidebar">
      <List memos={memos} onDelete={onDelete} />
    </div>
  );
};

export default Sidebar;
