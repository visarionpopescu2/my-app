import { render } from '@testing-library/react';
import Articles from './Articles';
import { MemoryRouter } from 'react-router-dom';
import AppContext from 'context/AppContext/AppContext';
import NotificationContext from '../../context/NotificationContext/NotificationContext';

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
const openNotification = jest.fn();

describe('Articles', () => {
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

  it('should render Articles component', () => {
    let view = render(
      <AppContext.Provider value={{ user: USER, articles: [], setArticles: setArticles }}>
        <NotificationContext.Provider value={{ openNotification: openNotification }}>
          <Articles />
        </NotificationContext.Provider>
      </AppContext.Provider>
    );
    expect(view.asFragment()).toMatchSnapshot();
  });
});
