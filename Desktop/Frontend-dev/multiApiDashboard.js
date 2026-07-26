// multiApiDashboard.js
const placeholders = {
    users: document.getElementById("totalUsers"),
    orders: document.getElementById("totalOrders"),
    products: document.getElementById("totalProducts")
};

Object.values(placeholders).forEach(el => el.textContent="Loading...");

Promise.all([
    fetch("/users").then(r=>r.json()),
    fetch("/orders").then(r=>r.json()),
    fetch("/products").then(r=>r.json())
]).then(([users, orders, products]) => {
    placeholders.users.textContent = users.length;
    placeholders.orders.textContent = orders.length;
    placeholders.products.textContent = products.length;
}).catch(() => {
    Object.values(placeholders).forEach(el => el.textContent="Data unavailable");
    alert("Some data could not be loaded.");
});
