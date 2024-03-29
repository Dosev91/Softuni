function solve() {
  const deparInput = document.getElementById('depart');
  const arriveInput = document.getElementById('arrive');
  const info = document.getElementById('info');

  let nextStop = 'depot';

  const depart = async () => {
    arriveInput.disabled = false;
    deparInput.disabled = true;

    const urlStop = await fetch(
      ` http://localhost:3030/jsonstore/bus/schedule/${nextStop}`,
    );
    const stop = await urlStop.json();

    info.textContent = `Next stop ${stop.name}`;
  }

  const arrive = async () => {
    deparInput.disabled = false;
    arriveInput.disabled = true;

    const urlStop = await fetch(
      ` http://localhost:3030/jsonstore/bus/schedule/${nextStop}`,
    );
    const stop = await urlStop.json();

    info.textContent = `Arriving at ${stop.name}`;
    nextStop = stop.next;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
