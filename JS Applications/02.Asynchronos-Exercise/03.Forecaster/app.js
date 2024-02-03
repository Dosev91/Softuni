function attachEvents() {
  const weatherBtn = document.getElementById('submit');
  const forecast = document.getElementById('current');
  const display = document.getElementById('forecast');
  const unComing = document.getElementById('upcoming');

  weatherBtn.addEventListener('click', async () => {
    const location = document.getElementById('location').value;
    const response = await fetch(
      `http://localhost:3030/jsonstore/forecaster/locations`,
    );
    const locations = await response.json();

    const code = locations.find(l => l.name === location)?.code;



    const response2 = await fetch(
      `http://localhost:3030/jsonstore/forecaster/today/${code}`,
    );
    const response3 = await fetch(
      `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`,
    );
    const text3 = await response3.json();
    const text2 = await response2.json();

    const existingForecastInfo = forecast.querySelector('.forecasts');
    if (existingForecastInfo) {
      forecast.removeChild(existingForecastInfo);
    }

    const div = document.createElement('div');
    div.className = 'forecast-info';

    const div2 = document.createElement('div');
    div2.className = 'forecasts';

    const spanak = document.createElement('span');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    const span4 = document.createElement('span');

    spanak.className = 'condition symbol';

    let symbol1 = '';

    switch (text2.forecast.condition) {
      case 'Sunny':
        symbol1 = String.fromCharCode(0x2600);
        break;
      case 'Partly sunny':
        symbol1 = String.fromCharCode(0x26c5);
        break;
      case 'Overcast':
        symbol1 = String.fromCharCode(0x2601);
        break;
      case 'Rain':
        symbol1 = String.fromCharCode(0x2614);
        break;
      case 'Degrees':
        symbol1 = String.fromCharCode(0x176);
        break;
      default:
        break;
    }

    spanak.textContent = symbol1;
    div2.appendChild(spanak);

    span1.className = 'condition';

    span2.className = 'forecast-date';
    span2.textContent = `${text2.name} \n`;
    span1.appendChild(span2);

    span3.className = 'forecast-date';
    span3.textContent = `${text2.forecast.low}°/${text2.forecast.high}°\n`;
    span1.appendChild(span3);

    span4.className = 'forecast-date';
    span4.textContent = `${text2.forecast.condition}\n`;
    span1.appendChild(span4);

    div2.appendChild(span1);

    forecast.appendChild(div2);

    text3.forecast.forEach((el) => {
      div.appendChild(upComingWheter(el.condition, el.high, el.low));
      unComing.appendChild(div);
    });

    display.style = 'block';
  });

  function upComingWheter(condition, high, low) {
    let symbol = '';
    const forecast = document.getElementById('upcoming');

    const existingForecastInfo = forecast.querySelector('.forecast-info');
    if (existingForecastInfo) {
      forecast.removeChild(existingForecastInfo);
    }

    const span = document.createElement('span');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');

    span.className = 'upcoming';
    span1.className = 'symbol';
    span2.className = 'forecast-data';
    span3.className = 'forecast-data';

    switch (condition) {
      case 'Sunny':
        symbol = String.fromCharCode(0x2600);
        break;
      case 'Partly sunny':
        symbol = String.fromCharCode(0x26c5);
        break;
      case 'Overcast':
        symbol = String.fromCharCode(0x2601);
        break;
      case 'Rain':
        symbol = String.fromCharCode(0x2614);
        break;
      case 'Degrees':
        symbol = String.fromCharCode(0x176);
        break;
      default:
        break;
    }
    span1.textContent = symbol;
    span2.textContent = `${low}°/${high}°`;
    span3.textContent = condition;
    span.appendChild(span1);
    span.appendChild(span2);
    span.appendChild(span3);
    return span;
  }
}

attachEvents();
