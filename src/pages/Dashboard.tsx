// src/pages/Dashboard.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DashboardContainer = styled.div`
 padding: 40px;
 margin: 0px 350px 0px 550px;
`;

const HabitCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBackground};
  }
`;

interface Habit {
  id: number;
  name: string;
  completed: boolean;
}

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Dashboard: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([
    { id: 1, name: 'Exercise', completed: false },
    { id: 2, name: 'Read for 30 minutes', completed: false }
  ]);

  const toggleHabitCompletion = (id: number) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };



  return (
    <DashboardContainer>
      <DashboardHeader>
        <h2>Your Habits</h2>
        <Link to="/add-habit">
          <Button>Add Habit</Button>
        </Link>
      </DashboardHeader>

      {habits.map(habit => (
        !habit.completed ?
        (<HabitCard key={habit.id}>
          <span>{habit.name}</span>
          <div>
            <Button onClick={() => toggleHabitCompletion(habit.id)}>
              {habit.completed ? 'Undo' : 'Complete'}
            </Button>
            <Link to={`/habit/${habit.id}`} style={{ marginLeft: '20px' }}>
              View
            </Link>
          </div>
          </HabitCard>) : null

))}      {habits.map(habit => (
        habit.completed ?
          (
          <>
          <DashboardHeader>
        <h2>Your Completed Habits</h2>
        </DashboardHeader>

            <HabitCard key={habit.id}>
          <span>{habit.name}</span>
          <div>
            <Button onClick={() => toggleHabitCompletion(habit.id)}>
              {habit.completed ? 'Undo' : 'Complete'}
            </Button>
            <Link to={`/habit/${habit.id}`} style={{ marginLeft: '20px' }}>
              View
            </Link>
          </div>
        </HabitCard></>) : null
      ))}
    </DashboardContainer>


  );
};

export default Dashboard;
