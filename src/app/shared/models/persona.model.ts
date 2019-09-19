// app imports

// libreria de terceros
import * as moment from 'moment';

// app imports
import {Model, User} from '../../../../projects/fbs-shared/src/lib/models';

/* Interfaz que encapsula los datos de una persona */
export interface Persona extends Model {
    firstName?: string;
    secondName?: string;
    firstLastName?: string;
    secondLastName?: string;
    email?: string;
    phoneNumber?: string;
    dni?: string;
    digito?: number;

    active?: boolean;

    user?: User;
    direccion?: string;
    fechaNacimiento?: moment.Moment;
    fullName(): string;
    officeName(): string;

    companyName(): string;
}

export function crearPersona(
    id: any,
    firstName: string,
    secondName: string | '',
    firstLastName: string,
    secondLastName: string | '',
    dni: string,
    digito: number,

    active?: boolean,

    user?: User,
): Persona {

    let persona: Persona;
    persona = {
        id,
        firstName,
        secondName,
        firstLastName,
        secondLastName,
        dni,
        digito,

        email: '',
        phoneNumber: '',
        active: active || true,

        user,
        fullName: function(): string {
            return `${this.firstName} ${this.secondName} ${this.firstLastName} ${this.secondLastName}`;
        },
        officeName: function(): string {
            return this.office ? this.office.name : '';
        },

        companyName: function(): string {
            return this.office && this.office.company ? this.office.company.name : '';
        }
    };
    return persona;
}
