import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

interface Props {
  logoString: ImageSourcePropType;
  headerText: string;
}

export default function HeaderLogo({ logoString, headerText }: Props) {
  return (
    <View style={styles.logoContainer}>
        <Image source={logoString} style={{ width: 200, height: 100 }} />
        <Text style={{ fontFamily: 'nunitoB', fontSize: 16, fontWeight: 'bold' }}>{headerText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        marginTop: 15
    }
})