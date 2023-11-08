import { render } from '@testing-library/react';
import Article from './Article';
import Router, { MemoryRouter } from 'react-router-dom';
import AppContext from 'context/AppContext/AppContext';

const ARTICLE_ID = 1;
const USER = {
  id: '1',
  name: 'name',
  username: 'username',
  email: 'email',
  phone: '123445',
  website: 'www.website.com',
  company: { name: 'company', bs: 'business', catchPhrase: 'description' },
  address: { street: 'street', suite: 'suite', zipcode: '1234', city: 'city', geo: { lat: '11', lng: '22' }}
};
const setArticles = jest.fn();
const ARTICLE = { userId: 1, id: ARTICLE_ID, title: 'title', body: 'body' };

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe('Article', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  
  it('should render Article page with article', () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ id: ARTICLE_ID + '' })
    let view = render(
      <MemoryRouter>
        <AppContext.Provider value={{ user: USER, articles: [ ARTICLE ], setArticles: setArticles }}>
          <Article />
        </AppContext.Provider>
      </MemoryRouter>
    );
    expect(view.asFragment()).toMatchSnapshot();
  });

  it('should render Article page without article', () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ id: 'random' })
    let view = render(
      <MemoryRouter>
        <AppContext.Provider value={{ user: USER, articles: [ ARTICLE ], setArticles: setArticles }}>
          <Article />
        </AppContext.Provider>
      </MemoryRouter>
    );
    expect(view.asFragment()).toMatchSnapshot();
  });
});
