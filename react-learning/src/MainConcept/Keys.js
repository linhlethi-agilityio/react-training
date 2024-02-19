/**----------------------Keys----------------------- */
function ListItem(props) {
  const value = props.value;
  return <li>{value}</li>;
}

function NumberList() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}

export default NumberList;
