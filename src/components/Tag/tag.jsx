function Tag({tags}) {
    return(
        <section className="tags">
            {tags.map((tag, key) => (
                <div className="tags__tag" key={key}>
                    <p className="tags__tag__title" >{tag}</p>
                </div>
            ))}
        </section>
    )
}

export default Tag