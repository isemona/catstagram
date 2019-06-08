// Exercise 2: Set It Up
	// write a class component
	// make it a div with a class name of Likes
	// write a span and a button element inside
	// export default the component!

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.

// Exercise 4: State It
// Create a button that toggles between two states: "Liked" and "Not liked (yet)"
	 // add a constructor with initial state
	 // add a button to the rendered JSX with an onClick attribute
	 // add a method to handle the click/ change the state
	 // hook up the button text to the state
// BONUS: Create a likes counter
	 // take in a prop for the number of likes
	 // increase or decrease the likes based on whether button click is like/ unlike
	 // hint: take the total likes as a prop, and convert it to state

import React from 'react';


class Likes extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLiked: false,
            counter: this.props.likes
            }
    }

    // tempCount;
    // if the user likes the button (this.state.isLiked)
    //      tempCount = counter should increase
    // else the user dislikes the button
    //      tempCount = counter should decrease
    // set the counter state with temp count

    handleClick = () => {
        let {counter} = this.state; //change to let bec it will change, unpacking
        // if (this.state.isLiked){
        //     // buttontext = "Liked"
        //     counter -= 1;
        // }
        // else {
        //     // buttontext = "Not yet liked!"
        //     counter += 1;
        // }
        // this.setState({
        //     isLiked: !this.state.isLiked, //false
        //     counter:counter
        // })
        let {isLiked} = this.state; //unpacking
        if (isLiked==false){
            isLiked = true;
            counter += 1;
        } else {
            isLiked = false;
            counter -= 1;
        }
        //isLiked = !isLiked // refactored setting boolean value back and forth

        this.setState({ //with react you need to call the setState method to call the state, that is why it is here too, with Vue.js you don't need to do this
            isLiked: !this.state.isLiked, //false
            counter:counter
        })
    }

    render() {
    	return (
    		<div className="Likes">
    			<span>{this.state.counter}</span>
    			<button onClick={this.handleClick} className="LikesButton">
    				{this.state.isLiked ? 'Liked!' : 'Not liked (yet)'} 
    			</button>
    		</div>
    	);
    }
}

export default Likes;
