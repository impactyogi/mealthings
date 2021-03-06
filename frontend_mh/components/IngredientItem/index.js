import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { COLS } from "../../styles/COLS";

const styles = StyleSheet.create({
  ingredientItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
  },
  position: {
    width: 100,
  },
  circle: {
    marginRight: 10,
    height: 25,
    width: 25,
    borderRadius: 25,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 3,
  },
  circleChecked: {
    marginRight: 10,
    height: 25,
    width: 25,
    borderRadius: 25,
    backgroundColor: COLS.C4_DARK_TEXT,
    borderColor: "#65676F",
    borderStyle: "solid",
    borderWidth: 3,
  },
  itemTextChecked: {
    fontSize: 18,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#65676F",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "900",
    color: "black",
  },
});

export default function IngredientItem({ item }) {
  const [bought, setBought] = useState(false);
  return (
    <TouchableOpacity onPress={() => setBought(!bought)}>
      <View style={styles.ingredientItemContainer}>
        <View style={bought ? styles.circleChecked : styles.circle}></View>
        <Text style={bought ? styles.itemTextChecked : styles.itemText}>
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
