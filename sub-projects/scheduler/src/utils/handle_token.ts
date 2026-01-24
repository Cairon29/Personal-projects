// @ts-ignore
import jwt from 'jsonwebtoken';
import config from '../config.js';

const generateToken = (userId: string) => {
  return jwt.sign(
    { userId },
    config.app.jwtSecret,
    { expiresIn: config.app.jwtExpire }
  );
};

const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, config.app.jwtSecret);
  } catch (error) {
    return null;
  }
};

export { generateToken, verifyToken };