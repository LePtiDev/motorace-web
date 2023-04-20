// Imports
import axios from 'axios'

// Function to get the geocoding by text
export const getGeocoding = async (text: string) => {
  const runtimeConfig = useRuntimeConfig()

  // Axios call
  const result = await axios({
    url: `https://graphhopper.com/api/1/geocode?q=${text}&locale=fr&key=${runtimeConfig.public.graphhopperApiKey}`,
    method: 'get',
  })

  return result.data.hits
}

// Function to get an itinerary normal
export const normalItinerary = async (start: { latitude: number; longitude: number }, end: { latitude: number; longitude: number }) => {
  const runtimeConfig = useRuntimeConfig()

  // Axios call
  const result = await axios({
    url: `https://graphhopper.com/api/1/route?point=${start.latitude},${start.longitude}&point=${end.latitude},${end.longitude}&profile=car&locale=fr&calc_points=true&points_encoded=false&key=${runtimeConfig.public.graphhopperApiKey}`,
    method: 'get',
  })

  return result.data
}
