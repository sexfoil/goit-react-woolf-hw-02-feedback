import Button from 'components/Button/Button';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css['buttons-group']}>
      {options.map(option => (
        <Button
          key={option}
          name={option}
          onLeaveFeedback={() => onLeaveFeedback(option)}
        />
      ))}
    </div>
  );
};

export default FeedbackOptions;
