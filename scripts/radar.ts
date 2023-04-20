import radarJson from './data/radars.json'

export const importRadarData = async () => {
  const { $supabase } = useNuxtApp()
  const radars = radarJson
  const tmpRadars: any[] = []

  for await (const radar of radars) {
    const radarSaved = {
      department: radar.departement.toString(),
      latitude: radar.latitude,
      longitude: radar.longitude,
      equipment: radar.equipement,
      type: radar.type,
      distance_km:
        radar.longueur_troncon_km === '' ? null : radar.longueur_troncon_km,
      max_speed:
        radar.vitesse_vehicules_legers_kmh === ''
          ? null
          : radar.vitesse_vehicules_legers_kmh,
    }

    tmpRadars.push(radarSaved)
  }

  const { error } = await $supabase.from('radars').insert(tmpRadars)
  console.log(error)
}
