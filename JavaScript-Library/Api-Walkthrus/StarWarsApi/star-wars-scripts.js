let starWarsPeopleList = document.querySelector('ul');
fetch('https://swapi.dev/api/people')
.then(function(response) {
    return response.json();
})
.then(function(json) {
    let people = json.results;

    for(p of people) {
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + p.name + '</p>';
        starWarsPeopleList.appendChild(listItem);
    }
});

//try playing with the API to make the html display different things in different places on the page. use html to make new sections to display the json data in fun ways.

// js methods used
// https://www.w3schools.com/jsref/met_document_queryselector.asp
// https://www.w3schools.com/jsref/met_document_createelement.asp

