

const BASE_URL = 'https://api.plushere.com.br'
export const Products = async () => {
  const products = await fetch(`${BASE_URL}/products`)
  const data = await products.json()
  return data
}


export const Checkout = async (products: any) => {
  const checkout = await fetch(`${BASE_URL}/create-checkout-session`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(products)
  })

  const data = await checkout.json()

  return data;
}