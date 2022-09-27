const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container);
var request = new XMLHttpRequest();
request.open('GET', 'http://myjson.dit.upm.es/api/bins/gyz2', true)
request.onload = function () {
  // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    var i;
    for(i = 0; i<data.p_info.length;i++){

       const card = document.createElement('div');
       card.setAttribute('class', 'card');

       const year = document.createElement('text_display');
       year.textContent = "年龄 " + data.p_info[i].年龄
        card.appendChild(year)
        container.appendChild(card)

    }


}

request.send()