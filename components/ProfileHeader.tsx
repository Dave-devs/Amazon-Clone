import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons';


export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Image source={require('@/assets/images/amazon-black.png')}  style={styles.logo} />

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
          <Pressable>
            <Ionicons name="settings-outline" size={22} color="black" />
          </Pressable>

          <Pressable>
            <Ionicons name="notifications-outline" size={22} color="black" />
          </Pressable>

          <Pressable>
            <Ionicons name="search" size={22} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent1,
    width: 'auto',
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  logo: {
    height: 40,
    width: 75
  }
})