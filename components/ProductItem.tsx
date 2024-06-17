import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import currencyFormatter from "currency-formatter";
import Colors from "@/constants/Colors";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import { addToCart } from "@/slices/CartSlice";
import { Product } from '../Interfaces/product';

interface ProductItemState{
  item: any;
  addItem: () => void;
}

export default function ProductItem({ item, addItem }: ProductItemState) {
  return (
    <Pressable style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <Text numberOfLines={1} style={styles.text}>
        {item.title}
      </Text>

      {/* Price & Ratings */}
      <View style={styles.subContainer}>
        <Text style={{ fontFamily: "nunitoSB", fontSize: 13 }}>
          {currencyFormatter.format(item.price, { code: "USD" })}
        </Text>
        <Text style={{ fontFamily: "nunito", color: "#ffb703" }}>
          {item.rating.rate} ratings
        </Text>
      </View>
      {/* Add Item Button */}
      <TouchableOpacity style={styles.addItem} onPress={() => addItem()}>
        <Text style={styles.btnText}>Add To Cart</Text>
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: "contain",
  },
  text: {
    width: 150,
    fontFamily: "nunito",
    marginTop: 5,
  },
  subContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addItem: {
    backgroundColor: Colors.btnClr,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 5,
    borderRadius: 29,
    paddingVertical: 4,
  },
  btnText: {
    fontFamily: "nunitoM",
    color: Colors.white,
    fontSize: 12,
  },
});
