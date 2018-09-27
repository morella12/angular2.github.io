import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html'

})
export class CardComponent{
    @Input() title: string = '';
}