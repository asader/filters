define(() => [{
  countries: [{
    cities: [
      {
        region: 'Region1',
        name: 'Уфа',
        value: '3',
        important: false,
        schools: [{ name: 'Уфа Школа1', value: 'ufaSc1' }, { name: 'Уфа Школа2', value: 'ufaSc2' }],
        univers: [{ name: 'Уфа Универ1', value: 'ufaUn1' }, { name: 'Уфа Универ2', value: 'ufaUn2' }],
      },
      {
        region: 'Region1',
        name: 'Крым',
        value: '4',
        important: false,
        schools: [{ name: 'Крым Школа1', value: 'KrimSc1' }, { name: 'Крым Школа2', value: 'KrimSc2' }],
        univers: [{ name: 'Крым Универ1', value: 'KrimUn1' }, { name: 'Крым Универ2', value: 'KrimUn2' }],
      },
      {
        region: 'Region1',
        name: 'Москва',
        value: '1',
        important: true,
        schools: [{ name: 'Москва Школа1', value: 'moscowSc1' }, { name: 'Москва Школа2', value: 'moscowSc2' }],
        univers: [{ name: 'Москва Универ1', value: 'moscowUn1' }, { name: 'Москва Универ2', value: 'moscowUn2' }],
      },
      {
        region: 'Region1',
        name: 'Санкт-Петербург',
        value: '2',
        important: true,
        schools: [{ name: 'СПб Школа1', value: 'spbSc1' }, { name: 'СПб Школа2', value: 'spbSc2' }],
        univers: [{ name: 'СПб Универ1', value: 'spbUn1' }, { name: 'СПб Универ2', value: 'spbUn2' }],
      },
    ],
    name: 'Россия',
    value: '1',
  }, {
    cities: [
      {
        name: 'Уфа',
        important: false,
        schools: [{ name: 'asdfasdf' }, { name: 'asdfsd' }],
        univers: [{ name: 'some1' }, { name: 'some2' }],
      },
      {
        name: 'Крым',
        important: false,
        schools: [{ name: 'some1' }, { name: 'some2' }],
        univers: [{ name: 'some1' }, { name: 'some2' }],
      },
      {
        name: 'Москва',
        important: true,
        schools: [{ name: 'some1' }, { name: 'some2' }],
        univers: [{ name: 'some1' }, { name: 'some2' }],
      },
      {
        name: 'Санкт-Петербург',
        important: true,
        schools: [{ name: 'some1' }, { name: 'some2' }],
        univers: [{ name: 'some1' }, { name: 'some2' }],
      },
      {
        name: 'Казань',
        important: false,
        schools: [{ name: 'some1' }, { name: 'some2' }],
        univers: [{ name: 'some1' }, { name: 'some2' }],
      },
      {
        name: 'Краснодар',
        important: false,
        price: 98.3,
        schools: [{ name: 'some1' }, { name: 'some2' }],
        univers: [{ name: 'some1' }, { name: 'some2' }],
      },
    ],
    name: 'Ukraine',
  }],
  gender: [{ name: 'Мужчина', value: 'm' }, { name: 'Женщина', value: 'f' }],

  ages: [{ value: 16 }, { value: 17 }, { value: 18 }, { value: 19 }, { value: 20 }, { value: 21 }, { value: 22 }, { value: 23 }, { value: 24 }, { value: 25 }, { value: 26 }, { value: 27 }, { value: 28 }, { value: 29 }, { value: 30 }, { value: 31 }, { value: 32 }, { value: 33 }, { value: 34 }, { value: 35 }, { value: 36 }, { value: 37 }, { value: 38 }, { value: 39 }, { value: 40 }, { value: 41 }, { value: 42 }, { value: 43 }, { value: 44 }, { value: 45 }, { value: 46 }, { value: 47 }, { value: 48 }, { value: 49 }, { value: 50 }, { value: 51 }, { value: 52 }, { value: 53 }, { value: 54 }, { value: 55 }, { value: 56 }, { value: 57 }, { value: 58 }, { value: 59 }, { value: 60 }, { value: 61 }, { value: 62 }, { value: 63 }, { value: 64 }, { value: 65 }, { value: 66 }, { value: 67 }, { value: 68 }, { value: 69 }, { value: 70 }, { value: 71 }, { value: 72 }, { value: 73 }, { value: 74 }, { value: 75 }, { value: 76 }, { value: 77 }, { value: 78 }, { value: 79 }, { value: 80 }],

  years: [{ value: 2003 }, { value: 2002 }, { value: 2001 }, { value: 2000 }, { value: 1999 }, { value: 1998 }, { value: 1997 }, { value: 1996 }, { value: 1995 }, { value: 1994 }, { value: 1993 }, { value: 1992 }, { value: 1991 }, { value: 1990 }, { value: 1989 }, { value: 1988 }, { value: 1987 }, { value: 1986 }, { value: 1985 }, { value: 1984 }, { value: 1983 }, { value: 1982 }, { value: 1981 }, { value: 1980 }, { value: 1979 }, { value: 1978 }, { value: 1977 }, { value: 1976 }, { value: 1975 }, { value: 1974 }, { value: 1973 }, { value: 1972 }, { value: 1971 }, { value: 1970 }, { value: 1969 }, { value: 1968 }, { value: 1967 }, { value: 1966 }, { value: 1965 }, { value: 1964 }, { value: 1963 }, { value: 1962 }, { value: 1961 }, { value: 1960 }, { value: 1959 }, { value: 1958 }, { value: 1957 }, { value: 1956 }, { value: 1955 }, { value: 1954 }, { value: 1953 }, { value: 1952 }, { value: 1951 }, { value: 1950 }, { value: 1949 }, { value: 1948 }, { value: 1947 }, { value: 1946 }, { value: 1945 }, { value: 1944 }, { value: 1943 }, { value: 1942 }, { value: 1941 }, { value: 1940 }, { value: 1939 }, { value: 1938 }, { value: 1937 }, { value: 1936 }, { value: 1935 }, { value: 1934 }, { value: 1933 }, { value: 1932 }, { value: 1931 }, { value: 1930 }, { value: 1929 }, { value: 1928 }, { value: 1927 }, { value: 1926 }, { value: 1925 }, { value: 1924 }, { value: 1923 }, { value: 1922 }, { value: 1921 }, { value: 1920 }, { value: 1919 }, { value: 1918 }, { value: 1917 }, { value: 1916 }, { value: 1915 }, { value: 1914 }, { value: 1913 }, { value: 1912 }, { value: 1911 }, { value: 1910 }, { value: 1909 }, { value: 1908 }, { value: 1907 }, { value: 1906 }, { value: 1905 }, { value: 1904 }, { value: 1903 }, { value: 1902 }, { value: 1901 }],
  months: [{ name: 'Январь', value: '1' }, { name: 'Февраль', value: '2' }, { name: 'Март', value: '3' }, {
    name: 'Апрель',
    value: '4',
  }, { name: 'Май', value: '5' }, { name: 'Июнь', value: '6' }, { name: 'Июль', value: '7' }, {
    name: 'Август',
    value: '8',
  }, { name: 'Сентябрь', value: '9' }, { name: 'Октябрь', value: '10' }, {
    name: 'Ноябрь',
    value: '11',
  }, { name: 'Декабрь', value: '12' }],
  days: [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }, { value: 9 }, { value: 10 }, { value: 11 }, { value: 12 }, { value: 13 }, { value: 14 }, { value: 15 }, { value: 16 }, { value: 17 }, { value: 18 }, { value: 19 }, { value: 20 }, { value: 21 }, { value: 22 }, { value: 23 }, { value: 24 }, { value: 25 }, { value: 26 }, { value: 27 }, { value: 28 }, { value: 29 }, { value: 30 }, { value: 31 }],
}]);
