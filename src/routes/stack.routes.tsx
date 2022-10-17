import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenHome } from "../screens/Home";
import { ScreenCarrinho } from "../screens/Carrinho";
import { ScreenUsuario } from "../screens/Usuario";
import { ScreenInfoProduto } from "../screens/InfoProduto";
import styles from "../components/SearchForm/styles";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="screenHome"
        options={{
          headerShown: false,
          headerTintColor: "white",
        }}
        component={ScreenHome}
      />

      <Screen
        name="screenCarrinho"
        options={{
          title: "Carrinho",
          headerTintColor: "white",
          headerTransparent: true,
        }}
        component={ScreenCarrinho}
      />

      <Screen
        name="screenUsuario"
        options={{
          title: "Usuario",
          headerTintColor: "white",
          headerTransparent: true,
        }}
        component={ScreenUsuario}
      />

      <Screen
        name="screenInfoProduto"
        options={{
          title: "Detalhes",
          headerTintColor: "white",          
          headerStyle: {
            backgroundColor: '#874626', 
          },
          headerShadowVisible: false,
        }}
        component={ScreenInfoProduto}
      />
    </Navigator>
  );
}
