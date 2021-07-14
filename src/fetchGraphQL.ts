async function fetchGraphQL(text, variables) {
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch(process.env.API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
    credentials: 'include',
  })

  const jsonResponse = await response.json()

  if (jsonResponse?.errors?.length) {
    throw new Error(jsonResponse?.errors[0]?.message || 'Unexpecte error')
  }

  // Get the response as JSON
  return jsonResponse
}

export default fetchGraphQL
