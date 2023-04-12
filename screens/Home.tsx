import * as React from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <Pressable style={[styles.homeChild, styles.homeChildLayout]} />
      <Text style={[styles.signIn, styles.signInFlexBox]}>Sign In</Text>
      <View style={[styles.createAnAccountWrapper, styles.homeChildLayout]}>
        <Text style={[styles.createAnAccount, styles.signInTypo]}>
          Create an Account
        </Text>
      </View>
      <Image
        style={styles.homeItem}
        resizeMode="cover"
        source={require("../assets/frame-2.png")}
      />
      <Text
        style={[styles.welcomeToThe, styles.welcomeToTheClr]}
      >{`Welcome to the 
world of Languages`}</Text>
      <Text
        style={[styles.learningHasNever, styles.welcomeToTheClr]}
      >{`learning has never been so easy! With 
World of Languages, you will learnto speak 
your dream language in no time `}</Text>
      <Image
        style={styles.homeInner}
        resizeMode="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.homeChild1Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.homeChild1, styles.homeChild1Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeChildLayout: {
    height: 49,
    width: 332,
    borderRadius: Border.br_mini,
    left: 43,
    position: "absolute",
  },
  signInFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interRegular,
  },
  signInTypo: {
    textAlign: "center",
    color: Color.white,
    lineHeight: 59,
    letterSpacing: 1.4,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  welcomeToTheClr: {
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  homeChild1Layout: {
    height: 13,
    width: 13,
    top: 674,
    position: "absolute",
  },
  homeChild: {
    top: 744,
    backgroundColor: Color.darkgreen_200,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  signIn: {
    top: 736,
    left: 121,
    width: 178,
    height: 66,
    textAlign: "center",
    color: Color.white,
    lineHeight: 59,
    letterSpacing: 1.4,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  createAnAccount: {
    top: -5,
    left: 77,
    fontFamily: FontFamily.jostRegular,
  },
  createAnAccountWrapper: {
    top: 814,
    backgroundColor: "rgba(10, 8, 8, 0.32)",
    overflow: "hidden",
  },
  homeItem: {
    top: 0,
    left: 0,
    width: 495,
    height: 414,
    position: "absolute",
    overflow: "hidden",
  },
  welcomeToThe: {
    top: 442,
    fontSize: FontSize.size_12xl,
    letterSpacing: 3.1,
    lineHeight: 32,
    width: 337,
    height: 94,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interRegular,
    left: 43,
    color: Color.black,
  },
  learningHasNever: {
    top: 536,
    left: 60,
    fontSize: FontSize.size_sm,
    letterSpacing: 0.4,
    lineHeight: 26,
    fontFamily: FontFamily.radioCanadaRegular,
  },
  homeInner: {
    left: 187,
    width: 41,
    height: 9,
    top: 674,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  ellipseIcon: {
    left: 239,
  },
  homeChild1: {
    left: 263,
  },
  home: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Home;
