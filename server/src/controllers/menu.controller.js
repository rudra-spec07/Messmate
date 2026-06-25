import Menu from "../models/Menu.js";

export const createMenu = async (
  req,
  res
) => {
  try {
    const menu = await Menu.create(
      req.body
    );

    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getTodayMenu =
  async (req, res) => {
    try {
      const today =
        new Date()
          .toISOString()
          .split("T")[0];

      const menu =
        await Menu.findOne({
          date: today,
        });

      res.json(menu);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  export const getMenus = async (
  req,
  res
) => {
  try {
    const menus =
      await Menu.find().sort({
        date: -1,
      });

    res.json(menus);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateMenu =
  async (req, res) => {
    try {
      const menu =
        await Menu.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      res.json(menu);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  export const deleteMenu =
  async (req, res) => {
    try {
      await Menu.findByIdAndDelete(
        req.params.id
      );

      res.json({
        success: true,
        message:
          "Menu deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };


  