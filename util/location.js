const GOOGLE_API_KEY = "AIzaSyCAQ4EFfq4K8RIzHNXHI6e94ziGhaJi9Dk";

export function getMapPreview(lat, lng) {
  const imagePrevieweUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x150&maptype=roadmap
    &markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  console.log(imagePrevieweUrl);
  return imagePrevieweUrl;
}

export async function getAddress(lat, lng) {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch address!");
  }

  const data = await res.json();
  const address = data.results[0].formatted_address;
  return address;
}
