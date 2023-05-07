import { baseUrl } from "../../config"


const BASE_URL = baseUrl()

export const Products = async () => {
  try {
    const products = await fetch(`${BASE_URL}/products`)
    const data = await products.json()
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}


export const Checkout = async (products: any) => {

  try {
    if (!products.length) throw new Error('No line items provided')

    const checkout = await fetch(`${BASE_URL}/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(products)
    })

    const data = await checkout.json()

    return data;
  } catch (error: any) {
    throw new Error(error)
  }
}