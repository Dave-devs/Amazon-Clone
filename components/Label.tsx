import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles';

interface Props {
  title: String;
  subTitle?: String;
  onTap?: () => void;
}

export default function Label({title, subTitle, onTap}: Props) {
  return (
    <View style={defaultStyles.seMoreContainer}>
        <View>
        <Text style={defaultStyles.headerText}>{title}</Text>
        </View>

      {subTitle && <Pressable onPress={onTap}><Text style={defaultStyles.seeMore}>See all</Text></Pressable>}
    </View>
  )
}