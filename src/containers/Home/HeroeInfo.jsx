import React, { Component } from "react";
import { Image, Card, List, Item, Button, Grid } from "semantic-ui-react";

class HeroInfo extends Component {
  state = {};
  render() {
    return (
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
              <Button as="a" href="/in-game">Elegir Heroe</Button>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

export default HeroInfo;
