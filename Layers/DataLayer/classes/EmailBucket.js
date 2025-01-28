class EmailBucket {
    constructor() {
        this.email_bucket = []
    }

    insertEmailClient(email_client) {
        this.email_bucket.push(email_client);
    }

    // COMPLETE C(✔️)RUD AFTER PRELIMINARY TESTING
}

export default EmailBucket;