import { people, type Scientist } from './scientistData';
import { getImageUrl } from './utils';


export const List = () => {
  const chemists: Array<Scientist> = people.filter((scientist) => {
    return scientist.profession === 'chemist';
  });

  const everyoneElse: Array<Scientist> = people.filter((scientist) => {
    return scientist.profession !== 'chemist';
  })

  const chemistLi = chemists.map((chemist) => {
    return (
      <li key={chemist.id}>
        <img
          src={getImageUrl(chemist)}
          alt={chemist.name}
        />
        <p>
          <b>{chemist.name}:</b>
          {' ' + chemist.profession + ' '}
          known for {chemist.accomplishment}
        </p>
      </li>
    );
  });

  const everyoneElseLi = everyoneElse.map((everyone) => {
    return (
      <li key={everyone.id}>
        <img
          src={getImageUrl(everyone)}
          alt={everyone.name}
        />
        <p>
          <b>{everyone.name}:</b>
          {' ' + everyone.profession + ' '}
          known for {everyone.accomplishment}
        </p>
      </li>
    );
  });

  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ul>
        {chemistLi}
      </ul>
      <h2>Everyone Else</h2>
      <ul>
        {everyoneElseLi}
      </ul>
    </article>
  );
}