/**
 * Created by yopt on 20/08/2019.
 */
import {Subject} from 'rxjs';
import {Rent} from '../interfaces/rent';
import {Services} from '../interfaces/services';

export class RentService {
    rent: Rent;
    rents: Rent[] = [
        {
            id: 1,
            name: 'El Hostal 1',
            img: '../../../assets/images/rent/rent2.jpg',
            owner: 'Miguel Márquez',
            price: 50,
            phone: '888888',
            address: 'Dir X',
            email: 'xyz@gmail.com',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            services: {ac_unit: false, directions_car: false, local_hotel: true, restaurant: true, wifi: true, live_tv: true } as Services
        },
        {
            id: 2,
            name: 'El Hostal 2',
            img: '../../../assets/images/rent/rent1.jpg',
            owner: 'Pedro Luis',
            price: 40,
            phone: '888888',
            address: 'Bloque 5 Manzana ACEG APto2 Reparto Villanueva',
            email: 'xyz@gmail.com',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            services: {ac_unit: true, directions_car: true, local_hotel: true, restaurant: true, wifi: true, live_tv: true} as Services
        },
        {
            id: 3,
            name: 'El Hostal 3',
            img: '../../../assets/images/rent/rent3.jpg',
            owner: 'Miguel Márquez',
            price: 75,
            phone: '888888',
            address: 'Dir X',
            email: 'xyz@gmail.com',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            services: {ac_unit: true, directions_car: true, local_hotel: true, restaurant: true, wifi: true, live_tv: true } as Services
        },
        {
            id: 4,
            name: 'El Hostal 4',
            img: '../../../assets/images/rent/rent1.jpg',
            owner: 'lázaro Meza',
            price: 80,
            phone: '888888',
            address: 'Dir X',
            email: 'xyz@gmail.com',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            services: {ac_unit: true, directions_car: true, local_hotel: true, restaurant: true, wifi: false, live_tv: true} as Services
        },
        {
            id: 5,
            name: 'El Hostal 5',
            img: '../../../assets/images/rent/rent2.jpg',
            owner: 'lázaro Meza',
            price: 35,
            phone: '888888',
            address: 'Dir X',
            email: 'xyz@gmail.com',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            services: {ac_unit: true, directions_car: true, local_hotel: true, restaurant: true, wifi: false, live_tv: true} as Services
        },
        {
            id: 6,
            name: 'El Hostal 6',
            img: '../../../assets/images/rent/rent3.jpg',
            owner: 'lázaro Meza',
            price: 55,
            phone: '888888',
            address: 'Dir X',
            email: 'xyz@gmail.com',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            services: {ac_unit: true, directions_car: true, local_hotel: true, restaurant: true, wifi: false, live_tv: true} as Services
        },
        {
            id: 7,
            name: 'El Hostal 7',
            img: '../../../assets/images/rent/rent2.jpg',
            owner: 'lázaro Meza',
            price: 100,
            phone: '888888',
            address: 'Dir X',
            email: 'xyz@gmail.com',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            services: {ac_unit: true, directions_car: true, local_hotel: true, restaurant: true, wifi: false, live_tv: true} as Services
        },

    ];


    getRents() {
        return [...this.rents];
    }

    getRent(id: number): Rent {
        this.rent = this.rents.find(x => x.id == id);
        if (this.rent) {
            return this.rent;
        }
        return null;
    }

}