import { clearStorage, getData } from "@/utils/storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({ user: "", password: "" });

  const getUserData = async () => {
    const user = await getData("user");
    const password = await getData("password");

    setUserInfo({ user: user, password: password });
  };

  const handleLogout = async () => {
    await clearStorage();
    router.replace("/");
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Image src="https://picsum.photos/600/600" style={styles.avatar} />
      <Text style={styles.userName}>{userInfo.user}123</Text>

      <Pressable style={styles.logOut}>
        <Text
          style={{ fontWeight: "bold", color: "gray", textAlign: "center" }}
          onPress={handleLogout}
        >
          Log out
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 100,
  },
  userName: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  logOut: {
    width: "80%",
    padding: 16,
    backgroundColor: "#ccd0d5",
    borderRadius: 8,
    marginTop: 450,
  },
});
