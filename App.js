import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style={"auto"} />
      <div className={styles.haut}>
        <p>test</p>
      </div>
      <div className={styles.bas}>
        <p>test</p>
      </div>
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
  haut: {
    backgroundColor: 'red',
  },
  bas: {
    
  },
});
