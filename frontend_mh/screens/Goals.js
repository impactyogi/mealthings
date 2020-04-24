import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLS } from "./COLS";
import { Row } from "react-native-drag-flatlist";

const screenWidth = Dimensions.get("screen").width;

export default function Goals({ navigation, route }) {
  const { dataPlus } = route.params;
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [fatLoss, setFatLoss] = useState(false);
  const [muscle, setMuscle] = useState(false);
  const [diet, setDiet] = useState(false);
  const [time, setTime] = useState(false);
  const [cook, setCook] = useState(false);
  const [display, setDisplay] = useState();

  function Track(enteredText) {
    setWeight(enteredText);
  }
  function Tracked(enteredText) {
    setHeight(enteredText);
  }

  function handleSubmit() {
    setDisplay("success");
    var goals = "";
    if (fatLoss) {
      goals += "Fat loss,";
    }
    if (muscle) {
      goals += ",Muscle gain";
    }
    if (diet) {
      goals += ",No diet";
    }
    if (time) {
      goals += ",Save time";
    }
    if (cook) {
      goals += ",Learn to cook";
    }
    const dataPlusPlus = { ...dataPlus, height, weight, goals };
    console.log("dataPlusPlus in goals", dataPlusPlus);
    navigation.navigate("SplashSuccess", { dataPlusPlus });
  }

  function fatHandler() {
    if (diet === true) {
      setTime(false);
    } else if (fatLoss === false) {
      setFatLoss(true);
    } else if (fatLoss === true) {
      setFatLoss(false);
    }
  }

  function muscleHandler() {
    if (diet === true) {
      setMuscle(false);
    } else if (muscle === false) {
      setMuscle(true);
    } else if (muscle === true) {
      setMuscle(false);
    }
  }

  function dietHandler() {
    if (diet === true) {
      setDiet(true);
    } else if (diet === true) {
      setDiet(false);
    }
  }

  function timeHandler() {
    if (diet === true) {
      setTime(false);
    } else if (time === false) {
      setTime(true);
    } else if (time === true) {
      setTime(false);
    }
  }

  function cookHandler() {
    if (diet === true) {
      setCook(false);
    } else if (cook === false) {
      setCook(true);
    } else if (cook === true) {
      setCook(false);
    }
  }

  return (
    <ScrollView>
      <View style={styles.margin}>
        <TextInput
          type="number"
          style={styles.inputField}
          placeholder="Weight"
          placeholderTextColor="white"
          onChangeText={Track}
        ></TextInput>
        <TextInput
          style={styles.inputField}
          placeholder="Height"
          placeholderTextColor="white"
          type="number"
          onChangeText={Tracked}
        ></TextInput>
      </View>
      <View style={styles.flex}>
        <View>
          <TouchableOpacity
            onPress={fatHandler}
            onPress={() => {
              backgroundColor: COLS.C_YELLOW;
            }}
          >
            <Image
              style={styles.img}
              source={require("../assets/images/calories.png")}
            />

            <Text style={styles.text}>Fatloss</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={muscleHandler}>
            <Image
              style={styles.img}
              source={require("../assets/images/woman.png")}
            />
            <Text style={styles.text}>Gaining Muscle</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={dietHandler}>
            <Image
              style={styles.img}
              source={require("../assets/images/eat.png")}
            />
            <Text style={styles.text}>No Diet</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.flex2}>
        <View style={styles.positioning}>
          <TouchableOpacity onPress={timeHandler}>
            <Image
              style={styles.img2}
              source={require("../assets/images/time.png")}
            />
            <Text style={styles.text2}>Saving Time</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.positioning}>
          <TouchableOpacity onPress={cookHandler}>
            <Image
              style={styles.img2}
              source={require("../assets/images/Cooking.png")}
            />
            <Text style={styles.text2}>Learning to Cook</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonFlex}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonText}
        >
          <Text style={styles.TextStyle}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit} style={styles.buttonText}>
          <Text style={styles.TextStyle}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  margin: {
    marginVertical: 50,
  },
  inputField: {
    marginVertical: 5,
    backgroundColor: COLS.C5_LIGHT_TEXT,
    width: 200,
    alignSelf: "center",
    height: 50,
    borderRadius: 5,
  },
  flex: { flexDirection: "row", marginVertical: 20 },
  flex2: { flexDirection: "row" },
  img: {
    width: 100,
    height: 100,
    alignSelf: "center",
    left: 50 / 2,
    marginHorizontal: 10,
  },
  img2: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginHorizontal: 10,
  },
  text: { alignSelf: "center", left: 50 / 2, marginVertical: 10 },
  text2: { alignSelf: "center" },
  buttonFlex: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonText: {
    backgroundColor: COLS.C5_LIGHT_TEXT,
    color: COLS.C_BG,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 70,
    borderRadius: 5,
    marginVertical: 50,
  },
});
