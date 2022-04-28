import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Collapse from "../components/Collapse/collapse";
import Rating from "../components/rating/Rating";
import ListHebergement from '../data/Liste-hebergement.json'
 



function Fiche() {

    const { hebergementId } = useParams();
    const [hebergementData] = useState(ListHebergement)
    
    let hebergement = hebergementData.find( hebergement => hebergement.id === hebergementId)

    if(!hebergement){
        return <Navigate to='*' />
    }
    
    return(
        <main>
            <section>
                <img src={hebergement.cover} alt="cover" />
                <h2>{hebergement.title}</h2>
                <h4>{hebergement.location}</h4>
                <div>{hebergement.tags}</div>
                <div>{hebergement.host.name}{hebergement.host.picture}</div>
                <Rating
                    rating={hebergement.rating} />
                <Collapse
                    title= 'description'
                    description={hebergement.description} />
                <Collapse
                    title= 'equipement'
                    description={hebergement.equipments} />
                    

            </section>
        </main>
    )
}

export default Fiche