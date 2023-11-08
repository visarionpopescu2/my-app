import React from 'react';
import { NOTIFICATION_TYPE } from 'types';

type NOTIFICATION = {
  openNotification: (message: string, type: NOTIFICATION_TYPE) => void
}

const initialState: NOTIFICATION = {
  openNotification: (message: string, type: NOTIFICATION_TYPE) => {}
}

const NotificationContext = React.createContext(initialState);

export default NotificationContext
