import React from 'react'
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, FONTS } from '../constants';

//Components for Screen
import { Home, Search, Bookmarks } from '../screens'

const Tab = createBottomTabNavigator();

function Bottomtabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }:any) => ({
      tabBarHideOnKeyboard:true,
      tabBarIcon: ({ focused, color, size }) => {
        return (
          <>
          <Icon
            name={route.name === 'Search' ? 'magnify' : route.name.toLowerCase()} 
            color={color}
            size={focused ? 30 : size}
            style={{
              alignSelf:'center'
            }}
          />
          <Text style={{
            fontFamily: FONTS.bold,
            fontSize: 10,
            textAlign: 'center',
            color: COLORS.white
          }}>{route.name}</Text>
          </>
        );
      },
      tabBarActiveTintColor: COLORS.green,
      tabBarShowLabel: false,
      headerShown:false,
      tabBarStyle:{
        backgroundColor: COLORS.black,
        borderTopWidth: 0,
        height: 90
      }
    })}
    >
      {/* Tab Screens */}
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Bookmark" component={Bookmarks} />

    </Tab.Navigator>
  );
}

export default Bottomtabs;

