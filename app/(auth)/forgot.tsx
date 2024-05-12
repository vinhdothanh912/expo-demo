import { StyleSheet, Text, View } from "react-native";
import Image from "@/components/Image";

export default function ForgotScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={require("@/assets/icon.png")} style={styles.logo} />
        <Text style={styles.title}>Social Commercial</Text>
      </View>
      <View style={{ marginBottom: 12 }}>
        <Text style={{ textAlign: "center" }}>Forgot Screen</Text>
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
});
