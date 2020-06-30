import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.secondary};
  position: relative;

  .vertical-timeline-element-icon {
    svg {
      transform: translateX(-10%);
    }
  }
`;

export const Header = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: 5vh 0;
  height: 30vh;
`;

export const Text = styled.h2`
  text-align: center;
  font-weight: 400;
  padding: 5vh 2vw;
  margin: 0;
  color: ${({ theme }) => theme.primary};
`;

export const PickStory = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 90vw;
  max-width: 1024px;
  font-style: italic;

  p {
    color: ${({ theme }) => theme.secondary};
  }

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
  padding: 0 1vw;
`;
