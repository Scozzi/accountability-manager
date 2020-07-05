export interface ContextModel {
    callerName: string;
    callPurpose: string;
    settingsTemplate?: string;
    callbackFunction?: any;

}

export default class Context implements ContextModel{
    public callerName: string;
    public callPurpose: string;
    public callbackFunction: any;
    public settingsComponent?: string;

    constructor(callerName: string, callPurpose: string, additionalParams?: any) {
        this.callerName = callerName;
        this.callPurpose = callPurpose;

        if (additionalParams) {
            if (additionalParams.settingsComponent) {
                this.settingsComponent = additionalParams.settingsComponent;
                
            }
        }
    }
}