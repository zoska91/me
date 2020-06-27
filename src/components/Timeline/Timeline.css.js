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
  background-color: white;
  padding: 5vh 0;
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

export const Button = styled.button`
  position: relative;
  font-size: 2rem;
  font-family: 'Charmonman', cursive;
  font-weight: bold;
  -webkit-text-stroke: 0.5px black;
  color: ${({ theme, active }) => (active ? theme.accent : 'transparent')};
  border: none;
  background: none;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    position: absolute;
    height: 2px;
    width: 0;
    background-color: ${({ theme }) => theme.primary};
    bottom: -5px;
    transform: translateX(-10%);
    transition: 0.3s;
  }

  &:hover::before {
    width: 120%;
  }

  @media (min-width: 680px) {
    font-size: 2.5rem;
  }

  @media (min-width: 680px) {
    font-size: 3rem;
  }
`;
