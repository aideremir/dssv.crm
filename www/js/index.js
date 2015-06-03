document.addEventListener('deviceready', function ()
{

    PhoneCallTrap.onCall(function (state) {
        //console.log("CHANGE STATE: " + state);

        document.getElementById('callStatus').innerHTML = state;

    });


    var parentElement = document.getElementById('deviceready');
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');


    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');


}, false);