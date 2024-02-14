import css from './Statistics.module.css';
import Notification from 'components/Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css['statistic-block']}>
      <span className={css.header}>Statistics</span>
      {total > 0 ? (
        <ul className={css['stat-list']}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage} %</li>
        </ul>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
};

export default Statistics;
