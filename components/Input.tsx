import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  icon?: React.ReactNode;
}

export default function Input({ icon, ...props }: InputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholderTextColor={"#8a8d91"}
        {...props}
      />
      {icon ? icon : null}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 12,
  },
  input: {
    height: 42,
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#f5f6f7",
    shadowColor: "#171717",
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
