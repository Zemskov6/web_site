import { IMG } from '../constants/images';

export interface Club {
  id: number;
  name: string;
  country: string;
  logo: string;
  link: string;
}

export interface DetailedClub {
  id: number;
  name: string;
  image: string;
  founded: string;
  nicknames: string;
  stadium: string;
  link: string;
  description?: string;
}

export interface BannerImage {
  id: number;
  img: string;
  alt: string;
  className: string;
  link?: string;
}

export const topClubs: Club[] = [
  {
    id: 2,
    name: 'ФК Арсенал',
    country: 'Англия',
    logo: IMG.arsenal,
    link: '/club/2',
  },
  {
    id: 3,
    name: 'ФК Манчестер Юнайтед',
    country: 'Англия',
    logo: IMG.manUnited,
    link: '/club/3',
  },
  {
    id: 4,
    name: 'ФК ПСЖ',
    country: 'Франция',
    logo: IMG.psg,
    link: '/club/4',
  },
  {
    id: 5,
    name: 'ФК Бавария Мюнхен',
    country: 'Германия',
    logo: IMG.bayern,
    link: '/club/5',
  },
  {
    id: 6,
    name: 'ФК Ювентус',
    country: 'Италия',
    logo: IMG.juventus,
    link: '/club/6',
  },
];

export const bannerImages: BannerImage[] = [
  {
    id: 1,
    img: IMG.manCity,
    alt: 'Футбольное изображение 1',
    className: 'block1',
    link: '/club/1',
  },
  {
    id: 2,
    img: IMG.matchAction,
    alt: 'Футбольное изображение 2',
    className: 'block2-part1',
    link: '/club/10',
  },
  {
    id: 3,
    img: IMG.arsenalHero,
    alt: 'Футбольное изображение 3',
    className: 'block2-part2',
    link: '/club/2',
  },
  {
    id: 4,
    img: IMG.arsenal,
    alt: 'Футбольное изображение 4',
    className: 'block4',
    link: '/club/2',
  },
  {
    id: 5,
    img: IMG.manUnited,
    alt: 'Футбольное изображение 5',
    className: 'block5',
    link: '/club/3',
  },
  {
    id: 6,
    img: IMG.psg,
    alt: 'Футбольное изображение 6',
    className: 'block3',
    link: '/club/4',
  },
];

export const detailedClubs: DetailedClub[] = [
  {
    id: 7,
    name: 'Интер Милан',
    image: IMG.inter,
    founded: '9 марта 1908 года, Милан, Италия',
    nicknames: '«Нерадзурри» (Чёрно-синие), «Бауска» (Змеи)',
    stadium: '«Джузеппе Меацца» (также известен как «Сан-Сиро»)',
    link: '/club/7',
  },
  {
    id: 9,
    name: 'Атлетико Мадрид',
    image: IMG.atletico,
    founded: '26 апреля 1903 года, Мадрид, Испания',
    nicknames: '«Матрасники», «Красно-белые», «Индиос»',
    stadium: '«Метрополитано» (с 2017 года)',
    link: '/club/9',
    description:
      'Атлетико Мадрид — один из самых титулованных клубов Испании, известный своей сильной обороной и боевым характером. Под руководством Диего Симеоне команда неоднократно выигрывала Ла Лигу и достигала финалов Лиги чемпионов.',
  },
  {
    id: 8,
    name: 'Милан',
    image: IMG.milan,
    founded: '16 декабря 1899 года, Милан, Италия',
    nicknames: '«Россонери» (Красно-чёрные), «Дьяволы»',
    stadium: '«Джузеппе Меацца» (также известен как «Сан-Сиро»)',
    link: '/club/8',
  },
];

const footballClubsData = {
  topClubs,
  bannerImages,
  detailedClubs,
};

export default footballClubsData;
