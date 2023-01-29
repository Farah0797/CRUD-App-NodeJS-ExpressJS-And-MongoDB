const express=require("express");
const { addVol, getvol, updatevol, delvol} = require("../controllers/volController");
const router= express.Router();


router.post("/add", addVol);

router.get("/get", getvol)

router.put("/update", updatevol)

router.delete("/del", delvol)


module.exports = router