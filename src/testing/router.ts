import { Directive, HostListener, Input } from "@angular/core";

@Directive({ selector: '[routerLink]'})
export class RouterLinkDirectiveStub {

    @Input('routerLink')
    target: any;

    navigatedTo: any = null;

    @HostListener('click')
    onClick() {
        this.navigatedTo = this.target;
    }

}
