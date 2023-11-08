import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, Avatar, Space, Typography } from 'antd';
import { ROUTES } from 'routes';
import AppContext from 'context/AppContext/AppContext';


const avatarStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '40px 0',
};
const menuStyle: React.CSSProperties = {
  backgroundColor: '#3ba0e9',
  color: '#fff',
  padding: '20px 0',
};

function Sidebar() {
  const { user } = useContext(AppContext);
  let navigate = useNavigate();
  const selectedPage = useLocation().pathname;
  
  const MENU_ITEMS = [
    { key: '1', label: 'Dashboard', onClick: () => navigate(ROUTES.Dashboard) },
    { key: '2', label: 'Articles', onClick: () => navigate(ROUTES.Articles) },
  ];
  
  const highlight = () => {
    if (selectedPage === ROUTES.Dashboard) {
      return ['1'];
    } else if (selectedPage.includes(ROUTES.Articles)) {
      return ['2'];
    }
  }
  
  return (
    <div>
      <Space style={avatarStyle}>
        <Avatar size={64} src={process.env.REACT_APP_USER_IMG_URL} style={{}} />
        <Typography.Text style={{color: '#fff'}}>Hello,</Typography.Text>
        <Typography.Text strong style={{color: '#fff'}}>{user?.name}</Typography.Text>
      </Space>

      <Menu
        defaultSelectedKeys={['1']}
        selectedKeys={highlight()}
        mode="inline"
        style={menuStyle}
        items={MENU_ITEMS}
      />
    </div>
    
  );
};

export default Sidebar;
