import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { Entypo } from '@expo/vector-icons';

const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqIxOP92AdIoHEPTEgWWTvCXciOzqb3eajPGNWg9AnTuEgyLsTilCOC8QasA-vyKV9MHw&usqp=CAU';

export default function NameView() {
  return (
    <View style={styles.nameView}>
        {/* Greeting View */}
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            {/* Profile Pic */}
              <Image source={{ uri: url }} style={{ height: 23, width: 23, borderRadius: 99, borderWidth: 1.8, borderColor: Colors.white }} />
            {/* Name */}
            <Text style={{ fontFamily: 'nunitoSB' }}>Hello, Oreoluwa</Text>
            <Entypo name="chevron-small-down" size={18} color="black" />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            {/* Map */}
            <Image source={require('@/assets/images/america-flag.png')} style={{ height: 18, width: 25, borderWidth: 1.5, borderColor: Colors.white}} />
            <Text style={{ fontFamily: 'nunitoB' }}>EN</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  nameView: {
    backgroundColor: Colors.accent1,
    height: 30,
    paddingHorizontal: 10,
    paddingBottom: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profilePic: {
    height: 25,
    width: 25,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: Colors.white,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
})