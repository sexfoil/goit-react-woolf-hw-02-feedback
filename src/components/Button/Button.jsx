import css from './Button.module.css';

const Button = ({ name, onLeaveFeedback }) => {
  return (
    <button className={css.btn} type="button" onClick={onLeaveFeedback}>
      {name}
    </button>
  );
};

export default Button;
