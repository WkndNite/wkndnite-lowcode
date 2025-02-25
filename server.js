const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const uploadDir = path.join(__dirname, "uploads");
        if(!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: function(req, file, cb) {
     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
     cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    }
})

const upload = multer({storage: storage});

app.post("/api/upload", upload.single("image"), (req, res) => {
   try{
    res.status(200).send({
        message:"图片上传成功",
        imageUrl: `/uploads/${req.file.filename}`
    })
   }catch(error){
    res.status(500).send({
        message: "图片上传失败"
    })
   }
})

app.use('/uploads',express.static(path.join(__dirname, 'uploads')))

app.listen(3000, () => {
    console.log("Server started on port 3000");
})