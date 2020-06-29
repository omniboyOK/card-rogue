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
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      visible: false,
      heroes: [],
    };
    this.handleInfo = this.handleInfo.bind(this);
  }

  componentDidMount() {
    this.getHeroes();
  }

  handleInfo = (hero) => {
    this.setState({
      info: hero,
      visible: true,
    });
  };

  getHeroes = () => {
    fetch("http://localhost:5024/rpg/getHeroes")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({ heroes: myJson });
      })
      .catch((error) => console.log(error));
  };

  render() {
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
              <Grid.Row>
                {this.state.heroes.map((heroe, i) => (
                  <HeroeCard
                    key={i}
                    heroe={heroe}
                    action={this.handleInfo}
                  ></HeroeCard>
                ))}
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment color="grey">
            <HeroeInfo
              heroe={this.state.info}
              visible={this.state.visible}
            ></HeroeInfo>
          </Segment>
        </SegmentGroup>
      </Container>
    );
  }
}

export default Home;
