import React from 'react';
import logo from 'Assets/images/logo.svg';
import LogoContainer from './styled';

export default () => (
    <LogoContainer>
        <use xlinkHref={`#${logo.id}`} />
    </LogoContainer>
);
