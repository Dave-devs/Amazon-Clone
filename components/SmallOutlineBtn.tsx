import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

interface Props {
    text: String,
    onTap: () => void;
}

export default function SmallOutlineBtn({text, onTap}: Props) {
  return (
    <Pressable style={styles.container} onPress={onTap}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f9fa',
        width: 160,
        height: 45,
        borderRadius: 80,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.grey,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'nunitoSB'
    }
})