

function randomName(){
    let random = Math.floor(Math.random() * array.length);
    let name = array[random].name;

/*     document.getElementById('display_name').innerHTML = name; */
    Lib.renderItem(array[random], aside, '.display_names');
    Lib.renderItem(array[random], card, '#Character');
}

function search(){
    let search = document.getElementById('SearchKey').value;
    let data = array;
    let result = data.filter(function(item){
        return item.name.toLowerCase().includes(search.toLowerCase());
        return item.publisher.toLowerCase().includes(search.toLowerCase());

    }
    );
    Lib.renderCollection(result, card, '#Character');
    Lib.renderCollection(result, aside, '.display_names');
}

