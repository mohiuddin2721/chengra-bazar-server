// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//     destination: "images/",
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, uniqueSuffix + '-' + file.originalname  )
//     }
// })

// const uploader = multer({
//     storage,
//     fileFilter: (req, file, cb) => {
//         const supportedImage = /png|jpg|jpeg|webp|/;
//         const extension = path.extname(file.originalname);

//         if (supportedImage.test(extension)) {
//             cb(null, true);
//         } else {
//             cb(new Error("Must be a png/jpg/jpeg/webp"))
//         }
//     },
//     limits: {
//         fileSize: 2000000,
//     }
// })
// module.exports = uploader;
