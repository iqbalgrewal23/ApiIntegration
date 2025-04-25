document.addEventListener('DOMContentLoaded', function() {
    var apiKey = 'AIzaSyAPmyxWtbl2vv9nbr4gJiDVpNDdkA0Fgfw';
    var baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
    var searchQuery = 'javascript';

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        console.log('ReadyState:', request.readyState);

        if (request.readyState === XMLHttpRequest.DONE) {
            var response = JSON.parse(request.responseText);
            console.log(response);

            var bookList = document.getElementById('bookList');

            response.items.forEach(function(book) {
                var title = book.volumeInfo.title;
                var link = book.volumeInfo.infoLink;
                var image = book.volumeInfo.imageLinks?.smallThumbnail || '';

                console.log('Title:', title);
                console.log('Link:', link);
                console.log('Image:', image);

                var listItem = "<li>" +
                               "<a href='" + link + "' target='_blank'>" + title + "</a><br>" +
                               (image ? "<img src='" + image + "' alt='Book cover'>" : '') +
                               "</li>";

                bookList.innerHTML += listItem;
            });
        }
    };

    request.open('GET', baseUrl + searchQuery + '&key=' + apiKey);
    request.send();
});
