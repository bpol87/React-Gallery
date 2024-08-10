import { useState } from "react";
import axios from "axios";

function GalleryItem(card, getGallery) {
    console.log(getGallery)
    const [defaultView, setDefaultView] = useState(true);
    const [likeCount, setLikeCount] = useState(card.card.likes);
    const addLike = () => {
        setLikeCount(card.card.likes++);
        console.log()
        const newLikes = likeCount;

        axios({
            method: 'PUT',
            url: `/api/gallery/like/${card.card.id}`,
            data: {newLikes}
        })
        .then((response)=>{
            console.log(response)
            getGallery;
            showLikes();
        })
    }
    const showLikes = () => {
        setLikeCount(card.card.likes);
    }
    const flipCard = () => {
        setDefaultView(!defaultView);
    }

    
    const galleryItemCard = defaultView ?
        (
            <div id="gallery-item" onClick={flipCard}>
                <img src={card.card.url} />
                <div id="content">
                <h3>{card.card.title}</h3>
                <button onClick={addLike}>Like</button>
                <p>{likeCount} people have liked this</p>
                </div>
            </div>
        ) : (
            <div id="gallery-item-flipped" onClick={flipCard}>
                <p>{card.card.description}</p>
            </div>
        )

    

    return (
        <div>
            {galleryItemCard}
        </div>
    )
}

export default GalleryItem;