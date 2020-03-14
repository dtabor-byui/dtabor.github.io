const data = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(data)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const town = jsonObject['towns'];

        for (let i = 0; i < town.length; i++) {
            if (town[i].name == 'Preston' || town[i].name == 'Soda Springs' || town[i].name == 'Fish Haven') {

                let index = document.createElement('section');
                let h2 = document.createElement('h2');
                let p = document.createElement('p');
                let image = document.createElement('img');
                let div = document.createElement('div');
                let pop = document.createElement('p');
                let year = document.createElement('p');
                let rain = document.createElement('p');
                div.classList.add('text');


                var photo = 'images/' + town[i].photo

                h2.textContent = town[i].name;
                p.textContent = 'Motto: ' + town[i].motto;
                pop.textContent = 'Population: ' + town[i].currentPopulation;
                year.textContent = 'Year Founded: ' + town[i].yearFounded;
                rain.textContent = 'Average Rainfall: ' +town[i].averageRainfall;
                image.setAttribute('src', photo);

                index.appendChild(h2);
                index.appendChild(image);
                div.appendChild(p);
                div.appendChild(pop);
                div.appendChild(year);
                div.appendChild(rain);

                index.appendChild(div);
                
                document.querySelector('div.index').appendChild(index);
            }

        }


    });