const CATEGORIES = [
  '보안',
  '디자인패턴',
  'IT신기술',
  '네트워크',
  '응집도',
  '결합도',
  '페이지교체',
  '정규형',
  ' 화이트박스테스트',
] as const;

type Category = (typeof CATEGORIES)[number];

type CategoryRoutes = {
  readonly [K in Category]: `/category/${K}`;
};

// 클라이언트 주소
export const ROUTES: { CATEGORY: CategoryRoutes } = {
  CATEGORY: CATEGORIES.reduce((acc, category) => {
    acc[category] = `/category/${category}`;
    return acc;
  }, {} as Record<Category, string>) as CategoryRoutes,
} as const;

// CATEGORY_LIST
export const CATEGORY_LIST = CATEGORIES.map((category) => ({
  title: category,
  link: `/category/${category}`,
}));

// 서버 route
export const API_ROUTES = {
  MODIFIED_TIME: '/api/getModifiedTime',
  QUESTIONS_BY_CATEGORY: (category: string) => `/api/questions/${category}`,
} as const;

export const SECONDS = {
  ONE_DAY: 60 * 60 * 24,
} as const;
