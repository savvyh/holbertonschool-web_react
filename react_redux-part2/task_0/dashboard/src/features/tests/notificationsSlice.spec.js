import notificationsReducer, { fetchNotifications, markNotificationAsRead } from '../notifications/notificationsSlice';
import mockAxios from 'jest-mock-axios';

describe('notificationsSlice', () => {
  const initialState = {
    notifications: [],
    loading: false,
  };

  afterEach(() => {
    mockAxios.reset();
  });

  describe('initialState', () => {
    it('should return the correct initial state', () => {
      expect(notificationsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });
  });

  describe('fetchNotifications', () => {
    it('should fetch notifications data correctly', async () => {
      const mockNotifications = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } }
      ];

      const action = fetchNotifications.fulfilled(mockNotifications, 'notifications/fetchNotifications');
      const newState = notificationsReducer(initialState, action);

      expect(newState.notifications).toEqual(mockNotifications);
    });
  });

  describe('markNotificationAsRead', () => {
    it('should remove a notification correctly when the markNotificationAsRead action is dispatched', () => {
      const stateWithNotifications = {
        notifications: [
          { id: 1, type: 'default', value: 'New course available' },
          { id: 2, type: 'urgent', value: 'New resume available' },
          { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } }
        ],
        loading: false,
      };

      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      const action = markNotificationAsRead(2);
      const newState = notificationsReducer(stateWithNotifications, action);

      expect(newState.notifications).toHaveLength(2);
      expect(newState.notifications.find(n => n.id === 2)).toBeUndefined();
      expect(consoleSpy).toHaveBeenCalledWith('Notification 2 has been marked as read');
      
      consoleSpy.mockRestore();
    });
  });
});
