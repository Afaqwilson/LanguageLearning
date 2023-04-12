import * as React from "react";
import { Pressable, StyleSheet, View, Text, Image } from "react-native";
import ContinueSection from "../components/ContinueSection";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Home3 = () => {
  return (
    <Pressable style={styles.home3}>
      <View style={[styles.home3Child, styles.home3Position]} />
      <View style={[styles.home3Item, styles.home3Position]} />
      <View style={[styles.home3Inner, styles.maskGroupLayout]} />
      <View style={[styles.maskGroup, styles.maskGroupLayout]}>
        <View style={[styles.maskGroupChild, styles.groupChildPosition1]} />
      </View>
      <View style={[styles.rectangleView, styles.home3Child1Layout]} />
      <View style={[styles.home3Child1, styles.home3Child1Layout]} />
      <View style={[styles.groupView, styles.groupLayout1]}>
        <View style={[styles.groupWrapper, styles.groupLayout1]}>
          <View style={[styles.groupWrapper, styles.groupLayout1]}>
            <View style={[styles.groupWrapper, styles.groupLayout1]} />
          </View>
        </View>
      </View>
      <Text style={[styles.listening, styles.grammerTypo]}>Listening</Text>
      <Text style={[styles.speaking, styles.grammerTypo]}>Speaking</Text>
      <Text style={[styles.grammer, styles.grammerTypo]}>Grammer</Text>
      <Text style={[styles.reading, styles.grammerTypo]}>Reading</Text>
      <Image
        style={[styles.rectangleIcon, styles.home3Child3Layout]}
        resizeMode="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <Image
        style={[styles.iconBook1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-book-1.png")}
      />
      <Image
        style={styles.home3Child2}
        resizeMode="cover"
        source={require("../assets/rectangle-23.png")}
      />
      <Image
        style={[styles.home3Child3, styles.home3Child3Layout]}
        resizeMode="cover"
        source={require("../assets/rectangle-24.png")}
      />
      <View style={[styles.rectangleParent, styles.groupParentLayout1]}>
        <View style={[styles.groupChild, styles.groupParentLayout1]} />
        <View style={[styles.groupItem, styles.groupChildPosition]} />
      </View>
      <View style={[styles.rectangleGroup, styles.groupParentLayout1]}>
        <View style={[styles.groupChild, styles.groupParentLayout1]} />
        <View style={[styles.groupChild1, styles.groupChildPosition]} />
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout1]}>
        <View style={[styles.groupChild, styles.groupParentLayout1]} />
        <View style={[styles.groupChild3, styles.groupChildPosition]} />
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout1]}>
        <View style={[styles.groupChild, styles.groupParentLayout1]} />
        <View style={[styles.groupChild5, styles.groupChildPosition]} />
      </View>
      <Text style={[styles.youCompleted76, styles.youTypo1]}>
        You completed 76%
      </Text>
      <Text style={[styles.youCompleted15, styles.youTypo1]}>
        You completed 15%
      </Text>
      <Text style={[styles.youCompleted53, styles.youTypo]}>
        You completed 53%
      </Text>
      <Text style={[styles.youCompleted42, styles.youTypo]}>
        You completed 42%
      </Text>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <Image
          style={[styles.groupIcon, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/group-1039.png")}
        />
        <Text style={[styles.learn, styles.learnTypo]}>Learn</Text>
      </View>
      <View style={styles.groupContainer}>
        <Image
          style={[styles.groupChild6, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group-1042.png")}
        />
        <Text style={[styles.practice, styles.learnTypo]}>Practice</Text>
      </View>
      <View style={[styles.groupParent1, styles.languageLayout]}>
        <Image
          style={[styles.groupChild7, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/group-1043.png")}
        />
        <Text style={[styles.language, styles.languageLayout]}>Language</Text>
      </View>
      <View style={[styles.groupParent2, styles.groupParent2Layout]}>
        <Image
          style={[styles.groupChild8, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/group-1041.png")}
        />
        <Text style={[styles.notification, styles.groupParent2Layout]}>
          Notification
        </Text>
      </View>
      <View style={[styles.groupParent3, styles.profileLayout]}>
        <Image
          style={[styles.groupChild9, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/group-1040.png")}
        />
        <Text style={[styles.profile, styles.profileLayout]}>Profile</Text>
      </View>
      <Text style={[styles.yourLessons, styles.helloAfaqPosition]}>
        Your Lessons
      </Text>
      <View style={[styles.maskGroup1, styles.groupLayout]}>
        <View style={[styles.groupParent4, styles.groupLayout]}>
          <ContinueSection />
          <View style={styles.rectangleParent2}>
            <View style={[styles.groupChild10, styles.groupChildLayout]} />
            <View style={[styles.groupChild11, styles.groupChildLayout]} />
          </View>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </View>
      <Text style={[styles.helloAfaq, styles.helloAfaqPosition]}>
        Hello Afaq,
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  home3Position: {
    width: 430,
    left: -1,
    top: -3,
    position: "absolute",
  },
  maskGroupLayout: {
    height: 195,
    width: 170,
    position: "absolute",
  },
  groupChildPosition1: {
    top: 0,
    left: 0,
  },
  home3Child1Layout: {
    left: 222,
    height: 195,
    width: 170,
    borderRadius: Border.br_base,
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  grammerTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  home3Child3Layout: {
    height: 73,
    left: 264,
    width: 86,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupParentLayout1: {
    height: 8,
    width: 125,
    position: "absolute",
  },
  groupChildPosition: {
    height: 6,
    backgroundColor: Color.darkgreen_100,
    borderRadius: Border.br_6xl_5,
    left: 1,
    top: 1,
    position: "absolute",
  },
  youTypo1: {
    color: Color.darkslategray_100,
    fontSize: FontSize.size_xs,
    left: 55,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  youTypo: {
    left: 249,
    color: Color.darkslategray_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  groupParentLayout: {
    height: 63,
    top: 854,
  },
  groupChildLayout1: {
    height: 34,
    width: 34,
    top: 0,
    position: "absolute",
  },
  learnTypo: {
    height: 17,
    color: Color.darkgreen_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: 0,
  },
  languageLayout: {
    width: 68,
    position: "absolute",
  },
  groupParent2Layout: {
    width: 79,
    position: "absolute",
  },
  profileLayout: {
    width: 45,
    position: "absolute",
  },
  helloAfaqPosition: {
    left: 35,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  groupLayout: {
    height: 837,
    width: 430,
    position: "absolute",
  },
  groupChildLayout: {
    width: 48,
    height: 48,
    top: 0,
    position: "absolute",
  },
  home3Child: {
    borderBottomRightRadius: Border.br_35xl,
    borderBottomLeftRadius: Border.br_35xl,
    height: 932,
    backgroundColor: Color.white,
  },
  home3Item: {
    borderBottomRightRadius: Border.br_41xl,
    borderBottomLeftRadius: Border.br_41xl,
    backgroundColor: "rgba(14, 95, 1, 0.57)",
    borderStyle: "solid",
    borderColor: "rgba(14, 95, 1, 0)",
    borderWidth: 1,
    height: 833,
  },
  home3Inner: {
    borderRadius: Border.br_base,
    left: 34,
    width: 170,
    top: 369,
    backgroundColor: Color.white,
  },
  maskGroupChild: {
    left: 0,
    height: 195,
    width: 170,
    position: "absolute",
    borderRadius: Border.br_base,
    backgroundColor: Color.white,
  },
  maskGroup: {
    top: 584,
    left: 34,
    width: 170,
  },
  rectangleView: {
    top: 584,
  },
  home3Child1: {
    top: 369,
  },
  groupWrapper: {
    left: 0,
    top: 0,
  },
  groupView: {
    top: 72,
    left: 113,
  },
  listening: {
    top: 460,
    left: 256,
  },
  speaking: {
    top: 670,
    left: 60,
  },
  grammer: {
    top: 675,
    left: 255,
  },
  reading: {
    top: 463,
    left: 69,
    width: 166,
    height: 52,
  },
  rectangleIcon: {
    top: 380,
  },
  iconBook1: {
    height: "7.78%",
    width: "20.09%",
    top: "41.04%",
    right: "62.15%",
    bottom: "51.19%",
    left: "17.76%",
  },
  home3Child2: {
    top: 596,
    left: 76,
    height: 72,
    width: 86,
    position: "absolute",
  },
  home3Child3: {
    top: 595,
  },
  groupChild: {
    borderRadius: Border.br_51xl,
    backgroundColor: Color.gainsboro,
    left: 0,
    top: 0,
  },
  groupItem: {
    width: 24,
    height: 6,
    backgroundColor: Color.darkgreen_100,
    borderRadius: Border.br_6xl_5,
    left: 1,
    top: 1,
  },
  rectangleParent: {
    top: 737,
    left: 57,
  },
  groupChild1: {
    width: 50,
  },
  rectangleGroup: {
    top: 738,
    left: 246,
  },
  groupChild3: {
    width: 94,
  },
  rectangleContainer: {
    top: 524,
    left: 59,
  },
  groupChild5: {
    width: 71,
  },
  rectangleParent1: {
    top: 523,
    left: 247,
  },
  youCompleted76: {
    top: 497,
  },
  youCompleted15: {
    top: 712,
  },
  youCompleted53: {
    top: 497,
  },
  youCompleted42: {
    top: 712,
  },
  groupIcon: {
    left: 2,
  },
  learn: {
    top: 46,
    color: Color.darkgreen_100,
    width: 39,
    position: "absolute",
  },
  groupParent: {
    left: 20,
    width: 39,
    position: "absolute",
  },
  groupChild6: {
    height: "49.43%",
    width: "49.82%",
    top: "-1.26%",
    right: "24.99%",
    bottom: "51.83%",
    left: "25.19%",
  },
  practice: {
    top: 42,
    width: 56,
    position: "absolute",
  },
  groupContainer: {
    height: "6.43%",
    width: "13.11%",
    top: "92.6%",
    right: "63.9%",
    bottom: "0.97%",
    left: "22.99%",
    position: "absolute",
  },
  groupChild7: {
    left: 17,
  },
  language: {
    height: 17,
    color: Color.darkgreen_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: 0,
    top: 46,
  },
  groupParent1: {
    left: 175,
    height: 63,
    top: 854,
  },
  groupChild8: {
    left: 23,
  },
  notification: {
    height: 17,
    color: Color.darkgreen_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: 0,
    top: 46,
  },
  groupParent2: {
    left: 261,
    height: 63,
    top: 854,
  },
  groupChild9: {
    left: 6,
  },
  profile: {
    height: 17,
    color: Color.darkgreen_100,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: 0,
    top: 46,
  },
  groupParent3: {
    left: 362,
    height: 63,
    top: 854,
  },
  yourLessons: {
    top: 307,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 35,
  },
  groupChild10: {
    borderRadius: 28,
    backgroundColor: "#d6d6d6",
    left: 0,
  },
  groupChild11: {
    left: 54,
    backgroundColor: "#f5f5f6",
    borderRadius: Border.br_base,
  },
  rectangleParent2: {
    top: 298,
    left: 297,
    width: 102,
    height: 48,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.24%",
    width: "4.07%",
    top: "37.31%",
    right: "23.31%",
    bottom: "60.46%",
    left: "72.62%",
  },
  vectorIcon1: {
    height: "1.37%",
    width: "4.53%",
    top: "37.78%",
    right: "10.52%",
    bottom: "60.84%",
    left: "84.94%",
  },
  groupParent4: {
    left: 0,
    top: 0,
  },
  maskGroup1: {
    left: -1,
    top: -3,
    height: 837,
  },
  helloAfaq: {
    top: 137,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.interRegular,
  },
  home3: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Home3;
