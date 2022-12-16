import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import TodayPicks from '../components/layouts/explore-02/TodayPicks'
import todayPickData from '../assets/fake-data/data-today-pick';
import PathBanner from '../components/header/PathBanner';
import img1 from '../alice_video.png'

const GET_ALL_NFTS = "http://localhost:8080/nft"

const Browse = () => {
    const [assetCollection, setAssetCollection] = React.useState([]);
    const [dataPanel, setDataPanel] = useState([{ id: 1, dataContent: [] }]);
    React.useEffect(() => {
        fetch(
            GET_ALL_NFTS,
            {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            }
        ).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response
        })
            .then(collection => {
                setDataPanel([{ id: 1, dataContent: collection }]);
                console.log("remote collection", dataPanel);
            })
    }, [])


    return (
        <div className='explore'>
            <Header />
            <PathBanner heading="Marketplace" />
            <TodayPicks dataPanel={dataPanel} />
            <Footer />
        </div>
    );
}

export default Browse;
