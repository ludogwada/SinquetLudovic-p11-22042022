import Banner from '../components/Banner/banner'
import image from '../assets/imageHome.png'
import Card from '../components/Card/card'
import ListHebergement from '../data/Liste-hebergement.json'
import'../index.css'


function Home(){
return(
    <main>
        <Banner
            image={image} />
        <article className='cardsContainer'>
            {
            ListHebergement.map( hebergement => {
                return(
                    <article>
                        <Card 
                            cover={hebergement.cover}
                            title={hebergement.title}
                            key={hebergement.id}/>
                    </article>
                )
            })
            }
        </article>
    </main>
    )
}

export default Home