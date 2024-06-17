import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import ProfileHeader from "@/components/ProfileHeader";
import Colors from "@/constants/Colors";
import NameView from "@/components/NameView";
import SmallOutlineBtn from "@/components/SmallOutlineBtn";
import Label from "@/components/Label";
import BigOutlineBtn from "@/components/BigOutlineBtn";
import { OrdersList } from "@/Utils/data/ordersList";

const cardBalnce = "0.00";

export default function Page() {
  const [order, setOrder] = useState(true);
  return (
    <View style={defaultStyles.container}>
      {/* App Bar */}
      <ProfileHeader />
      <NameView />
      {/* Rest of View */}
      <ScrollView>
        {/* Four Buttons */}
        <View style={{ paddingTop: 10, paddingBottom: 15, gap: 10 }}>
          <View style={styles.fourBtn}>
            <SmallOutlineBtn
              text={"Your Orders"}
              onTap={() => console.log("Your Orders Clicked")}
            />
            <SmallOutlineBtn
              text={"Buy Again"}
              onTap={() => console.log("Buy Again Clicked")}
            />
          </View>
          <View style={styles.fourBtn}>
            <SmallOutlineBtn
              text={"Your Account"}
              onTap={() => console.log("Your Account Clicked")}
            />
            <SmallOutlineBtn
              text={"Your Lists"}
              onTap={() => console.log("Your Lists Clicked")}
            />
          </View>
        </View>

        {/* Your Order not to show if order is present */}
        <View style={{ marginBottom: 12, paddingHorizontal: 12 }}>
          <View style={{ marginBottom: 10 }}>
            <Label
              title={"Your Orders"}
              subTitle={"See all"}
              onTap={() => {}}
            />
          </View>
          {order ? (
            <FlatList
              data={OrdersList}
              horizontal
              renderItem={({ item }) => (
                <View
                  style={{
                    width: 150,
                    height: 100,
                    padding: 5,
                    borderWidth: StyleSheet.hairlineWidth,
                    marginRight: 10,
                    borderRadius: 4,
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{ height: 80, width: 130, resizeMode: "cover" }}
                  />
                </View>
              )}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <View>
              <View style={{ gap: 10, marginTop: 16 }}>
                <Text
                  style={{
                    fontFamily: "nunitoSB",
                    color: Colors.grey,
                    fontSize: 16,
                  }}
                >
                  Hmm. We couldn't find any orders
                </Text>
                {/* Outline Button */}
                <BigOutlineBtn
                  text={"Continue shopping"}
                  onPress={() => console.log("Continue Shopping Clicked")}
                />
              </View>
            </View>
          )}
        </View>

        {/* Divider */}
        <View
          style={{
            borderBottomWidth: 16,
            width: "100%",
            borderColor: "#e9ecef",
          }}
        />

        {/* Buy Again Component */}
        <View style={styles.container}>
          <Pressable>
            <Label title={"Buy Again"} />
          </Pressable>
          <View style={{ gap: 10, marginTop: 16 }}>
            <Text
              style={{
                fontFamily: "nunitoSB",
                color: Colors.grey,
                fontSize: 16,
              }}
            >
              See what others are reordering on Buy Again
            </Text>
            {/* Outline Button */}
            <BigOutlineBtn
              text={"Visit Buy Again"}
              onPress={() => console.log("Visit Buy Again Clicked")}
            />
          </View>
        </View>

        {/* Divider */}
        <View style={defaultStyles.divider} />

        {/* Your Lists Component */}
        <View
          style={{ marginBottom: 12, marginTop: 12, paddingHorizontal: 12 }}
        >
          <Pressable>
            <Label title={"Your Lists"} />
          </Pressable>
          <View style={{ gap: 10, marginTop: 16 }}>
            <Text
              style={{
                fontFamily: "nunitoSB",
                color: Colors.grey,
                fontSize: 16,
              }}
            >
              You haven't created any lists.
            </Text>
            {/* Outline Button */}
            <BigOutlineBtn
              text={"Create a List"}
              onPress={() => console.log("Create a List Clicked")}
            />
          </View>
        </View>

        {/* Divider */}
        <View style={defaultStyles.divider} />

        {/* Your Account Component */}
        <View style={styles.container}>
          <Pressable>
            <Label title={"Your Account"} subTitle={"See all"} />
          </Pressable>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginTop: 12,
            }}
          >
            <TouchableOpacity style={styles.btn} onPress={() => {}}>
              <Text style={{ fontFamily: "nunitoSB" }}>Your Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {}}>
              <Text style={{ fontFamily: "nunitoSB" }}>Your Payments</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {}}>
              <Text style={{ fontFamily: "nunitoSB" }}>
                Manage gift card balance
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {}}>
              <Text style={{ fontFamily: "nunitoSB" }}>
                Your Subscribe & Save
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {}}>
              <Text style={{ fontFamily: "nunitoSB" }}>
                Membership & Subscriptions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {}}>
              <Text style={{ fontFamily: "nunitoSB" }}>
                Manage Prime Membership
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Divider */}
        <View style={defaultStyles.divider} />

        {/* Your Lists Component */}
        <View style={styles.container}>
          <Pressable>
            <Text style={{ fontFamily: "nunitoB", fontSize: 18 }}>
              Gift Card Balance: ${cardBalnce}
            </Text>
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <TouchableOpacity style={styles.lastBtn} onPress={() => {}}>
              <Text style={{ fontFamily: "nunitoSB" }}>Redeem Gift Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lastBtn} onPress={() => {}}>
              <Text style={{ fontFamily: "nunitoSB" }}>Reload Balance</Text>
            </TouchableOpacity>
          </View>

          <Pressable>
            <Text
              style={{
                fontFamily: "nunitoSB",
                color: Colors.primary,
                marginTop: 12,
                marginBottom: 16,
              }}
            >
              Manage
            </Text>
          </Pressable>
        </View>

        {/* Divider */}
        <View
          style={{
            borderBottomWidth: 10,
            width: "100%",
            borderColor: "#e9ecef",
            marginBottom: 60,
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    marginTop: 12,
    paddingHorizontal: 12,
  },
  fourBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    paddingHorizontal: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey,
    borderRadius: 6,
  },
  lastBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 160,
    height: 50,
    marginTop: 12,
    paddingHorizontal: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey,
    borderRadius: 6,
  },
});
