export type Drink = {
  name: string
}

type DrinkProps = {
  drinkProps: Drink
}

const Drink = ({ drinkProps }: DrinkProps) => {
  const { name } = drinkProps;

  let plant: string = '';
  let coffeineContent: string = '';
  let age: string = '';

  if (name === 'tea') {
    plant = 'leaf';
    coffeineContent = '15-70 mg/cup';
    age = '4,000+ years';
  } else {
    plant = 'bean';
    coffeineContent = '80-185 mg/cup';
    age = '1,000 years';
  }

  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{plant}</dd>
        <dt>Caffeine content</dt>
        <dd>{coffeineContent}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

const DrinkList = () => {
  return (
    <div>
      <Drink drinkProps={{ name:'tea' }} />
      <Drink drinkProps={{ name:'coffee' }} />
    </div>
  );
}
export default DrinkList;
