import { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { COLORS } from "../constants/colors";

export default function PlaceDetails({ route }) {
  const selectedPlaceId = route.params.placeId;

  useEffect(() => {}, [selectedPlaceId]);

  function showonMap() {}

  return (
    <ScrollView>
      <Image style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>ADDRESS</Text>
        </View>
        <OutlinedButton icon="map" onPress={showonMap}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: { height: "35%", minHeight: 100, width: "100%" },
  locationContainer: { justifyContent: "center", alignItems: "center" },
  addressContainer: { padding: 20 },
  address: {
    color: COLORS.primary500,
    textAlign: "center",
    fontWeight: "bold",
  },
});
