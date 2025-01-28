const EmailClientType = Object.freeze({
    GMAIL: Symbol("gmail"),
    OUTLOOK: Symbol("outlook"),
    YAHOO: Symbol("outlook"),
    UNKNOWN: Symbol("unknown") 
});

export default EmailClientType;