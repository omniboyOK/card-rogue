import React, { Component } from "react";
import {
  Container,
  Segment,
  Input,
  Grid,
  SegmentGroup,
} from "semantic-ui-react";
import HeroeCard from "./HeroeCard";
import HeroeInfo from "./HeroeInfo";

var heroes = [
  {
    nombre: "Guerrero",
    color: "red",
    ataque: 60,
    defensa: 50,
    maxVida: 600,
    vida: 600,
    maxMana: 1000,
    mana: 1000,
    portrait: "/heroes/guerrero.png",
  },
  {
    nombre: "Mago",
    color: "blue",
    ataque: 30,
    defensa: 20,
    maxVida: 400,
    vida: 400,
    maxMana: 2500,
    mana: 2500,
    portrait: "/heroes/mago.png",
  },
];
class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            info: {}
        };
        this.handleInfo = this.handleInfo.bind(this)
    }
  

  handleInfo = (hero) => {
    this.setState({
        info: hero
    })
  }

  render() {
    let cards = heroes.map((heroe, i) => <HeroeCard key={i} heroe={heroe} action={this.handleInfo}></HeroeCard>);

    return (
      <Container>
        <SegmentGroup raised horizontal>
          <Segment color="grey">
            <Grid columns="6">
              <Grid.Row centered>
                <Input
                  icon="pencil alternate"
                  placeholder="Escribe tu nombre aqui..."
                ></Input>
              </Grid.Row>

              <Grid.Row>{cards}</Grid.Row>
            </Grid>
          </Segment>
          <Segment color="grey">
            {this.state.info && <HeroeInfo heroe={this.state.info}></HeroeInfo>}
          </Segment>
        </SegmentGroup>
      </Container>
    );
  }
}

export default Home;
