import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../StoreWrapper/StoreWrapper';
import { AntDesign } from '@expo/vector-icons';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import CardBg1 from '../../assets/card_bg1.jpg';
import CardBg2 from '../../assets/card_bg2.jpg';
import CardBg3 from '../../assets/card_bg3.jpg';
import CardBg4 from '../../assets/card_bg4.jpg';
import CardBg5 from '../../assets/card_bg5.jpg';
import CardBg6 from '../../assets/card_bg6.jpg';
import CardBg7 from '../../assets/card_bg7.jpg';
import CardBg8 from '../../assets/card_bg8.jpg';

import CardColor1 from '../../assets/color_1.jpg'
import CardColor2 from '../../assets/color_2.jpg'
import CardColor3 from '../../assets/color_3.jpg'
import CardColor4 from '../../assets/color_4.jpg'
import CardColor5 from '../../assets/color_5.jpg'
import CardColor6 from '../../assets/color_6.jpg'
import CardColor7 from '../../assets/color_7.jpg'
import CardColor8 from '../../assets/color_8.jpg'

const deviceheight = Dimensions.get('window').height;

const Home = () => {

  const [change, setChange] = useState(CardBg1);
  const { dispatch, theme, money, dateOfBirth, name, themeColor } = useContext(StoreContext)

  const CardBgImage = [
    CardBg1,
    CardBg2,
    CardBg3,
    CardBg4,
    CardBg5,
    CardBg6,
    CardBg7,
    CardBg8,
  ]
  const CardBgColor = [
    CardColor1,
    CardColor2,
    CardColor3,
    CardColor4,
    CardColor5,
    CardColor6,
    CardColor7,
    CardColor8,
  ]

  useEffect(() => {
    dispatch({
      type: "theme",
      payload: change,
    })
  }, [change, money])

  function formatNumberWithSpaces(number) {
    const str = number.toString();

    const formattedStr = str.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return formattedStr;
  }

  const formattedNumber = formatNumberWithSpaces(money);

  return (
    <View style={[styles.container, themeColor === true && styles.bgColor]}>

      <View style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex: 4 }}>
        <View style={styles.box}>
          <View style={styles.curtainBox}>
            <View style={styles.curtain} />
            <Image source={theme} style={styles.image1} />
          </View>
          <View style={styles.box2}>
            <Image source={theme} style={styles.image2} />
            <View style={styles.box3}>
              <Text style={styles.text1}>{formattedNumber}</Text>
            </View>

            <View style={styles.box4}>
              <Text style={styles.text2}>{name}</Text>
              <Text style={styles.text2}>{dateOfBirth}</Text>
            </View>
          </View>
        </View>

        <View style={styles.box5}>

          <SafeAreaView>
            <Text style={[styles.choosColor, themeColor === true && styles.textLight]}>Choos colors</Text>
            <FlatList
              data={CardBgColor}
              horizontal
              style={{ marginTop: 7 }}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback onPress={() => setChange(item)}>
                  <View style={{ position: 'relative' }} >

                    {change === item ?
                      <View style={{ position: 'absolute', zIndex: 1, marginHorizontal: 10, borderRadius: 12, width: 250, height: 120, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF55' }} >
                        <AntDesign name="checkcircle" size={44} color="green" />
                      </View> : <View />}

                    <Image
                      source={item}
                      style={{
                        width: 250,
                        height: 120,
                        marginHorizontal: 10,
                        borderRadius: 12,
                      }}
                    />
                  </View>
                </TouchableWithoutFeedback>
              )}
            />
          </SafeAreaView>

          <SafeAreaView>
            <Text style={[styles.choosColor, themeColor === true && styles.textLight]}>Choos image</Text>
            <FlatList
              data={CardBgImage}
              horizontal
              style={{ marginTop: 7 }}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback onPress={() => setChange(item)}>
                  <View style={{ position: 'relative' }} >

                    {change === item ?
                      <View style={{ position: 'absolute', zIndex: 1, marginHorizontal: 10, borderRadius: 12, width: 250, height: 120, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF55' }} >
                        <AntDesign name="checkcircle" size={44} color="green" />
                      </View> : <View />}

                    <Image
                      source={item}
                      style={{
                        width: 250,
                        height: 120,
                        marginHorizontal: 10,
                        borderRadius: 12,
                      }}
                    />
                  </View>
                </TouchableWithoutFeedback>
              )}
            />
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: "100%",
    backgroundColor: 'white'
  },
  box: {
    position: "relative",
    height: "30%",
    alignItems: 'center',

  },
  box2: {
    position: 'absolute',
    bottom: -70,
    width: '90%',
    height: 180,
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#0E89CB",
  },
  choosColor: {
    marginTop: 20,
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 17,
    color: 'black',
  },
  changeBig: {
    backgroundColor: 'gray',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 10,
    maxHeight: deviceheight * 0.4
  },
  changeBox: {
    flexDirection: 'row',
    width: '100%',
    height: 400,
    paddingVertical: 30,
    gap: 30,
  },
  change: {
    gap: 30,
  },
  changeImage: {
    width: 170,
    height: 110,
    borderRadius: 7,
  },
  curtainBox: {
    position: 'relative',
    width: '100%',
  },
  curtain: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#00000099',
    zIndex: 5,
    width: '100%',
  },
  image1: {
    width: "100%",
    height: "100%",
  },
  box21: {
    position: "absolute",
    bottom: -70,
    left: "5%",
    width: "90%",
    height: 180,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#0E89CB",
  },
  image2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  box3: {
    position: 'relative',
    height: "70%",
    display: "flex",
    justifyContent: "center",
    marginHorizontal: 35,
  },
  modalBox: {
    position: 'absolute',
    top: 10,
    right: 15,
    zIndex: 10,
  },
  text1: {
    fontSize: 30,
    fontWeight: 600,
    color: "#fff",
    textAlign: 'right'
  },
  box4: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "30%",
    backgroundColor: "#00000088",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  add: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#0E89CB",
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 0,
  },
  text2: {
    fontSize: 14,
    fontWeight: 600,
    color: "#fff",
  },
  text3: {
    fontSize: 30,
    fontWeight: 600,
    color: "#fff",
  },
  box5: {
    paddingTop: 80,
    height: "60%"
  },
  box6: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bgColor: {
    backgroundColor: '#111'
  },
  textLight: {
    color: 'white'
  }
})
