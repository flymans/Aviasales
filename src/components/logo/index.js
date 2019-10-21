import React from 'react';
import logo from 'Assets/images/logo.svg';
import LogoContainer from './styled';

const Logo = () => (
    <LogoContainer>
        <use xlinkHref={`#${logo.id}`} />
    </LogoContainer>
);

export default Logo;
