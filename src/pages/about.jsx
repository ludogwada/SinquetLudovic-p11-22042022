import Banner from '../components/Banner/banner'
import image from '../assets/imageAPropos.png'
import APropos from '../data/A-propos.json'
import Collapse from '../components/Collapse/collapse'
import '../index.css'



function About(){
    return(
        <main>
            <Banner
                image={image} />
            <article className='about'>
                {APropos.map((collapse, index) => {
                    return(
                    <Collapse 
                        key={index}
                        title={collapse.title}
                        description= {collapse.description}/>
                    )
                    })}
            </article>    
        </main>)
}

export default About