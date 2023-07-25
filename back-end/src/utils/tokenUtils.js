import jwt from "jsonwebtoken";

const secretKey = "SECRRET_KEY";

export const generateToken = (user) => {
  const payload = {
    userId: user.id,
  };
  console.log("ID", user.id);
  const options = {
    expiresIn: "1h",
  };
  console.log("JW 1", jwt);
  console.log("Stuff", payload, secretKey, options);
  return jwt.sign(payload, secretKey, options);
};
