// Асинхронная функция
const getResourse = async (url) => {
  // 'await' ждёт ответ от сервера, только потом заполняет 'res'
  const res = await fetch(url);
  // аналогично ждёт 'res' и заполняет 'body'
  const body = await res.json();
  return body;
}

getResourse('https://swapi.dev/api/people/1/')
  .then(body => {
    console.log(body);
  })