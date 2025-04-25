var apiKey = 'AIzaSyAPmyxWtbl2vv9nbr4gJiDVpNDdkA0Fgfw'; // same key
var apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
var searchTerm = 'javascript';

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    console.log('Ready State:', xhr.readyState);
    console.log('Raw Response:', xhr.responseText);

    if (xhr.readyState === XMLHttpRequest.DONE) {
        var response = JSON.parse(xhr.responseText);
        console.log('Parsed Response:', response);

        var bookList = document.getElementById("bookList");

        for (var i = 0; i < response.items.length; i++) {
            var title = response.items[i].volumeInfo.title || 'No Title';
            var link = response.items[i].volumeInfo.infoLink || '#';
            var image = (response.items[i].volumeInfo.imageLinks) ? response.items[i].volumeInfo.imageLinks.smallThumbnail : '';

            console.log('Title:', title);
            console.log('Link:', link);
            console.log('Image:', image);

            var newBook = "<li><a href='" + link + "' target='_blank'>" + title + "</a><br>";

            if (image) {
                newBook += "<img src='" + image + "' alt='Book Cover'>";
            }

            newBook += "</li>";

            bookList.innerHTML += newBook;
        }
    }
};

xhr.open("GET", apiUrl + searchTerm);
xhr.send();
