// Exercise 2: Set It Up
	// write a class component
	// make it a div with className FeedList
	// import FeedItem and include it inside the div
	// export default the component!

// Exercise 3: Prop It Up
	// FeedList should accept props as params
	// destructure photos from props
	// iterate over the data and map each photo data to a FeedItem

import React from 'react';
import FeedItem from './FeedItem.jsx';

class FeedList extends React.Component {
    render() {

        const { photos } = this.props;

        return (
            <div className="FeedList">
                {
                    photos.map((image, i) => 
                    <FeedItem key={i} image={image}/>
                    )
                }
            </div>
        );
    }
};

export default FeedList;
