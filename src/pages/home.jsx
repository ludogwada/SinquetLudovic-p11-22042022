import Banner from '../components/Banner/banner'
import Card from '../components/Card/card'
import ListHebergement from '../data/Liste-hebergement.json'
import'../index.css'


function Home(){
    return(
        <div>
<Banner />
<div className='cardsContainer'>
        {
                ListHebergement.map( hebergement => {
                        return(
                                <div>
                                <Card 
                                cover={hebergement.cover}
                                title={hebergement.title}
                                key={hebergement.id}/>
                                
                        </div>)
                })
        }</div>
        </div>)
}

export default Home