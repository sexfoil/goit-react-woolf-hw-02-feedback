import css from './Button.module.css';

const Button = ({ name, onLeaveFeedback }) => {
  const handleOnClick = () => {
    onLeaveFeedback(name);
  };
  return (
    <button className={css.btn} type="button" onClick={handleOnClick}>
      {name}
    </button>
  );
};

export default Button;
