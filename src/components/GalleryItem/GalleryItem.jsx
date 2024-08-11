import { useState } from "react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../../index.css'

function GalleryItem(card, getGallery) {
    console.log(getGallery)
    const [defaultView, setDefaultView] = useState(true);
    const [likeCount, setLikeCount] = useState(card.card.likes);
    const addLike = () => {
        setLikeCount(card.card.likes++);
        console.log()
        const newLikes = card.card.likes;

        axios({
            method: 'PUT',
            url: `/api/gallery/like/${card.card.id}`,
            data: { newLikes }
        })
            .then((response) => {
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
            <div id="gallery-item" data-testid="galleryItem" >
                <img id="push-pin" src="/images/pushpin.png" ></img>
                <img className="photo" src={card.card.url} onClick={flipCard} data-testid="toggle" />
                <div id="content">
                    <h3>{card.card.title}</h3>
                    <button onClick={addLike} data-testid="like"><i class="bi bi-hand-thumbs-up-fill"></i> Like</button>
                    <p>{likeCount} people have liked this</p>
                </div>
            </div>
        ) : (
            <div id="gallery-item" data-testid="galleryItem">
                <img id="push-pin" src="/images/pushpin.png"></img>
                <div id="gallery-item-flipped" onClick={flipCard} data-testid="toggle">
                    <p>{card.card.description}</p>
                </div>
                <div id="content">
                    <h3>{card.card.title}</h3>
                    <button onClick={addLike} data-testid="like"><i class="bi bi-hand-thumbs-up-fill"></i> Like</button>
                    <p>{likeCount} people have liked this</p>
                </div>
            </div>
        )



    return (
        <div>
            {galleryItemCard}
        </div>
    )
}

export default GalleryItem;