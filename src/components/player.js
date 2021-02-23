import React from 'react';
class Player extends React.Component {
    constructor(props) {
        super(props)

        this.huntFood = this.huntFood.bind(this);
        this.eatFood = this.eatFood.bind(this);
        this.toExplore = this.toExplore.bind(this);
        this.state = {
            health: 100,
            food: 50,
            foodStorage: 0,
        }

        this.interval = setInterval(() => {
            console.log(this.interval)
            if (this.state.food === 0 && this.state.health > 0) {
                this.subtractHealth()
            }
        }, 5000)

    }

    subtractHealth() {
        this.setState(function (previousState, currentProps) {
            return {
                health: previousState.health -= 10
            };
        })
    }

    // componentDidUpdate() {
    //     if (this.state.food === 0 && this.state.health > 0) {
    //         setInterval(this.subtractHealth()), 5000;
    //     }
    // }


    componentWillUnmount() {
        console.log(this.interval)
        clearInterval(this.interval)
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

    toExplore(e) {
        if (this.state.food === 0) {
            return
        }
        else {
            this.setState(function (previousState, currentProps) {
                return {
                    food: previousState.food -= 10,
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
                    <button
                        onClick={this.toExplore}> Explore </button>
                </div>
            </div>
        )
    }
}

export default Player;