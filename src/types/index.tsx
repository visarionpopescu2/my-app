export type ADDRESS = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string
  }
}

export type COMPANY = {
  name: string,
  catchPhrase: string,
  bs: string
}

export type USER_DETAILS = {
  id: string,
  name: string,
  username: string,
  email: string,
  address: ADDRESS,
  phone: string,
  website: string,
  company: COMPANY
}

export type ARTICLE = {
  userId: number,
  id: number,
  title: string,
  body: string
}

export type NOTIFICATION_TYPE = 'success' | 'info' | 'warning' | 'error';

export type APP_STATE = {
  user?: USER_DETAILS,
  articles: ARTICLE[],
  setArticles: (articles: ARTICLE[]) => void
}
