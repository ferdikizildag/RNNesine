import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MatchList from 'screens/matchList';
import MatchDetail from 'screens/matchDetail';
import Basket from 'screens/basket';
import ContextProvider, {AppContext} from 'context';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="List" component={MatchList} />
    <Stack.Screen name="Detail" component={MatchDetail} />
  </Stack.Navigator>
);

const App = () => {
  const renderTotalRatio = (basket) => {
    let total = 1;
    basket.get.map((item) => {
      total *= Number(item.ratio);
    });
    return total.toFixed(2);
  };
  return (
    <ContextProvider>
      <NavigationContainer>
        <AppContext.Consumer>
          {({basket}) => (
            <Tab.Navigator tabBarOptions={{labelStyle: {fontSize: 14}}}>
              <Tab.Screen
                name="Home"
                component={StackNavigator}
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: () => (
                    <Image
                      style={{width: 20, height: 20}}
                      source={{
                        uri: 'http://localhost:3000/images/square.png',
                      }}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Basket"
                component={Basket}
                options={{
                  tabBarLabel: 'Oran',
                  tabBarIcon: ({color, size}) => (
                    <View style={{alignItems: 'center'}}>
                      <Text>{basket.get.length} Maç</Text>
                      <Text>
                        {basket.get.length > 0
                          ? renderTotalRatio(basket)
                          : '0.00'}
                      </Text>
                    </View>
                  ),
                }}
              />
            </Tab.Navigator>
          )}
        </AppContext.Consumer>
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
