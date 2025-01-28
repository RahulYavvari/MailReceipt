import { v4 as uuidv4 } from 'uuid';

import HashIPAddress from './helpers/HashAddress';
import EmailBucket from './EmailBucket';

class User {
    constructor(first_name, last_name, user_ip) {
        this.user_identifier = uuidv4();
        this.first_name = first_name;
        this.last_name = last_name;
        this.email_bucket = new EmailBucket();
        this.hashed_user_ip = this.hashIp(user_ip);
    }

    hashIp(user_ip) {
        this.hashed_user_ip = HashIPAddress(user_ip);
    }
}