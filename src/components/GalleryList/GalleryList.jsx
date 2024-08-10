import GalleryItem from "../GalleryItem/GalleryItem";
import axios from 'axios';
import { useState, useEffect } from 'react';

function GalleryList() {
    const [fullGalleryList, setFullGalleryList] = useState([]);

    useEffect(() => {
        getGallery();
    }, []);

    function getGallery() {
        axios({
            method: 'GET',
            url: '/api/gallery'
        })
            .then((response) => {
                console.log(response.data);
                setFullGalleryList(response.data);
            })
            .catch((err) => {
                console.log('GET /api/gallery had an error', err);
                alert('There was an error fetching the Gallery.');
            });
    }

    return (
        <div>
            {fullGalleryList.map((card) => {

                return <GalleryItem key={card.id} card={card} getGallery={getGallery} />
            })}
        </div>

    )
}

export default GalleryList;