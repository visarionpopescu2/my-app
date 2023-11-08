import { useContext } from 'react';
import { Space, Typography } from 'antd';
import { ArticleCard } from 'components';
import { ARTICLE } from 'types';
import AppContext from 'context/AppContext/AppContext';
import NotificationContext from 'context/NotificationContext/NotificationContext';

function Articles() {
  const { articles, setArticles } = useContext(AppContext);
  const { openNotification } = useContext(NotificationContext);
  
  const removeArticleFromState = async (id: string) => {
    setArticles(articles.filter((item) => item.id+'' !== id));
  }
  
  const updateArticleInState = async (article: ARTICLE) => {
    setArticles(articles.map((item) => item.id === article.id ? article : item));
  }
  
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Typography.Title level={3} style={{marginTop: 0}}>All blog articles</Typography.Title>
      {articles?.map((article: ARTICLE) => (
        <ArticleCard
          key={`article-${article.id}`}
          article={article}
          onDeleteSuccess={removeArticleFromState}
          onEditSuccess={updateArticleInState}
        />
      ))}
    </Space>
  );
};

export default Articles;
