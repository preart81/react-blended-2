import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import toast from 'react-hot-toast';

export const Form = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.search;
    if (!value) {
      toast.error('Please enter a search query');
      return;
    }
    onSubmit(value);
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
        autoFocus
      />
    </form>
  );
};
