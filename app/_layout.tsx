import React, { useEffect } from "react";
import { SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserProvider } from "@/Utils/common/userContext";
import { Provider } from "react-redux";
import { store } from "@/store";
import { ModalPortal } from 'react-native-modals';

export { ErrorBoundary } from "expo-router";
// export const unstable_settings = { initialRouteName: '(tabs)'};
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    nunito: require("../assets/fonts/Nunito-Regular.ttf"),
    nunitoM: require("../assets/fonts/Nunito-Medium.ttf"),
    nunitoSB: require("../assets/fonts/Nunito-SemiBold.ttf"),
    nunitoB: require("../assets/fonts/Nunito-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={store}>
      <UserProvider>
        <RootLayoutNav />
        <ModalPortal />
      </UserProvider>
    </Provider>
  );
}

function RootLayoutNav() {
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("x-auth-token");
        const inAuthGroup = segments[0] === "(tabs)";

        if (token && !inAuthGroup) {
          router.replace("(tabs)/home");
        } else {
          // router.replace("(auth)/register");
          router.replace("/");
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkToken();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(admintabs)" />
      <Stack.Screen name="(auth)/login" />
      <Stack.Screen name="(auth)/register" />
      <Stack.Screen name="screens/splash" />
      <Stack.Screen name="screens/dealsDetail" />
    </Stack>
  );
}
