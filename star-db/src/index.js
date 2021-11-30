// Асинхронная функция
const getResourse = async url => {
  const res = await fetch(url)

  // проверка ответа от сервера
  if (!res.ok) {
    throw new Error(`${url}, received ${res.status}`)
  }
  const body = await res.json()
  return body
}

getResourse('https://swapi.dev/api/people/1122313/')
  .then(body => {
    console.log(body)
  })
  //отлавливает ошибки, но не серверные, выше отдельная проверка
  .catch(err => {
    console.error('Could not fetch', err)
  })
