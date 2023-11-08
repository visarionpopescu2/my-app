import { render } from '@testing-library/react';
import EditArticleModal from './EditArticleModal';

const ARTICLE = { userId: 1, id: 1, title: 'title', body: 'body' };
const onClose = jest.fn();
const onSuccess = jest.fn();

describe('EditArticleModal', () => {
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

  it('should render EditArticleModal component when it is open', () => {
    let view = render(<EditArticleModal article={ARTICLE} isOpen={true} onClose={onClose} onSuccess={onSuccess}/>);
    expect(view.asFragment()).toMatchSnapshot();
  });
  
  it('should render EditArticleModal component when it is not open', () => {
    let view = render(<EditArticleModal article={ARTICLE} isOpen={false} onClose={onClose} onSuccess={onSuccess}/>);
    expect(view.asFragment()).toMatchSnapshot();
  });
});
