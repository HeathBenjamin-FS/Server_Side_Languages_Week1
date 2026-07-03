const express = require("express");
const router = express.Router();

let randomStuff = [
  { randomThing1: "hello there!", id: 1 },
  { randomThing2: "Insert Star Wars reference here ( you know the one )", id: 2 },
];

//localhost:3000/api/
router.get("/:id", (req, res) => {
  const id = req.params.id;

  const itemToGet = randomStuff.find((item) => item.id == id);
  if (!itemToGet) {
    res.status(404).json({
      msg: "Your item is not in memory",
    });
  }
  res.status(200).json({
    msg: "Getting item details..",
    outputID: id,
    data: randomStuff.find((item) => item.id == id),
  });
});

router.put("/:id", (req, res) => {
  const requestedId = req.params.id;

  const itemToUpdate = randomStuff.find((item) => item.id == requestedId);

  if (!itemToUpdate) {
    res.status(404).json({ msg: "Your ID was not found in memory" });
  }
  Object.assign(itemToUpdate, req.body);
  res.status(200).json({
    msg: "Updating your item's details...",
    updatedId: requestedId,
  });
});

router.delete("/:id", (req, res) => {
  const requestedId = req.params.id;

  randomStuff = randomStuff.filter((item) => item.id != requestedId);

  if (randomStuff) {
    res.status(200).json({
      msg: "Deleting item..",
      deletedItem: requestedId,
      remainingItems: randomStuff.length,
    });
  } else {
    res.status(404).json({
      msg: "The ID you entered is not in memory",
    });
  }
});

router.post("/", (req, res) => {
  const randomItem = req.body;

  randomItem.id = Date.now();

  console.log(randomItem);

  randomStuff.push(randomItem);

  res.status(201).json({
    msg: "Item is now in memory!",
    created: randomItem,
    currentItems: randomStuff.length,
  });
});

router.get("/", (req, res) => {
  res.status(200).json({
    msg: "Service is up",
    metadata: { hostname: req.hostname, method: req.method },
    data: randomStuff,
  });

  console.log("Service is up");
});

module.exports = router;
