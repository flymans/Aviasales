import React from 'react';
import logo from 'assets/images/logo.svg';
import LogoContainer from './styled';

const Logo = () => (
    <LogoContainer>
        <use xlinkHref={`#${logo.id}`} />
    </LogoContainer>
);

export default Logo;
