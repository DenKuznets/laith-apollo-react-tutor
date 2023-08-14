
import './CharacterList.css'
import { useCharacters } from "../hooks/useCharacters";
import { Link} from 'react-router-dom'



const CharactersList = () => {

    const { error, loading, data } = useCharacters();

    console.log({ error, loading, data });

    if (loading) return <div>loading...</div>;

    if (error) return <div>something went wrong</div>;

    return (
        <div className="CharacterList">
            {data.characters.results.map((character) => {
                return (
                    <Link to={`/${character.id}`} key={character.id}>
                        <img src={character.image} alt="" />
                        <h2>{character.name}</h2>
                    </Link>
                );
            })}
        </div>
    );
};

export default CharactersList;
