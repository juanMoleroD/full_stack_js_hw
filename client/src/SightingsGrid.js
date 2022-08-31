import SightingCard from "./SightingCard";

const SightingsGrid = ({sightings, removeSighting}) => {
    if (!sightings) return <h2>Loading</h2>;
    const sightingsList = sightings.map((sighting) =>{
        return <SightingCard sighting={sighting} key={sighting._id} removeSighting={removeSighting} />
    });
    
    return (
        <section>
            {sightingsList}
        </section>
    );

}

export default SightingsGrid;