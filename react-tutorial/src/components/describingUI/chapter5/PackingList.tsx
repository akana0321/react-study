export type Item = {
  name: string,
  isPacked: boolean,
  importance: number
}

type ItemProps = {
  item: Item
}

const Item = ({ item }: ItemProps) => {
  const { name, isPacked, importance } = item;



  return (
    <li className="item">
      {name}
      {importance > 0 && ' '}
      {importance > 0 && 
        <span>(Importance: {importance})</span>
      }
      {isPacked ? '✅' : "❌"}
    </li>
  );
}

const PackingList = () => {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          itemInfo={{
            isPacked: true,
            name: 'Space suit'
          }}
        />
        <Item
          itemInfo={{
            isPacked: true,
            name: 'Helmet with a golden leaf'
          }}
        />
        <Item
          itemInfo={{
            isPacked: false,
            name: 'Photo of Tam'
          }}
        />
      </ul>
    </section>
  );
}
export default PackingList;