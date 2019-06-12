import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "react-native";

import codePush from "react-native-code-push";

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

class App extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <View style={styles.sbf9e8383}>
          <Text style={styles.scf51b121}>{`Hello, world!`}</Text>
          <Text style={styles.smallerFont}>Apps Version 1.3 with code push</Text>
        </View>
      </Fragment>
    );
  }
}

App.defaultProps = {};

App = codePush(App);

export default App;

export { styles };
