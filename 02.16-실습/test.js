const mongoose = require("mongoose");
const User = require("./model");
// mongodb+srv://admin:1234@cluster0.yfbio.mongodb.net/elice
// mongodb://localhost:27017/elice

mongoose.connect(
  "mongodb+srv://admin:1234@cluster0.yfbio.mongodb.net/elice",
  (err) => {
    console.log("MongoDB Connect");
    const newUser = new User({
      id: "44444",
      pw: "1234",
    });
    newUser
      .save()
      .then((v) => {
        console.log("성공");
      })
      .catch((e) => {
        console.log("실패");
      });

    User.find({ id: "aerim" })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log("찾기 실패");
      });
  }
);