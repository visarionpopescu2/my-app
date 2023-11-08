import { render } from '@testing-library/react';
import UserCard from './UserCard';

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

describe('UserCard', () => {
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
  
  it('should render UserCard component when has user as prop', () => {
    let view = render(<UserCard user={USER} />);
    expect(view.asFragment()).toMatchSnapshot();
  });
  
  it('should render UserCard component when does not have user as prop', () => {
    let view = render(<UserCard user={undefined} />);
    expect(view.asFragment()).toMatchSnapshot();
  })
});
