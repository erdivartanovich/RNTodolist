import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as LocalAuthentication from "expo-local-authentication";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StatusBar as RNStatusBar, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../Navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

enum EResult {
  CANCELLED = "Auth process cancelled",
  DISABLED = "Biometrict disabled",
  ERROR = "There was an error in authentication process",
  SUCCESS = "Succesfully authenticated, please wait ...",
}

const Home = ({ navigation }: Props) => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isBiometricRecordFound, setIsBiometricRecordFound] = useState(false);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EResult>();

  const checkIfBiometricAuthSupported = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    setIsBiometricSupported(compatible);
    const recordFound = await LocalAuthentication.isEnrolledAsync();
    setIsBiometricRecordFound(recordFound);
  };

  const navigate = () => {
    const timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      navigation.navigate("TodoList");
    }, 2000);
  };

  const authenticate = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const results = await LocalAuthentication.authenticateAsync();

      if (results.success) {
        setResult(EResult.SUCCESS);
      } else if (results.error === "unknown") {
        setResult(EResult.DISABLED);
      } else if (
        results.error === "user_cancel" ||
        results.error === "system_cancel" ||
        results.error === "app_cancel"
      ) {
        setResult(EResult.CANCELLED);
      }
    } catch (error) {
      setResult(EResult.ERROR);
    }
    setLoading(false);
  };

  useEffect(() => {
    checkIfBiometricAuthSupported();
  });

  useEffect(() => {
    const description1 = isBiometricSupported
      ? ""
      : "- Face or Fingerprint scanner is not available on this device!";
    const description2 = isBiometricRecordFound
      ? ""
      : "- You need to setup Face or Fingerprint ID before continue";
    setDescription(`${description1}\n${description2}`);
  }, [isBiometricSupported, isBiometricRecordFound]);

  useEffect(() => {
    if (!result) authenticate();
    if (result === EResult.SUCCESS) navigate();
  }, [result]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{description}</Text>
      {result ? <Text style={styles.heading}>{result.toString()}</Text> : null}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: (RNStatusBar.currentHeight || 0) + 30,
    flex: 1,
    backgroundColor: "#FF7700",
  },
  heading: {
    color: "#fff",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    marginLeft: 20,
  },
});

export default Home;
