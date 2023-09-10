export async function refreshPageAndList(URL) {
  const response = await fetch(URL)
  const data = await response.json()
  const { next, results } = data

  return ({next, results})
}