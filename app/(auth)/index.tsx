import Image from "@/components/Image";
import Input from "@/components/Input";
import { getData, storeData } from "@/utils/storage";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState({ user: "", password: "" });

  const handleToggleShow = () => setShow((prev) => !prev);

  const handleChangeUserInfo = (value: string, type: "user" | "password") => {
    setUserInfo((prev) => ({ ...prev, [type]: value }));
  };

  const validateUserInfo = () => {
    if (!userInfo.user || !userInfo.password) {
      Alert.alert("Login failed!", "Please enter user name and password");
      return false;
    }

    return true;
  };

  const handleNavigate = (name: string) => {
    router.push(name);
  };

  const handleLogin = async () => {
    const verified = validateUserInfo();
    if (verified) {
      storeData("user", userInfo.user);
      storeData("password", userInfo.password);
      router.replace("/home");
    }
  };

  const getUserData = async () => {
    const user = await getData("user");
    const password = await getData("password");

    if (!!user && !!password) {
      router.replace("/home");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={require("@/assets/icon.png")} style={styles.logo} />
        <Text style={styles.title}>Social Commercial</Text>
      </View>
      <View style={{ marginBottom: 12 }}>
        <Input
          placeholder="User name"
          onChangeText={(text) => handleChangeUserInfo(text, "user")}
        />
        <Input
          placeholder="Password"
          secureTextEntry={!show}
          onChangeText={(text) => handleChangeUserInfo(text, "password")}
          icon={
            <Pressable onPress={handleToggleShow} style={styles.showIcon}>
              <Ionicons
                size={24}
                color={"#1877f2"}
                name={show ? "eye-outline" : "eye-off-outline"}
              />
            </Pressable>
          }
        />
      </View>
      <View>
        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
        <Pressable
          style={styles.forgotButton}
          onPress={() => handleNavigate("forgot")}
        >
          <Text style={styles.forgotText}>Fotgot password?</Text>
        </Pressable>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>or</Text>
        </View>
        <View style={styles.line} />
      </View>
      <View style={{ width: "80%", marginHorizontal: "auto" }}>
        <Pressable
          style={styles.createButton}
          onPress={() => handleNavigate("register")}
        >
          <Text style={styles.createText}>Create new account</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#fff", flex: 1, paddingTop: 50 },
  logo: { height: 60, width: 120 },
  titleContainer: {
    padding: 8,
    marginBottom: 12,
    alignItems: "center",
    alignContent: "center",
  },
  title: {
    color: "#1877f2",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  showIcon: {
    padding: 8,
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    padding: 8,
    backgroundColor: "#1877f2",
    borderRadius: 10,
  },
  loginText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "#ffffff",
  },
  forgotButton: {
    padding: 8,
    borderRadius: 10,
  },
  forgotText: {
    textAlign: "center",
    color: "#1877f2",
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  line: { backgroundColor: "#ccd0d5", height: 1, flex: 1 },
  createButton: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    padding: 8,
  },
  createText: { fontSize: 14, textAlign: "center" },
});
