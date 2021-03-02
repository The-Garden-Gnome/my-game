import React from "react";
import { Box, Header, Grommet, Nav, Anchor, Button } from 'grommet';
import { grommet } from 'grommet/themes';
import { Home } from 'grommet-icons';
import PlayerCard from './card';

const Navigation = () => {
    return (
        <Grommet theme={grommet}>
            <Header pad="small" className="navigation">
                <Nav direction="row" className="link" >
                    <Button icon={<Home color='white' />} hoverIndicator />
                    <Anchor label="Profile" href="#" color="#6b8e6b" alignSelf="center" />
                </Nav>
            </Header>
            <PlayerCard />
        </Grommet>)

}

export default Navigation