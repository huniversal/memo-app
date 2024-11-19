import React from 'react'
import '../Style/sidebar.css';

const Sidebar = () => {
  return (
    <div className='List'>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력해주세요"
      />
    </div>
  )
}

export default Sidebar
