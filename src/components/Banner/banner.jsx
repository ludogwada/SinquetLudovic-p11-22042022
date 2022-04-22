import image from '../../assets/imageHome.png'

function Banner() {
    return(
        <div className="banner">
            <img src={image} alt="paysage" className='banner__img'/>;
            <div className='banner__titre'>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )
}

export default Banner