/**
 * Created by yopt on 20/08/2019.
 */
import {Subject} from 'rxjs';
import {Rent} from '../../rent/interfaces/rent';
import {Service} from '../../rent/interfaces/service';

export class RentService {

    allServices: Service[] = [{code: 'local_hotel'}, { code: 'restaurant'}, { code: 'ac_unit'}, { code: 'directions_car'},  { code: 'wifi'},  { code: 'live_tv'} ];
    rents: Rent[] = [
        {
            id: 1,
            name: 'El Hostal 1 de pipo perez',
            img: '../../../assets/images/rent/rent2.jpg',
            ownerid: 1,
            owner: 'Miguel Márquez',
            price: 50,
            phone: 54946922,
            address: 'Dir X',
            email: 'xyz@gmail.com',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            services: [{code: 'local_hotel'}, { code: 'restaurant'}, { code: 'ac_unit'} , { code: 'directions_car'},  { code: 'wifi'},  { code: 'live_tv'}  ]
        },
        {
            id: 2,
            name: 'El Hostal 1',
            img: '../../../assets/images/rent/rent1.jpg',
            ownerid: 1,
            owner: 'Miguel Márquez',
            price: 50,
            phone: 3232,
            address: 'Dir X',
            email: 'xyz@gmail.com',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            services: [{code: 'ac_unit'}, { code: 'directions_car'}, { code: 'wifi'}, { code: 'restaurant'}]
        },
        {
            id: 3,
            name: 'El Hostal 1',
            img: '../../../assets/images/rent/rent2.jpg',
            ownerid: 1,
            owner: 'Miguel Márquez',
            price: 50,
            phone: 2122,
            address: 'Dir X',
            email: 'xyz@gmail.com',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            services: [{code: 'ac_unit'}, { code: 'directions_car'}, { code: 'live_tv'}]
        },
        {
            id: 4,
            name: 'El Hostal 1',
            img: '../../../assets/images/rent/rent3.jpg',
            ownerid: 1,
            owner: 'Miguel Márquez',
            price: 50,
            phone: 4355,
            address: 'Dir X',
            email: 'xyz@gmail.com',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            services: [{code: 'ac_unit'}, { code: 'directions_car'}, { code: 'live_tv'}]
        },
        {
            id: 5,
            name: 'El Hostal 1',
            img: '../../../assets/images/rent/rent2.jpg',
            ownerid: 2,
            owner: 'Otro user',
            price: 50,
            phone: 76767,
            address: 'Dir X',
            email: 'xyz@gmail.com',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            services: [{code: 'ac_unit'}, { code: 'directions_car'}, { code: 'live_tv'}]
        },
        {
            id: 6,
            name: 'El Hostal 1',
            img: '../../../assets/images/rent/rent3.jpg',
            ownerid: 2,
            owner: 'Otro user',
            price: 50,
            phone: 87655,
            address: 'Dir X',
            email: 'xyz@gmail.com',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            services: [{code: 'ac_unit'}, { code: 'directions_car'}, { code: 'live_tv'}]
        },
        {
            id: 7,
            name: 'El Hostal 1',
            img: '../../../assets/images/rent/rent1.jpg',
            ownerid: 2,
            owner: 'Otro user',
            price: 50,
            phone: 21434,
            address: 'Dir X',
            email: 'xyz@gmail.com',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            services: [{code: 'ac_unit'}, { code: 'directions_car'}, { code: 'live_tv'}]
        },
        {
            id: 8,
            name: 'El Hostal 1',
            img: '../../../assets/images/rent/rent2.jpg',
            ownerid: 2,
            owner: 'Otro user',
            price: 50,
            phone: 543354,
            address: 'Dir X',
            email: 'xyz@gmail.com',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
            services: [{code: 'ac_unit'}, { code: 'directions_car'}, { code: 'live_tv'}]
        }
    ];

    getAllServices() {
        return [...this.allServices];//from DB
    }


    getRents(id) {
        console.log(id);
        if (id != 0) {
            return this.rents.filter(x => x.ownerid === id);
        }
        return [...this.rents];
    }

    getRent(id: number): Rent {
        let rent: Rent = this.rents.find(x => x.id === id);
        if (rent) {
            return rent;
        }
        return null;
    }


}