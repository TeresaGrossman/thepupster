import React, { Component } from "react";
import PuppyCard from "./components/PuppyCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import puppys from "./puppys.json";
import "./App.css";

class App extends Component {
  // Setting this.state.puppys to the puppys json array
  state = {
    puppys,

    //Setting an array for the puppy cards that are clicked
    clickedPuppyIds: [],
    score: 0,
    goal: 0,
    status: ""
  };
  //Shuffle the Puppy cards when one is clicked
  shufflePuppys = id => {
    let clickedPuppyIds = this.state.clickedPuppyIds;

    if (clickedPuppyIds.includes(id)) {
      this.setState({
        clickedPuppyIds: [],
        score: 0,
        status: "gameover"
      });
     
      return;
    } else {
      clickedPuppyIds.push(id);
     
      if (clickedPuppyIds.length === 8) {
        this.setState({
          score: 8,
          status: "gamewon",
          clickedPuppyIds: []
        });
     
        return;
      }
      this.setState({
        puppys,
        clickedPuppyIds,
        score: clickedPuppyIds.length,
        status: " "
      });

      for (let i = puppys.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [puppys[i], puppys[j]] = [puppys[j], puppys[i]];
      }
    }
  };

  // Map over this.state.puppys and render a PuppyCard component for each puppy object
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1 className="App-title">The Pupster</h1>
      
      </header>
      <Score total={this.state.score}
             goal={8}
             status={this.state.status}
             />
      <Wrapper>
        {this.state.puppys.map(puppy => (
          <PuppyCard
            shufflePuppys={this.shufflePuppys}
            id={puppy.id}
            key={puppy.id}
            image={puppy.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
