import { useContext } from 'react';
import { Row, Col } from 'antd';
import AppContext from 'context/AppContext/AppContext';
import { UserCard, CompanyCard } from 'components';

function Dashboard() {
  const { user } = useContext(AppContext);

  return (
    <Row gutter={16}>
      <Col xs={24} lg={12} style={{ padding: '8px'}}>
        <UserCard user={user} />
      </Col>
      <Col xs={24} lg={12} style={{ padding: '8px'}}>
        <CompanyCard company={user?.company} />
      </Col>
    </Row>
  );
};

export default Dashboard;
