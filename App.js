import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <AppNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
