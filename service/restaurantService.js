const db = global.db;

class RestaurantService {
  async searchDish(dishName, minPrice, maxPrice) {
    const query = `
      SELECT 
        r.id AS restaurantId,
        r.name AS restaurantName,
        r.city,
        d.name AS dishName,
        d.price AS dishPrice,
        SUM(oi.quantity) AS orderCount
      FROM dishes d
      JOIN restaurant_details r ON r.id = d.restaurant_id
      JOIN order_items oi ON oi.dish_id = d.id
      WHERE d.name LIKE CONCAT('%', ?, '%')
        AND d.price BETWEEN ? AND ?
      GROUP BY r.id, d.id
      ORDER BY orderCount DESC
      LIMIT 10;
    `;

    const [rows] = await db.query(query, [dishName, minPrice, maxPrice]);
    return rows;
  }
}

module.exports = new RestaurantService();
