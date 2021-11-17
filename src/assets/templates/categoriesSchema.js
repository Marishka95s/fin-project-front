const colorSchema = [
  '#FED057',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
];

const categoriesSchema = [
  'Основные расходы',
  'Продукты',
  'Машина',
  'Забота о себе',
  'Забота о детях',
  'Товары для дома',
  'Образование',
  'Досуг',
  'Другие расходы',
];

const monthOptions = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

const currentYear = new Date().getFullYear();
const years = [0, -1, -2, -3];
const yearOptions = years.map(elem => String(elem + currentYear));

const schemas = { colorSchema, categoriesSchema, yearOptions, monthOptions };

export default schemas;
