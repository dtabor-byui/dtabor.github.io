const data = 'https://dtabor-byui.github.io/dtabor.github.io/final/js/guidedata.json';


fetch(data)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        
        const guides = jsonObject['guides'];

        for (let i = 0; i < guides.length; i++) {
        
                let index = document.createElement('section');
                let h2 = document.createElement('h2');
                let motto = document.createElement('p');
                let image = document.createElement('img');
                let div = document.createElement('div');
                let yearE = document.createElement('p');
                let yearS = document.createElement('p');
                div.classList.add('text');


                var photo = 'images/' + guides[i].currentPhoto;
                var alt = 'An image of a guide that works for us';

                h2.textContent = guides[i].name;
                motto.textContent = 'Motto: ' + guides[i].motto;
                yearE.textContent = 'Year employed ' + guides[i].yearEmployed;
                yearS.textContent = 'Rafting Since :' + guides[i].yearStartedRafting;
                
                // Set image source and attribute
                image.setAttribute('src', photo);
                image.setAttribute('alt', alt);

                //
                
                index.appendChild(h2);
                index.appendChild(image);
                div.appendChild(motto);
                div.appendChild(yearE);
                div.appendChild(yearS);
                 index.appendChild(div);

                
                
                document.querySelector('div.guides').appendChild(index);
            

        }


    });