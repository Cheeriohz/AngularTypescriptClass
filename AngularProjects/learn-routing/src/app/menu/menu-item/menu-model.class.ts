export class MenuModel {
    displayName: string;
    tooltip: string;
    route: string;
    constructor(displayName: string, tooltip: string, route:string) {
        this.displayName = displayName;
        this.tooltip = tooltip;
        this.route = route;
    }
    
}