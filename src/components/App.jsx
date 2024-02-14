import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prev => {
      return { [name]: prev[name] + 1 };
    });
  };

  getTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  getPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.getTotalFeedback());
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
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.getTotalFeedback()}
            positivePercentage={this.getPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;
