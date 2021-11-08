import React from "react";
import { View, StatusBar } from "react-native";
import { navigationRef } from "./navigation/NavigationReference";
import { NavigationContainer } from '@react-navigation/native';
import MainStack from "./navigation/MainStack";
import 'react-native-gesture-handler';
import { COLORS } from "./constants";
/* REDUX */ 
// import { Provider } from "react-redux";
// import store from "./redux/storeConfig";

const App = () => {

    return (
        <>
        <StatusBar
          barStyle={"light-content"}
          translucent={true}
          backgroundColor={COLORS.transparentBlack3}
        />
        <View style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
          <NavigationContainer ref={navigationRef}>
            {/* <Provider store={store}> */}
              <MainStack />
            {/* </Provider> */}
          </NavigationContainer>
          </View>
     
     </>
    )
}

export default App