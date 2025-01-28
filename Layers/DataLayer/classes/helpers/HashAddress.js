import dotenv from "dotenv";
dotenv.config();

import bcrypt from "bcryptjs";

const HashAddress = async (IPAddress) => {
    try {
        const saltRounds = parseInt(process.env.HASH_SALT_ROUNDS, 10);
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(IPAddress, salt);
        return hash; 
    } catch (error) {
        console.error("Error hashing IP address:", error);
        throw error;
    }
};

export default HashAddress;