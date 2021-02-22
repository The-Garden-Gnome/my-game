import React from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props)

        this.huntFood = this.huntFood.bind(this);
        this.eatFood = this.eatFood.bind(this);
        this.state = {
            health: 100,
            food: 50,
            foodStorage: 0,

        }
    }

    huntFood(e) {
        this.setState(function (previousState, currentProps) {
            return {
                foodStorage: previousState.foodStorage += 10
            };
        })
    }

    eatFood(e) {

        if (this.state.food === 100 || this.state.foodStorage === 0) {
            return
        }
        else {
            this.setState(function (previousState, currentProps) {
                return {
                    food: previousState.food += 10,
                    foodStorage: previousState.foodStorage -= 10
                };
            })
        }
    }

    render() {
        return (
            <div className="Container" >
                <div>This Player has {this.state.health} health. Food Storage is at {this.state.foodStorage} lbs. The Player's hunger is at {this.state.food}.</div>
                <div>
                    <button
                        onClick={this.huntFood}> Hunt </button>
                    <button
                        onClick={this.eatFood}> Eat </button>
                </div>
            </div>
        )
    }
}

export default Player;