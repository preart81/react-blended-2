import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('savedTodos')) || [],
  );
  useEffect(
    () => localStorage.setItem('savedTodos', JSON.stringify(todos)),
    [todos],
  );

  const addTodo = text => {
    setTodos([...todos, { text, id: nanoid() }]);
  };

  // console.log(todos);
  const delTodo = id => {
    setTodos(todos.filter(item => item.id !== id));
  };

  return (
    <>
      <Form onSubmit={addTodo} />
      <TodoList todos={todos} delTodo={delTodo} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};
