import { USER_DETAILS } from 'types';
import {Card, Col, Image, Row, Typography} from 'antd';

function UserCard(props: { user: USER_DETAILS | undefined }) {
  const { user } = props;
  
  const buildUserDetails = () => {
    if (!user) {
      return (
        <Col>
          <Typography.Text type="danger">No user has been found</Typography.Text>
        </Col>
      );
    }
    
    return (
      <>
        <Col xs={24} md={12} lg={10}>
          <Typography.Title level={5} style={{marginTop: 0}}>
            Contact Details
          </Typography.Title>
          <Typography.Paragraph>
            <strong>Name:</strong> {user.name}
          </Typography.Paragraph>
          <Typography.Paragraph>
            <strong>Username:</strong> {user.username}
          </Typography.Paragraph>
          <Typography.Paragraph>
            <strong>Email address:</strong> {user.email}
          </Typography.Paragraph>
          <Typography.Paragraph>
            <strong>Phone number:</strong> {user.phone}
          </Typography.Paragraph>
        </Col>
  
        <Col xs={24} md={12} lg={10}>
          <Typography.Title level={5} style={{marginTop: 0}}>
            Address
          </Typography.Title>
          <Typography.Paragraph>
            <strong>City:</strong> {user.address.city}
          </Typography.Paragraph>
          <Typography.Paragraph>
            <strong>Street:</strong> {user.address.street}
          </Typography.Paragraph>
          <Typography.Paragraph>
            <strong>Suite:</strong> {user.address.suite}
          </Typography.Paragraph>
          <Typography.Paragraph>
            <strong>Zip code:</strong> {user.address.zipcode}
          </Typography.Paragraph>
        </Col>
      </>
    );
  }

  return (
    <Card>
      <Row gutter={16}>
        <Col xs={24} lg={4}>
          <div style={{ maxWidth: '110px' }}>
            <Image src={process.env.REACT_APP_USER_IMG_URL} alt="User picture" />
          </div>
        </Col>
  
        {buildUserDetails()}
      </Row>
    </Card>
  )
}

export default UserCard;
