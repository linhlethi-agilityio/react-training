let guest = 0;

const Count = () => {
  guest = guest + 1;
  console.log(guest);

  return <h2>Count: #{guest}</h2>;
};

const Sum = () => {
  return (
    <>
      <Count />
      <Count />
      <Count />
    </>
  );
};

export { Sum };
