import { View } from "react-native";
import App from "../components/App.js";

export default function Page() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#212121"
      }}
    >
      <App/>
    </View>
  );
};
