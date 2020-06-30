import React, { Component } from 'react';
import { Container, SegmentGroup } from 'semantic-ui-react';
import HeroPanel from './HeroPanel';
import InfoPanel from './InfoPanel';
import EnemyPanel from './EnemyPanel';

class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            game: {},
            loading: true,
        }
        this.id = this.props.match.params.id
    }

    componentDidMount = () => {
        this.getGame(this.id);
    }

    getGame = (id) => {
        fetch('http://localhost:5024/rpg/getGame?id='+id)
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({
                    game: json,
                    loading: false
                })
            })
    }

    render() { 
        return ( 
            <Container>
                <SegmentGroup horizontal>
                    <HeroPanel heroe={this.state.game.player} loading={this.state.loading}></HeroPanel>
                    <InfoPanel></InfoPanel>
                    <EnemyPanel></EnemyPanel>
                </SegmentGroup>
            </Container>
         );
    }
}
 
export default Game;