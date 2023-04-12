import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SectionContainer from "../components/SectionContainer";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Home5 = () => {
  return (
    <View style={styles.home5}>
      <View style={styles.home51} />
      <View style={[styles.home5Child, styles.home5ChildPosition]} />
      <View style={styles.home5Item} />
      <View style={styles.home5Inner} />
      <View style={[styles.rectangleView, styles.home5ChildPosition]} />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-10162.png")}
      />
      <View style={styles.helloAfaqParent}>
        <Text style={[styles.helloAfaq, styles.englishPosition]}>
          Hello Afaq,
        </Text>
        <Text style={[styles.continueToEnglish, styles.englishPosition]}>
          Continue to English!
        </Text>
      </View>
      <View style={styles.home5Child1} />
      <View style={styles.englishParent}>
        <Text style={[styles.english, styles.englishPosition]}>English</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-26.png")}
      />
      <Text style={[styles.reading, styles.readingPosition]}>Reading</Text>
      <Text style={[styles.youCompleted76, styles.readingPosition]}>
        You completed 76%
      </Text>
      <View style={styles.home5Child2} />
      <View style={[styles.home5Child3, styles.home5ChildBorder]} />
      <View style={[styles.home5Child4, styles.home5ChildBorder]} />
      <Image
        style={[styles.home5Child5, styles.home5ChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-1057.png")}
      />
      <Image
        style={[styles.home5Child6, styles.home5ChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-1059.png")}
      />
      <Image
        style={[styles.home5Child7, styles.home5ChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-1058.png")}
      />
      <Text style={[styles.grammerCheck, styles.readTypo]}>{`Grammer 
  Check`}</Text>
      <Text style={[styles.translate, styles.readTypo]}>Translate</Text>
      <Text style={[styles.read, styles.readTypo]}>Read</Text>
      <View style={styles.rectangleParent}>
        <LinearGradient
          style={[styles.groupChild, styles.groupLayout]}
          locations={[0, 1]}
          colors={["#2f00e7", "rgba(90, 44, 188, 0.67)"]}
        />
        <Text style={[styles.start, styles.startTypo]}>Start</Text>
      </View>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupItem, styles.groupItemBg]} />
        <Text style={[styles.start1, styles.startTypo]}>Start</Text>
      </View>
      <SectionContainer />
      <View style={[styles.home5Child8, styles.groupItemBg]} />
    </View>
  );
};

const styles = StyleSheet.create({
  home5ChildPosition: {
    width: 431,
    left: -2,
    position: "absolute",
  },
  englishPosition: {
    textAlign: "left",
    color: Color.gray_300,
    left: 0,
    position: "absolute",
  },
  readingPosition: {
    color: Color.gray_400,
    left: 100,
    textAlign: "left",
    position: "absolute",
  },
  home5ChildBorder: {
    borderColor: "#0e5f01",
    height: 117,
    width: 105,
    borderRadius: Border.br_xl,
    top: 632,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.ghostwhite,
    position: "absolute",
  },
  home5ChildLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  readTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.gray_300,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_46xl,
    height: 69,
    width: 356,
    left: 0,
    top: 0,
  },
  startTypo: {
    top: 22,
    left: 159,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  groupItemBg: {
    backgroundColor: Color.darkgreen_200,
    position: "absolute",
  },
  home51: {
    height: 932,
    width: 430,
    left: -2,
    top: -2,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  home5Child: {
    top: -5,
    backgroundColor: "rgba(14, 95, 1, 0.7)",
    height: 375,
  },
  home5Item: {
    borderTopLeftRadius: Border.br_16xl,
    borderTopRightRadius: Border.br_16xl,
    height: 656,
    backgroundColor: Color.ghostwhite,
    top: 274,
    width: 430,
    left: -2,
    position: "absolute",
  },
  home5Inner: {
    borderRadius: Border.br_16xl,
    backgroundColor: "#eeeff2",
    height: 224,
    top: 274,
    width: 430,
    left: -2,
    position: "absolute",
  },
  rectangleView: {
    borderBottomRightRadius: Border.br_31xl,
    borderBottomLeftRadius: Border.br_31xl,
    height: 270,
    top: -2,
    width: 431,
    backgroundColor: Color.white,
  },
  groupIcon: {
    left: 347,
    width: 81,
    height: 252,
    top: 58,
    position: "absolute",
  },
  helloAfaq: {
    fontSize: FontSize.size_7xl,
    width: 143,
    height: 26,
    fontFamily: FontFamily.interRegular,
    top: 0,
    color: Color.gray_300,
    left: 0,
  },
  continueToEnglish: {
    top: 38,
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    color: Color.gray_300,
    left: 0,
    width: 313,
  },
  helloAfaqParent: {
    top: 155,
    height: 77,
    width: 313,
    left: 37,
    position: "absolute",
  },
  home5Child1: {
    left: 23,
    borderRadius: Border.br_31xl,
    backgroundColor: "rgba(35, 35, 61, 0)",
    borderColor: "#4e4e4e",
    width: 128,
    height: 54,
    borderWidth: 1,
    borderStyle: "solid",
    top: 58,
    position: "absolute",
  },
  english: {
    fontSize: FontSize.size_xl,
    width: 68,
    fontFamily: FontFamily.interRegular,
    top: 0,
    color: Color.gray_300,
    left: 0,
  },
  vectorIcon: {
    height: "35.82%",
    width: "18.26%",
    top: "34.17%",
    right: "-0.79%",
    bottom: "30.01%",
    left: "82.52%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  englishParent: {
    top: 73,
    width: 95,
    height: 24,
    left: 37,
    position: "absolute",
  },
  rectangleIcon: {
    top: 519,
    left: 14,
    width: 86,
    height: 72,
    position: "absolute",
  },
  reading: {
    top: 527,
    width: 166,
    height: 52,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    color: Color.gray_400,
    left: 100,
  },
  youCompleted76: {
    top: 562,
    fontSize: 17,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.gray_400,
    left: 100,
  },
  home5Child2: {
    borderColor: "#23233d",
    height: 117,
    width: 105,
    borderRadius: Border.br_xl,
    left: 34,
    top: 632,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.white,
  },
  home5Child3: {
    left: 159,
    borderColor: "#0e5f01",
  },
  home5Child4: {
    left: 285,
  },
  home5Child5: {
    top: 663,
    left: 193,
  },
  home5Child6: {
    top: 654,
    left: 66,
  },
  home5Child7: {
    top: 660,
    left: 318,
  },
  grammerCheck: {
    top: 708,
    left: 306,
  },
  translate: {
    top: 713,
    left: 180,
  },
  read: {
    top: 717,
    left: 66,
  },
  groupChild: {
    backgroundColor: "transparent",
    position: "absolute",
  },
  start: {
    color: Color.white,
  },
  rectangleParent: {
    top: 797,
    height: 69,
    width: 356,
    left: 34,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_46xl,
    height: 69,
    width: 356,
    left: 0,
    top: 0,
  },
  start1: {
    color: "rgba(255, 255, 255, 0.79)",
  },
  home5Child8: {
    top: 279,
    left: 164,
    borderRadius: 67,
    width: 97,
    height: 6,
  },
  home5: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Home5;
