import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
    query {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`;

const CharactersList = () => {
    const { error, loading, data } = useQuery(GET_CHARACTERS);

    console.log({ error, loading, data });

    if (loading) return <div>loading...</div>;

    if (error) return <div>something went wrong</div>;

    return (
        <div className="CharacterList">
            {data.characters.results.map((character) => {
                return (
                    <div>
                        <img src={character.img} alt="" />
                        <h2>{character.name}</h2>
                    </div>
                );
            })}
        </div>
    );
};

export default CharactersList;
