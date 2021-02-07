import React from 'react';
import './gamecard.css';
import star from '../../assets/star.svg';
import windows from '../../assets/windows.svg';
import xbox from '../../assets/xbox.svg';
import playstation from '../../assets/playstation.svg';
import nintendoSwitch from '../../assets/nintendoSwitch.svg';
import linux from '../../assets/linux.svg';
import apple from '../../assets/apple.svg';
const style = {
    star: { width: 10, height: 10, marginRight: 5 },
    platform: { width: 12, height: 12, marginRight: 7, marginTop: 7, opacity: .2 },
}
const getStarRatings = (rating = []) => {
    let stars = [];
    for (let i = 0; Math.floor(rating) > i; i++) {
        stars.push(<img src={star} style={style.star} alt="star" />)
    }
    return stars;
}
const getPlatforms = (platforms) => {
    if(platforms === null) platforms = [];
    let platform = [];
    for (let i = 0; platforms.length > i; i++) {
        if (platforms[i].platform.slug === "pc") platform.push(<img src={windows} style={style.platform} alt="star" />)
        if (platforms[i].platform.slug === "linux") platform.push(<img src={linux} style={style.platform} alt="star" />)
        if (platforms[i].platform.slug === "nintendo-switch") platform.push(<img src={nintendoSwitch} style={style.platform} alt="star" />)
        if (platforms[i].platform.slug === "macos") platform.push(<img src={apple} style={style.platform} alt="star" />)
        if (platforms[i].platform.slug === "xbox-series-x" || platforms[i].platform.slug === "xbox-one" || platforms[i].platform.slug === "xbox360") platform.push(<img src={xbox} style={style.platform} alt="platform" />)
        if (platforms[i].platform.slug === "playstation3" || platforms[i].platform.slug === "playstation4" || platforms[i].platform.slug === "playstation5") platform.push(<img src={playstation} style={style.platform} alt="platform" />)
    }
    return platform;
}
let GameCard = ({ game }) => {
    return (
        <div className="game-card">
            <div
                className="game-cover"
                style={{
                    backgroundImage: `url(${game.background_image})`,
                }}
            >
            </div>
            <h3 className="game-name">{game.name}</h3>
            <div>{getStarRatings(game.rating)}</div>
            <div>{getPlatforms(game.platforms)}</div>
        </div>
    );
}

export default GameCard;