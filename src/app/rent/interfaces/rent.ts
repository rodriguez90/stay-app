import {Services} from './services';
/**
 * Created by yander.pelfort on 19/08/2019.
 */
export interface Rent {
    id: number;
    name: string;
    img: string;
    owner: string;
    price: number;
    phone: string;
    address: string;
    email: string;
    description: string;
    services: Services;
}