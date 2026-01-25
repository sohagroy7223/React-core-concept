export default function Book({ book }) {
  console.log(book);
  return (
    <div>
      <h3>book name : {book.name}</h3>
      <p>book price: {book.price}</p>
    </div>
  );
}
