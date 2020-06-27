import styled from 'styled-components';
import { Field } from 'formik';

export const Wrapper = styled.div`
  max-width: 400px;
`;

export const Button = styled.button`
  font-size: 2rem;
  font-family: 'Calligraffitti', cursive;
  -webkit-text-stroke: 0.5px ${({ theme }) => theme.secondary};
  color: transparent;
  border: none;
  background: none;
  margin-top: 4vh;
  transition: 0.3s;
  cursor: pointer;

  @media (min-width: 720px) {
    font-size: 3rem;
  }

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const Input = styled(Field)`
  .MuiInput-root {
    margin: 2vh 0;
  }

  label.Mui-focused {
    color: ${({ theme }) => theme.secondary};
  }
  .MuiInput-underline:before {
    border-bottom-color: ${({ theme }) => theme.secondary};
  }

  .MuiInput-underline:after {
    border-color: ${({ theme }) => theme.accent};
  }

  input,
  label,
  textarea {
    border-bottom-color: yellow;
    color: ${({ theme }) => theme.secondary};
  }
`;
