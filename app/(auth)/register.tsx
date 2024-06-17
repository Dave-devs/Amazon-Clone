import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import HeaderLogo from '@/components/HeaderLogo';
import { SafeAreaView, } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useRouter } from 'expo-router';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { handleError } from '@/Utils/common/handleError';
import { BASE_URL } from '@/Utils/baseUrl';

interface User {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function userToJson(user: User) {
    return JSON.stringify(user);
  }
  const headers = { 'Content-Type': 'application/json; charset=UTF-8' };
  const user = { name, email, password };
  const body = userToJson(user);

  const handleRegister = () => {
    setLoading(true);

    axios.post(`${BASE_URL}/api/auth/register`, body, { headers })
    .then((response: AxiosResponse) => {
      Alert.alert(
        'Registration Success',
        'Your account has been created successfully, Please login.'
      );
      console.log(response.data);
      setName(''); setEmail(''); setPassword('')
    })
    .catch((error: AxiosError) => {
      Alert.alert(
        'Registration Error',
        'An error occured while registering, Please try again.'
      );
      console.error(error);
      handleError(error);
    })
    .finally(() => setLoading(false));
  }

  // const login = () => {
  //   setLoading(true);

  //   const user = {
  //     name: name,
  //     email: email,
  //     password: password
  //   };

  //   // Send a post request
  //   axios.post(`${BASE_URL}/api/auth/register`, user)
  //   .then((response) => {
  //     console.log(response);
  //     Alert.alert(
  //       'Registration Success',
  //       'Your account has been created successfully, Please login.'
  //     );
  //     setName(''); setEmail(''); setPassword('')
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     Alert.alert(
  //       'Registration Error',
  //       'An error occured while registering, Please try again.'
  //     );
  //   })
  //   .finally(() => setLoading(false));
  // }

  return (
    <SafeAreaView style={defaultStyles.container}>
      {/* Logo And Text */}
      <HeaderLogo logoString={require('@/assets/images/amazon.png')} headerText={'Register To Your Account'} />

      {/* Login Form */}
      <View style={defaultStyles.formContainer}>
        <View style={defaultStyles.form}>
          <FontAwesome name="user" size={24} color="black" />
          <TextInput
            value={name}
            onChangeText={(value) => setName(value)}
            placeholder='john doe'
            style={{ flex: 1, fontFamily: 'nunito', color: Colors.black }}
          />
        </View>

        <View style={defaultStyles.form}>
          <Ionicons name="mail" size={24} color="black" />
          <TextInput
            value={email}
            onChangeText={(value) => setEmail(value)}
            placeholder='johndoe@gmail.com'
            style={{ flex: 1, fontFamily: 'nunito', color: Colors.black }}
            keyboardType="email-address"
          />
        </View>

        <View style={defaultStyles.form}>
          <Ionicons name="lock-closed" size={24} color="black" />
          <TextInput
            value={password}
            onChangeText={(value) => setPassword(value)}
            placeholder='Enter a passwoed'
            style={{ flex: 1, fontFamily: 'nunito', color: Colors.black }}
            secureTextEntry
          />
        </View>
      </View>

      {/* Forget Password Row */}
      <View style={defaultStyles.forgetPassword}>
        <Text style={{ fontFamily: 'nunitoB', fontWeight: '600' }}>Keep me signed in</Text>

        <TouchableOpacity>
          <Text style={{ fontFamily: 'nunitoB', fontWeight: '600', color: 'blue' }}>Forget Password</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <View>
        <TouchableOpacity style={defaultStyles.largeBtn} onPress={handleRegister}>
          {loading ? <ActivityIndicator size={'large'} color={Colors.white} /> : <Text style={{ fontFamily: 'nunitoB', fontSize: 16, color: Colors.white }}>Register</Text> }
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15, gap: 15 }}>
          <Text style={{ fontFamily: 'nunito', fontWeight: '600' }}>Already have an account?</Text>

          <TouchableOpacity onPress={() => router.push('(auth)/login')}>
            <Text style={{ fontFamily: 'nunitoB', fontWeight: '600', color: Colors.primary }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 
})