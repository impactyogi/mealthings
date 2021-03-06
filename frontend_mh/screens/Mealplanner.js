import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { COLS } from "./COLS";
import MealPlanner from "../components/MealPlanner";
import Days from "../components/Days";

const styles = StyleSheet.create({
  rows: {
    flexDirection: "row",
    backgroundColor: COLS.C_BG,
    margin: 0,
  },
});

export default function Mealplanner() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.color} horizontal={true}>
        <View style={styles.rows}>
          <Days />
          <MealPlanner />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
