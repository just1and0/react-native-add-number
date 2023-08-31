import { StyleSheet, Text, View } from 'react-native';

const SumNumber = ({fNum, lNum}) => {
  return (
    <View style={styles.container}>
      <Text> Sum is:{fNum+lNum}</Text> 
    </View>
  );
}
export {SumNumber}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});