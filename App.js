import React, { useReducer } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import Context, { reducer, initialState } from './src/context/Context';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <AppNavigation />
      </View>
    </Context.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
