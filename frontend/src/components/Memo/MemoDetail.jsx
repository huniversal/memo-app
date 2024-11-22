import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";

const MemoDetail = ({ memos, onDelete, onSave }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const memo = memos.find((memo) => memo.id === parent(id));
  return (
    <div>
      
    </div>
  )
}

export default MemoDetail
