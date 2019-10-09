import React from 'react';
import LogoContainer from './styled';
import logo from '../../media/logo.svg';

export default () => (
    <LogoContainer>
        <use xlinkHref={`#${logo.id}`} />
    </LogoContainer>
);
