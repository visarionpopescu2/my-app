import { render } from '@testing-library/react';
import NotificationProvider from './NotificationProvider';

describe('NotificationProvider', () => {
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

  it('should render NotificationProvider component', () => {
    let view = render(
      <NotificationProvider>
        <div>children</div>
      </NotificationProvider>
    )
    expect(view.asFragment()).toMatchSnapshot();
  });
});
