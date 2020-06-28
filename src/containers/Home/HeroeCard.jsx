import React, { Component } from "react";
import { Card, Grid } from "semantic-ui-react";

class HeroeCard extends Component {
  state = {};
  render() {
    return (
      <Grid.Column>
        <Card
          color={this.props.heroe.color}
          as="a"
          image={process.env.PUBLIC_URL + this.props.heroe.portrait}
          header={"Jugar como " + this.props.heroe.nombre}
        />
      </Grid.Column>
    );
  }
}

HeroeCard.defaultProps = {
  heroe: {
    nombre: "Desconocido",
    color: "grey",
    ataque: 0,
    defensa: 0,
    maxVida: 0,
    vida: 0,
    maxMana: 0,
    mana: 0,
    portrait: "/heroes/placeholder.png",
  },
};

export default HeroeCard;
