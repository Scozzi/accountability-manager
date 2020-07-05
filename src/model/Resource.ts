export interface ResourceModel {
    resourceName: string;
    IPCMessage: string;
    imgname: string;

    // get-only:
    readonly resourceNameFormatted : string;
}

export default class Resource implements ResourceModel{
    public resourceName: string;
    public IPCMessage: string;
    public imgname: string;

    constructor(resourceName: string, IPCMessage: string, imgname: string, additionalParams?: any) {
        this.resourceName = resourceName;
        this.IPCMessage = IPCMessage;
        this.imgname = imgname;
    }

    get resourceNameFormatted(): string {
        return this.resourceName.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    }

    getIPCMessage() {
        return this.IPCMessage;
    }
}