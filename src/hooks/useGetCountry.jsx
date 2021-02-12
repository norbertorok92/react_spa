import { COUNTRIES } from "../constants/countries";

export const useGetCountry = ( countryCode ) => {
  const userCountry = COUNTRIES.find(
    (country) => country.sortname === countryCode
  );
  return userCountry ? userCountry.name : countryCode;
};
