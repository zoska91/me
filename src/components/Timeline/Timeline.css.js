import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.secondary};
  position: relative;
  padding-top: 5vh;
`;

export const Text = styled.h2`
  text-align: center;
  font-weight: 400;
  padding: 5vh 0;
  margin: 0;
  color: ${({ theme }) => theme.primary};
`;

export const PickStory = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 90vw;
  max-width: 1024px;

  @media (min-width: 460px) {
    width: 70vw;
  }

  @media (min-width: 680px) {
    width: 50vw;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  font-size: 2rem;
  font-family: 'Calligraffitti', cursive;
  -webkit-text-stroke: 0.5px black;
  color: ${({ theme, active }) => (active ? theme.accent : 'transparent')};
  border: none;
  background: none;
  cursor: pointer;

  @media (min-width: 680px) {
    font-size: 2.5rem;
  }

  @media (min-width: 680px) {
    font-size: 2.5rem;
  }
`;
