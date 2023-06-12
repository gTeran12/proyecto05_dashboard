(
    function () {
        let URL = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&timezone=auto';
        fetch( URL )
          .then(response => response.json())
          .then(data => {
            /*let timezone = data['timezone']
            console.log(timeZone)
            let timezoneHTML = document.getElementById('latitude');
            //Para cambiar en el HTML el dato
            latitudeHTML.textContent = latitude*/
            console.log(data)
            let timezone = data['timezone']
            let timezoneHTML = document.getElementById('timezone')
            timezoneHTML.textContent = timezone
          })
          .catch(console.error);
    }
  )();