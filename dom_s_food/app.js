
//address to a folder, containing JSON files
const API_ADDRESS = 'remote/';

//function executed when document is ready
window.onload = function() {
    
    //search engine event listener
    document.querySelector("#search").onclick = function() {
        //get data using ajax
        getAll();
    }

    document.querySelector("#content").onclick = function(e) {
        //delegated event of clicking "more" to get restaurant details
        if(e.target.className == 'restaurantlink'){
            
            //take some data from DOM
            var id = e.target.dataset.link;
            getItem(id);
        }
        
        //delegated event of clicking "menu" to get restaurant menu
        else if(e.target.className == 'showmenu'){
            
            //take some data from DOM
            var id = e.target.dataset.link;
            getMenu(id);
        }
    }
};
