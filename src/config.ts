// Смотрим сюда https://restcountries.com/#api-endpoints-v2 и берём отсюда
// эндпоинты "all" , "/name/" , "alpha?codes="
const BASE_URL = "https://restcountries.com/v2/";

export const ALL_COUNTRIES = BASE_URL + "all?fields=name,capital,flags,population,region";
// export const ALL_COUNTRIES = BASE_URL + "all";

// Принимает имя страны (name) и это имя страны добавляем в конец
export const searchByCountry = (name: string) => BASE_URL + "name/" + name;

export const filterByCode = (codes: string[]) => BASE_URL + "alpha?codes=" + codes.join(",");
