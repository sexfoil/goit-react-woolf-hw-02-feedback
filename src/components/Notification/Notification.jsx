import { Component } from 'react';
import css from './Notification.module.css';

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <span className={css.message}>{message}</span>;
  }
}

export default Notification;
