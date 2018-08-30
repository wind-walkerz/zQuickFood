import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'most-popular',
    templateUrl: './most-popular.component.pug',
    styleUrls: ['./most-popular.component.scss']
})
export class MostPopularComponent implements OnInit {

    restaurant_list = [
        {
            name: 'Taco Mexican',
            rating: 5,
            type: 'Mexican / American',
            location: '135 Newtownards Road, Belfast, BT4. ',
            opening: 'Opens at 17:00',
            logo: 'https://res.cloudinary.com/hieu/image/upload/v1535622050/zQuickFood/restaurants/taco-mexican/thumb_restaurant.jpg'
        },
        {
            name: 'Taco Mexican',
            rating: 5,
            type: 'Mexican / American',
            location: '135 Newtownards Road, Belfast, BT4. ',
            opening: 'Opens at 17:00',
            logo: 'https://res.cloudinary.com/hieu/image/upload/v1535622050/zQuickFood/restaurants/taco-mexican/thumb_restaurant.jpg'
        },
        {
            name: 'Taco Mexican',
            rating: 5,
            type: 'Mexican / American',
            location: '135 Newtownards Road, Belfast, BT4. ',
            opening: 'Opens at 17:00',
            logo: 'https://res.cloudinary.com/hieu/image/upload/v1535622050/zQuickFood/restaurants/taco-mexican/thumb_restaurant.jpg'
        }
    ]

    constructor() {
    }

    ngOnInit() {
    }

}
