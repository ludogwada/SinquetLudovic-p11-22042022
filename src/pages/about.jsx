import Banner from '../components/Banner/banner'
import image from '../assets/imageAPropos.png'
import APropos from '../data/A-propos.json'
import Collapse from '../components/Collapse/collapse'
import '../index.css'



function About(){
    return(
        <main>
            <article className='aboutBanner'>
                <Banner
                    image={image} />
            </article>
            <article className='about'>
                {APropos.map((collapse, index) => {
                    return(
                        <article className='about__collapse'>
                            <Collapse 
                                key={index}
                                title={collapse.title}
                                description= {collapse.description}/>
                        </article>
                    )
                    })}
            </article>    
        </main>)
}

export default About