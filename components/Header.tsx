import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
    onSearch: () => void;
    onCameraClick: () => void;
    onMicClick: () => void
    
}

export default function Header({onSearch, onCameraClick, onMicClick}: Props) {
  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
            <Pressable onPress={onSearch}>
                <Ionicons name="search" size={22} color={Colors.black} />
            </Pressable>
              <TextInput
                onPress={onSearch}
                placeholder='Search Amazon'
                style={styles.search}
              />
              <Pressable onPress={onCameraClick}>
                <MaterialCommunityIcons name="camera-iris" size={24} color={Colors.grey} />
              </Pressable>

              <Pressable onPress={onMicClick}>
                <MaterialIcons name="mic-none" size={24} color={Colors.grey} />
              </Pressable>
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        backgroundColor: Colors.white,
        marginTop: 1,
        marginBottom: 8,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 10,
        paddingVertical: 2,
        gap: 12,
        elevation: 5
    },
    search: {
        width: 218,
        fontFamily: 'nunitoM',
        fontSize: 16
    }
})