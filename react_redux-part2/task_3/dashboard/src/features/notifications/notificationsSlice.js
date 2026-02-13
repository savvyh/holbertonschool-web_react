import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  notifications: [],
  loading: false,
};

const API_BASE_URL = 'http://localhost:5173';
const ENDPOINTS = {
  notifications: `${API_BASE_URL}/notifications.json`,
};

export const fetchNotifications = createAsyncThunk('notifications/fetchNotifications', async () => {
  const response = await axios.get(ENDPOINTS.notifications);
  const rawNotifications = response.data.notifications || response.data || [];
  return rawNotifications
    .filter((item) => item.context && item.context.isRead === false)
    .map((item) => ({
      id: item.id,
      type: item.context.type,
      isRead: item.context.isRead,
      value: item.context.value,
    }));
});

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    markNotificationAsRead: (state, action) => {
      console.log(`Notification ${action.payload} has been marked as read`);
      state.notifications = state.notifications.filter(notification => notification.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNotifications.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload;
      state.loading = false;
    });
  },
});

export const { markNotificationAsRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;
