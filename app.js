const entitiesList = document.getElementById('entitiesList');
const searchBar = document.getElementById('searchBar');



  

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    var filteredEntities = entities.filter((entity) => {
        return (
            entity.number == searchString ||
            entity.orga.toLowerCase().includes(searchString)
        );
    });
    
    if(filteredEntities.length == 0){
        filteredEntities = entities;
    }
    displayCharacters(filteredEntities);
    console.log(filteredEntities)
});

const displayCharacters = (filtered) => {
    const htmlString = filtered
        .map((entity) => {
            return `
            <li class="entity">
                <h2>${entity.orga}</h2>
                <p>Numéro : ${entity.number}</p>
            </li>
        `;
        })
        .join('');
        
    entitiesList.innerHTML = htmlString;
};

displayCharacters(entities)
