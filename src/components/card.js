import React from "react";
import Player from "./Player"
import './player.css'
import { DropButton, Grommet } from 'grommet';
import { More } from 'grommet-icons';

const PlayerCard = () => {
    return (
        <Grommet>
            <DropButton
                icon={<More color='plain' />}
                plain="true"
                margin="small"
                dropAlign={{ top: 'bottom', right: 'left' }}
                label="Player"
                dropContent={<Player />}
            />
            <DropButton
                icon={<More color='plain' />}
                plain="true"
                margin="small"
                dropAlign={{ top: 'bottom', right: 'left' }}
                label="Player"
                dropContent={<Player />}
            />
        </Grommet >
    )
}

export default PlayerCard