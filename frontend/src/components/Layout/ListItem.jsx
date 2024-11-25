// import "../Style/listitem.css";

// const ListItem = ({ 
//   id, 
//   title, 
//   onDelete 
//   }) => {
//     const handleDelete = () => {
//       onDelete(id); // 삭제 함수 호출
//     };

//   return (
//     <div className="ListItem">
//       <div className="title">{title}</div>
//       <button onClick={handleDelete}>X</button>
//     </div>
//   );
// };


// export default ListItem;
import "../Style/listitem.css";
import { useNavigate } from "react-router-dom";

const ListItem = ({ id, title, onDelete }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/memo/${id}`); // 메모 디테일 페이지로 이동
  };

  const handleDelete = (e) => {
    e.stopPropagation(); // 클릭 이벤트 전파 방지
    onDelete(id); // 삭제 함수 호출
  };

  return (
    <div className="ListItem" onClick={handleNavigate}>
      <div className="title">{title}</div>
      <button onClick={handleDelete}>X</button>
    </div>
  );
};

export default ListItem;
