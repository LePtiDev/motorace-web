type GPSCoordinate = [lat: number, lng: number]

interface ItineraryMap {
  container: HTMLAllCollection
}

interface GPSPoint {
  latitude: number
  longitude: number
  name: string
  marker: any
}
