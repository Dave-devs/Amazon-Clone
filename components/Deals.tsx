import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { DealsData } from "@/Utils/data/deals";
import Colors from "@/constants/Colors";
import currencyFormatter from "currency-formatter";
import { defaultStyles } from "@/constants/Styles";
import { useRouter } from "expo-router";

export default function Deals() {
  const router = useRouter();
  const handlePress = ({ item }: any) => {
    router.push({
      pathname: "/screens/dealsDetail",
      params: {
        ...item,
      },
    });
  };
  return (
    <View style={styles.container}>
      <Text style={defaultStyles.headerText}>Deals of the Day</Text>
      <FlatList
        style={styles.sunContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DealsData}
        renderItem={({ item }) => (
          <Pressable style={styles.box} onPress={() => handlePress({ item })}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ padding: 5 }}>
              <Text numberOfLines={2} style={styles.title}>
                {item.title}
              </Text>
              <Text
                style={{ fontFamily: "nunitoSB", fontSize: 15, paddingTop: 5 }}
              >
                {currencyFormatter.format(item.price, { code: "USD" })}
              </Text>
            </View>
            {/* Percent Off */}
            <View style={styles.percentOff}>
              <Text style={styles.percentText}>{item.percrntOff} %</Text>
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
      <Pressable>
        <Text style={[defaultStyles.seeMore, { paddingTop: 15 }]}>
          See more
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  sunContainer: {
    marginVertical: 10,
  },
  box: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.primary,
    marginRight: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
  },
  title: {
    width: 150,
    fontFamily: "nunitoM",
    fontSize: 12,
  },
  percentOff: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: Colors.errorClr,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 99,
    width: 60,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  percentText: {
    color: Colors.white,
    fontFamily: "nunito",
    fontSize: 10,
    alignSelf: "center",
  },
});
