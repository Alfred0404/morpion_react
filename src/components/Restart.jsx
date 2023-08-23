
export default function Restart() {


    function handle_restart () {
        window.location.reload();
    }

    return (
    <button className="restart" onClick={handle_restart}>Restart</button>
  )
}
