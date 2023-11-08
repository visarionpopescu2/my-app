import { render } from '@testing-library/react';
import ArticleCard from './ArticleCard';
import {MemoryRouter} from 'react-router-dom';

const ARTICLE = { userId: 1, id: 1, title: 'title', body: 'body' };
const onDeleteSuccess = jest.fn();
const onEditSuccess = jest.fn();

describe('ArticleCard', () => {
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

  it('should render ArticleCard component', () => {
    let view = render(
      <MemoryRouter>
        <ArticleCard article={ARTICLE} onDeleteSuccess={onDeleteSuccess} onEditSuccess={onEditSuccess} />
      </MemoryRouter>
    );
    expect(view.asFragment()).toMatchSnapshot();
  })
});
