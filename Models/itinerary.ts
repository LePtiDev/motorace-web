import { Ref } from 'vue'
// @ts-ignore
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import { normalItinerary } from '~/api/graphhopper'

export class Itinerary {
  // Position - Departure
  public departure: Ref = ref<GPSPoint>()
  public departureMarker: Ref = ref<any>()

  // Position - Arrival
  public arrival: Ref = ref<GPSPoint>()
  public arrivalMarker: Ref = ref<any>()

  // Itinerary
  public itineraryPoints: Ref = ref<[[number, number]]>()
  public itineraryGeoJSON: Ref = ref()

  // Map
  public map: Ref<any> = ref()

  // =========================================================================== Map

  /*
    Set the map ref to access to it
  */
  public setMap = (map: ItineraryMap) => {
    this.map.value = map
  }

  /*
    Show the itinerary
  */
  public showItinerary = () => {
    this.itineraryGeoJSON.value = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            properties: {},
            coordinates: this.itineraryPoints.value,
          },
        },
      ],
    }
    this.map.value.addSource('LineString', {
      type: 'geojson',
      data: this.itineraryGeoJSON.value,
    })
    this.map.value.addLayer({
      id: 'LineString',
      type: 'line',
      source: 'LineString',
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-color': '#BF93E4',
        'line-width': 5,
      },
    })

    this.featBoundsOnItinerary()
  }

  public featBoundsOnItinerary = () => {
    const coordinates = this.itineraryGeoJSON.value.features[0].geometry.coordinates

    const bounds = new mapboxgl.LngLatBounds(coordinates[0], coordinates[0])

    for (const coord of coordinates) {
      bounds.extend(coord)
    }

    this.map.value.fitBounds(bounds, {
      padding: 80,
    })
  }

  // =========================================================================== Marker
  /*
    Set the departure point
  */
  public setDeparture = (address: GPSPoint): void => {
    this.map.value.flyTo({
      center: [address.longitude, address.latitude],
      duration: 2000,
      zoom: 10,
    })

    // Add marker
    if (this.departureMarker.value) {
      this.departureMarker.value.remove()
    }
    this.departureMarker.value = new mapboxgl.Marker().setLngLat([address.longitude, address.latitude]).addTo(this.map.value)

    // Set Variables
    this.departure.value = address
  }

  /*
    Set the arrival point
  */
  public setArrival = (address: GPSPoint): void => {
    // Add marker
    if (this.arrival.value) {
      this.arrival.value.remove()
    }
    this.arrivalMarker.value = new mapboxgl.Marker().setLngLat([address.longitude, address.latitude]).addTo(this.map.value)

    // Set Variables
    this.arrival.value = address
  }

  // =========================================================================== Itinerary Calc
  public calcNormalItinerary = async () => {
    const itinerary = await normalItinerary(
      { latitude: this.departure.value.latitude, longitude: this.departure.value.longitude },
      { latitude: this.arrival.value.latitude, longitude: this.arrival.value.longitude }
    )
    console.log(itinerary)
    this.itineraryPoints.value = itinerary.paths[0].points.coordinates
  }
}

export const itinerary: Itinerary = reactive(new Itinerary())
