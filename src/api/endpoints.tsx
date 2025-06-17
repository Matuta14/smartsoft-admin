const BASE_URL = import.meta.env.VITE_BASE_URL;

const clientUrl = `${BASE_URL}/Api/Client`;
const loginUrl = `${clientUrl}/Login`;
const registerUrl = `${clientUrl}/Register`;
const wordUrl = `${clientUrl}/AddWord`;
const allWordUrl = `${clientUrl}/GetAllWords`;
const editWordUrl = `${clientUrl}/EditWord`;
const deleteWordUrl = `${clientUrl}/DeleteWord`;
const countriesUrl =
  'https://restcountries.com/v3.1/all?fields=name,region,capital,currencies,languages,independent';
export {
  allWordUrl,
  editWordUrl,
  deleteWordUrl,
  loginUrl,
  registerUrl,
  wordUrl,
  countriesUrl,
};
