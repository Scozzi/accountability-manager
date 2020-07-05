import Resource from "./Resource";

export default class LocalApplicationResource extends Resource {
    executablePath: string;
    constructor(resourceName: string, executablePath: string, additionalParams?: any ) {
        super(resourceName, "some message", "no-icon.png");
        this.executablePath = executablePath;
    }

    getPath() {
        return this.executablePath;
    }
}