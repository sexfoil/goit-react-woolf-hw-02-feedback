import Button from 'components/Button/Button';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css['buttons-group']}>
      <Button name={options.good} onLeaveFeedback={onLeaveFeedback} />
      <Button name={options.neutral} onLeaveFeedback={onLeaveFeedback} />
      <Button name={options.bad} onLeaveFeedback={onLeaveFeedback} />
    </div>
  );
};

export default FeedbackOptions;
