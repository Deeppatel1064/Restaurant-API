const restaurantService = require("../service/restaurantService");
const ResponseController = require("./responseController");

class RestaurantController {
  async searchDish(req, res) {
    try {
      const { name, minPrice, maxPrice } = req.query;

      if (!name) {
        return ResponseController.error(
          { code: 400, message: "Dish name is required" },
          res
        );
      }

      const data = await restaurantService.searchDish(
        name,
        minPrice || 0,
        maxPrice || 999999
      );

      return ResponseController.success(data, "Dish data found", res);
    } catch (error) {
      return ResponseController.error(error, res);
    }
  }
}

module.exports = new RestaurantController();
