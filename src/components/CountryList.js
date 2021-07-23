import styled from 'styled-components';
import CountryItem from './CountryItem';

const List = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
`;

const CountryList = ({ allCountries, query, filter }) => {
  const filteredCountries = filter
    ? allCountries.filter(country => country.region.toLowerCase() === filter)
    : allCountries;
  const searchedCountries = query
    ? filteredCountries.filter(country =>
        country.name.toLowerCase().includes(query)
      )
    : filteredCountries;

  return (
    <List>
      {searchedCountries.map(country => (
        <CountryItem country={country} key={country.alpha3Code} />
      ))}
    </List>
  );
};

export default CountryList;
