import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { color } from "react-native-elements/dist/helpers";

const SingupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text style={{ textAlign: "center" }} h3>
          Sing Up for Tracker
        </Text>
      </Spacer>
      <Input
        value={email}
        onChangeText={setEmail}
        label="Email"
        placeholder="email@address.com"
        labelStyle={{ fontWeight: "bold", color: "black" }}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Input
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        label="Password"
        placeholder="Enter the password"
        labelStyle={{ fontWeight: "bold", color: "black" }}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer>
        <Button title="Sing Up" />
      </Spacer>
    </View>
  );
};

SingupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SingupScreen;
