import "../Style/listitem.css";
const ListItem = ({ 
  id, 
  title, 
  onDelete 
  }) => {
  const handleDelete = () => {
    onDelete(id); // 삭제 함수 호출
  };

  return (
    <div className="ListItem">
      <div className="title">{title}</div>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default ListItem;
