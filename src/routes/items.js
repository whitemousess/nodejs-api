const express = require("express");
const router = express.Router();

const mainControllers = require("../Controllers/itemController");

// get all items 
router.get("/", async (req, res, next) => {
  try {
    let params = [];
    params.sortField = req.query.orderBy;
    params.sortType = req.query.orderDir;
    params.keyword = req.query.keyword;

    const data = await mainControllers.listItems(params, { task: "all" });
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({ error: "false" });
  }
});

// get one item from id
router.get("/:id", async (req, res, next) => {
  try {
    const data = await mainControllers.listItems(
      { id: req.params.id },
      { task: "one" }
    );
    res.status(201).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({ error: "false" });
  }
});

// add
router.post("/add", async (req, res, next) => {
  try {
    const params = [];
    params.id = makeId(8);
    params.name = req.body.name;
    params.status = req.body.status;

    const data = await mainControllers.create(params);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({ error: "false" });
  }
});

// edit
router.put("/:id/edit", async (req, res, next) => {
    try {
        const data = await mainControllers.editItem(
          { id: req.params.id , body: req.body},
          { task: "edit" }
        );
        res.status(200).json({
          success: true,
          data,
        });
      } catch (error) {
        res.status(400).json({ error: "false" });
      }

});

// delete
router.delete("/:id/delete",async (req, res, next) => {
    try {
        const data = await mainControllers.deleteItem(
          { id: req.params.id },
          { task: "one" }
        );
        res.status(200).json({
          success: true,
          data,
        });
      } catch (error) {
        res.status(400).json({ error: "false" });
      }
});

module.exports = router;

makeId = (number) => {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < number; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};
