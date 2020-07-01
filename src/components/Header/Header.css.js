import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Header = styled(motion.header)`
  position: relative;
  /* height: 100vh; */
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

export const Name = styled(motion.p)`
  margin: 0;
  font-size: 10vh;
  font-family: 'Charmonman', cursive;
  opacity: 0;
`;

export const Description = styled(motion.p)`
  font-size: 3vh;
  margin: 0;
  margin-left: 35vw;
  font-style: italic;
  font-family: 'Charmonman', cursive;

  @media (min-width: 900px) {
    font-size: 4vh;
  }

  span {
    color: ${({ theme }) => theme.accent};
  }

  @media (min-width: 500px) {
    margin-left: 20vw;
    font-family: 'Charmonman', cursive;
  }
`;

export const Language = styled.div`
  position: absolute;
  top: 0;
  right: 4vh;
`;
