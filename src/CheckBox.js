import React, { Component } from 'react';

const CheckBoxContext = React.createContext({ checkedStatus: false, toggleCheckBox: () => {} });

class CheckBox extends Component {
  componentDidMount() {
    console.log('state is ', this.state);
  }
  toggleCheckBox = () => {
    this.setState(currState => ({
      checked: !currState.checked
    }));
  };

  state = {
    checked: false,
    toggleCheckBox: this.toggleCheckBox
  };
  static CheckBoxButton = () => {
    return (
      <CheckBoxContext.Consumer>
        {cbContext => (
          <div>
            <input type="checkbox" value="test checkbox" onClick={cbContext.toggleCheckBox} />
            <label>Check the box</label>
          </div>
        )}
      </CheckBoxContext.Consumer>
    );
  };

  static Checked = ({ children }) => (
    <CheckBoxContext.Consumer>{cbContext => (cbContext.checkedStatus ? children : null)}</CheckBoxContext.Consumer>
  );

  static UnChecked = ({ children }) => (
    <CheckBoxContext.Consumer>{cbContext => (cbContext.checkedStatus ? null : children)}</CheckBoxContext.Consumer>
  );

  render() {
    return (
      <CheckBoxContext.Provider
        value={{ checkedStatus: this.state.checked, toggleCheckBox: this.state.toggleCheckBox }}
      >
        {this.props.children}
      </CheckBoxContext.Provider>
    );
  }
}

export default CheckBox;
