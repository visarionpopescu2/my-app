import { ReactNode } from 'react';
import NotificationContext from 'context/NotificationContext/NotificationContext';
import { NOTIFICATION_TYPE } from 'types';
import { notification } from 'antd';

function NotificationProvider(props: { children: ReactNode }) {
  const [api, contextHolder] = notification.useNotification();
  
  const openNotification = (message: string, type: NOTIFICATION_TYPE) => {
    api[type]({ message, placement: 'bottomRight' });
  }
  
  return (
    <NotificationContext.Provider value={{ openNotification }}>
      {props.children}
      {contextHolder}
    </NotificationContext.Provider>
  )
}

export default NotificationProvider;
