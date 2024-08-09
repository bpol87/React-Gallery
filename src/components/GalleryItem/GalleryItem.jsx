import { useState } from "react";

function GalleryItem(card) {
    const [defaultView, setDefaultView] = useState(true);
    const galleryItemCard = defaultView ?
        (
            <>
                <img src={card.url} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <button>Like</button>
            </>
        ) : (
            <>
                <p>Description</p>
            </>
        )

    return (
        <div>
            {galleryItemCard}
        </div>
    )
}

export default GalleryItem;