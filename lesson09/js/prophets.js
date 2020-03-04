const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let bd = document.createElement('bd');
            let bp = document.createElement('bp');
            let image = document.createElement('img');
            let br = document.createElement('br');
            let br2 = document.createElement('br');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            bd.textContent = prophets[i].birthdate + ' ';
            bp.textContent = prophets[i].birthplace + ' ';
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', prophets[i].name + ' ' +prophets[i].lastname + '-' + prophets[i].order);

            card.appendChild(h2);
            card.appendChild(image);
            card.appendChild(br);
            card.appendChild(bd);
            card.appendChild(br2);
            card.appendChild(bp);


            document.querySelector('div.cards').appendChild(card);
        }

    });