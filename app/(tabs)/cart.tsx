import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { defaultStyles } from "../../constants/Styles";
import Header from "@/components/Header";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import { Entypo, Ionicons } from "@expo/vector-icons";

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
      {/* Name Space */}
      <View style={defaultStyles.nameView}>
        <Ionicons name="location-outline" size={20} color="black" />

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontFamily: "nunito", fontSize: 13 }}>
            Deliver to Nigeria{" "}
          </Text>
          <Entypo name="chevron-small-down" size={18} color="black" />
        </View>
      </View>

      <View>
        <View style={styles.placeholder}>
          {/* Gif Box */}
          <Image
            source={require("@/assets/images/empty-cart.png")}
            style={{
              width: 110,
              height: 110,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderRadius: 99,
            }}
          />
          {/* Texts Box */}
          <View style={{ gap: 10 }}>
            <View>
              <Text style={{ fontFamily: "nunitoSB", fontSize: 16 }}>
                Your Amazon Cart is empty
              </Text>
              <Text style={{ fontFamily: "nunitoM", fontSize: 14 }}>
                Nothing in here. Only possibilities
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "nunitoM",
                  fontSize: 15,
                  color: Colors.primary,
                }}
              >
                Pick up where you left off
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nameView: {
    backgroundColor: Colors.accent2,
    height: 35,
    paddingHorizontal: 10,
    paddingBottom: 2,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  placeholder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    marginHorizontal: 10,
  },
});
