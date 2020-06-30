import React, { Component } from "react";
import {
  Container,
  Segment,
  Grid,
  SegmentGroup,
  Dimmer,
  Loader,
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
      loading: true,
    };
    this.handleInfo = this.handleInfo.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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
        this.setState({ heroes: myJson, loading: false });
      })
      .catch((error) => console.log(error));
  };

  handleSelect = (heroe) => {
    this.setState({ loading: true })
    fetch("http://localhost:5024/rpg/createGame",
    { 
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ heroe: heroe._id }),
      mode: 'cors',
    })
      .then((response) => {
        if(response.status === 200){
          return response.json();
        }
      })
      .then((myJson) => {
        window.location.href = '/in-game/'+myJson.id
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <Container>
        <h1>Rpg React</h1>
        <SegmentGroup raised horizontal>
          <Dimmer active={this.state.loading} inverted>
            <Loader inverted>Cargando</Loader>
          </Dimmer>
          <Segment color="grey" padded='very'>
            <Grid columns="4">
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
          <Segment color="grey" padded="very">
            <HeroeInfo
              heroe={this.state.info}
              visible={this.state.visible}
              action={this.handleSelect}
            ></HeroeInfo>
          </Segment>
        </SegmentGroup>
      </Container>
    );
  }
}

export default Home;
