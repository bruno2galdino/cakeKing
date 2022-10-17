import React from "react";
import {
  View,
  StatusBar,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ImageSlider } from "react-native-image-slider-banner";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SearchForm from "../components/SearchForm";
import CupCakeList from "../components/CupCakeList";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import EStyleSheet from "react-native-extended-stylesheet";

export function ScreenHome() {
  const navigation = useNavigation();

  function openScreenCarrinho() {
    navigation.navigate("screenCarrinho");
  }

  function openScreenInfoProduto(idPro: any) {
    navigation.navigate("screenInfoProduto", { idProduto: idPro});
  }

  function openScreenUsuario() {
    navigation.navigate("screenUsuario");
  }

  return (
    //TODA TELA

    <View style={styles.home}>
      <StatusBar backgroundColor="#ff60a0" barStyle="light-content" />

      <View style={styles.headerButtons}>
        <View style={{ flexDirection: "row-reverse", width: "20%" }}>
          <View style={{ width: "50%" }}>
            <FontAwesome.Button
              name="shopping-cart"
              onPress={openScreenCarrinho}
              backgroundColor="#ff60a0"
              size={EStyleSheet.value('$sizeIcon')}
              style={{ marginEnd: -90, marginStart: 0 }}
            />
          </View>
          <View style={{ width: "50%" }}>
            <FontAwesome.Button
              name="user-circle"
              onPress={openScreenUsuario}
              backgroundColor="#ff60a0"
              size={EStyleSheet.value('$sizeIcon')}
              style={{ marginEnd: -24, marginStart: -2, alignItems: 'center' }}

            />
          </View>
        </View>

        <View
          style={{
            width: "70%",
            paddingRight: "1%",
            flexDirection: "row-reverse",
          }}
        >
          <SearchForm />
        </View>

        <View style={{ width: "10%" }}>
          <MaterialCommunityIcons
            name="microsoft-xbox-controller-menu"
            size={EStyleSheet.value('$sizeIconMenu')}
            onPress={console.log}
            style={{ marginRight: -30 }}
            color="white"
          />
        </View>
      </View>

      <ImageBackground
        source={require("../images/backgrounds/headerBackground.jpg")}
        resizeMode="cover"
        style={styles.headerBanner}
      >
      </ImageBackground>

      <View style={styles.headerBannerSlide}>
        <ImageSlider
          data={[
            { img: require("../images/banners/novoscadastros.jpg") },
            { img: require("../images/banners/cup1.jpg") },
            { img: require("../images/banners/cup2.jpg") },
          ]}
          autoPlay={true}
          timer={10000}
          localImg={true}
          caroselImageStyle={{ height: EStyleSheet.value('$bannerSlide'), backgroundColor: "white" }}
          indicatorContainerStyle={{ top: 10 }}
        />
      </View>

      <View
        style={{
          // height: '50%',
          // width: '100%',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <CupCakeList abreInfoScreen = {openScreenInfoProduto}/>
      </View>

    </View>

  );
}

const styles = EStyleSheet.create({
  home: {
    flex: 1,
    flexDirection: "column",
  },

  headerBanner: {
    height: '4rem'
  },

  headerButtons: {
    height: '2.8rem',
    flexDirection: "row-reverse",
    backgroundColor: "#ff60a0",
    paddingRight: 10,
    alignItems: "center",
  },

  headerBannerSlide: {
    height: "14.6rem",
    elevation: 5,
    shadowOpacity: 0.25,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1
    },
    
  }
});
