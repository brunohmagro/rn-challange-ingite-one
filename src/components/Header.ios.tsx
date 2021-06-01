import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Switch } from "react-native";

interface HeaderProps {
  changeTheme(isDark: boolean): void;
}

export function Header({ changeTheme }: HeaderProps) {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    changeTheme(!isEnabled);
  };

  return (
    <SafeAreaView style={isEnabled ? styles.container : styles.containerDark}>
      <View style={isEnabled ? styles.header : styles.headerDark}>
        <Switch
          style={styles.toggle}
          trackColor={{ true: "#f3f3f3", false: "#81b0ff" }}
          thumbColor={!isEnabled ? "#483C67" : "#273FAD"}
          ios_backgroundColor="#f3f3f3"
          onValueChange={toggleSwitch}
          value={!isEnabled}
        />

        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }]}>
          do
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#273FAD",
  },
  containerDark: {
    backgroundColor: "#483C67",
  },
  header: {
    paddingBottom: 30,
    backgroundColor: "#273FAD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerDark: {
    paddingBottom: 30,
    backgroundColor: "#483C67",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 30,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
  toggle: {
    position: "absolute",
    right: 20,
    top: 5,
  },
});
