import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2}/>
      <View style={styles.box3}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 35
  },
  box1: {
    flex: 16,
    backgroundColor: 'red'
  },
  box2: {
    flex: 34,
    backgroundColor: 'yellow'
  },
  box3: {
    flex: 50,
    backgroundColor: 'green'
  }
  
  /**
   * total flex 6
   * box 1 = 1/6 => 16%
   * box 2 = 2/6 => 33%
   * box 3 = 3/6 => 50%
   * */ 
});
