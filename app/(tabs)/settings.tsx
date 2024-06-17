import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { defaultStyles } from '../../constants/Styles';
import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Header from '@/components/Header';
import Colors from '@/constants/Colors';

export default function Page() {
  const router = useRouter();
  return (
    <View style={defaultStyles.container}>
      {/* App Bar */}
      <Header
        onSearch={() => router.push("/screens/search")}
        onCameraClick={() => console.log("Search by Image")}
        onMicClick={() => console.log("Serach By Speech")}
      />
      <View style={styles.subContainer}>
        <Text style={styles.headerText}>Shop by category</Text>

        <View style={styles.box}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={styles.boxText}>Shop by Department</Text>
            <Entypo name="chevron-small-down" size={24} color={Colors.black} />
          </View>
        </View>

        <View style={styles.box}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.boxText}>Settings</Text>
            <Entypo name="chevron-small-down" size={24} color={Colors.black} />
          </View>
        </View>

        <View style={styles.box}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.boxText}>Customer Service</Text>
            <Entypo name="chevron-small-down" size={24} color={Colors.black} />
          </View>
        </View>

      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  subContainer: {
    marginHorizontal: 15,
    marginTop: 15,
    gap: 14,
  },
  headerText: {
    fontFamily: 'nunitoB',
    fontSize: 20
  },
  box: {
    borderWidth: 1.1,
    padding: 10,
    borderRadius: 6,
    elevation: 2.1
  },
  boxText: {
    fontFamily: 'nunitoSB',
    fontSize: 15
  }
})