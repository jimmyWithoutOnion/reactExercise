import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);

    //init state after super
    this.state = {lat: null, errorMessage: ''};

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //we call setstate to set state
        this.setState({lat: position.coords.latitude})
      },
        err => {
        this.setState({errorMessage: err.message})
      }
    );
  }

  //
  // componentDidMount() {
  //
  // }

  //
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //
  // }

  //
  // componentWillUnmount() {
  //
  // }


  // react says we have to define render!!
  render() {

    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }
    return <div>loading~</div>

  }
}


ReactDOM.render(<App />, document.querySelector('#root'));