import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SectionContainer = () => {
  return (
    <View style={[styles.groupParent, styles.groupLayout1]}>
      <View style={[styles.allParent, styles.allParentPosition]}>
        <Text style={[styles.all, styles.allTypo]}>All</Text>
        <Text style={[styles.yourFriendsProgress, styles.allTypo]}>
          Your friends progress
        </Text>
      </View>
      <View style={[styles.groupContainer, styles.groupLayout1]}>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-1030.png")}
        />
        <Image
          style={[styles.groupItem, styles.allParentPosition]}
          resizeMode="cover"
          source={require("../assets/group-1031.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-1032.png")}
        />
        <Image
          style={[styles.groupIcon, styles.groupPosition]}
          resizeMode="cover"
          source={require("../assets/group-1033.png")}
        />
        <View style={styles.raeesParent}>
          <Text style={[styles.raees, styles.raeesTypo]}>Raees</Text>
          <Text style={[styles.hamza, styles.raeesTypo]}>Hamza</Text>
          <Text style={[styles.khawar, styles.raeesTypo]}>Khawar</Text>
          <Text style={[styles.zahra, styles.raeesTypo]}>Zahra</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout1: {
    width: 420,
    position: "absolute",
  },
  allParentPosition: {
    top: 0,
    position: "absolute",
  },
  allTypo: {
    textAlign: "left",
    color: Color.gray_300,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    height: 289,
    top: 0,
    position: "absolute",
  },
  raeesTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.gray_300,
    top: 0,
    position: "absolute",
  },
  all: {
    left: 347,
  },
  yourFriendsProgress: {
    left: 0,
  },
  allParent: {
    left: 22,
    width: 371,
    height: 22,
  },
  groupChild: {
    width: 274,
    height: 289,
    left: 0,
  },
  groupItem: {
    left: 214,
    width: 210,
    height: 290,
  },
  groupInner: {
    left: 107,
    width: 274,
    height: 289,
  },
  groupIcon: {
    left: 321,
    width: 103,
  },
  raees: {
    left: 0,
  },
  hamza: {
    left: 104,
  },
  khawar: {
    left: 211,
  },
  zahra: {
    left: 325,
  },
  raeesParent: {
    top: 99,
    left: 20,
    width: 380,
    height: 24,
    position: "absolute",
  },
  groupContainer: {
    top: 42,
    height: 123,
    left: 0,
  },
  groupParent: {
    top: 308,
    left: 4,
    height: 165,
  },
});

export default SectionContainer;
