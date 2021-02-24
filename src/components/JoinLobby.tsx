import React from 'react';
import Container from './Container';
import InputBox from './InputBox';
import Button from './Button';

const JoinLobby = () => {
    return (
        <Container>
            <InputBox label={'USERNAME'} />
            <InputBox label={'LOBBY ID (EMPTY FOR NEW LOBBY)'} />
            <Button text={'JOIN'} onClick={() => {}} />
        </Container>
    );
};

export default JoinLobby;
