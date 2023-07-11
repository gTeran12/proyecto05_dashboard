let plot = (data) => {
  const ctx = document.getElementById('myChart');
  const dataset = {
    labels: data.hourly.time, /* ETIQUETA DE DATOS */
    datasets: [{
        label: 'Temperatura semanal', /* ETIQUETA DEL GRÁFICO */
        data: data.hourly.temperature_2m, /* ARREGLO DE DATOS */
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
  };
  const config = {
    type: 'line',
    data: dataset,
  };

  const chart = new Chart(ctx, config)
}
  
let plot2 = (data) => {
  const ctx = document.getElementById('myBar');
  const dataset = {
    labels: data.daily.time, /* ETIQUETA DE DATOS */
    datasets: [{
        label: 'Temperatura semanal', /* ETIQUETA DEL GRÁFICO */
        data: data.daily.temperature_2m_min, /* ARREGLO DE DATOS */
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};
const config ={
  type: 'bar',
  data: dataset,
};
const bar = new Chart(ctx, config)
}

let load = (data) => { 
  let URL = 'https://api.open-meteo.com/v1/forecast?latitude=-2.20&longitude=-79.89&hourly=temperature_2m&daily=temperature_2m_min&timezone=auto';
  fetch(URL)
  .then(response => response.json())
  .then(data => {
    plot(data)
    plot2(data)
  }

    



};
/*
let latitudeHTML = document.getElementById('latitude');
    //Para cambiar en el HTML el dato
    latitudeHTML.textContent = latitude
    let timezone = data['timezone']
    let timezoneHTML = document.getElementById('timezone')
    timezoneHTML.textContent = timezone
    */
(
  function () {
    let meteo = localStorage.getItem('meteo');
    if(meteo==null){
      let URL = 'https://api.open-meteo.com/v1/forecast?latitude=-2.20&longitude=-79.89&hourly=temperature_2m&daily=temperature_2m_min&timezone=auto';
      fetch( URL )
        .then(response => response.json())
        .then(data => {
          load(data)

            /*Guardar data en memoria*/
          localStorage.setItem("meteo", JSON.stringify(data))

        })
        .catch(console.error);
    }
    else{
      /* CARGAR DATA EN MEMORIA */
      load(JSON.parse(meteo))
    }
  }
)

