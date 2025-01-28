const DeviceType = Object.freeze({
    WINDOWS:   Symbol("windows"),
    MAC:  Symbol("mac"),
    LINUX: Symbol("linux"),
    ANDROID: Symbol("android"),
    IPHONE: Symbol("iphone"),
    IPAD: Symbol("ipad"),
    OTHERS: Symbol("others"),
    UNKNOWN: Symbol("unknown")
});

export default DeviceType;