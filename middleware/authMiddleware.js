const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Access Denied: No Token Provided or Invalid Format" });
        }

        const token = authHeader.split(" ")[1];
  
        // Verify token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message); // Log error for debugging
        res.status(400).json({ message: "Invalid token", error: error.message });
    }
};
