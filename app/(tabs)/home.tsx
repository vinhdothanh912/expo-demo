import Image from "@/components/Image";
import { Colors } from "@/constants/Colors";
import { getData, clearStorage } from "@/utils/storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";
import PagerView from "react-native-pager-view";

const MOCK_CATEGORIES = [
  {
    name: "Camera",
    url: "https://picsum.photos/40/40",
  },
  {
    name: "Hardware",
    url: "https://picsum.photos/50/50",
  },
  {
    name: "House",
    url: "https://picsum.photos/60/60",
  },
];

const MOCK_PRODUCTS = [
  {
    name: "Camera",
    url: "https://picsum.photos/40/60",
  },
  {
    name: "PC",
    url: "https://picsum.photos/50/75",
  },
  {
    name: "Phone",
    url: "https://picsum.photos/60/100",
  },
  {
    name: "Laptop",
    url: "https://picsum.photos/70/125",
  },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  const getUserData = async () => {
    const user = await getData("user");
    const password = await getData("password");

    if (!user || !password) {
      await handleLogout();
    }
  };

  const handleLogout = async () => {
    await clearStorage();
    router.replace("/");
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <PagerView style={styles.pagerView} initialPage={0}>
          <View key="1">
            <Image
              source={"https://picsum.photos/1920/1080"}
              style={styles.banner}
            />
          </View>
          <View key="2">
            <Image
              source={"https://picsum.photos/1921/1080"}
              style={styles.banner}
            />
          </View>
          <View key="3">
            <Image
              source={"https://picsum.photos/1922/1080"}
              style={styles.banner}
            />
          </View>
        </PagerView>

        <View style={{ overflow: "scroll", paddingVertical: 16 }}>
          <Text style={styles.title}>Category</Text>
          <View style={styles.categoryContainer}>
            {MOCK_CATEGORIES.map((category, index) => (
              <View
                key={category.name + index}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 8,
                }}
              >
                <Image
                  source={category.url}
                  style={[
                    styles.categoryImage,
                    {
                      backgroundColor:
                        Colors[colorScheme ?? "light"].inputBackground,
                    },
                  ]}
                />
                <Text>{category.name}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={{ overflow: "scroll", paddingVertical: 16 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Outstanding product</Text>
            <Text style={{ color: "gray" }}>More</Text>
          </View>
          <View style={styles.productContainer}>
            {MOCK_PRODUCTS.map((product, index) => (
              <View
                key={product.name + index}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 8,
                }}
              >
                <Image
                  source={product.url}
                  style={[
                    styles.productImage,
                    {
                      backgroundColor:
                        Colors[colorScheme ?? "light"].inputBackground,
                    },
                  ]}
                />
                <Text>{product.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    height: 200,
  },
  container: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  categoryImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    padding: 8,
  },
  categoryContainer: {
    flexDirection: "row",
    gap: 8,
  },
  banner: {
    height: 200,
    borderRadius: 8,
    padding: 8,
    resizeMode: "cover",
  },
  productContainer: {
    flexDirection: "row",
    gap: 8,
  },
  productImage: {
    height: 80,
    width: 60,
    borderRadius: 4,
  },
});
