//------ VARIABLES --------------------
var existingAnimalsArray = ["Aardvark", "Abyssinian", "Adelie Penguin", "Affenpinscher", "Afghan Hound", "African Bush Elephant", "African Civet", "African Clawed Frog", "African Forest Elephant", "African Palm Civet", "African Penguin", "African Tree Toad", "African Wild Dog", "Ainu Dog", "Airedale Terrier", "Akbash", "Akita", "Alaskan Malamute", "Albatross", "Aldabra Giant Tortoise", "Alligator", "Alpine Dachsbracke", "American Bulldog", "American Cocker Spaniel", "American Coonhound", "American Eskimo Dog", "American Foxhound", "American Pit Bull Terrier", "American Staffordshire Terrier", "American Water Spaniel", "Anatolian Shepherd Dog", "Angelfish", "Ant", "Anteater", "Antelope", "Appenzeller Dog", "Arctic Fox", "Arctic Hare", "Arctic Wolf", "Armadillo", "Asian Elephant", "Asian Giant Hornet", "Asian Palm Civet", "Asiatic Black Bear", "Australian Cattle Dog", "Australian Kelpie Dog", "Australian Mist", "Australian Shepherd", "Australian Terrier", "Avocet", "Axolotl", "Aye Aye", "Baboon", "Bactrian Camel", "Badger", "Balinese", "Banded Palm Civet", "Bandicoot", "Barb", "Barn Owl", "Barnacle", "Barracuda", "Basenji Dog", "Basking Shark", "Basset Hound", "Bat", "Bavarian Mountain Hound", "Beagle", "Bear", "Bearded Collie", "Bearded Dragon", "Beaver", "Bedlington Terrier", "Beetle", "Bengal Tiger", "Bernese Mountain Dog", "Bichon Frise", "Binturong", "Bird", "Birds Of Paradise", "Birman", "Bison", "Black Bear", "Black Rhinoceros", "Black Russian Terrier", "Black Widow Spider", "Bloodhound", "Blue Lacy Dog", "Blue Whale", "Bluetick Coonhound", "Bobcat", "Bolognese Dog", "Bombay", "Bongo", "Bonobo", "Booby", "Border Collie", "Border Terrier", "Bornean Orang-utan", "Borneo Elephant", "Boston Terrier", "Bottle Nosed Dolphin", "Boxer Dog", "Boykin Spaniel", "Brazilian Terrier", "Brown Bear", "Budgerigar", "Buffalo", "Bull Mastiff", "Bull Shark", "Bull Terrier", "Bulldog", "Bullfrog", "Bumble Bee", "Burmese", "Burrowing Frog", "Butterfly", "Butterfly Fish", "Caiman", "Caiman Lizard", "Cairn Terrier", "Camel", "Canaan Dog", "Capybara", "Caracal", "Carolina Dog", "Cassowary", "Cat", "Caterpillar", "Catfish", "Cavalier King Charles Spaniel", "Centipede", "Cesky Fousek", "Chameleon", "Chamois", "Cheetah", "Chesapeake Bay Retriever", "Chicken", "Chihuahua", "Chimpanzee", "Chinchilla", "Chinese Crested Dog", "Chinook", "Chinstrap Penguin", "Chipmunk", "Chow Chow", "Cichlid", "Clouded Leopard", "Clown Fish", "Clumber Spaniel", "Coati", "Cockroach", "Collared Peccary", "Collie", "Common Buzzard", "Common Frog", "Common Loon", "Common Toad", "Coral", "Cottontop Tamarin", "Cougar", "Cow", "Coyote", "Crab", "Crab-Eating Macaque", "Crane", "Crested Penguin", "Crocodile", "Cross River Gorilla", "Curly Coated Retriever", "Cuscus", "Cuttlefish", "Dachshund", "Dalmatian", "Darwin's Frog", "Deer", "Desert Tortoise", "Deutsche Bracke", "Dhole", "Dingo", "Discus", "Doberman Pinscher", "Dodo", "Dog", "Dogo Argentino", "Dogue De Bordeaux", "Dolphin", "Donkey", "Dormouse", "Dragonfly", "Drever", "Duck", "Dugong", "Dunker", "Dusky Dolphin", "Dwarf Crocodile", "Eagle", "Earwig", "Eastern Gorilla", "Eastern Lowland Gorilla", "Echidna", "Edible Frog", "Egyptian Mau", "Electric Eel", "Elephant", "Elephant Seal", "Elephant Shrew", "Emperor Penguin", "Emperor Tamarin", "Emu", "English Cocker Spaniel", "English Shepherd", "English Springer Spaniel", "Entlebucher Mountain Dog", "Epagneul Pont Audemer", "Eskimo Dog", "Estrela Mountain Dog", "Falcon", "Fennec Fox", "Ferret", "Field Spaniel", "Fin Whale", "Finnish Spitz", "Fire-Bellied Toad", "Fish", "Fishing Cat", "Flamingo", "Flat Coat Retriever", "Flounder", "Fly", "Flying Squirrel", "Fossa", "Fox", "Fox Terrier", "French Bulldog", "Frigatebird", "Frilled Lizard", "Frog", "Fur Seal", "Galapagos Penguin", "Galapagos Tortoise", "Gar", "Gecko", "Gentoo Penguin", "Geoffroys Tamarin", "Gerbil", "German Pinscher", "German Shepherd", "Gharial", "Giant African Land Snail", "Giant Clam", "Giant Panda Bear", "Giant Schnauzer", "Gibbon", "Gila Monster", "Giraffe", "Glass Lizard", "Glow Worm", "Goat", "Golden Lion Tamarin", "Golden Oriole", "Golden Retriever", "Goose", "Gopher", "Gorilla", "Grasshopper", "Great Dane", "Great White Shark", "Greater Swiss Mountain Dog", "Green Bee-Eater", "Greenland Dog", "Grey Mouse Lemur", "Grey Reef Shark", "Grey Seal", "Greyhound", "Grizzly Bear", "Grouse", "Guinea Fowl", "Guinea Pig", "Guppy", "Hammerhead Shark", "Hamster", "Hare", "Harrier", "Havanese", "Hedgehog", "Hercules Beetle", "Hermit Crab", "Heron", "Highland Cattle", "Himalayan", "Hippopotamus", "Honey Bee", "Horn Shark", "Horned Frog", "Horse", "Horseshoe Crab", "Howler Monkey", "Human", "Humboldt Penguin", "Hummingbird", "Humpback Whale", "Hyena", "Ibis", "Ibizan Hound", "Iguana", "Impala", "Indian Elephant", "Indian Palm Squirrel", "Indian Rhinoceros", "Indian Star Tortoise", "Indochinese Tiger", "Indri", "Insect", "Irish Setter", "Irish WolfHound", "Jack Russel", "Jackal", "Jaguar", "Japanese Chin", "Japanese Macaque", "Javan Rhinoceros", "Javanese", "Jellyfish", "Kakapo", "Kangaroo", "Keel Billed Toucan", "Killer Whale", "King Crab", "King Penguin", "Kingfisher", "Kiwi", "Koala", "Komodo Dragon", "Kudu", "Labradoodle", "Labrador Retriever", "Ladybird", "Leaf-Tailed Gecko", "Lemming", "Lemur", "Leopard", "Leopard Cat", "Leopard Seal", "Leopard Tortoise", "Liger", "Lion", "Lionfish", "Little Penguin", "Lizard", "Llama", "Lobster", "Long-Eared Owl", "Lynx", "Macaroni Penguin", "Macaw", "Magellanic Penguin", "Magpie", "Maine Coon", "Malayan Civet", "Malayan Tiger", "Maltese", "Manatee", "Mandrill", "Manta Ray", "Marine Toad", "Markhor", "Marsh Frog", "Masked Palm Civet", "Mastiff", "Mayfly", "Meerkat", "Millipede", "Minke Whale", "Mole", "Molly", "Mongoose", "Mongrel", "Monitor Lizard", "Monkey", "Monte Iberia Eleuth", "Moorhen", "Moose", "Moray Eel", "Moth", "Mountain Gorilla", "Mountain Lion", "Mouse", "Mule", "Neanderthal", "Neapolitan Mastiff", "Newfoundland", "Newt", "Nightingale", "Norfolk Terrier", "Norwegian Forest", "Numbat", "Nurse Shark", "Ocelot", "Octopus", "Okapi", "Old English Sheepdog", "Olm", "Opossum", "Orang-utan", "Ostrich", "Otter", "Oyster", "Pademelon", "Panther", "Parrot", "Patas Monkey", "Peacock", "Pekingese", "Pelican", "Penguin", "Persian", "Pheasant", "Pied Tamarin", "Pig", "Pika", "Pike", "Pink Fairy Armadillo", "Piranha", "Platypus", "Pointer", "Poison Dart Frog", "Polar Bear", "Pond Skater", "Poodle", "Pool Frog", "Porcupine", "Possum", "Prawn", "Proboscis Monkey", "Puffer Fish", "Puffin", "Pug", "Puma", "Purple Emperor", "Puss Moth", "Pygmy Hippopotamus", "Pygmy Marmoset", "Quail", "Quetzal", "Quokka", "Quoll", "Rabbit", "Raccoon", "Raccoon Dog", "Radiated Tortoise", "Ragdoll", "Rat", "Rattlesnake", "Red Knee Tarantula", "Red Panda", "Red Wolf", "Red-handed Tamarin", "Reindeer", "Rhinoceros", "River Dolphin", "River Turtle", "Robin", "Rock Hyrax", "Rockhopper Penguin", "Roseate Spoonbill", "Rottweiler", "Royal Penguin", "Russian Blue", "Sabre-Toothed Tiger", "Saint Bernard", "Salamander", "Sand Lizard", "Saola", "Scorpion", "Scorpion Fish", "Sea Dragon", "Sea Lion", "Sea Otter", "Sea Slug", "Sea Squirt", "Sea Turtle", "Sea Urchin", "Seahorse", "Seal", "Serval", "Sheep", "Shih Tzu", "Shrimp", "Siamese", "Siamese Fighting Fish", "Siberian", "Siberian Husky", "Siberian Tiger", "Silver Dollar", "Skunk", "Sloth", "Slow Worm", "Snail", "Snake", "Snapping Turtle", "Snowshoe", "Snowy Owl", "Somali", "South China Tiger", "Spadefoot Toad", "Sparrow", "Spectacled Bear", "Sperm Whale", "Spider Monkey", "Spiny Dogfish", "Sponge", "Squid", "Squirrel", "Squirrel Monkey", "Sri Lankan Elephant", "Staffordshire Bull Terrier", "Stag Beetle", "Starfish", "Stellers Sea Cow", "Stick Insect", "Stingray", "Stoat", "Striped Rocket Frog", "Sumatran Elephant", "Sumatran Orang-utan", "Sumatran Rhinoceros", "Sumatran Tiger", "Sun Bear", "Swan", "Tang", "Tapanuli Orang-utan", "Tapir", "Tarsier", "Tasmanian Devil", "Tawny Owl", "Termite", "Tetra", "Thorny Devil", "Tibetan Mastiff", "Tiffany", "Tiger", "Tiger Salamander", "Tiger Shark", "Tortoise", "Toucan", "Tree Frog", "Tropicbird", "Tuatara", "Turkey", "Turkish Angora", "Uakari", "Uguisu", "Umbrellabird", "Vampire Bat", "Vervet Monkey", "Vulture", "Wallaby", "Walrus", "Warthog", "Wasp", "Water Buffalo", "Water Dragon", "Water Vole", "Weasel", "Welsh Corgi", "West Highland Terrier", "Western Gorilla", "Western Lowland Gorilla", "Whale Shark", "Whippet", "White Faced Capuchin", "White Rhinoceros", "White Tiger", "Wild Boar", "Wildebeest", "Wolf", "Wolverine", "Wombat", "Woodlouse", "Woodpecker", "Woolly Mammoth", "Woolly Monkey", "Wrasse", "X-Ray Tetra", "Yak", "Yellow-Eyed Penguin", "Yorkshire Terrier", "Zebra", "Zebra Shark", "Zebu", "Zonkey", "Zorse"];
var userAnimals = [];
var favoritesGifs = [];
var currentSetOfGif = [];

$(document).ready(function () {
    $('#btn-add-animal').on('click', function () {
        //Verify the animal exist.
        var animalName = $('#animal-input').val().trim();
        if (knowAnimal(animalName)) {
            //Check if animal is already on the list
            if (animalExists(animalName)) {
                //Show message to the user regarding existing animal
                informationModal('Input Error!', 'The animal you are triying to add is already on your list. Please try again.');
            } else {
                addAnimal(animalName);
            }
        } else {
            //Show message to the user regarding the unknown animal
            informationModal('Input Error!', 'The animal you are triying to add does not exist. Please try again.');
        }
        //Clear input text.
        $('#animal-input').val('');
    });

    $('select').change(function () {
        renderAnimalInfo(this);
    });

    $(document).on("click", ".favCheckbox", function () {
        var checkboxFav = $(this);
        var imgFav = getCurrentImage(checkboxFav.attr('value'));

        if (checkboxFav.prop('checked')) {
            //add to favorite list
            favoritesGifs.push(imgFav);
        } else {
            //remove from favorite list
            _.pull(favoritesGifs, imgFav);
        }
    });

    //Saving data to localStorage on exit
    $(window).on("beforeunload", function () {
        localStorage.setItem("userAnimals", JSON.stringify(userAnimals));
        localStorage.setItem("favoritesGifs", JSON.stringify(favoritesGifs));
    })

    //Loading from data from localStorage on load
    loadInfo();
});


function loadInfo() {
    userAnimals = JSON.parse(localStorage.getItem("userAnimals"));
    favoritesGifs = JSON.parse(localStorage.getItem("favoritesGifs"));

    if (!Array.isArray(userAnimals)) {
        //Load default values
        userAnimals = ["Dog", "Cat", "Duck"];
    } else {
        //empty animal selector
        $('#animal-selector').empty();
         //load animal selector
        for (let index = 0; index < userAnimals.length; index++) {
            //Set animal properties
            var animalName = userAnimals[index]
            var newOption = $('<option>');
            newOption.attr('value', animalName);
            newOption.text(animalName);

            //Add the new animal to the select
            $('#animal-selector').append(newOption);
        }
    }

    if (!Array.isArray(favoritesGifs)) {
        favoritesGifs = [];
    }
}

//loadInfo();

//--- THIS FUNCTION WILL RENDER THE INFO RELATED WITH THE ANIMAL SELECTED
function renderAnimalInfo(animal) {
    //Render the gifs
    renderGifs(animal);
    //Render the info
    renderInfo(animal);
}

//Use giphy api to render 4 images.
function renderGifs(animal) {
    var searchCriteria = $(animal).val().replace(/\s/g, '+');
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=fXhM70lStyUoO0fA7UVKnRjm0ADkzZgL&limit=4&q=" + searchCriteria;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var temArray = response.data;
        var imgRow = $('<div>');
        imgRow.addClass('row');

        $('#gifs-container').empty();
        $('#gifs-container').append(imgRow);

        clearCurrentSet();


        for (let index = 0; index < temArray.length; index++) {
            const element = temArray[index];

            var wrapper = $('<div>');
            wrapper.addClass('col-md-3');

            var imgDiv = $('<img>');
            var imageUrl = element.images.fixed_height_downsampled.url;

            imgDiv.css('width', '150px');
            imgDiv.css('height', '150px');
            imgDiv.attr('src', 'assets/images/loading.gif');
            imgDiv.attr('id', 'img-id-' + index);
            imgDiv.addClass('col-md-12');

            imgDiv.attr("src", imageUrl);
            imgDiv.attr("alt", searchCriteria);

            wrapper.append(imgDiv);
            wrapper.append(getFavIcon(index, imageUrl));
            imgRow.append(wrapper);

            currentSetOfGif.push(imageUrl);
        }

    });
}
//Use wikipedia API to show small description of the animal using REST endpoint 
function renderInfo(animal) {
    var searchCriteria = $(animal).val().replace(/\s/g, '+');
    var queryURL = "https://en.wikipedia.org/api/rest_v1/page/summary/" + searchCriteria;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //Make the description area invisible first and then visible
        $('#info-frame').hide();
        $('#info-frame').delay(300).fadeIn('slow');

        //Modify the properties of the information card card
        $('#info-card-name').text(response.displaytitle);
        $('#info-card-content').html(response.extract_html);

        //test if the device is movil or not to show the correct wikipedia link
        if (deviceIsMobile()) {
            $('#info-card-link').attr('href', response.content_urls.mobile.page);
        } else {
            $('#info-card-link').attr('href', response.content_urls.desktop.page);
        }
    });
}

//This function checks if the animal is known or unknown
function knowAnimal(animal) {
    var searchCriteria = animal.replace(/\s/g, '+').toLowerCase();
    var exists = false;

    existingAnimalsArray.forEach(element => {
        var temp = element.toLowerCase();
        if (temp.includes(searchCriteria)) {
            exists = true;
        }
    });
    return exists;
}

//This function checks if the animal is on the user animal list or not
function animalExists(animal) {
    var searchCriteria = animal.toLowerCase();
    var exists = false;

    userAnimals.forEach(element => {
        var temp = element.toLowerCase();
        if (temp.includes(searchCriteria)) {
            exists = true;
        }
    });
    return exists;
}

//This function adds a new option to our select.
function addAnimal(animal) {
    //Get the animal name
    var animalName = animal.trim();

    //Set animal properties
    var newOption = $('<option>');
    newOption.attr('value', animalName);
    newOption.text(animalName);

    //Add the new animal to the select
    $('#animal-selector').append(newOption);
    //Add the new animal to user Array
    userAnimals.push(animalName);
}

function getFavIcon(number, imageUrl) {
    var favIcon = $('<label>');
    favIcon.addClass('custom-checkbox');
    favIcon.attr('for', 'id-' + number);


    var checkboxTag = $('<input>');
    checkboxTag.attr('id', 'id-' + number);
    checkboxTag.attr('value', number)
    checkboxTag.attr('type', 'checkbox');
    checkboxTag.addClass('favCheckbox');

    if (isFavorite(imageUrl)) {
        checkboxTag.prop('checked', true);
    }

    var emptyStar = $('<i>');
    emptyStar.addClass('fa-star');
    emptyStar.addClass('far');

    var fullStar = $('<i>');
    fullStar.addClass('fa-star');
    fullStar.addClass('fas');

    favIcon.append(checkboxTag);
    favIcon.append(emptyStar);
    favIcon.append(fullStar);

    return favIcon;
}
//Return url of the current gif based on the index
function getCurrentImage(index) {
    return currentSetOfGif[index];
}

function deviceIsMobile() 
{
    if(/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|phone|android|iemobile|w3c|acs\-|alav|alca|amoi|audi|avan|benq|bird|blac|blaz|brew|cell|cldc|cmd\-|dang|doco|eric|hipt|inno|ipaq|java|jigs|kddi|keji|leno|lg\-c|lg\-d|lg\-g|lge\-|maui|maxo|midp|mits|mmef|mobi|mot\-|moto|mwbp|nec\-|newt|noki|palm|pana|pant|phil|play|port|prox|qwap|sage|sams|sany|sch\-|sec\-|send|seri|sgh\-|shar|sie\-|siem|smal|smar|sony|sph\-|symb|t\-mo|teli|tim\-|tosh|tsm\-|upg1|upsi|vk\-v|voda|wap\-|wapa|wapi|wapp|wapr|webc|winw|winw|xda|xda\-) /i.test(navigator.userAgent))
    {
        return true;
    }
    else
    {
        return false;
    }
}
//Remove all elements from the current gifs array
function clearCurrentSet() {
    while (currentSetOfGif.length > 0) {
        currentSetOfGif.pop();
    }
}
//Checks if a gif is on the favorites or not
function isFavorite(imageUrl) {
    if (!jQuery.isEmptyObject(favoritesGifs)) {
        return favoritesGifs.indexOf(imageUrl) >= 0;
    } 
    return false;
}

function informationModal(outputTitle, outputMessage) {
    $('.modal-title').text(outputTitle);
    $('#modal-text').text(outputMessage);
    $('#infoModal').modal('show');
}
