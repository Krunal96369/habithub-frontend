# Habit Tracker App

This project is a Habit Tracker application built with React and TypeScript. It allows users to manage their habits, track their progress, and view detailed information about each habit.

## Features

- Dashboard to view all habits
- Add new habits
- Mark habits as complete or incomplete
- View detailed information about each habit
- User authentication (login functionality)

## Project Structure

The project consists of the following main components:

1. **Dashboard** (`src/pages/Dashboard.tsx`): Displays all habits, allowing users to mark them as complete or incomplete.
2. **HabitDetail** (`src/pages/HabitDetail.tsx`): Shows detailed information about a specific habit.
3. **API Service** (`src/services/api.ts`): Handles all API calls to the backend.

## Components

### Dashboard

The Dashboard component (`src/pages/Dashboard.tsx`) is the main page of the application. It displays two sections:

1. Active habits
2. Completed habits

Users can toggle the completion status of habits and navigate to view more details about each habit.

### HabitDetail

The HabitDetail component (`src/pages/HabitDetail.tsx`) displays detailed information about a specific habit. It shows the habit name and its current completion status.

## API Integration

The application uses Axios for API calls. The `api.ts` file in the `src/services` directory contains functions for:

- User login
- Fetching habits
- Adding new habits
- Marking habits as complete or incomplete
- see the history of habits
- see the streak/progress of habits

## Styling

The application uses styled-components for styling, providing a clean and modular approach to CSS in JavaScript.

## Future Improvements

- Implement user registration
- Add habit editing functionality
- Implement habit streaks and statistics
- Add data visualization for habit progress

## Getting Started

To run this project locally:

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm start`

Make sure to have the backend API running and update the `baseURL` in `src/services/api.ts` if necessary.


