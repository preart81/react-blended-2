import { Text } from 'components';
import { RiDeleteBinLine } from 'react-icons/ri';
import style from './TodoListItem.module.css';


export const TodoListItem = ({ text, count, delTodo, id }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{count}
      </Text>
      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => delTodo(id)}
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
