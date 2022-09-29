import React from "react";
import { View, Button, StatusBar, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as NavigationBar from 'expo-navigation-bar';
import { ImageSlider } from "react-native-image-slider-banner";

export function ScreenHome() {
    const navigation = useNavigation();
    function openScreen() {
        navigation.navigate('screenCarrinho')
    }
    return (
        <View style={{ flex: 1, }}>

            <StatusBar
                backgroundColor="#ff60a0"
                barStyle="light-content"
            />

            <ImageBackground source={require('../images/backgrounds/headerBackground.jpg')} resizeMode='cover'>
                <View style={{ height: 80, width: 80, }}>
                    <Button
                        title="User"
                        onPress={openScreen}
                        color={"purple"}
                    />
                </View>

                <View style={{ height: 80, width: 80, }}>
                    <Button
                        title="Cart"
                        onPress={openScreen}
                    />
                </View>
            </ImageBackground>

            <ImageSlider
                data={[
                    { img: require('../images/banners/novoscadastros.jpg') },
                    { img: require('../images/banners/cup1.jpg') },
                    { img: require('../images/banners/cup2.jpg') }
                ]}
                autoPlay={true}
                timer={10000}
                localImg={true}
                caroselImageContainerStyle={{}}
                caroselImageStyle={{ height: 230, resizeMode: 'cover' }}
                indicatorContainerStyle={{ marginBottom: -35 }}
            />
        </View>
    )
}