import dotenv from "dotenv";
dotenv.config();

import Location from "./helpers/Location";
import DeviceType from "./helpers/DeviceType";
import ReceiptStatus from "./helpers/ReceiptStatus";

import HashIPAddress from "./helpers/HashInternetProtocolAddress";

class Email {
    constructor(unique_transfer_identifier, location={longitude: null, latitude: null}, device=DeviceType.UNKNOWN, receiver_ip=process.env.UNKNOWN_IP) {
        this.unique_transfer_identifier = unique_transfer_identifier;
        this.status = ReceiptStatus.UNKNOWN;
        this.accumulator = 0;
        this.location = new Location(location);
        this.device = this.setDeviceType(device);
        this.time = new Date();
        this.hashed_receiver_ip = this.hashReceiverIp(receiver_ip);
    }

    hashReceiverIp(receiver_ip) {
        this.hashed_receiver_ip = HashIPAddress(receiver_ip);
    }

    setDeviceType(deviceType) {
        switch (deviceType) {
            case "android":
                this.device = DeviceType.ANDROID;
                break;
            case "iphone":
                this.device = DeviceType.IPHONE;
                break;
            case "ipad":
                this.device = DeviceType.IPAD;
                break;
            case "mac":
                this.device = DeviceType.MAC;
                break;
            case "linux":
                this.device = DeviceType.LINUX;
                break;
            case "windows":
                this.device = DeviceType.WINDOWS;
                break;
            default:
                this.device = DeviceType.OTHERS;
                break;
        }
    }
}