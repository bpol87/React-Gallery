import GalleryItem from "../GalleryItem/GalleryItem";
import axios from 'axios';
import { useState, useEffect } from 'react';

function GalleryList() {
    const [fullGalleryList, setFullGalleryList] = useState([]);

    useEffect(() => {
        getGallery();
    }, []);

    const getGallery = () => {
        axios({
            method: 'GET',
            url: '/api/gallery'
        })
            .then((response) => {
                console.log(response.data);
                setFullGalleryList(response.data);
            })
            .catch((err) => {
                console.log('GET /api/gallery had an error', err)
                alert('There was an error fetching the Gallery.')
            })}

        return (
            <div>
               {fullGalleryList.map((card) => {
                console.log(card.url);
                return <GalleryItem key={card.id} card={card}/>
               })}
            </div>
        )
    }

    export default GalleryList;