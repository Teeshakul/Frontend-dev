// liveSearch.js
$(document).ready(function() {
    $("#searchBox").on("keyup", function() {
        const query = $(this).val();
        const results = $("#searchResults");
        results.html('<p>Loading...</p>');

        $.ajax({
            url: `/products?q=${query}`,
            method: "GET",
            success: function(data) {
                results.empty();
                if(data.length === 0) {
                    results.append("<p>No products found</p>");
                } else {
                    data.forEach(p => {
                        results.append(`
                            <div class="product">
                                <img src="${p.image}" alt="${p.name}" width="50">
                                <span>${p.name}</span>
                                <span>$${p.price}</span>
                            </div>
                        `);
                    });
                }
            },
            error: function() {
                results.html("<p>Error fetching products</p>");
            }
        });
    });
});
