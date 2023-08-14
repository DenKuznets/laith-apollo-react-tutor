import { useParams } from 'react-router-dom'
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css";

const Character = () => {
    const { id } = useParams();
    const { error, loading, data } = useCharacter(id);
    if(error) return <div>SOmething went wrong...</div>
    if(loading) return <div>Loading</div>
    return <div className="Character">
        <img src={data.character.image} width={750} height={750} alt="" />
        <div className="Character-content">
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className="Character-episode">
                {data.character.episode.map(episode => {
                    return <div key={episode.id}>
                        {episode.episode}
                    </div>
                })}
            </div>
        </div>
    </div>;
};

export default Character;
