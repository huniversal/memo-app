const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          id={todo.id}
          title={todo.content}
          extra={todo.isDone ? "완료" : "미완료"}
          onDelete={onDeleteTodo}
          onClick={onToggleTodo} // 아이템 클릭으로 상태 변경
        />
      ))}
    </div>
  );
};

export default TodoList;
