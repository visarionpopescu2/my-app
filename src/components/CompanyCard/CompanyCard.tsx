import { COMPANY } from 'types';
import { Card, Col, Image, Row, Typography } from 'antd';

function CompanyCard(props: { company: COMPANY | undefined }) {
  const { company } = props;
  
  const buildCompanyDetails = () => {
    if (!company) {
      return (
        <Col>
          <Typography.Text type="danger">No company has been found</Typography.Text>
        </Col>
      );
    }
    
    return (
      <Col xs={24} md={16}>
        <Typography.Title level={5} style={{marginTop: 0}}>
          Company Details
        </Typography.Title>
        <Typography.Paragraph>
          <strong>Name:</strong> {company.name}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <strong>About:</strong> {company.catchPhrase}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <strong>Business:</strong> {company.bs}
        </Typography.Paragraph>
      </Col>
    );
  }

  return (
    <Card>
      <Row gutter={16}>
        <Col xs={24} md={8}>
          <div style={{ maxWidth: '150px' }}>
            <Image src={process.env.REACT_APP_COMPANY_IMG_URL} alt='Company picture' height='100%' />
          </div>
        </Col>
  
        {buildCompanyDetails()}
      </Row>
    </Card>
  )
}

export default CompanyCard;

/*
  id: string,
  name: string,
  companyname: string,
  email: string,
  address,
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  phone: string,
  website: string,
  company
    name: string,
    catchPhrase: string,
    bs: string
*/
