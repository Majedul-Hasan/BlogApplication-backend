const express = require("express");
const {
  userRegisterCtrl,
  loginUserCtrl,
  fetchUsersCtrl,
  deleteUserCtrl,
  fetchUserDetailsCtrl,
  userProfileCtrl,
  updateUserCtrl,
  updateUserPasswordCtrl,
  followingUserCtrl,
  unfollowUserCtrl,
  blockUserCtrl,
  unblockUserCtrl,
  generateVerificationTokenCtrl,
  accountVerificationCtrl,
  forgetPasswordToken,
  passwordResetCtrl,
  profilePhotoUploadCtrl
  
} = require("../../controllers/users/usersCtrl");
const authMiddleWare = require("../../middlewares/authMiddleware");
const { photoUpload, profilePhotoResize } = require("../../middlewares/photoUpload");


const userRoutes = express.Router();

userRoutes.post("/register", userRegisterCtrl);
userRoutes.post("/login", loginUserCtrl);
userRoutes.put("/password",authMiddleWare, updateUserPasswordCtrl);
userRoutes.put("/profile-photo-upload",
authMiddleWare, photoUpload.single('image'), profilePhotoResize, profilePhotoUploadCtrl);


userRoutes.get("/", authMiddleWare, fetchUsersCtrl);
userRoutes.post("/forget-password-token", forgetPasswordToken);
userRoutes.put("/reset-password", passwordResetCtrl);

userRoutes.put("/follow",authMiddleWare, followingUserCtrl);
userRoutes.post("/generate-verify-email-token", authMiddleWare, generateVerificationTokenCtrl);
userRoutes.put("/verify-account", authMiddleWare, accountVerificationCtrl);


userRoutes.put("/unfollow",authMiddleWare, unfollowUserCtrl);
userRoutes.put("/block-user/:id",authMiddleWare, blockUserCtrl);
userRoutes.put("/unblock-user/:id",authMiddleWare, unblockUserCtrl
);



userRoutes.delete("/:id", deleteUserCtrl);
userRoutes.get("/profile/:id",authMiddleWare, userProfileCtrl);

userRoutes.put("/",authMiddleWare, updateUserCtrl);


userRoutes.get("/:id", fetchUserDetailsCtrl);

module.exports = userRoutes;
