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

                let index = document.createElement('article');
                let h2 = document.createElement('h2');
                let p = document.createElement('p');
                let image = document.createElement('img');
                let div = document.createElement('div');
                div.classList.add('text'):

                var photo = 'images/' + town[i].photo
                h2.textContent = town[i].name;
                p.textContent = town[i].motto;
                image.setAttribute('src', photo);

                index.appendChild(h2);
                index.appendChild(image);
                div.appendChild(p);
                
                index.appendChild(div);
                
                

                document.querySelector('div.index').appendChild(index);
            }

        }


    });