import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import { useRouter } from "expo-router";
import Header from "@/components/Header";
import Colors from "@/constants/Colors";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { CategoryImages } from "@/Utils/data/category";
import { CarouselImages } from "@/Utils/data/carouselImags";
import { HorizontalImages } from "@/Utils/data/horizontalImages";
import TopAccessories from "@/components/topAccessories";
import axios, { AxiosError } from "axios";
import ProductItem from "@/components/ProductItem";
import { Product } from "@/Interfaces/product";
import { handleError } from "@/Utils/common/handleError";
import DropDownPicker from "react-native-dropdown-picker";
import Deals from "@/components/Deals";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import { addToCart } from "@/slices/CartSlice";
import { BottomModal, SlideAnimation } from "react-native-modals";
import ModalContentItem from "@/components/ModalContentItem";

const { width } = Dimensions.get("window");
const categories = [
  { label: "Electronics", value: "electronics" },
  { label: "Jewelery", value: "jewelery" },
  { label: "Men's clothing", value: "men's clothing" },
  { label: "Women's clothing", value: "women's clothing" },
];

export default function Page() {
  const cart = useAppSelector((state) => state.carts.cart);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("men's clothing");
  const [items, setItems] = useState(categories);
  const [addedToCart, setAddedToCart] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const filteredProducts = product?.filter(
    (product) => product.category === value
  );

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProduct(response.data);
        setLoading(false);
      } catch (error: AxiosError | any) {
        console.error(error);
        setLoading(false);
        handleError(error);
      }
    };
    fetchProducts();
  }, []);

  // Handle CarouselImage switch every 5sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: currentIndex * width,
        animated: true,
      });
    }
  }, [currentIndex]);

  const handleAddToCart = ({ item }: any) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <View style={defaultStyles.container}>
        {/* App Bar */}
        <Header
          onSearch={() => router.push("/screens/search")}
          onCameraClick={() => console.log("Search by Image")}
          onMicClick={() => console.log("Serach By Speech")}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Name Space */}
          <Pressable style={defaultStyles.nameView} onPress={() => setModalVisible(!modalVisible)}>
            <Ionicons name="location-outline" size={20} color="black" />

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontFamily: "nunito", fontSize: 13 }}>
                Deliver to Nigeria{" "}
              </Text>
              <Entypo name="chevron-small-down" size={18} color="black" />
            </View>
          </Pressable>
          {/* Cetegory Scroll */}
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={CategoryImages}
            renderItem={({ item }) => (
              <Pressable style={styles.categoryBg}>
                <Image style={styles.categoryImage} source={item.image} />
                <Text style={styles.categoryText}>{item.title}</Text>
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
          />
          {/* Carousel Images Component*/}
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={CarouselImages}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.image }}
                style={{ height: 220, width: width, resizeMode: "cover" }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
          {/* Horizontal Images Component*/}
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={HorizontalImages}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.horizontalText}>{item.title}</Text>
                <Image
                  source={{ uri: item.image }}
                  style={styles.horizontalImage}
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
          {/* Top PCs & Accessories */}
          <TopAccessories />
          {/* Divider */}
          <View style={defaultStyles.divider} />
          {/* Deal of the day here */}
          <Deals />
          {/* Divider */}
          <View style={defaultStyles.divider} />
          {/* Dropdown Button */}
          <View style={styles.dropdown}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Select Category"
              containerStyle={{ height: 30 }}
              style={{
                backgroundColor: "#fafafa",
                height: 30,
                marginBottom: open ? 120 : 0,
              }}
              textStyle={{ fontFamily: "nunito" }}
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>
          {/* Fetch Product Frm FakeStoreApi */}
          {loading ? (
            <ActivityIndicator size={"large"} color={Colors.grey} />
          ) : (
            <FlatList
              style={{ marginVertical: 20 }}
              data={filteredProducts}
              renderItem={({ item }) => (
                <ProductItem
                  item={item}
                  addItem={() => handleAddToCart({ ...item })}
                />
              )}
              numColumns={2}
              showsVerticalScrollIndicator={false}
            />
          )}
          {/* Divider */}
          <View style={defaultStyles.divider} />
        </ScrollView>
      </View>

      <BottomModal
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContentItem/>
      </BottomModal>
    </>
  );
}

const styles = StyleSheet.create({
  horizontalImage: {
    width: 130,
    height: 130,
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    marginHorizontal: 6,
    borderColor: Colors.black,
  },
  horizontalText: {
    fontFamily: "nunitoM",
    paddingHorizontal: 4,
    paddingVertical: 1,
    backgroundColor: Colors.white,
    height: 40,
    width: 130,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginHorizontal: 6,
  },
  categoryBg: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 99,
  },
  categoryText: {
    textAlign: "center",
    fontFamily: "nunitoM",
    fontSize: 13,
    marginTop: 5,
  },
  dropdown: {
    width: 240,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginBottom: 10,
  },
});
