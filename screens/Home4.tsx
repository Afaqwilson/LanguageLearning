import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import ContinueContainer from "../components/ContinueContainer";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Home4 = () => {
  return (
    <View style={styles.home4}>
      <Text style={[styles.text, styles.textFlexBox]}>{`
 `}</Text>
      <Image
        style={[styles.home4Child, styles.home4Layout]}
        resizeMode="cover"
        source={require("../assets/group-1099.png")}
      />
      <View style={styles.groupParent}>
        <View style={[styles.groupContainer, styles.learnLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout1]}
            resizeMode="cover"
            source={require("../assets/group-10391.png")}
          />
          <Text style={[styles.learn, styles.learnTypo1]}>Learn</Text>
        </View>
        <View style={styles.groupView}>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/group-10421.png")}
          />
          <Text style={[styles.practice, styles.learnTypo1]}>Practice</Text>
        </View>
        <View style={[styles.groupParent1, styles.languageLayout]}>
          <Image
            style={[styles.groupInner, styles.groupChildLayout1]}
            resizeMode="cover"
            source={require("../assets/group-10431.png")}
          />
          <Text style={[styles.language, styles.languageLayout]}>Language</Text>
        </View>
        <View style={[styles.groupParent2, styles.groupParent2Layout]}>
          <Image
            style={[styles.groupIcon, styles.groupChildLayout1]}
            resizeMode="cover"
            source={require("../assets/group-10411.png")}
          />
          <Text style={[styles.notification, styles.groupParent2Layout]}>
            Notification
          </Text>
        </View>
        <View style={[styles.groupParent3, styles.profileLayout]}>
          <Image
            style={[styles.groupChild1, styles.groupChildLayout1]}
            resizeMode="cover"
            source={require("../assets/group-10401.png")}
          />
          <Text style={[styles.profile, styles.profileLayout]}>Profile</Text>
        </View>
      </View>
      <Text style={[styles.yourLessons, styles.textTypo1]}>Your Lessons</Text>
      <View style={styles.groupParent4}>
        <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
          <View style={[styles.rectangleView, styles.rectangleParentLayout]} />
          <Image
            style={[styles.unitedStatesOfAmericaUs, styles.chinaCnIconLayout]}
            resizeMode="cover"
            source={require("../assets/united-states-of-america-us.png")}
          />
          <Image
            style={[styles.groupChild2, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/group-1.png")}
          />
          <Text style={[styles.text1, styles.textTypo1]}>10%</Text>
          <Text style={[styles.youCompeted10, styles.youTypo]}>
            You Competed 10%
          </Text>
          <Text style={[styles.learnEnglish, styles.learnTypo]}>
            Learn English
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleParentLayout]}>
          <View style={[styles.rectangleView, styles.rectangleParentLayout]} />
          <Image
            style={[styles.chinaCnIcon, styles.chinaCnIconLayout]}
            resizeMode="cover"
            source={require("../assets/china-cn.png")}
          />
          <Image
            style={[styles.groupChild4, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/group-2.png")}
          />
          <Text style={[styles.text2, styles.textTypo]}>30%</Text>
          <Text style={[styles.youCompeted30, styles.youTypo]}>
            You Competed 30%
          </Text>
          <Text style={[styles.learnChinic, styles.learnTypo]}>
            Learn Chinic
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
          <View style={[styles.rectangleView, styles.rectangleParentLayout]} />
          <Image
            style={styles.saudiArabiaSa}
            resizeMode="cover"
            source={require("../assets/saudi-arabia-sa.png")}
          />
          <Image
            style={[styles.groupChild6, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/group-5.png")}
          />
          <Text style={[styles.text3, styles.textTypo1]}>50%</Text>
          <Text style={[styles.youCompeted50, styles.youTypo]}>
            You Competed 50%
          </Text>
          <Text style={[styles.learnArabic, styles.learnTypo]}>
            Learn Arabic
          </Text>
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
          <View style={[styles.rectangleView, styles.rectangleParentLayout]} />
          <Image
            style={[styles.unitedStatesOfAmericaUs, styles.chinaCnIconLayout]}
            resizeMode="cover"
            source={require("../assets/switzerland-ch.png")}
          />
          <Image
            style={[styles.groupChild4, styles.groupChildLayout]}
            resizeMode="cover"
            source={require("../assets/group-6.png")}
          />
          <Text style={[styles.text4, styles.textTypo]}>70%</Text>
          <Text style={[styles.youCompeted70, styles.youTypo]}>
            You Competed 70%
          </Text>
          <Text style={[styles.learnSwiz, styles.learnTypo]}>Learn Swiz</Text>
        </View>
      </View>
      <View style={[styles.home4Item, styles.home4Layout]} />
      <ContinueContainer />
      <Text style={[styles.helloAfaq, styles.textFlexBox]}>Hello Afaq,</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  home4Layout: {
    width: 430,
    position: "absolute",
  },
  learnLayout: {
    width: 39,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 34,
    width: 34,
    top: 0,
    position: "absolute",
  },
  learnTypo1: {
    height: 17,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    left: 0,
    textAlign: "left",
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
  textTypo1: {
    color: Color.gray_300,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 91,
    width: 370,
    left: 0,
    position: "absolute",
  },
  chinaCnIconLayout: {
    height: 53,
    width: 71,
    borderRadius: Border.br_mini,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 59,
    width: 59,
    left: 298,
    position: "absolute",
  },
  youTypo: {
    opacity: 0.8,
    color: Color.darkslategray_200,
    left: 100,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  learnTypo: {
    fontSize: FontSize.size_5xl,
    left: 100,
    color: Color.gray_300,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    top: 34,
    color: Color.gray_300,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  text: {
    top: 427,
    left: 135,
    color: Color.white,
    width: 145,
    height: 27,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  home4Child: {
    height: 935,
    left: 0,
    top: 0,
  },
  groupChild: {
    left: 2,
  },
  learn: {
    color: Color.gray_100,
    height: 17,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    top: 46,
    width: 39,
    position: "absolute",
  },
  groupContainer: {
    height: 63,
    left: 0,
    top: 0,
  },
  groupItem: {
    height: "49.43%",
    width: "49.82%",
    top: "-1.26%",
    right: "24.99%",
    bottom: "51.83%",
    left: "25.19%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  practice: {
    top: 42,
    width: 56,
    color: Color.gray_100,
    height: 17,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  groupView: {
    height: "94.55%",
    width: "14.54%",
    top: "5.45%",
    right: "65.28%",
    bottom: "0%",
    left: "20.18%",
    position: "absolute",
  },
  groupInner: {
    left: 17,
  },
  language: {
    color: Color.darkgreen_100,
    height: 17,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    left: 0,
    textAlign: "left",
    width: 68,
    top: 46,
  },
  groupParent1: {
    left: 155,
    height: 63,
    top: 0,
  },
  groupIcon: {
    left: 23,
  },
  notification: {
    height: 17,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    left: 0,
    textAlign: "left",
    color: Color.gray_100,
    top: 46,
  },
  groupParent2: {
    left: 241,
    height: 63,
    top: 0,
  },
  groupChild1: {
    left: 6,
  },
  profile: {
    height: 17,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    left: 0,
    textAlign: "left",
    color: Color.gray_100,
    top: 46,
  },
  groupParent3: {
    left: 341,
    height: 63,
    top: 0,
  },
  groupParent: {
    top: 855,
    left: 20,
    width: 386,
    height: 63,
    position: "absolute",
  },
  yourLessons: {
    top: 303,
    left: 39,
    fontSize: FontSize.size_3xl,
  },
  rectangleView: {
    borderRadius: Border.br_8xl,
    top: 0,
    backgroundColor: Color.white,
  },
  unitedStatesOfAmericaUs: {
    top: 19,
  },
  groupChild2: {
    top: 16,
  },
  text1: {
    top: 33,
    left: 309,
    fontSize: FontSize.size_xl,
    color: Color.gray_300,
  },
  youCompeted10: {
    top: 63,
  },
  learnEnglish: {
    top: 31,
  },
  rectangleParent: {
    top: 0,
  },
  chinaCnIcon: {
    top: 16,
  },
  groupChild4: {
    top: 17,
  },
  text2: {
    left: 307,
  },
  youCompeted30: {
    top: 52,
  },
  learnChinic: {
    top: 20,
  },
  rectangleGroup: {
    top: 114,
  },
  saudiArabiaSa: {
    height: 54,
    width: 71,
    borderRadius: Border.br_mini,
    left: 16,
    top: 19,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild6: {
    top: 19,
  },
  text3: {
    top: 37,
    left: 308,
    fontSize: FontSize.size_xl,
    color: Color.gray_300,
  },
  youCompeted50: {
    top: 57,
  },
  learnArabic: {
    top: 25,
  },
  rectangleContainer: {
    top: 222,
  },
  text4: {
    left: 309,
  },
  youCompeted70: {
    top: 55,
  },
  learnSwiz: {
    top: 23,
  },
  rectangleParent1: {
    top: 330,
  },
  groupParent4: {
    top: 370,
    left: 30,
    height: 421,
    width: 370,
    position: "absolute",
  },
  home4Item: {
    top: -5,
    left: -1,
    borderBottomRightRadius: Border.br_31xl,
    borderBottomLeftRadius: Border.br_31xl,
    height: 270,
    backgroundColor: Color.white,
  },
  helloAfaq: {
    top: 162,
    left: 34,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
  },
  home4: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Home4;
