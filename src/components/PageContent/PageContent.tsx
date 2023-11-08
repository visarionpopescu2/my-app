import { useRoutes } from 'react-router-dom';
import routes from 'routes';

function PageContent() {
  return (
    <div>
      {useRoutes(routes())}
    </div>
  );
};

export default PageContent;
