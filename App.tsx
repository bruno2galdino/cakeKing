import { Routes } from "./src/routes";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider } from "react-redux";
import store from "../cakeking/src/store";


EStyleSheet.build({
  $sizeIcon: '1.5rem',
  $sizeIconMenu: '2.2rem',
  $bannerSlide: '14.6rem',
})

export default function App() {

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}


