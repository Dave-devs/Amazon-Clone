import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import HeaderLogo from "@/components/HeaderLogo";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import axios, { AxiosResponse, AxiosError } from "axios";
import { handleError } from "@/Utils/common/handleError";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@/Utils/baseUrl";

interface User {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function userToJson(user: User) {
    return JSON.stringify(user);
  }
  const headers = { "Content-Type": "application/json; charset=UTF-8" };
  const user = { email, password };
  const body = userToJson(user);
  const handleLogin = () => {
    setLoading(true);
    axios
      .post(`${BASE_URL}/api/auth/login`, body, { headers })
      .then((response: AxiosResponse) => {
        // Save Token to Device
        const token = response.data.token;
        AsyncStorage.setItem("x-auth-token", token);
        console.log(token);
        router.replace("(tabs)");
      })
      .catch((error: AxiosError) => {
        console.error(error);
        Alert.alert(
          "Login Error",
          "An error occured while logging in. Please try again."
        );
        console.error(error);
        handleError(error);
      })
      .finally(() => setLoading(false));
  };

  // const login = () => {
  //   setLoading(true);
  //   const user = {
  //     email: email,
  //     password: password,
  //   };

  //   axios.post(`${BASE_URL}/api/auth/login`, user)
  //   .then((response) => {
  //     console.log(response);
  //     const token = response.data.token;
  //     AsyncStorage.setItem('x-auth-token', token);
  //     router.replace('(tabs)');
  //   })
  //   .catch((error) => {
  //     Alert.alert(
  //       'Login Error',
  //       'An error occured while logging in. Please try again.'
  //     );
  //   })
  //   .finally(() => setLoading(false));
  // }

  return (
    <SafeAreaView style={defaultStyles.container}>
      {/* Logo And Text */}
      <HeaderLogo
        logoString={require("@/assets/images/amazon.png")}
        headerText={"Login To Your Account And Continue"}
      />

      {/* Login Form */}
      <View style={defaultStyles.formContainer}>
        <View style={defaultStyles.form}>
          <Ionicons name="mail" size={24} color="black" />
          <TextInput
            value={email}
            onChangeText={(value) => setEmail(value)}
            placeholder="Enter your email"
            style={{ flex: 1, fontFamily: "nunito", color: Colors.black }}
            keyboardType="email-address"
          />
        </View>

        <View style={defaultStyles.form}>
          <Ionicons name="lock-closed" size={24} color="black" />
          <TextInput
            value={password}
            onChangeText={(value) => setPassword(value)}
            placeholder="Enter your password"
            style={{ flex: 1, fontFamily: "nunito", color: Colors.black }}
            secureTextEntry
          />
        </View>
      </View>

      {/* Forget Password Row */}
      <View style={defaultStyles.forgetPassword}>
        <Text style={{ fontFamily: "nunitoB", fontWeight: "600" }}>
          Keep me signed in
        </Text>

        <TouchableOpacity>
          <Text
            style={{ fontFamily: "nunitoB", fontWeight: "600", color: "blue" }}
          >
            Forget Password
          </Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <View>
        <TouchableOpacity style={defaultStyles.largeBtn} onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator size={"large"} color={Colors.white} />
          ) : (
            <Text
              style={{
                fontFamily: "nunitoB",
                fontSize: 16,
                color: Colors.white,
              }}
            >
              Login
            </Text>
          )}
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 15,
            gap: 15,
          }}
        >
          <Text style={{ fontFamily: "nunito", fontWeight: "600" }}>
            Don't have an account?
          </Text>

          <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
            <Text
              style={{
                fontFamily: "nunitoB",
                fontWeight: "600",
                color: Colors.primary,
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
