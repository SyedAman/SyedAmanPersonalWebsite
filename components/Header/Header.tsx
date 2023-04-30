import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const Header: React.FC = () => {
    return <Title>Syed Aman</Title>;
};

export default Header;
