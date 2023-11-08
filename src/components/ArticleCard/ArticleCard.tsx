import {useContext, useState} from 'react';
import { Link} from 'react-router-dom';
import { Card, Popconfirm, Popover, Typography } from 'antd';
import { EditOutlined, ExportOutlined, DeleteOutlined } from '@ant-design/icons';
import { ARTICLE } from 'types';
import { ROUTES } from 'routes';
import { EditArticleModal } from 'components';
import { deleteArticle } from 'actions';
import NotificationContext from 'context/NotificationContext/NotificationContext';

type Props = {
  article: ARTICLE,
  onDeleteSuccess: (id: string) => void
  onEditSuccess: (article: ARTICLE) => void
}

function ArticleCard(props: Props) {
  const { article, onDeleteSuccess, onEditSuccess } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { openNotification } = useContext(NotificationContext);
  
  const toggleEditForm = () => setIsFormOpen(!isFormOpen);
  
  const onDelete = async () => {
    setIsLoading(true);
    const response = await deleteArticle(article.id+'');
  
    if (response.error) {
      openNotification(response.error, 'error')
    } else {
      openNotification('The article has been successfully deleted', 'success');
      onDeleteSuccess(article.id+'');
    }
    setIsLoading(false);
  }
  
  return (
    <>
      <Card
        title={article.title}
        loading={isLoading}
        actions={[
          <EditOutlined key="edit" onClick={toggleEditForm} />,
          
          <Popconfirm
            key="delete"
            title='Delete Article'
            description='Please confirm you want to delete this article'
            onConfirm={onDelete}
          >
            <DeleteOutlined />
          </Popconfirm>,
          
          <Popover content="Go to article page">
            <Link to={`${ROUTES.Articles}/${article.id}`}>
              <ExportOutlined key="open" />,
            </Link>
          </Popover>
        ]}
      >
        <div style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <Typography.Text>{article.body}</Typography.Text>
        </div>
      </Card>
      
      <EditArticleModal article={article} isOpen={isFormOpen} onClose={toggleEditForm} onSuccess={onEditSuccess} />
    </>
  )
}

export default ArticleCard;
