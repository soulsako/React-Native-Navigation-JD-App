import React, { Component } from 'react';
import { createAppContainer, createMaterialTopTabNavigator  } from 'react-navigation';
import MensScreen from './src/components/Screens/MensScreen';
import WomensScreen from './src/components/Screens/WomensScreen';
import KidsScreen from './src/components/Screens/KidsScreen';
import Store from './src/store/configureStore';
import { Provider } from 'react-redux';

const brandsNavigator = createMaterialTopTabNavigator({

  Mens: MensScreen, 
  Womens: WomensScreen, 
  Kids: KidsScreen

}, {

  navigationOptions: ({ navigation }) => ({
    //define the icon for each tab here...
   }),
     tabBarOptions: {
     initialRouteName: 'MensScreen',
     activeTintColor: '#fff',
     inactiveTintColor: '#ddd',
       style: {
         backgroundColor: '#4d535e',
         paddingTop: 20, 
    }
  }
});

const AppContainer = createAppContainer(brandsNavigator)

export default class App extends Component {

  render(){
    return (
      <Provider store={Store}>
         <AppContainer />
      </Provider>
      );
  }
}
