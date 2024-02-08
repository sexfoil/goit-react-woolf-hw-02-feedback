import { Component } from 'react';
import Button from 'components/Button/Button';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  updateFeedback = name => {
    this.props.onLeaveFeedback(name);
  };

  render() {
    const { options } = this.props;
    return (
      <div className={css['buttons-group']}>
        <Button name={options['good']} updateFeedback={this.updateFeedback} />
        <Button name={options.neutral} updateFeedback={this.updateFeedback} />
        <Button name={options.bad} updateFeedback={this.updateFeedback} />
      </div>
    );
  }
}

export default FeedbackOptions;
