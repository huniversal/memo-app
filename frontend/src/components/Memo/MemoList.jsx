const MemoList = ({ memos, onDeleteMemo }) => {
  return (
    <div className="MemoList">
      {memos.map((memo) => (
        <ListItem 
          key={memo.id} 
          id={memo.id} 
          title={memo.title} 
          onDelete={onDeleteMemo} 
        />
      ))}
    </div>
  );
};

export default MemoList;
