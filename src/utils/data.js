export const getJokes = () => {
  return fetch('https://v2.jokeapi.dev/joke/Programming?type=single&amount=10', {
    method: 'GET'
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(new Error(`Ошибка: статус ${res.status}`))
    })
    .catch(err => console.error(err))
}
