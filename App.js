import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import TotalAmount from './screens/TotalAmount';
import ScanScreen from './screens/ScanScreen';


export default class App extends React.Component {
  render(){
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
          
          <AppContainer/>
      </View>
      </SafeAreaProvider>
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  ScanScreen:{screen:ScanScreen},
  TotalAmount:{screen:TotalAmount}
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE5CC',
  },
});
