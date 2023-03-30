export async function getProduct() {
  const response = await fetch('https://63d271c606556a0fdd3c55ed.mockapi.io/users')
  const jsonData = await response.json()
  return jsonData
}

export default async function handler(req, res) {
  const jsonData = await getProduct()
  res.status(200).json(jsonData)
}
