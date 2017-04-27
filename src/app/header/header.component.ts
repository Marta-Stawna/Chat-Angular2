import { Component } from '@angular/core';

@Component({
    selector: 'myHeader',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    public meassage:string = 'chaT';
}
