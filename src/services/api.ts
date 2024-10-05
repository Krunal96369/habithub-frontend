import axios from 'axios';

// Create an instance of axios with default config
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Update with backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Login function
export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Fetch habits for the authenticated user
export const fetchHabits = async () => {
  try {
    const response = await api.get('/habits');
    return response.data;
  } catch (error) {
    console.error('Fetch habits error:', error);
    throw error;
  }
};

// Add a new habit
export const addHabit = async (habitData: { name: string; frequency: string }) => {
  try {
    const response = await api.post('/habits', habitData);
    return response.data;
  } catch (error) {
    console.error('Add habit error:', error);
    throw error;
  }
};

// Mark habit as completed
export const completeHabit = async (habitId: number) => {
  try {
    const response = await api.put(`/habits/${habitId}/complete`);
    return response.data;
  } catch (error) {
    console.error('Complete habit error:', error);
    throw error;
  }
};

// Mark habit as incomplete
export const incompleteHabit = async (habitId: number) => {
  try {
    const response = await api.put(`/habits/${habitId}/incomplete`);
    return response.data;
  } catch (error) {
    console.error('Incomplete habit error:', error);
    throw error;
  }
};



