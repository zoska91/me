import styled from 'styled-components';

export const iconStyle = {
  background: '#2B3A40',
  color: '#fff',
};

export const contentStyle = {
  background: '#2B3A40',
  color: '#fff',
};

export const Headline = styled.span`
  font-size: 2rem;
  font-weight: bold;
  font-style: italic;
  margin: 0 30px;
`;

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
  font-style: italic;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Links = styled.div`
  padding: 1vh 0 3vh;
  display: flex;

  @media (min-width: 1170px) {
    flex-direction: ${({ index }) => (index % 2 === 0 ? 'row-reverse' : 'row')};
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.accent};
  margin: 0 1vw;
  transition: 0.1s;

  svg {
    transition: 0.5s;
  }

  &:hover {
    color: white;

    svg {
      transform: rotateY(180deg);
    }
  }
`;

export const InfoHover = styled.p`
  position: absolute;
  color: ${({ theme }) => theme.accent};
  font-style: italic;
  transform: translateY(-120%);
  font-weight: bold;
  z-index: 99;
`;
