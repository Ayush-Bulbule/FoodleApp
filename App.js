import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import OrderPrepareScreen from './screens/OrderPrepareScreen';
import OrderDeliveryScreen from './screens/OrderDeliveryScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" options={{ presentation: 'modal' }} component={CartScreen} />
        <Stack.Screen name="OrderPrepare" component={OrderPrepareScreen} />
        <Stack.Screen name="OrderDeliver" component={OrderDeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

