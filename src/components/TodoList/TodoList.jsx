import { Grid, GridItem, TodoListItem } from 'components';

export const TodoList = ({ todos, delTodo }) => {
  console.log(todos);
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem
            text={todo.text}
            id={todo.id}
            count={index + 1}
            delTodo={delTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
