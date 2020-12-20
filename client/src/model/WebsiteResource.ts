import Resource from './Resource';

export default class WebsiteResource extends Resource {
    baseURL: string;
    constructor(resourceName: string, baseURL: string, additionalParams?: any) {
        super(resourceName, "some message", 'no-icon.png');
        this.baseURL = baseURL;
    }

    getURL() {
        return this.baseURL;
    }
}