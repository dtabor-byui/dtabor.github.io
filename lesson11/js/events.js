const data = 'https://byui-cit230.github.io/weather/data/towndata.json';
let myTown;

if (page.match(/preston/)){
    myTown = "Preston";
    
  }
  else if (page.match(/sodasprings/)) {
      myTown = "Soda Springs";
  }
  else if (page.match(/fishhaven/)) {
      myTown = "Fish Haven";
  }

fetch(data)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const town = jsonObject['towns'];

        for (let i = 0; i < town.length; i++) {
            if (town[i].name == myTown) {

                let main = document.createElement('section');
                let h2 = document.createElement('h4');
                let p = document.createElement('p');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let br = document.createElement('br');
                let div = document.createElement('div');
                div.classList.add('newevents');

                h2.textContent = "Upcoming Events";
                p.textContent = 'Events:';
                p.textContent = town[i].events[0];
                p1.textContent = town[i].events[1];
                p2.textContent = town[i].events[2];
                p3.textContent = town[i].events[3];
                
                

                main.appendChild(h2);
                main.appendChild(div);
                div.appendChild(p);
                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);
                
    

        
                
                document.querySelector('div.events').appendChild(main);
            }
    

        }


    });