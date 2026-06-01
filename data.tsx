import { IMG } from './constants/images';

export type ClubRecord = {
  id: number;
  img: string;
  title: string;
  description: string[];
};

export type ClubTable = {
  id: number;
  title: string;
  country: string;
  year: number;
  academyGraduates: number;
  uclSeasons: number;
  championshipTitles: number;
  stadiumCapacity: number;
};

const defaultDescription = (title: string, country: string) => [
  `${title} — один из сильнейших футбольных клубов мира. Страна: ${country}.`,
  'Клуб регулярно выступает в национальном чемпионате и еврокубках, имеет большую армию болельщиков.',
];

const clubs: ClubRecord[] = [
  { id: 1, img: IMG.manCity, title: 'Манчестер Сити', description: defaultDescription('Манчестер Сити', 'Англия') },
  { id: 2, img: IMG.arsenal, title: 'ФК Арсенал', description: defaultDescription('ФК Арсенал', 'Англия') },
  { id: 3, img: IMG.manUnited, title: 'ФК Манчестер Юнайтед', description: defaultDescription('ФК Манчестер Юнайтед', 'Англия') },
  { id: 4, img: IMG.psg, title: 'ФК ПСЖ', description: defaultDescription('ФК ПСЖ', 'Франция') },
  { id: 5, img: IMG.bayern, title: 'ФК Бавария Мюнхен', description: defaultDescription('ФК Бавария Мюнхен', 'Германия') },
  { id: 6, img: IMG.juventus, title: 'ФК Ювентус', description: defaultDescription('ФК Ювентус', 'Италия') },
  { id: 7, img: IMG.inter, title: 'Интер Милан', description: defaultDescription('Интер Милан', 'Италия') },
  { id: 8, img: IMG.milan, title: 'Милан', description: defaultDescription('Милан', 'Италия') },
  { id: 9, img: IMG.atletico, title: 'Атлетико Мадрид', description: defaultDescription('Атлетико Мадрид', 'Испания') },
  { id: 10, img: IMG.matchAction, title: 'Спартак', description: defaultDescription('Спартак', 'Россия') },
  { id: 11, img: IMG.arsenalHero, title: 'Арсенал', description: defaultDescription('Арсенал', 'Англия') },
];

export const clubsTable: ClubTable[] = [
  { id: 1, title: 'Манчестер Сити', country: 'Англия', year: 1880, academyGraduates: 4, uclSeasons: 13, championshipTitles: 10, stadiumCapacity: 53.4 },
  { id: 2, title: 'ФК Арсенал', country: 'Англия', year: 1886, academyGraduates: 8, uclSeasons: 22, championshipTitles: 13, stadiumCapacity: 60.7 },
  { id: 3, title: 'ФК Манчестер Юнайтед', country: 'Англия', year: 1878, academyGraduates: 6, uclSeasons: 27, championshipTitles: 20, stadiumCapacity: 74.3 },
  { id: 4, title: 'ФК ПСЖ', country: 'Франция', year: 1970, academyGraduates: 5, uclSeasons: 17, championshipTitles: 12, stadiumCapacity: 47.9 },
  { id: 5, title: 'ФК Бавария Мюнхен', country: 'Германия', year: 1900, academyGraduates: 7, uclSeasons: 40, championshipTitles: 33, stadiumCapacity: 75.0 },
  { id: 6, title: 'ФК Ювентус', country: 'Италия', year: 1897, academyGraduates: 9, uclSeasons: 37, championshipTitles: 36, stadiumCapacity: 41.5 },
  { id: 7, title: 'Интер Милан', country: 'Италия', year: 1908, academyGraduates: 5, uclSeasons: 19, championshipTitles: 19, stadiumCapacity: 75.8 },
  { id: 8, title: 'Милан', country: 'Италия', year: 1899, academyGraduates: 6, uclSeasons: 30, championshipTitles: 19, stadiumCapacity: 75.8 },
  { id: 9, title: 'Атлетико Мадрид', country: 'Испания', year: 1903, academyGraduates: 4, uclSeasons: 17, championshipTitles: 11, stadiumCapacity: 70.5 },
  { id: 10, title: 'Спартак', country: 'Россия', year: 1922, academyGraduates: 12, uclSeasons: 12, championshipTitles: 10, stadiumCapacity: 45.4 },
  { id: 11, title: 'Арсенал', country: 'Англия', year: 1886, academyGraduates: 8, uclSeasons: 22, championshipTitles: 13, stadiumCapacity: 60.7 },
  { id: 12, title: 'Ливерпуль', country: 'Англия', year: 1892, academyGraduates: 7, uclSeasons: 24, championshipTitles: 19, stadiumCapacity: 53.4 },
  { id: 13, title: 'Челси', country: 'Англия', year: 1905, academyGraduates: 6, uclSeasons: 19, championshipTitles: 6, stadiumCapacity: 40.3 },
  { id: 14, title: 'Тоттенхэм', country: 'Англия', year: 1882, academyGraduates: 5, uclSeasons: 7, championshipTitles: 2, stadiumCapacity: 62.8 },
  { id: 15, title: 'Реал Мадрид', country: 'Испания', year: 1902, academyGraduates: 8, uclSeasons: 53, championshipTitles: 35, stadiumCapacity: 81.0 },
  { id: 16, title: 'Барселона', country: 'Испания', year: 1899, academyGraduates: 12, uclSeasons: 32, championshipTitles: 27, stadiumCapacity: 99.4 },
  { id: 17, title: 'Боруссия Дортмунд', country: 'Германия', year: 1909, academyGraduates: 9, uclSeasons: 18, championshipTitles: 8, stadiumCapacity: 81.4 },
  { id: 18, title: 'РБ Лейпциг', country: 'Германия', year: 2009, academyGraduates: 3, uclSeasons: 6, championshipTitles: 0, stadiumCapacity: 47.1 },
  { id: 19, title: 'Байер Леверкузен', country: 'Германия', year: 1904, academyGraduates: 4, uclSeasons: 12, championshipTitles: 0, stadiumCapacity: 30.2 },
  { id: 20, title: 'Рома', country: 'Италия', year: 1927, academyGraduates: 6, uclSeasons: 14, championshipTitles: 3, stadiumCapacity: 70.6 },
  { id: 21, title: 'Наполи', country: 'Италия', year: 1926, academyGraduates: 4, uclSeasons: 9, championshipTitles: 3, stadiumCapacity: 54.7 },
  { id: 22, title: 'Лацио', country: 'Италия', year: 1900, academyGraduates: 4, uclSeasons: 8, championshipTitles: 2, stadiumCapacity: 70.6 },
  { id: 23, title: 'Аякс', country: 'Нидерланды', year: 1900, academyGraduates: 11, uclSeasons: 38, championshipTitles: 36, stadiumCapacity: 55.9 },
  { id: 24, title: 'ПСВ', country: 'Нидерланды', year: 1913, academyGraduates: 6, uclSeasons: 26, championshipTitles: 24, stadiumCapacity: 36.5 },
  { id: 25, title: 'Фейеноорд', country: 'Нидерланды', year: 1908, academyGraduates: 5, uclSeasons: 16, championshipTitles: 16, stadiumCapacity: 51.1 },
  { id: 26, title: 'Бенфика', country: 'Португалия', year: 1904, academyGraduates: 9, uclSeasons: 42, championshipTitles: 38, stadiumCapacity: 64.6 },
  { id: 27, title: 'Порту', country: 'Португалия', year: 1893, academyGraduates: 7, uclSeasons: 35, championshipTitles: 30, stadiumCapacity: 50.0 },
  { id: 28, title: 'Спортинг', country: 'Португалия', year: 1906, academyGraduates: 8, uclSeasons: 18, championshipTitles: 19, stadiumCapacity: 50.1 },
  { id: 29, title: 'Селтик', country: 'Шотландия', year: 1887, academyGraduates: 8, uclSeasons: 37, championshipTitles: 53, stadiumCapacity: 60.8 },
  { id: 30, title: 'Рейнджерс', country: 'Шотландия', year: 1872, academyGraduates: 6, uclSeasons: 33, championshipTitles: 55, stadiumCapacity: 50.8 },
  { id: 31, title: 'Зенит', country: 'Россия', year: 1925, academyGraduates: 7, uclSeasons: 10, championshipTitles: 10, stadiumCapacity: 67.8 },
  { id: 32, title: 'ЦСКА', country: 'Россия', year: 1911, academyGraduates: 6, uclSeasons: 9, championshipTitles: 6, stadiumCapacity: 30.5 },
  { id: 33, title: 'Локомотив', country: 'Россия', year: 1922, academyGraduates: 5, uclSeasons: 7, championshipTitles: 3, stadiumCapacity: 27.3 },
  { id: 34, title: 'Краснодар', country: 'Россия', year: 2008, academyGraduates: 8, uclSeasons: 2, championshipTitles: 0, stadiumCapacity: 35.2 },
  { id: 35, title: 'Динамо Киев', country: 'Украина', year: 1927, academyGraduates: 9, uclSeasons: 38, championshipTitles: 16, stadiumCapacity: 70.1 },
  { id: 36, title: 'Шахтер', country: 'Украина', year: 1936, academyGraduates: 7, uclSeasons: 18, championshipTitles: 14, stadiumCapacity: 52.7 },
  { id: 37, title: 'Галатасарай', country: 'Турция', year: 1905, academyGraduates: 6, uclSeasons: 17, championshipTitles: 23, stadiumCapacity: 52.7 },
  { id: 38, title: 'Фенербахче', country: 'Турция', year: 1907, academyGraduates: 5, uclSeasons: 13, championshipTitles: 28, stadiumCapacity: 50.5 },
  { id: 39, title: 'Бешикташ', country: 'Турция', year: 1903, academyGraduates: 5, uclSeasons: 8, championshipTitles: 16, stadiumCapacity: 42.6 },
  { id: 40, title: 'Андерлехт', country: 'Бельгия', year: 1908, academyGraduates: 8, uclSeasons: 34, championshipTitles: 34, stadiumCapacity: 21.5 },
  { id: 41, title: 'Брюгге', country: 'Бельгия', year: 1891, academyGraduates: 5, uclSeasons: 19, championshipTitles: 18, stadiumCapacity: 29.0 },
  { id: 42, title: 'Ред Булл Зальцбург', country: 'Австрия', year: 1933, academyGraduates: 7, uclSeasons: 7, championshipTitles: 16, stadiumCapacity: 31.9 },
  { id: 43, title: 'Црвена Звезда', country: 'Сербия', year: 1945, academyGraduates: 6, uclSeasons: 28, championshipTitles: 35, stadiumCapacity: 55.5 },
  { id: 44, title: 'Олимпиакос', country: 'Греция', year: 1925, academyGraduates: 5, uclSeasons: 37, championshipTitles: 47, stadiumCapacity: 33.3 },
  { id: 45, title: 'Панатинаикос', country: 'Греция', year: 1908, academyGraduates: 5, uclSeasons: 27, championshipTitles: 20, stadiumCapacity: 69.6 },
  { id: 46, title: 'Славия Прага', country: 'Чехия', year: 1892, academyGraduates: 7, uclSeasons: 12, championshipTitles: 21, stadiumCapacity: 19.4 },
  { id: 47, title: 'Спарта Прага', country: 'Чехия', year: 1893, academyGraduates: 6, uclSeasons: 28, championshipTitles: 36, stadiumCapacity: 18.9 },
  { id: 48, title: 'Легия', country: 'Польша', year: 1916, academyGraduates: 6, uclSeasons: 12, championshipTitles: 15, stadiumCapacity: 31.8 },
  { id: 49, title: 'Динамо Загреб', country: 'Хорватия', year: 1911, academyGraduates: 8, uclSeasons: 21, championshipTitles: 24, stadiumCapacity: 35.1 },
  { id: 50, title: 'Базель', country: 'Швейцария', year: 1893, academyGraduates: 6, uclSeasons: 14, championshipTitles: 20, stadiumCapacity: 37.5 },
];

export default clubs;