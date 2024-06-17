import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { defaultStyles } from "../../constants/Styles";
import Header from "@/components/Header";
import { Entypo, MaterialIcons, EvilIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import { addToCart } from "@/slices/CartSlice";

export default function Page() {
  const cart = useAppSelector((state) => state.carts.cart);
  const dispatch = useAppDispatch();
  const [addedToCart, setAddedToCart] = useState(false);

  const router = useRouter();
  const params = useLocalSearchParams();

  const handleAddToCart = (item: any) => {
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };
  return (
    <View style={defaultStyles.container}>
      {/* App Bar */}
      <Header
        onSearch={() => router.push("/screens/search")}
        onCameraClick={() => console.log("Search by Image")}
        onMicClick={() => console.log("Serach By Speech")}
      />

      {/* Deals Details Component */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {/* Big Image */}
          <Image
            style={styles.bigImage}
            source={{ uri: params.image as string }}
          />
          {/* First Box */}
          <View style={styles.firstBox}>
            <Text
              style={{
                fontFamily: "nunitoSB",
                fontSize: 10,
                color: Colors.white,
                alignSelf: "center",
              }}
            >
              {params.percrntOff}%
            </Text>
          </View>

          {/* Seconde Box */}
          <TouchableOpacity style={styles.secondBox}>
            <Entypo name="share" size={18} color="black" />
          </TouchableOpacity>

          {/* Third Box */}
          <TouchableOpacity style={styles.thirdBox}>
            <MaterialIcons name="favorite-outline" size={18} color="black" />
          </TouchableOpacity>
        </View>

        {/* Carousel Images */}
        {/* <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={params.carouselImages}
          renderItem={({ item }) => (
            <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={{ uri: item }} />
          )}
        /> */}

        {/* Description & Price */}
        <View style={{ marginVertical: 10, marginHorizontal: 5, gap: 5 }}>
          <Text
            numberOfLines={1}
            style={{ fontFamily: "nunitoB", fontSize: 15, width: "90%" }}
          >
            {params.title}
          </Text>
          <Text style={styles.description}>{params.description}</Text>
          <Text style={styles.price}>$ {params.price}</Text>
        </View>
        {/* Divider */}
        <View style={defaultStyles.divider} />
        {/* Color & Size */}
        <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
          <Text style={styles.color}>
            Color:{"  "}
            <Text style={{ fontFamily: "nunitoSB", fontSize: 13 }}>
              {params.itemColor}
            </Text>{" "}
          </Text>
          <Text style={styles.size}>
            Size:{"  "}
            <Text style={{ fontFamily: "nunitoSB", fontSize: 13 }}>
              {params.size}
            </Text>{" "}
          </Text>
        </View>
        {/* Divider */}
        <View style={defaultStyles.divider} />
        {/* ShiipingFee & Total Price */}
        <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
          <Text style={styles.color}>
            ShippingFee:{"  "}
            <Text style={{ fontFamily: "nunitoSB", fontSize: 13 }}>
              $ 10.00
            </Text>{" "}
          </Text>
          <Text
            style={{
              fontFamily: "nunito",
              fontSize: 12,
              paddingTop: 5,
              color: Colors.primary,
            }}
          >
            Enjoy 10% discount on your first order and get it delivered to you
            for free when you order more than $100 within 7:00 AM to 12:00 PM
            today.
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginTop: 8,
            }}
          >
            <EvilIcons name="location" size={20} color="black" />
            <Text style={{ fontFamily: "nunitoB", fontSize: 12 }}>
              Delivery to any location in Nigeria
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "nunitoB",
              fontSize: 16,
              paddingTop: 20,
              color: Colors.primary,
            }}
          >
            In Stock
          </Text>
        </View>
        {/* AddToCart & BuyNow Buttons */}
        <View
          style={{
            marginHorizontal: 5,
            marginTop: 10,
            marginBottom: 50,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={styles.addToCart}
            onPress={() => handleAddToCart({ ...params })}
          >
            {addedToCart ? (
              <Text style={styles.btnText}>Added To Cart</Text>
            ) : (
              <Text style={styles.btnText}>Add To Cart</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.buyNow}>
            <Text style={styles.btnText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    marginHorizontal: 15,
  },
  bigImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  description: {
    fontFamily: "nunito",
    fontSize: 12,
  },
  price: {
    fontFamily: "nunitoB",
    fontSize: 15,
    paddingTop: 5,
  },
  color: {
    fontFamily: "nunitoB",
    fontSize: 12,
  },
  size: {
    fontFamily: "nunitoB",
    fontSize: 12,
  },
  addToCart: {
    width: "90%",
    height: 40,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 99,
  },
  buyNow: {
    width: "90%",
    height: 40,
    backgroundColor: Colors.btnClr,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 99,
  },
  firstBox: {
    height: 20,
    width: 50,
    position: "absolute",
    backgroundColor: "red",
    top: 10,
    left: 10,
    borderRadius: 99,
    justifyContent: "center",
  },
  secondBox: {
    height: 25,
    width: 25,
    position: "absolute",
    backgroundColor: "#f8f9fa",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey,
    borderRadius: 99,
    top: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  thirdBox: {
    height: 25,
    width: 25,
    position: "absolute",
    backgroundColor: "#f8f9fa",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey,
    borderRadius: 99,
    bottom: 10,
    left: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontFamily: "nunitoB",
    fontSize: 14,
    color: Colors.black,
  },
});
