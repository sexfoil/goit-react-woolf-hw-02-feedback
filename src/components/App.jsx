import { Component } from 'react';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  updateFeedbackState = name => {
    this.setState(prev => {
      return { [name]: prev[name] + 1 };
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
      return { positivePercentage: Math.round((prev.good * 100) / prev.total) };
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
        <Section
          title={'Please leave feedback'}
          state={this.state}
          updateFeedbackState={this.updateFeedbackState}
        />
      </div>
    );
  }
}

export default App;
