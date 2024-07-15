import { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import ThemeProvider from "./src/theme/ThemeProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  TrackFlightScreen,
  FlightsListingScreen
} from "./src/screens";
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Airport } from "./src/models/Airport";


SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
  FlightsListingScreen: {
    departureDate: string | null;
    flightNumber: string | null,
    originAirport: Airport | null,
    destinationAirport: Airport | null
  };
  TrackFlightScreen: undefined
};


const Stack = createNativeStackNavigator<RootStackParamList>();


const App = () => {

  const [loaded, error] = useFonts({
    'Garnett-Regular': require('./src/assets/fonts/Garnett-Regular.ttf'),
    'Garnett-Semibold': require('./src/assets/fonts/Garnett-Semibold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <Provider store={store}>
        <GestureHandlerRootView>


          <StatusBar style="auto" />
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="TrackFlightScreen" component={TrackFlightScreen} />
              <Stack.Screen name="FlightsListingScreen" component={FlightsListingScreen} />

            </Stack.Navigator>
          </NavigationContainer>

        </GestureHandlerRootView>
      </Provider>

    </ThemeProvider >
  );
}

export default App;
