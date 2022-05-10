import star from '../../assets/star.svg'
import starPink from '../../assets/starPink.svg'

function Rating(props) {

    let content = []

        for (let i = 0; i < props.rating; i++) {
            content.push(<img key={`key${i}`} src={starPink} alt='star' />)
        }
        for (let i = props.rating; i < 5; i++) {
            content.push(<img key={`key${i}`} src={star} alt='star' />)
        }
    
    return ( 
        <span className='rating'>
            {content}
        </span>

    )
}

export default Rating