import EmailClientType from "./helpers/EmailClientType";

class EmailClient {
    constructor(email_address) {
        this.email_client_type = EmailClientType.UNKNOWN;
        this.email_address = email_address;
        this.email_list = []      
    }
}

export default EmailClient;