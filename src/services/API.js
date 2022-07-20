const BASE_URL = "http://contest.elecard.ru/frontend_data/"

export const GET = async path => {
  try {
    const response = await fetch(BASE_URL + path, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    throw new Error(`Ошибка выполения запроса.`);
  }
};