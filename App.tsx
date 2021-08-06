import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import RNBootSplash from "react-native-bootsplash"

export default class App extends React.Component {
  componentDidMount(){
    setTimeout(() => {
      RNBootSplash.hide(); // immediate
    }, 1500);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> This is a Splash Screen React Native Application using TypeScript </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    padding: 15,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  }
});