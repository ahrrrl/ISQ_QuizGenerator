// 프론트 route
export const ROUTES = {
  CATEGORY: {
    SAFE: '/category/보안',
    DESIGN_PATTERN: '/category/디자인패턴',
    IT_TECH: '/category/IT신기술',
    NETWORK: '/category/네트워크',
  },
} as const;

// 서버 route
export const API_ROUTES = {
  MODIFIED_TIME: '/api/getModifiedTime',
  QUESTIONS_BY_CATEGORY: (category: string) => `/api/questions/${category}`,
} as const;

export const SECONDS = {
  ONE_DAY: 60 * 60 * 24,
} as const;

export const CATEGORY_LIST = [
  { title: '보안', link: '/category/보안' },
  { title: '디자인패턴', link: '/category/디자인패턴' },
  { title: 'IT신기술', link: '/category/IT신기술' },
  { title: '네트워크', link: '/category/네트워크' },
] as const;
