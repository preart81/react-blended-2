import { Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([...todos, { text, id: nanoid() }]);
  };

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
