import styled from 'styled-components';

export const iconStyle = {
  background: '#2B3A40',
  color: '#fff',
};

export const contentStyle = {
  background: '#2B3A40',
  color: '#fff',
};

export const Title = styled.h3`
  text-align: justify;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.secondary};
`;

export const Text = styled.p`
  padding-bottom: 3vh;
  font-weight: 200;
  text-align: justify;
`;

export const Img = styled.img`
  width: 100%;
`;
