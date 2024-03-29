import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Collapse from '../components/Collapse/collapse';
import Host from '../components/Host/host';
import Rating from '../components/rating/Rating';
import Slider from '../components/slider/slider';
import Tag from '../components/Tag/tag';
import ListHebergement from '../data/Liste-hebergement.json';

function Fiche() {
	const { hebergementId } = useParams();
	const [hebergementData] = useState(ListHebergement);

	let hebergement = hebergementData.find(
		(hebergement) => hebergement.id === hebergementId
	);

	if (!hebergement) {
		return <Navigate to='*' />;
	}

	return (
		<main>
			<section className='cardLocation'>
				<Slider pictures={hebergement.pictures} title={hebergement.title} />
				<section className='cardLocation__titleHost'>
					<section>
						<h2>{hebergement.title}</h2>
						<h4>{hebergement.location}</h4>
					</section>
					<Host
						name={hebergement.host.name}
						picture={hebergement.host.picture}
					/>
				</section>

				<section className='cardLocation__tagRating'>
					<Tag tags={hebergement.tags} />
					<Rating rating={hebergement.rating} />
				</section>
				<section className='cardLocation__collapse'>
					<section className='cardLocation__collapse__description'>
						<Collapse
							title='Description'
							description={hebergement.description}
						/>
					</section>
					<section className='cardLocation__collapse__equipement'>
						<Collapse
							title='Equipement'
							description={hebergement.equipments.map((equipment, index) => (
								<li key={index}>{equipment}</li>
							))}
						/>
					</section>
				</section>
			</section>
		</main>
	);
}

export default Fiche;
