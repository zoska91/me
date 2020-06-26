import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  padding: 5vh 0;
  background-color: ${({ theme }) => theme.secondary};
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 400;
  margin-bottom: 5vh;
`;

export const Summary = styled.h2`
  text-align: center;
  font-weight: 200;
  margin-top: 5vh;
`;
