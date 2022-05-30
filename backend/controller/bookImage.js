const connection = require("../database/db");
// const profileImage = (req, res) => {
//   const image = req.body.gotImage;

//   //   console.log("PROFILE IMAGE : ", profileImg);
//   // const userId = req.params.loggedId;
//   //   const data = [profileImg];
//   //   const query = `update user set profileImg=? where id=${userId} `;
//   const userId = req.params.loggedId;

//   const query = `insert into images (Image_,uploaderOfTheImage) values (?,?)
// `;
//   const data = [image, userId];
//   connection.query(query, data, (err, result) => {
//     if (err) {
//       console.log(err);

//       res
//         .status(500)
//         .json({ success: false, message: "Internal server error(imageBE)" });
//     } else {
//       console.log(result);
//       res
//         .status(200)
//         .json({ success: true, message: "User picture", result: result });
//     }
//   });
// };
const renderImages = (req, res) => {
  const query = `select * from images `;
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "No images To render", result: err });
    } else {
      console.log(result);
      res.status(200).json({
        success: true,
        message: "images where rendered successfuly",
        result: result,
      });
    }
  });
};
const deleteImage = (req, res) => {
  const imageId = req.params.id;
  const query = `delete from images where id =?`;
  const data = [imageId];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "Not deleted", result: err });
    } else {
      console.log(result);
      res.status(200).json({
        success: true,
        message: "image was deleted",
        result: result,
      });
    }
  });
};
module.exports = { profileImage, renderImages, deleteImage };
