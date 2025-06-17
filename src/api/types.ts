type registerType = {
  username: string;
  password: string;
  confirm_password: string;
};
type loginType = {
  username: string;
  password: string;
};

type userType = {
  username: string;
  token: string;
  _id: string;
};
type wordType = {
  national: string;
  foreign: string;
};
type wordResponse = {
  _id: string;
  national: string;
  foreign: string;
};
type country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [languageCode: string]: {
        official: string;
        common: string;
      };
    };
  };
  currencies: {
    [currencyCode: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  region: string;
  languages: {
    [languageCode: string]: string;
  };
};

type countryResponse = country[];

export {
  registerType,
  loginType,
  wordType,
  wordResponse,
  countryResponse,
  country,
  userType,
};
