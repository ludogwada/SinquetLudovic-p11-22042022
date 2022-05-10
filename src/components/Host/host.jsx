function Host(props){
    const { name, picture} = props

    return(
        <section className="host">
            <h4 className="host__name">{name}</h4>
            <img className="host__picture" src={picture} alt="host" />
        </section>
    )
}

export default Host