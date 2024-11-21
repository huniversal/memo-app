import React from 'react'
import '../Style/sidebar.css';
import List from './List'


const Sidebar = ({ memos, onDelete }) => {
  return (
    <div className="Sidebar">
      <List memos={memos} onDelete={onDelete}/>
    </div>
  );
};

export default Sidebar;