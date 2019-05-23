/* eslint-disable */
import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import Nav from "../../components/Nav/Nav";
import Button from "../../components/Button/Button";

const CharacterName = (props) => (
  <div style={{display: 'flex'}}>
    <h1> {props.name} </h1> 
    <Button secondary onClick={props.changeMode}>Editar</Button>
  </div>
);

const EditName = (props) => {
  const [name, setName] = useState(props.name);
  return (
    <div>
      <input type="text" value={name} onChange={ e => setName(e.target.value)}/> 
      <Button secondary onClick={() => props.saveName(name)}>Salvar</Button>
    </div>
  )
};

class DetailsPage extends Component {
  state = {
    character: {},
    editMode: false,
  };
  

  componentDidMount() {
    //use localStorage
    const id = this.props.match.params.characterId;
    const character = this.props.characters.filter(chrt => {
      //console.log(chrt.id, id);
      return chrt.id == id
    })[0];

    const name = localStorage.getItem(id);
    console.log(name);

    if (character) {
      if (name) {
        character.name = name;
      };
      //console.log(character);
      this.setState({ character });
    } else {
      this.props.history.push('/');
    };
  }

  componentWillUnmount() {
    //use localStorage newName for characters
  }

  saveName = name => {
    //console.log(name)
    localStorage.setItem(this.state.character.id, name);
    this.setState({editMode: false, character: {
      ...this.state.character,
      name: name
    }})
  }

  render() {
    if (this.state.character.name === undefined) return (<p>Erro</p>);
    return (
      <div>
        <Nav />
        {this.state.editMode ? 
          <EditName name={this.state.character.name} saveName={this.saveName}/>:
          <CharacterName name={this.state.character.name} changeMode={() => this.setState({editMode: true})} />
        }
        <img
          src={`${this.state.character.thumbnail.path}.${this.state.character.thumbnail.extension}`}
          alt="character"
          width="100%"
        />
        <p> {this.state.character.description}</p>
        <h4>Series</h4>
        <ul>
          {this.state.character.series.items.map(serie => (
            <li key={serie.name}> {serie.name} </li>
          ))}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    characters: state.Characters
  };
}

export default withRouter(connect(mapStateToProps)(DetailsPage));
