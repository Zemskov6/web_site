import { clubsTable } from '../data';

const clubRows = clubsTable.map((club) => ({
  id: club.id,
  'Название клуба': club.title,
  'Страна': club.country,
  'Год основания': club.year,
  'Число воспитанников академии ФК в основе': club.academyGraduates,
  'Сезонов в ЛЧ': club.uclSeasons,
  'Титулы Чемпионата': club.championshipTitles,
  'Вместимость домашнего стадиона, тыс.чел': club.stadiumCapacity,
}));

export default clubRows;