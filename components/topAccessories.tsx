import { View, Text, StyleSheet, Pressable, FlatList, Image } from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Styles";
import { TopPCAccessories } from "../Utils/data/topPCAccessories";

export default function TopAccessories() {
  return (
    <View style={styles.container}>
      <Text style={defaultStyles.headerText}>
        Score the top PCs & Accessories
      </Text>

      <FlatList
        data={TopPCAccessories}
        renderItem={({ item }) => (
          <View style={styles.itemBg}>
            <Image source={{ uri: item.image }} style={{ height: 150, width: 150, resizeMode: 'contain' }} />
            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />

      <Pressable>
        <Text style={[defaultStyles.seeMore, {paddingTop: 15}]}>See more</Text>
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 1,
  },
  itemBg: {
    width: 150,
    margin: 10,
    marginBottom: 5
  },
  itemTitle: {
    fontFamily: 'nunitoM',
    fontSize: 14,
  }
});
