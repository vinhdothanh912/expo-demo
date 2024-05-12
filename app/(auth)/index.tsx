import Input from "@/components/Input";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";

export default function Login() {
  const [show, setShow] = useState(false);
  const theme = useTheme();

  const handleToggleShow = () => setShow((prev) => !prev);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Social Commercial</Text>
      </View>
      <View style={{ marginBottom: 12 }}>
        <Input placeholder="Mobile number or email" />
        <Input
          placeholder="Password"
          secureTextEntry={!show}
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
        <Pressable style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
        <Pressable style={styles.forgotButton}>
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
      <View style={{width: '80%', marginHorizontal: 'auto'}}>
        <Pressable style={styles.createButton}>
          <Text style={styles.createText}>Create new account</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#fff", flex: 1 },
  titleContainer: {
    padding: 8,
    marginBottom: 12,
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
