import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

class Game extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Grid>
                    <Grid.Row>
                        Hi!
                    </Grid.Row>
                </Grid>
            </Container>
         );
    }
}
 
export default Game;