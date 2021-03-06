import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Message = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 1.6rem;
  margin-top: 8rem;
`;

export const Unlink = styled(Link)`
  text-decoration: none;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  padding: 3rem 4rem;
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: 700px) {
    padding: 3rem 6rem;
  }

  @media (min-width: 1440px) {
    padding: 3rem 10rem;
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10.5rem;
  height: 3.5rem;
  padding: 0 2rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1.4rem;
  box-shadow: 0 0 5px 5px ${({ theme }) => theme.shadow};
`;
