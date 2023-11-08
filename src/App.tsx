import React, {useEffect, useState} from 'react';
import { Sidebar, PageContent, NotificationProvider } from 'components';
import { Layout, Skeleton } from 'antd';
import { getUserDetails, getUserArticles } from 'actions';
import { USER_DETAILS, ARTICLE } from 'types';
import AppContext from 'context/AppContext/AppContext';

const { Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
  padding: '40px 40px 40px 240px',
  minHeight: '100vh'
};

const siderStyle: React.CSSProperties = {
  color: '#fff',
  backgroundColor: '#3ba0e9',
  height: '100vh',
  position: 'fixed'
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<USER_DETAILS>();
  const [articles, setArticles] = useState<ARTICLE[]>([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const user = await getUserDetails();
    if (user?.data) {
      setUser(user.data);
    }
  
    const articles = await getUserArticles();
    if (articles?.data) {
      setArticles(articles.data || []);
    }
    
    setIsLoading(false);
  }

  return (
    <AppContext.Provider value={{ user, articles, setArticles }}>
      <NotificationProvider>
        <Layout>
          <Sider style={siderStyle}>
            <Sidebar />
          </Sider>
          <Layout>
            <Content style={contentStyle}>
              { isLoading && <Skeleton /> }
              { !isLoading && <PageContent /> }
            </Content>
          </Layout>
        </Layout>
      </NotificationProvider>
    </AppContext.Provider>
  );
}

export default App;
