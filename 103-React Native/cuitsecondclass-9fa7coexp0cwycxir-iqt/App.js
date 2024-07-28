import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!aaaaaaaa?</Text>
      <StatusBar style="auto" />
      {/* <Login></Login> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
