import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  height: 100vh;
  background-color: ${({ theme }) => theme.primary};
  text-align: center;
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10vh;
  width: 100vw;
  color: ${({ theme }) => theme.secondary};
`;

export const Name = styled.p`
  margin: 0;
  font-size: 10vh;
  font-family: 'Arapey', serif;
  font-family: 'Calligraffitti', cursive;
`;

export const Description = styled.p`
  font-size: 5vh;
  margin: 0;
  margin-left: 40vw;
  font-style: italic;
  font-family: 'Calligraffitti', cursive;
  span {
    color: ${({ theme }) => theme.accent};
  }

  @media (min-width: 500px) {
    margin-left: 20vw;
    font-family: 'Calligraffitti', cursive;
  }
`;
