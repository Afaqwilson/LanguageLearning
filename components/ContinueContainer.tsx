import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ContinueContainer = () => {
  return (
    <View style={styles.groupParent}>
      <Image
        style={styles.groupChild}
        resizeMode="cover"
        source={require("../assets/group-10161.png")}
      />
      <View style={[styles.continueToEnglishWrapper, styles.englishPosition1]}>
        <Text style={[styles.continueToEnglish, styles.englishPosition]}>
          Continue to English!
        </Text>
      </View>
      <View style={styles.groupItemPosition}>
        <View style={[styles.groupItem, styles.groupItemPosition]} />
        <View style={[styles.englishParent, styles.englishPosition1]}>
          <Text style={[styles.english, styles.englishPosition]}>English</Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  englishPosition1: {
    left: 14,
    position: "absolute",
  },
  englishPosition: {
    textAlign: "left",
    color: Color.gray_200,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItemPosition: {
    height: 54,
    width: 128,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    left: 323,
    width: 80,
    height: 250,
    top: 0,
    position: "absolute",
  },
  continueToEnglish: {
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
  },
  continueToEnglishWrapper: {
    top: 135,
    width: 312,
    height: 39,
  },
  groupItem: {
    borderRadius: Border.br_7xl,
    backgroundColor: Color.cornflowerblue,
    borderStyle: "solid",
    borderColor: "#4e4e4e",
    borderWidth: 1,
  },
  english: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
  },
  vectorIcon: {
    height: "35.82%",
    width: "18.27%",
    top: "34.17%",
    right: "-0.79%",
    bottom: "30.01%",
    left: "82.52%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  englishParent: {
    top: 15,
    width: 95,
    height: 24,
  },
  groupParent: {
    top: 58,
    left: 25,
    width: 378,
    height: 174,
    position: "absolute",
  },
});

export default ContinueContainer;
