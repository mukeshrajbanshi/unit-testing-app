import * as Sentry from "sentry-expo";
import { StyleSheet, Text, View } from "react-native";

Sentry.init({
  dsn : "https://fb549bdb6137405193396eab71243586@o4504575822987264.ingest.sentry.io/4504575828688896",
  enableExpoDevelopment : true,
  debug : true

})
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Jest unit Testing</Text>
      <Text style={{ fontSize: 30, color: "blue" }}>
        Welcome to deployed Apps
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
