import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import { MenuProvider } from 'react-native-popup-menu';

const App = () => {
  return (
    <MenuProvider backHandler={true}>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <AppNavigation />
      </View>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
