import { verifyToken } from '../utils/handle_token.ts';
import { Request, Response } from 'express';


const authMiddleware = async (req: Request, res: Response, next: () => void) => {
    try {
        // Get token from Authorization header
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const token = authHeader.split(' ')[1];
        
        // Verify token
        const decoded = verifyToken(token);
        
        if (!decoded) {
        return res.status(401).json({ message: 'Invalid or expired token' });
        }

        // Add user ID to request object
        (req as any).userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
};

export default authMiddleware;
