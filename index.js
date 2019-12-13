const findLocation = document.getElementById('location')
let input = document.getElementById('input');
let form = document.getElementById('form');
for (let i = 0; i<localStorage.length; i++) {
    const promise = fetch (`http://api.weatherstack.com/current?access_key=f7fbc6b9c5d16a6419e5597c3d6f5030&query=
        ${localStorage.key(i)}`)
    promise.then(result => result.json()).then(data => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        td1.innerHTML = data.location.name;
        td2.innerHTML = data.location.country;
        td3.innerHTML = data.current.temperature;
        const tbody = document.getElementById('tableData');
        tbody.append(tr)})

}
form.onsubmit = function (e){
    e.preventDefault();
    const promise = fetch(`http://api.weatherstack.com/current?access_key=f7fbc6b9c5d16a6419e5597c3d6f5030&query=${input.value}`);
    promise.then(result =>result.json()).then(data=> {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        localStorage.setItem(data.location.name, 1)
        td1.innerHTML = data.location.name;
        td2.innerHTML = data.location.country;
        td3.innerHTML = data.current.temperature;
        const tbody = document.getElementById('tableData');
        tbody.append(tr)
    });
};






findLocation.addEventListener('click', function(){
    navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        sessionStorage.setItem('lat', latitude)
        sessionStorage.setItem('long', longitude)
    })
    const promise = fetch(`http://api.weatherstack.com/current?access_key=f7fbc6b9c5d16a6419e5597c3d6f5030&query=
    ${sessionStorage.getItem('lat')},${sessionStorage.getItem('long')}`);

    promise.then(result =>result.json()).then(data=> {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        td1.innerHTML = data.location.name;
        td2.innerHTML = data.location.country;
        td3.innerHTML = data.current.temperature;
        const tbody = document.getElementById('tableData');
        tbody.append(tr)
    })
})

localStorage.clear()