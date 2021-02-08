import { Directive, Input } from "@angular/core";

@Directive({ selector: '[routerLink]'})
export class RouterLinkDirectiveStub {
    @Input('routerLink')
    target: any;
}
