import'../../index.css'
import arrow from '../../assets/Vector.svg'
import arrowUp from '../../assets/VectorUp.svg'
import { useState } from 'react'

function Collapse(props){

    const { title, description } =props
    const [expanded, setExpanded] = useState(false)

    return(
        <article className='collapse'>
            <header className='collapse__title' onClick={()=> setExpanded(!expanded)}>
                <h5>{title}</h5>
                <span onClick={() => setExpanded(!expanded)}>
          {expanded ? <img src={arrow} alt="arrow down" className='collapse__title__arrowDown'/> : <img src={arrowUp} alt="arrow up" className='collapse__title__arrowUp'/>}
        </span>
            </header>
            {expanded &&
            <div className='collapse__description'>
                <h6>{description}</h6>
            </div>}    
        </article>
    )
}

export default Collapse