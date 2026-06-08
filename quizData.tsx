export type tTasks = {
  question: string;
  answer: string;
}[];

export type tQuizzes = {
  id: number;
  type: 'M' | 'S' | 'C' | 'MC';
  title: string;
  tasks: tTasks;
}[];

export const quiz: tQuizzes = [
  {
    id: 1,
    type: 'M',
    title: 'Сопоставьте футболиста и его страну.',
    tasks: [
      {
        question: 'Лионель Месси',
        answer: 'Аргентина',
      },
      {
        question: 'Криштиану Роналду',
        answer: 'Португалия',
      },
      {
        question: 'Килиан Мбаппе',
        answer: 'Франция',
      },
      {
        question: 'Эрлинг Холанд',
        answer: 'Норвегия',
      },
    ],
  },
  {
    id: 2,
    type: 'M',
    title: 'Сопоставьте футбольный клуб и его страну.',
    tasks: [
      {
        question: 'Реал Мадрид',
        answer: 'Испания',
      },
      {
        question: 'Бавария',
        answer: 'Германия',
      },
      {
        question: 'Ювентус',
        answer: 'Италия',
      },
      {
        question: 'ПСЖ',
        answer: 'Франция',
      },
      {
        question: 'Манчестер Сити',
        answer: 'Англия',
      },
    ],
  },
  {
    id: 3,
    type: 'S',
    title: 'Отсортируйте футбольные клубы по количеству побед в Лиге чемпионов (от большего к меньшему).',
    tasks: [
      {
        question: 'Реал Мадрид',
        answer: '1',
      },
      {
        question: 'Милан',
        answer: '2',
      },
      {
        question: 'Бавария',
        answer: '3',
      },
      {
        question: 'Ливерпуль',
        answer: '4',
      },
      {
        question: 'Барселона',
        answer: '5',
      },
    ],
  },
  {
    id: 4,
    type: 'C',
    title: 'Кто из этих футболистов выиграл больше всего Золотых мячей?',
    tasks: [
      {
        question: 'Лионель Месси',
        answer: '1',
      },
      {
        question: 'Криштиану Роналду',
        answer: '0',
      },
      {
        question: 'Зинедин Зидан',
        answer: '0',
      },
    ],
  },
  {
    id: 5,
    type: 'C',
    title: 'В каком клубе начал свою профессиональную карьеру Лионель Месси?',
    tasks: [
      {
        question: 'Барселона',
        answer: '1',
      },
      {
        question: 'Ньюэллс Олд Бойз',
        answer: '0',
      },
      {
        question: 'Ривер Плейт',
        answer: '0',
      },
    ],
  },
  {
    id: 6,
    type: 'MC',
    title: 'Какие из этих клубов выигрывали Лигу чемпионов УЕФА? (выберите несколько)',
    tasks: [
      {
        question: 'Челси',
        answer: '1',
      },
      {
        question: 'Арсенал',
        answer: '0',
      },
      {
        question: 'ПСЖ',
        answer: '1',
      },
      {
        question: 'Тоттенхэм',
        answer: '0',
      },
    ],
  },
];