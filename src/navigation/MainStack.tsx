import * as React from 'react';
import {Text, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottomtabs from './TabBarNavigation';

/* Components for Screen */
import { Artist, PlayListsPage, Settings } from '../screens';
import { useRoute } from '@react-navigation/core';

const RootStack = createNativeStackNavigator();


function MainStack() {
  return (
      <RootStack.Navigator
      screenOptions={{
          headerShown: false
      }}
      >
        {/* Stack Screens */}
        <RootStack.Screen name="Tabs" component={Bottomtabs} />
        <RootStack.Screen name="Artist" component={Artist} />
        <RootStack.Screen name="Playlist" component={PlayListsPage} />
        <RootStack.Screen name="Settings" component={Settings} />
      </RootStack.Navigator>
  );
}

export default MainStack;
