function SnackList() {
  const snackArray = [
    { name: 'popcorn', rank: 3 },
    { name: 'fruit', rank: 2 },
    { name: 'trail mix', rank: 1 },
  ];
  const orderedList = snackArray.toSorted((a, b) => a.rank - b.rank);
  return (
    <div>
      <ol>
        {orderedList.map((snack) => (
          <li key={snack}>{snack.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default SnackList;
