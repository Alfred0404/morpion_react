export default function Square({ value, on_square_click }) {


  return (
    <button className="square" onClick={on_square_click}>
      {value}
    </button>
  );
}
