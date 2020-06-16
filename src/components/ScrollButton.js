import React from 'react';
import styled from 'styled-components';

const Button = styled.a``;

class ScrollButton extends React.Component {
  constructor() {
    super();
    this.state = {
      intervalId: 0,
    };
  }

  scrollStep = () => {
    if (global.window) {
      if (global.window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
      }
      global.window.scroll(
        0,
        global.window.pageYOffset - this.props.scrollStepInPx,
      );
    }
  };

  scrollToTop = () => {
    const intervalId = setInterval(this.scrollStep, this.props.delayInMs);
    this.setState({ intervalId });
  };

  render() {
    return (
      <Button title="Back to top" className="" onClick={this.scrollToTop}>
        <img src="/images/icon/home.jpg" alt="#" />
      </Button>
    );
  }
}

export default ScrollButton;
