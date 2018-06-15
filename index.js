import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import StationList from './src/components/StationList';


// Create a component
const App = () => (
	<View style= {{ flex: 1 }}>
	  <Header headerText={' Volta Stations'} />
	  <StationList />
	</View>
);




// Render it to the device
AppRegistry.registerComponent('VoltaChallenge', () => App);