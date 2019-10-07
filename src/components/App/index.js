import React from 'react';
import {Wrapper} from './styled';
import logo from '../../media/logo.svg';

const App = () => (
    <Wrapper>
        <svg>
            <use xlinkHref={`#${logo.id}`} />
        </svg>
    </Wrapper>
);

export default App;
