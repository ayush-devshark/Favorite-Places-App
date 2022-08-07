const GOOGLE_API_KEY = "AIzaSyCAQ4EFfq4K8RIzHNXHI6e94ziGhaJi9Dk";

export function getMapPreview(lat, lng) {
  const imagePrevieweUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x150&maptype=roadmap
    &markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  console.log(imagePrevieweUrl);
  return imagePrevieweUrl;
}
