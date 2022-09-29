import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenHome } from "../screens/Home";
import { ScreenCarrinho } from "../screens/Carrinho";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name='screenHome'
                options={{
                    headerShown: false,
                    headerTintColor: 'white',
                }}
                component={ScreenHome}
            />

            <Screen
                name='screenCarrinho'
                options={{
                    title: 'Carrinho',
                    headerTintColor: 'white',
                    headerTransparent: true
                    
                }}
                component={ScreenCarrinho}
            />
        </Navigator>
    )
}