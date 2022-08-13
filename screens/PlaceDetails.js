import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { COLORS } from "../constants/colors";
import { fetchPlaceDetails } from "../util/database";

export default function PlaceDetails({ route, navigation }) {
  const [placeData, setPlaceData] = useState("");
  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    async function loadPlaceData() {
      const place = await fetchPlaceDetails(selectedPlaceId);
      setPlaceData(place);
      navigation.setOptions({ title: place.title });
    }

    loadPlaceData();
  }, [selectedPlaceId]);

  function showonMap() {}

  if (!placeData) {
    return (
      <View style={styles.fallbackText}>
        <Text>Loading place data...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: placeData.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{placeData?.lat}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showonMap}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fallbackText: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { height: "35%", minHeight: 100, width: "100%" },
  locationContainer: { justifyContent: "center", alignItems: "center" },
  addressContainer: { padding: 20 },
  address: {
    color: COLORS.primary500,
    textAlign: "center",
    fontWeight: "bold",
  },
});
