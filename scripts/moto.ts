import motoJson from './data/motos.json'

export const importMotoData = async () => {
  const { $supabase } = useNuxtApp()
  const motos = motoJson
  const tmpMotos: any[] = []

  for await (const moto of motos) {
    const motoSaved = {
      model: moto.modele,
      brand: moto.rappel_marque,
      category: moto.categorie,
      cylinder: moto.cylindree,
    }

    tmpMotos.push(motoSaved)
  }

  await $supabase.from('motos').insert(tmpMotos)
}
