import React, { Component } from "react";
import { Container, Segment, Input, Grid } from "semantic-ui-react";
import HeroeCard from "./HeroeCard";

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

let cards = heroes.map((heroe) => <HeroeCard heroe={heroe}></HeroeCard>);

class Home extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Segment color="red" stacked className="mar">
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
      </Container>
    );
  }
}

export default Home;
