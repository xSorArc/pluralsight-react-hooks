import React from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll.js";

const SpeakerDetail = React.memo( ({
    id, firstName, lastName, favorite, bio, onHeartFavoriteHandler
    }) => {
    return (
        <div className="card col-4 cardmin">
            <ImageToggleOnScroll className="card-img-top" 
                                 primaryImg={`/static/speakers/bw/Speakers-${id}.jpg`}
                                 secondaryImg={`/static/speakers/Speakers-${id}.jpg`}
                                 alt={`${firstName} ${lastName}`} />
            <div className="card-body">
                <h4 className="card-title">
                    <button data-sessionid={id} 
                            className={favorite ? 'heartredbutton' : 'heartdarkbutton'}
                            onClick={(e) => {
                                onHeartFavoriteHandler(e, !favorite);
                            }}
                    />
                    <span>
                        {firstName} {lastName}
                    </span>
                </h4>
                <span>{bio}</span>
            </div>
        </div>
    )
})

export default SpeakerDetail;