import React, { Fragment, Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scf51b121: {
    fontSize: 40
  },
  smallerFont: {
    fontSize: 20
  },
  sbf9e8383: {
    alignItems: `center`,
    backgroundColor: `rgba(255, 255, 255, 1)`,
    justifyContent: `center`,
    flex: 1
  }
});

class DashboardScreen extends Component {


  constructor(props) {
    super(props);
    
  }

  componentDidMount(){
    //this.props.navigation.navigate('PhoneNumberScreen');
    console.log("dashboardscreen");
  }

  render() {
    return (
      <Fragment>
        <View style={styles.sbf9e8383}>
          <Text style={styles.scf51b121}>{`Hello, world!`}</Text>
          <Text style={styles.smallerFont}>Apps Version 2.0</Text>
          <Text style={styles.smallerFont}>Updated via code push cli</Text>
        </View>
      </Fragment>
    );
  }
}

DashboardScreen.defaultProps = {};

export default DashboardScreen;

export { styles };
