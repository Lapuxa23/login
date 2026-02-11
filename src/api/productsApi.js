const API_URL = 'https://dummyjson.com/products'

export async function getProducts() {
  const response = await fetch(`${API_URL}?limit=12`)

  if (!response.ok) {
    throw new Error('Не удалось загрузить список продуктов')
  }

  const data = await response.json()
  return data.products
}

export async function getProductById(id) {
  const response = await fetch(`${API_URL}/${id}`)

  if (!response.ok) {
    throw new Error('Не удалось загрузить продукт')
  }

  return response.json()
}
