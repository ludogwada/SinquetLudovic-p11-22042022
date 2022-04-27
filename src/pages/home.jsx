import Banner from '../components/Banner/banner'
import image from '../assets/imageHome.png'
import Card from '../components/Card/card'
import ListHebergement from '../data/Liste-hebergement.json'
import'../index.css'
import { NavLink } from 'react-router-dom'


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
                        <NavLink to={hebergement.id}>
                            <Card 
                                cover={hebergement.cover}
                                title={hebergement.title}
                                key={hebergement.id}/>
                        </NavLink>
                    </article>
                )
            })
            }
        </article>
    </main>
    )
}

export default Home