import * as crypto from "node:crypto";
import HashAddress from "./HashAddress.js";

// IN CLIENT BROWSER
// const id = window.crypto.randomUUID()
// console.log(id)

const UniqueTranferIdentityGenerator = async (user_id, time) => {
    const randomHash = crypto.randomBytes(6).toString('hex');
    const res = await HashAddress(user_id) + time.toString() + randomHash;
    return res;
}

export default UniqueTranferIdentityGenerator;