export default function Book({ book }) {
  return (
    <div>
      <h3>book name : {book.name}</h3>
      <p>book price: {book.price}</p>
    </div>
  );
}
