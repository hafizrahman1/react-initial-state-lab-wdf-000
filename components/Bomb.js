const React = require('react');

class Bomb extends React.Component {
  constructor(props) {
    super();
    
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render() {
    const message = this.props.initialCount === 0 ? 'Boom!' : `${this.props.initialCount} seconds left before I go boom!`;
    return(
      <div>{message}</div>
    );
  }
}

module.exports = Bomb;
