import React, { Fragment } from "react";
import PhoneNumberScreen from "./PhoneNumberScreen";
import { createStackNavigator } from "react-navigation";

const StackNavigator5c15b84d = createStackNavigator({
  PhoneNumberScreen: {
    screen: PhoneNumberScreen,
    navigationOptions: ({ navigation }) => ({
      title: "PhoneNumberScreen"
    })
  }
});

class App extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <StackNavigator5c15b84d />
      </Fragment>
    );
  }
}

App.defaultProps = {};

export default App;