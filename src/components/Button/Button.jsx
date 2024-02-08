import { Component } from 'react';
import css from './Button.module.css';

class Button extends Component {
  handleOnClick = () => {
    this.props.updateFeedback(this.props.name);
  };
  render() {
    const { name } = this.props;
    return (
      <button className={css.btn} type="button" onClick={this.handleOnClick}>
        {name}
      </button>
    );
  }
}

export default Button;
