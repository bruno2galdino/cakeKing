import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './stack.routes';
import { StyleSheet, ImageBackground } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

export function Routes() {
    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent',
        },
    };
    const styles = StyleSheet.create({
        image: {
            flex: 1
        }
    });

    NavigationBar.setBackgroundColorAsync("#ff049d");

    return (
        <ImageBackground source={require('../images/backgrounds/userBackground.jpg')} resizeMode='cover' style={styles.image}>
            <NavigationContainer theme={navTheme} >
                <StackRoutes />
            </NavigationContainer>
        </ImageBackground>
    )
}