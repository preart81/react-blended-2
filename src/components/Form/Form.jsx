import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import toast from 'react-hot-toast';

export const Form = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.search;
    if (!value) {
      return toast.error('Please enter search quary');
    }
    onSubmit(e.target.search.value);
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
