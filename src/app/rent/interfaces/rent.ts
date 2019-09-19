import {Service} from './service';

/**
 * Created by yander.pelfort on 19/08/2019.
 */

export interface Rent {
    id: number;
    name: string;
    img: string;
    ownerid: number;
    owner: string;
    price: number;
    phone: number;
    address: string;
    email: string;
    description: string;
    services: Service[];
}
