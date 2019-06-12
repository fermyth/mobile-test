import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scf51b121: {
    fontSize: 40
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
        </View>
      </Fragment>
    );
  }
}

App.defaultProps = {};

export default App;

export { styles };
