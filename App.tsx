import React from "react";
import { StyleSheet, View } from "react-native";
import Model from "./src/model/model.json";
import pureComponent from "./src/helper/pureComponent";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {pureComponent({ componentContext: Model.render })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
