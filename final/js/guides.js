const data = 'https://dtabor-byui.github.io/dtabor.github.io/final/js/guidedata.json';


fetch(data)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);/*DELETE BEFORE PRODUCTION*/
        const guides = jsonObject['guides'];

        for (let i = 0; i < guides.length; i++) {
        
                let index = document.createElement('section');
                let h2 = document.createElement('h2');
                let p = document.createElement('p');
                let image = document.createElement('img');
                let div = document.createElement('div');
                let pop = document.createElement('p');
                let year = document.createElement('p');
                let rain = document.createElement('p');
                div.classList.add('text');


                var photo = 'images/' + guides[i].currentPhoto

                h2.textContent = guides[i].name;
                p.textContent = 'Motto: ' + guides[i].motto;
                pop.textContent = 'Year employed ' + guides[i].yearEmployed;
                year.textContent = 'Rafting Since :' + guides[i].yearStartedRafting;
                image.setAttribute('src', photo);

                index.appendChild(h2);
                index.appendChild(image);
                div.appendChild(p);
                div.appendChild(pop);
                div.appendChild(year);
                div.appendChild(rain);

                index.appendChild(div);
                
                document.querySelector('div.guides').appendChild(index);
            

        }


    });