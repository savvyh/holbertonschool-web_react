import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { logout } from '../auth/authSlice';

const initialState = {
  courses: [],
};

const API_BASE_URL = 'http://localhost:5173';
const ENDPOINTS = {
  courses: `${API_BASE_URL}/courses.json`,
};

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await fetch(ENDPOINTS.courses);
  const data = await response.json();
  return data.courses || data;
});

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    selectCourse: (state, action) => {
      const course = state.courses.find((item) => item.id === action.payload);
      if (course) {
        course.isSelected = true;
      }
    },
    unSelectCourse: (state, action) => {
      const course = state.courses.find((item) => item.id === action.payload);
      if (course) {
        course.isSelected = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = (action.payload || []).map((course) => ({
          ...course,
          isSelected: false,
        }));
      })
      .addCase(logout, (state) => {
        state.courses = [];
      });
  },
});

export const { selectCourse, unSelectCourse } = coursesSlice.actions;
export default coursesSlice.reducer;