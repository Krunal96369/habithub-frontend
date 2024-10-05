// src/pages/HabitDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const HabitDetailContainer = styled.div`
  padding: 40px;
  margin: 0 300px 0 300px;
  background-color: ${({ theme }) => theme.background};
`;

const HabitDetailCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const HabitDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Dummy data for the habit
  const habit = { id: Number(id), name: 'Exercise', completed: false };

  return (
    <HabitDetailContainer>
      <HabitDetailCard>
        <h2>Habit: {habit.name}</h2>
        <p>Status: {habit.completed ? 'Completed' : 'Not Completed'}</p>
      </HabitDetailCard>
    </HabitDetailContainer>
  );
};

export default HabitDetail;
