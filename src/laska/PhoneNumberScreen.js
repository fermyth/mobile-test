import React, { Fragment } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  s1d56b366: {
    textAlign: `center`
  },
  s98f90be2: {
    marginBottom: 20,
    borderWidth: 1,
    margin: 5
  },
  s8ffc89d7: {
    textAlign: `center`
  },
  s702061a6: {
    backgroundColor: `rgba(226, 107, 107, 1)`,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    justifyContent: `center`
  },
  s71a5410f: {
    justifyContent: `center`,
    flex: 1
  }
});

class PhoneNumberScreen extends React.PureComponent {

  componentDidMount(){
    console.log("FERMYTH PhoneNumberScreen");
  }

  render() {
    return (
      <Fragment>
        <View style={styles.s71a5410f}>
          <Text style={styles.s1d56b366}>{`Phone Number`}</Text>
          <TextInput style={styles.s98f90be2} />
          <TouchableOpacity onPress={() => {}} style={styles.s702061a6}>
            <Text style={styles.s8ffc89d7}>{`Submit`}</Text>
          </TouchableOpacity>
        </View>
      </Fragment>
    );
  }
}

PhoneNumberScreen.defaultProps = {};

export default PhoneNumberScreen;

export { styles };
