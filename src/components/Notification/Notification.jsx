import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <span className={css.message}>{message}</span>;
};

export default Notification;
