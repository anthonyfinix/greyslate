import React from 'react';
import loadingGif from '../../assets/loading.gif';

const style = {
    loadingWrapper:{ textAlign: "center", width: "100%", marginTop: 30,marginBottom:30 },
    loadingGif:{width:30,height:30}
}

let LoadingGif = () => {
    return (
        <div className="loading-wrapper" style={style.loadingWrapper}>
            <img style={style.loadingGif} src={loadingGif} alt="loading" />
        </div>
    )
}

export default LoadingGif;