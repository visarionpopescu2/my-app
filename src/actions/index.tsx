import { httpRequest } from './httpRequest';
import { USER_DETAILS, ARTICLE } from 'types';

const USER_ID = process.env.REACT_APP_USER_ID;
const USER_API = `${process.env.REACT_APP_ROOT_URL}/users`;
const POSTS_API = `${process.env.REACT_APP_ROOT_URL}/posts`;

export const getUserDetails = async (): Promise<{data?: USER_DETAILS, error?: string }> => {
  try {
    const response = await httpRequest(`${USER_API}/${USER_ID}`, 'GET');
    return response;
  } catch (err) {
    return { error: `Error while fetching user details: ${(err as Error).message}` };
  }
}

export const getUserArticles = async (): Promise<{data?: ARTICLE[], error?: string }> => {
  try {
    const response = await httpRequest(`${USER_API}/${USER_ID}/posts`, 'GET');
    return response
  } catch(err) {
    return { error: `Error while fetching user's articles: ${(err as Error).message}` };
  }
}

export const editArticle = async (article: ARTICLE): Promise<{data?: any, error?: string }> => {
  try {
    const response = await httpRequest(`${POSTS_API}/${article.id}`, 'PUT', article);
    return response;
  } catch (err) {
    return { error: `Error while editing article: ${(err as Error).message}` };
  }
}

export const deleteArticle = async (articleId: string): Promise<{data?: any, error?: string }> => {
  try {
    const response = await httpRequest(`${POSTS_API}/${articleId}`, 'DELETE');
    return response;
  } catch (err) {
    return { error: `Error while deleting article: ${(err as Error).message}` };
  }
}
