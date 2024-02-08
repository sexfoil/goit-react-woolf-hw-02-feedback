import { Component } from 'react';
import Button from './Button/Button';
import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercetage: 0,
  };

  updateFeedback = props => {
    this.setState(prev => {
      return { [props.name]: prev[props.name] + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback() {
    this.setState(prev => {
      return { total: prev.good + prev.neutral + prev.bad };
    });
  }

  countPositiveFeedbackPercentage() {
    this.setState(prev => {
      return { positivePercetage: Math.round((prev.good * 100) / prev.total) };
    });
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div className={css.container}>
          <span className={css.header}>Please leave feedback</span>
          <div className={css['buttons-group']}>
            <Button name={'good'} updateFeedback={this.updateFeedback} />
            <Button name={'neutral'} updateFeedback={this.updateFeedback} />
            <Button name={'bad'} updateFeedback={this.updateFeedback} />
          </div>
          <div className={css['statistic-block']}>
            <span className={css.header}>Statistics</span>
            <ul className={css['stat-list']}>
              <li>Good: {this.state.good}</li>
              <li>Neutral: {this.state.neutral}</li>
              <li>Bad: {this.state.bad}</li>
              <li>Total: {this.state.total}</li>
              <li>Positive feedback: {this.state.positivePercetage} %</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
