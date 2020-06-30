import React, { Component } from "react";
import { Segment, Card, List, Item, Image, Loader, Dimmer} from "semantic-ui-react";

class HeroPanel extends Component {
  state = {};
  render() {
    return (
      <Segment>
        <Card>
          <Dimmer active={this.props.loading} inverted>
            <Loader inverted></Loader>
          </Dimmer>
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
          </Card.Content>
        </Card>
      </Segment>
    );
  }
}

HeroPanel.defaultProps = {
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
  }
};

export default HeroPanel;
