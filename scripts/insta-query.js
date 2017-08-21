// Embedding of instagram posts
$('p').each(function () {
    searchText = $(this).text();
    matches = searchText.match(/(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\/[p]\/([A-Za-z0-9-_]*)\//g);
    if ( matches != null &amp;&amp; searchText === matches[0] ) {
        $.ajax({
            context: this,
            url: "https://api.instagram.com/oembed/?maxwidth=400&amp;url="+matches[0],
            dataType: 'jsonp',
            success: function(data) { $(this).html(data.html); }
        });
    }
});