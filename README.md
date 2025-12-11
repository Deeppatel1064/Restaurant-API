Restaurant Dish Search API:

A simple and clean Node.js + Express + MySQL backend that allows users to search for a dish and returns:
Top 10 restaurants where the dish is ordered the most
Only restaurants where the dish price is within the requested price range
Each result includes:
     Restaurant details
     Dish name
     Dish price
     Total order count in that restaurant

Project Description:

This API is designed to efficiently search restaurants based on dish popularity, pricing, and user filters.
It uses a normalized database structure with restaurants, menu items, and orders, with each order containing only one menu item for simplicity.

Setup Instructions:

1️⃣ Clone the Repository
git clone https://github.com/Deeppatel1064/Restaurant-API.git
cd Restaurant-API

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment

DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=restaurants
PORT=3306

4️⃣ Import Database & Seed Data

Run the SQL file:

mysql -u root -p restaurants < seed.sql

5️⃣ Start the Server
node api.js

Server runs at:

http://localhost:5055


🗄️ Database Config:

Tables Used

1. restaurant_details
| id |	name	| city | address  |

3. dishes

| id | restaurant_id | name | price |

3. orders

| id | restaurant_id | order_date |

4. order_items

| id | order_id | dish_id | quantity


🌱 Sample Seed Data:

-- ===========================================
-- 1. RESTAURANTS
-- ===========================================
INSERT INTO restaurant_details (id, name, city, address) VALUES
(1, 'Spice Garden', 'New York', '12 Manhattan Street'),
(2, 'Urban Tadka', 'Chicago', '55 Lakeshore Road'),
(3, 'Royal Curry House', 'Houston', '789 Hill Park'),
(4, 'Food Lounge', 'San Diego', '22 Ocean Drive'),
(5, 'Taste Hub', 'Los Angeles', '44 Sunset Boulevard'),
(6, 'Golden Spoon', 'Dallas', '19 Maple Avenue'),
(7, 'Flavour Point', 'San Jose', '71 Silicon Road'),
(8, 'Masala Street', 'Seattle', '88 Downtown Ave'),
(9, 'Food Fusion', 'Austin', '10 Central Plaza'),
(10, 'The Curry Bowl', 'Denver', '28 Rocky Road');


-- ===========================================
-- 2. DISHES
-- ===========================================
INSERT INTO dishes (id, restaurant_id, name, price) VALUES
(1, 1, 'Pasta', 10),
(2, 2, 'Pasta', 12),
(3, 3, 'Pasta', 9),
(4, 4, 'Pasta', 11),
(5, 5, 'Pasta', 13),
(6, 6, 'Pasta', 10),
(7, 7, 'Pasta', 12),
(8, 8, 'Pasta', 14),
(9, 9, 'Pasta', 9),
(10, 10, 'Pasta', 11);


-- ===========================================
-- 3. ORDERS (one order = one restaurant)
-- ===========================================
INSERT INTO orders (id, restaurant_id, order_date) VALUES
(1, 1, '2025-01-01'),
(2, 1, '2025-01-03'),
(3, 1, '2025-01-05'),
(4, 2, '2025-01-02'),
(5, 2, '2025-01-06'),
(6, 3, '2025-01-02'),
(7, 3, '2025-01-07'),
(8, 4, '2025-01-01'),
(9, 4, '2025-01-02'),
(10, 4, '2025-01-03'),
(11, 4, '2025-01-04'),
(12, 5, '2025-01-06'),
(13, 6, '2025-01-06'),
(14, 7, '2025-01-02'),
(15, 8, '2025-01-04'),
(16, 9, '2025-01-05'),
(17, 10, '2025-01-02');


-- ===========================================
-- 4. ORDER ITEMS (each order contains only 1 dish for simplicity)
-- ===========================================
INSERT INTO order_items (id, order_id, dish_id, quantity) VALUES
(1, 1, 1, 1),
(2, 2, 1, 1),
(3, 3, 1, 1),

(4, 4, 2, 1),
(5, 5, 2, 1),

(6, 6, 3, 1),
(7, 7, 3, 1),

(8, 8, 4, 1),
(9, 9, 4, 1),
(10, 10, 4, 1),
(11, 11, 4, 1),

(12, 12, 5, 1),

(13, 13, 6, 1),

(14, 14, 7, 1),

(15, 15, 8, 1),

(16, 16, 9, 1),

(17, 17, 10, 1);


📡 Example API Usage:

Endpoint:

GET http://restaurant-api-production-2a52.up.railway.app/search/dishes?name=Pasta&minPrice=10&maxPrice=12

Response Example:

✔ When data is found:
{
    "status": 200,
    "message": "Dish data found",
    "data": [
        {
            "restaurantId": 4,
            "restaurantName": "Food Lounge",
            "city": "San Diego",
            "dishName": "Pasta",
            "dishPrice": 11,
            "orderCount": 4
        },
        {
            "restaurantId": 1,
            "restaurantName": "Spice Garden",
            "city": "New York",
            "dishName": "Pasta",
            "dishPrice": 10,
            "orderCount": 3
        },
        {
            "restaurantId": 2,
            "restaurantName": "Urban Tadka",
            "city": "Chicago",
            "dishName": "Pasta",
            "dishPrice": 12,
            "orderCount": 2
        },
        ...
    ]
}

✔ When no matching dish:
{
    "status": 200,
    "message": "No data found",
    "data": []
}

🔗 Public Hosted URL
http://restaurant-api-production-2a52.up.railway.app/search/dishes?name=Pasta&minPrice=10&maxPrice=12

🔗 GitHub Repository Link
https://github.com/Deeppatel1064/Restaurant-API.git
