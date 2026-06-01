import clubRows from '../list/table';

export const COL_TITLES = 'Титулы Чемпионата';
export const COL_UCL = 'Сезонов в ЛЧ';

export const OY_MAX_TITLES = 'Максимальное количество титулов в Чемпионате';
export const OY_MIN_TITLES = 'Минимальное количество титулов в Чемпионате';
export const OY_MAX_UCL = 'Максимальное количество сезонов в ЛЧ';
export const OY_MIN_UCL = 'Минимальное количество сезонов в ЛЧ';

export type tGroup = {
  id: number;
  'Группа': string | number;
  [OY_MAX_TITLES]: number;
  [OY_MIN_TITLES]: number;
  [OY_MAX_UCL]: number;
  [OY_MIN_UCL]: number;
}[];

export type GroupKey = 'Название клуба' | 'Страна' | 'Год основания';

const makeGroup = (key: GroupKey): tGroup => {
  const groups = new Map<string | number, (typeof clubRows)[number][]>();

  clubRows.forEach((club) => {
    const group = club[key];
    const list = groups.get(group) ?? [];
    list.push(club);
    groups.set(group, list);
  });

  return Array.from(groups.entries()).map(([group, items], index) => {
    const titles = items.map((club) => club[COL_TITLES] as number);
    const ucl = items.map((club) => club[COL_UCL] as number);

    return {
      id: index + 1,
      'Группа': group,
      [OY_MAX_TITLES]: Math.max(...titles),
      [OY_MIN_TITLES]: Math.min(...titles),
      [OY_MAX_UCL]: Math.max(...ucl),
      [OY_MIN_UCL]: Math.min(...ucl),
    };
  });
};

export const byClubName = makeGroup('Название клуба');
export const byCountry = makeGroup('Страна');
export const byYear = makeGroup('Год основания');
