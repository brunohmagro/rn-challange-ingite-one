import React, { useState } from "react";
import { View, Text, StatusBar, StyleSheet, Switch } from "react-native";

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
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: "#273FAD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerDark: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: "#483C67",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
  toggle: {
    position: "absolute",
    right: 20,
    top: 5,
  },
});
