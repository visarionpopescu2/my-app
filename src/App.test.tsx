import React from 'react';
import { act, render, waitFor } from '@testing-library/react';
import App from './App';
import { getUserDetails, getUserArticles } from 'actions';

jest.mock('actions', () => ({
  getUserDetails: jest.fn().mockResolvedValue({ data: {
      id: '1',
      name: 'name',
      username: 'username',
      email: 'email',
      phone: '123445',
      website: 'www.website.com',
      company: { name: 'company', bs: 'business', catchPhrase: 'description' },
      address: { street: 'street', suite: 'suite', zipcode: '1234', city: 'city', geo: { lat: '11', lng: '22' }}
    } }),
  getUserArticles: jest.fn().mockResolvedValue({ data: [] }),
}));

jest.mock('context/AppContext/AppContext', () => ({
  Provider: () => {},
}));

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('App component', () => {
  it('fetches data and renders correctly',
    async () => {
      render(<App/>);
    
      await act(async () => {
        await waitFor(() => {
          expect(getUserDetails).toHaveBeenCalledTimes(1);
        });
      
        await waitFor(() => {
          expect(getUserArticles).toHaveBeenCalledTimes(1);
        });
      });
    });
});
