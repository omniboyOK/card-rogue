import React, { Component } from 'react';
import { Container, SegmentGroup } from 'semantic-ui-react';
import HeroPanel from './HeroPanel';
import InfoPanel from './InfoPanel';
import EnemyPanel from './EnemyPanel';

class Game extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() { 
        return ( 
            <Container>
                <SegmentGroup horizontal>
                    <HeroPanel></HeroPanel>
                    <InfoPanel></InfoPanel>
                    <EnemyPanel></EnemyPanel>
                </SegmentGroup>
            </Container>
         );
    }
}
 
export default Game;