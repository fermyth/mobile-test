import React, { Fragment } from "react";
import PhoneNumberScreen from "./PhoneNumberScreen";
import DashboardScreen from "./DashboardScreen";
import firebase from 'react-native-firebase';
import { createStackNavigator } from "react-navigation";
import codePush from "react-native-code-push";


const StackNavigator5c15b84d = createStackNavigator({
  PhoneNumberScreen: {
    screen: PhoneNumberScreen,
      navigationOptions: ({ navigation }) => ({
        title: "PhoneNumberScreen"
      })
  },
  DashboardScreen:{
    screen: DashboardScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Dashboard Screen"
    })
  }
},
{
  initialRouteName: 'PhoneNumberScreen',
});


const androidConfig = {
  clientId: "610659153117-5mc54t7522sj1kpiei5ut5v1uc0lb96f.apps.googleusercontent.com",
  appId: "1:610659153117:android:34963702dc474682",
  apiKey: "AIzaSyATnM0gh0mOGdDnlosGFGxPMg0P8vn7AVI",
  databaseURL: "https://testproject-43bc6.firebaseio.com",
  messagingSenderId: "x",
  storageBucket: "testproject-43bc6.appspot.com",
  projectId: "testproject-43bc6",

  // enable persistence by adding the below flag
  persistence: true,
};

const kittensApp = firebase.initializeApp(
  // use platform specific firebase config
  androidConfig,
  // name of this app
  'kittens',
);




class App extends React.PureComponent {
    
  componentDidMount() {
    
    // dynamically created apps aren't available immediately due to the
  // asynchronous nature of react native bridging, therefore you must
  // wait for an `onReady` state before calling any modules/methods
  // otherwise you will most likely run into `app not initialized` exceptions
  kittensApp.onReady().then((app) => {
    // --- ready ---
    console.log("FERMYTH", "DONE");
    // use `app` arg, kittensApp var or `app('kittens')` to access modules
    // and their methods. e.g:
    
    firebase.app('kittens').auth().signInAnonymously().then((user) => {
        console.log('FERMYTH kittensApp user ->', user.toJSON());
        console.log("FERMYTH2", "DONE");
    });
    console.log("FERMYTH3", "DONE");
  });
}

  render() {
    return (
      <Fragment>
        <StackNavigator5c15b84d />
      </Fragment>
    );
  }
}

App.defaultProps = {};

// App = codePush(App);

export default App;