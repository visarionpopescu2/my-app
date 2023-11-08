import { render } from '@testing-library/react';
import CompanyCard from './CompanyCard';

const COMPANY = { name: 'company', bs: 'business', catchPhrase: 'description' }

describe('CompanyCard', () => {
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

  it('should render CompanyCard component when it has company as prop', () => {
    let view = render(<CompanyCard company={COMPANY} />);
    expect(view.asFragment()).toMatchSnapshot();
  });
  
  it('should render CompanyCard component when it does not have company as prop', () => {
    let view = render(<CompanyCard company={undefined} />);
    expect(view.asFragment()).toMatchSnapshot();
  });
});
