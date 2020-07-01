import styled from 'styled-components';
import { Field } from 'formik';

export const Wrapper = styled.div`
  max-width: 400px;
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
