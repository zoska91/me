import styled from 'styled-components';

const Button = styled.button`
  font-size: ${({ small }) => (small ? '1rem' : '2rem')};
  font-family: 'Charmonman', cursive;
  -webkit-text-stroke: 0.5px
    ${({ theme, active }) => (active ? theme.accent : theme.secondary)};
  color: transparent;
  border: none;
  background: none;
  margin-top: 4vh;
  transition: 0.3s;
  cursor: pointer;
  outline: none;

  @media (min-width: 720px) {
    font-size: 3rem;
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export default Button;
