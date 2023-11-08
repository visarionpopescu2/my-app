import {ReactNode, useContext, useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { ARTICLE } from 'types';
import { Breadcrumb, Typography } from 'antd';
import AppContext from 'context/AppContext/AppContext';
import { ROUTES } from 'routes';

function Article() {
  const { articles } = useContext(AppContext);
  const [article, setArticle] = useState<ARTICLE>();
  const params = useParams();
  
  useEffect(() => {
    if (params.id) {
      setArticle(articles.find((item) => item.id +'' === params.id));
    }
    
  }, [params, articles]);
  
  const breadcrumbItems: { title: string | ReactNode }[] = [
    { title: <Link to={ROUTES.Articles}>Articles</Link> },
    { title: <Typography.Text>Details</Typography.Text> },
  ];
  
  return (
    <div>
      <Breadcrumb items={breadcrumbItems}/>
      <Typography.Title level={3}>{article?.title}</Typography.Title>
      <Typography.Paragraph>{article?.body}</Typography.Paragraph>
    </div>
  );
};

export default Article;
