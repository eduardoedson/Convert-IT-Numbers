import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './src/pages/Index.js';

const Stack = createStackNavigator();

const App = () => {
	return(
        <NavigationContainer>
			<Stack.Navigator initialRouteName='Menu'>
				<Stack.Screen 
					name='Menu'
					component={Index} 
					options={{
						title: 'Converter',
						headerStyle: { backgroundColor: '#A50000' },
						headerTintColor: 'white',
						headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center' },
						headerBackTitle: ' ',
					}}
				/>
			</Stack.Navigator>
        </NavigationContainer>
	)
}

export default App;
