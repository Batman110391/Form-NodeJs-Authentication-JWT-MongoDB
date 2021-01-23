const urlParams = new URLSearchParams(location.search);
const newUtent = urlParams.get('new')
const oldUtent = urlParams.get('exist')
const nameUtent = urlParams.get('name')


if(newUtent)
    $('#message').html("Benvenuto " + nameUtent);
else if(oldUtent) 
    $('#message').html("Bentornato " + nameUtent);
