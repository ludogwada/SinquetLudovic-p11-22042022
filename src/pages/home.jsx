import Banner from '../components/Banner/banner';
import image from '../assets/imageHome.png';
import Card from '../components/Card/card';
import ListHebergement from '../data/Liste-hebergement.json';
import '../index.css';
import { NavLink } from 'react-router-dom';

function Home() {
	return (
		<main>
			<Banner image={image} title='Chez vous, partout et ailleurs' />
			<article className='cardsContainer'>
				{ListHebergement.map((hebergement) => {

                    let id=hebergement.id;

					return (
						<section key={id} >
							<NavLink to={id}>
								<Card
									cover={hebergement.cover}
									title={hebergement.title}
									key={id}
								/>
							</NavLink>
						</section>
					);
				})}
			</article>
		</main>
	);
}

export default Home;
