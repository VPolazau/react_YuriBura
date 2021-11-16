import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {
  const elements = todos.map(item => {
    return (
      <li>
        {/* когда имена свойств компанента совпадают с именами свойств объекта можно использовать стпред оператор */}
        {/* <TodoListItem label={item.label} important={item.important} /> */}
        {/* вместо верхней записи используем нижнюю */}
        <TodoListItem {...item} />
      </li>
    );
  });
  return <ul>{elements}</ul>;
};

export default TodoList;
