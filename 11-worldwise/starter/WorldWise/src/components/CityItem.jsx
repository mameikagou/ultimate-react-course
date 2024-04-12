

export default function CityItem({ city }) {
    return (
      <li>
        <h2>{city.name}</h2>
        <p>{city.population}</p>
      </li>
    );
}