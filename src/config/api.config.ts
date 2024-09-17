export const SERVER_URL = process.env.SERVER_URL as string
export const API_URL = `${SERVER_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUserUrl = (string: string) => `/users${string}`
export const getStoreUrl = (string: string) => `/stores${string}`
export const getProductUrl = (string: string) => `/products${string}`
export const getCategoryUrl = (string: string) => `/categories${string}`
export const getColorUrl = (string: string) => `/colors${string}`
export const getReviewUrl = (string: string) => `/reviews${string}`
export const getOrderUrl = (string: string) => `/orders${string}`
export const getStatisticUrl = (string: string) => `/statistics${string}`
export const getFileUrl = (string: string) => `/files${string}`
