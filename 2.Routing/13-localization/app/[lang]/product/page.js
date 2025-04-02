import { getDictionary } from "../dictionaries"

export default async function ProductPage({params: {lang}}){
    const dict = await getDictionary(lang)// get dictionary by lang param
    return <h1>{dict.products.main}</h1>
}