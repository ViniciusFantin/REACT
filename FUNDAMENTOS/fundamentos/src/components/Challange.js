const Challange = () => {
    const A = 23;
    const B = 98;
function ClickMe()
{
    alert(A * B);
}
  return (
    <div>
        <p className="Challange">A: {A}</p>
        <p>X</p>
        <p className="Challange">B: {B}</p>
        <button className="calculo" onClick={ClickMe}>
            Clique para ver o resultado!
        </button>
    </div>
  )
}

export default Challange