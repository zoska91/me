import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.primary};
  min-height: 30vh;
  padding: 5vh 5vh;
`;

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.secondary};
  margin: 0 auto;
  max-width: 1366px;

  @media (min-width: 720px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Links = styled.ul`
  display: flex;
  padding-top: 10vh;
`;

export const Li = styled.li`
  margin: 0 5px;
  transition: 0.1s;

  svg {
    color: ${({ theme }) => theme.secondary};
    transition: 0.5s;
  }

  &:hover {
    svg {
      transform: rotateY(180deg);
    }
  }
`;
