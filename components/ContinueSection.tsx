import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const ContinueSection = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildPosition]}>
      <View style={[styles.groupChild, styles.englishPosition1]} />
      <Image
        style={[styles.groupItem, styles.groupItemLayout]}
        resizeMode="cover"
        source={require("../assets/group-1016.png")}
      />
      <View style={[styles.helloAfaqWilsonParent, styles.parentPosition]}>
        <Text style={[styles.helloAfaqWilson, styles.englishPosition]}>
          Hello Aziz,
        </Text>
        <Text style={[styles.continueToEnglish, styles.englishPosition]}>
          Continue to English!
        </Text>
      </View>
      <View style={styles.groupInner} />
      <View style={[styles.englishParent, styles.parentPosition]}>
        <Text style={[styles.english, styles.englishPosition]}>English</Text>
        <Image
          style={[styles.vectorIcon, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  englishPosition1: {
    top: "0%",
    height: "100%",
  },
  groupItemLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  parentPosition: {
    left: "9.3%",
    position: "absolute",
  },
  englishPosition: {
    textAlign: "left",
    color: Color.gray_200,
    left: "0%",
    position: "absolute",
  },
  groupChild: {
    bottom: "0%",
    borderBottomRightRadius: Border.br_31xl,
    borderBottomLeftRadius: Border.br_31xl,
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  groupItem: {
    height: "100.72%",
    width: "18.56%",
    right: "0.23%",
    bottom: "-24.05%",
    left: "81.2%",
    top: "23.33%",
  },
  helloAfaqWilson: {
    height: "66.67%",
    width: "41.35%",
    top: "-97.44%",
    fontSize: FontSize.size_7xl,
    display: "none",
    fontFamily: FontFamily.interRegular,
    color: Color.gray_200,
  },
  continueToEnglish: {
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    top: "0%",
    height: "100%",
    color: Color.gray_200,
    width: "100%",
  },
  helloAfaqWilsonParent: {
    height: "14.44%",
    width: "72.56%",
    top: "73.33%",
    right: "18.14%",
    bottom: "12.22%",
  },
  groupInner: {
    height: "20%",
    width: "29.77%",
    right: "64.19%",
    bottom: "56.67%",
    left: "6.05%",
    borderRadius: Border.br_7xl,
    backgroundColor: Color.cornflowerblue,
    top: "23.33%",
    position: "absolute",
  },
  english: {
    width: "71.64%",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    color: Color.gray_200,
    top: "0%",
    height: "100%",
  },
  vectorIcon: {
    height: "36.53%",
    width: "18.27%",
    top: "33.81%",
    right: "-0.79%",
    bottom: "29.66%",
    left: "82.52%",
  },
  englishParent: {
    height: "8.89%",
    width: "22.07%",
    top: "28.89%",
    right: "68.62%",
    bottom: "62.22%",
  },
  rectangleParent: {
    height: "28.97%",
    top: "-0.32%",
    bottom: "71.35%",
  },
});

export default ContinueSection;
