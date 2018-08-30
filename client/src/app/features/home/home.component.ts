import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'home',
    template: `
        <banner></banner>
        
        <steps></steps>
        
        <most-popular></most-popular>
    `
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
