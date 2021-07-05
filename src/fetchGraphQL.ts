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

  // Get the response as JSON
  return response.json()
}

export default fetchGraphQL
