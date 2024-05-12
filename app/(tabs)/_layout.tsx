import Image from "@/components/Image";
import Input from "@/components/Input";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const handleClickCartButton = () => {
    router.push("/shop");
  };

  return (
    <>
      <View style={styles.headerLayout}>
        <View style={styles.headerContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Image
              source={require("@/assets/adaptive-icon.png")}
              style={styles.logo}
            />
            <Text style={styles.title}>Social Commercial</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Pressable style={[styles.iconButton]}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color={Colors[colorScheme ?? "light"].icon}
              />
            </Pressable>
            <Pressable
              style={[styles.iconButton]}
              onPress={handleClickCartButton}
            >
              <Ionicons
                name="cart-outline"
                size={24}
                color={Colors[colorScheme ?? "light"].icon}
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search..."
            style={[
              {
                backgroundColor: Colors[colorScheme ?? "light"].inputBackground,
              },
              styles.search,
            ]}
          />
          <Pressable style={styles.searchIcon}>
            <Ionicons size={17} name="search-outline" />
          </Pressable>
        </View>
      </View>

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
        }}
        initialRouteName="home"
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="category"
          options={{
            title: "Category",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "shapes" : "shapes-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="shop"
          options={{
            title: "Shop",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "cart" : "cart-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "person" : "person-outline"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    color: "#1877f2",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  logo: {
    height: 40,
    width: 71,
    resizeMode: "contain",
  },
  headerLayout: {
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    padding: 8,
  },
  headerContainer: {
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  iconButton: {
    borderRadius: 100,
    padding: 8,
  },
  search: {
    borderRadius: 4,
    height: 34,
    paddingHorizontal: 16,
    paddingRight: 40,
  },
  searchIcon: {
    padding: 8,
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    marginTop: 8,
  },
});
