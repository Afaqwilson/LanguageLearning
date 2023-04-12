import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Home2 = () => {
  return (
    <View style={styles.home2}>
      <Text
        style={[styles.createYourFree, styles.nextStepFlexBox]}
      >{`Create your free
account`}</Text>
      <Text style={[styles.doYouAlreadyContainer, styles.nextStepTypo]}>
        <Text
          style={styles.doYouAlready}
        >{`Do you already have an account? `}</Text>
        <Text style={styles.signIn}>Sign in!</Text>
      </Text>
      <Text style={[styles.username, styles.eMailTypo]}>Username</Text>
      <Text style={[styles.eMail, styles.eMailTypo]}>E-mail</Text>
      <Text style={styles.password}>Password</Text>
      <Text style={[styles.mobileNumber, styles.eMailTypo]}>Mobile number</Text>
      <View style={styles.home2Child} />
      <Text style={[styles.nextStep, styles.nextStepTypo]}>Next Step</Text>
      <View style={[styles.home2Item, styles.home2Layout]} />
      <View style={[styles.home2Inner, styles.home2Layout]} />
      <View style={[styles.rectangleView, styles.home2Layout]} />
      <View style={[styles.home2Child1, styles.home2Layout]} />
      <Image
        style={[styles.rectangleIcon, styles.home2Child2Layout]}
        resizeMode="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Image
        style={[styles.home2Child2, styles.home2Child2Layout]}
        resizeMode="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Text style={[styles.iAcceptThe, styles.eMailTypo]}>
        I accept the terms and privacy policy
      </Text>
      <View style={styles.checkbox} />
    </View>
  );
};

const styles = StyleSheet.create({
  nextStepFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  nextStepTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  eMailTypo: {
    fontFamily: FontFamily.radioCanadaRegular,
    textAlign: "center",
    lineHeight: 26,
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
    color: Color.black,
    position: "absolute",
  },
  home2Layout: {
    height: 44,
    width: 349,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  home2Child2Layout: {
    height: 7,
    top: 520,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  createYourFree: {
    top: 82,
    fontSize: FontSize.size_12xl,
    letterSpacing: 3.1,
    lineHeight: 37,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    textAlign: "left",
    width: 337,
    height: 94,
    color: Color.black,
    left: 46,
    position: "absolute",
    display: "flex",
  },
  doYouAlready: {
    color: Color.black,
  },
  signIn: {
    color: Color.darkgreen_200,
  },
  doYouAlreadyContainer: {
    top: 176,
    lineHeight: 26,
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    left: 43,
  },
  username: {
    top: 219,
    left: 46,
  },
  eMail: {
    top: 321,
    left: 46,
  },
  password: {
    top: 418,
    left: 47,
    fontFamily: FontFamily.radioCanadaRegular,
    textAlign: "center",
    lineHeight: 26,
    letterSpacing: 0.4,
    fontSize: FontSize.size_sm,
    color: Color.black,
    position: "absolute",
  },
  mobileNumber: {
    top: 551,
    left: 46,
  },
  home2Child: {
    top: 780,
    backgroundColor: Color.darkgreen_200,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 332,
    height: 49,
    borderRadius: Border.br_mini,
    left: 47,
    position: "absolute",
  },
  nextStep: {
    top: 746,
    left: 154,
    fontSize: FontSize.size_xl,
    letterSpacing: 1.4,
    lineHeight: 59,
    color: Color.white,
    justifyContent: "center",
    width: 119,
    height: 118,
    alignItems: "center",
    display: "flex",
  },
  home2Item: {
    top: 262,
    left: 46,
  },
  home2Inner: {
    top: 359,
    left: 46,
  },
  rectangleView: {
    top: 459,
    left: 46,
  },
  home2Child1: {
    top: 589,
    left: 43,
    width: 349,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_8xs,
  },
  rectangleIcon: {
    left: 49,
    width: 346,
  },
  home2Child2: {
    width: 231,
    left: 46,
  },
  iAcceptThe: {
    top: 723,
    left: 97,
  },
  checkbox: {
    width: 28,
    height: 28,
  },
  home2: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Home2;
