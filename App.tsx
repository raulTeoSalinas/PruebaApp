import { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import ThemeProvider from "./src/theme/ThemeProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  TrackFlightScreen
} from "./src/screens";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

SplashScreen.preventAutoHideAsync();

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
      <GestureHandlerRootView>


        <StatusBar style="auto" />
        <TrackFlightScreen />

      </GestureHandlerRootView>

    </ThemeProvider >
  );
}

export default App;
