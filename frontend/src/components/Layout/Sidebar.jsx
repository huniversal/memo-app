import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Style/sidebar.css';
import List from './List';

const Sidebar = ({ memos, onDelete }) => {
  const location = useLocation(); 
  const hideOnRoutes = ["/todo", "/mypage"];
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
