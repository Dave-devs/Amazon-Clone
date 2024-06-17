import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

interface Props {
    text: String;
    onPress: () => void;
}

export default function BigOutlineBtn({text, onPress}: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={{fontFamily: 'nunitoSB', fontSize: 15}}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 6
    }
})