import { render } from '@testing-library/react';
import Sidebar from './Sidebar';
import { MemoryRouter } from 'react-router-dom';
import AppContext from 'context/AppContext/AppContext';

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

describe('Sidebar', () => {
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

  it('should render Sidebar component', () => {
    let view = render(
      <MemoryRouter>
        <AppContext.Provider value={{ user: USER, articles: [], setArticles: setArticles }}>
          <Sidebar />
        </AppContext.Provider>
      </MemoryRouter>
    )
    expect(view.asFragment()).toMatchSnapshot();
  });
});
