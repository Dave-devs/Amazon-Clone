import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ModalContent } from "react-native-modals";

export default function ModalContentItem() {
  return (
    <ModalContent style={styles.conatainer}>
      <View style={{ marginBottom: 8 }}>
        <Text style={styles.headingText}>Choose your Location</Text>

        <Text style={styles.subHeadinText}>
          Select a delivery location to see product availabilty and delivery
          options
        </Text>
      </View>
    </ModalContent>
  );
}

const styles = StyleSheet.create({
  conatainer: {
    width: "100%",
    height: 300,
  },
  headingText: {
    fontFamily: "nunitoB",
    fontSize: 16,
  },
  subHeadinText: {
    fontFamily: "nunito",
    fontSize: 12,
    color: "grey",
    marginTop: 5,
  },
});
