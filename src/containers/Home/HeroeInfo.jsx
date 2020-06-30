import React, { Component } from "react";
import { Image, Card, List, Item, Button, Grid, Transition } from "semantic-ui-react";

class HeroInfo extends Component {
  state = {};
  render() {
    return (
      <Transition visible={this.props.visible} animation="scale" duration={500}>
        <Card>
          <Image src={this.props.heroe.portrait} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{this.props.heroe.nombre}</Card.Header>
            <Card.Meta>
              <List>
                <Item>
                  <span>ATK: {this.props.heroe.ataque}</span>
                </Item>
                <Item>
                  <span>DEF: {this.props.heroe.defensa}</span>
                </Item>
                <Item>
                  <span>Vida: {this.props.heroe.maxVida}</span>
                </Item>
                <Item>
                  <span>Mana: {this.props.heroe.maxMana}</span>
                </Item>
              </List>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Grid>
              <Grid.Row centered>
                <Button onClick={() => this.props.action(this.props.heroe)}>
                  Elegir Heroe
                </Button>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </Transition>
    );
  }
}

HeroInfo.defaultProps = {
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
  visible: false,
};

export default HeroInfo;
