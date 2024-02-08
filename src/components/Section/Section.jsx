import { Component } from 'react';
import css from './Section.module.css';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';

class Section extends Component {
  onLeaveFeedback = name => {
    this.props.updateFeedbackState(name);
  };
  render() {
    const { title, state } = this.props;
    return (
      <div className={css.container}>
        <span className={css.header}>{title}</span>
        <FeedbackOptions
          options={{ good: 'good', neutral: 'neutral', bad: 'bad' }}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={state.total}
          positivePercentage={state.positivePercentage}
        />
      </div>
    );
  }
}

export default Section;
