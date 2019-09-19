/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";


/**
 * @interface
 * An interface representing Login.
 */
export interface Login {
  /**
   * @member {string} [username] Username.
   */
  username?: string;
  /**
   * @member {string} [email] Email.
   */
  email?: string;
  /**
   * @member {string} password Password.
   */
  password: string;
}

/**
 * @interface
 * An interface representing PasswordChange.
 */
export interface PasswordChange {
  /**
   * @member {string} newPassword1 New password1.
   */
  newPassword1: string;
  /**
   * @member {string} newPassword2 New password2.
   */
  newPassword2: string;
}

/**
 * @interface
 * An interface representing PasswordReset.
 */
export interface PasswordReset {
  /**
   * @member {string} email Email.
   */
  email: string;
}

/**
 * @interface
 * An interface representing PasswordResetConfirm.
 */
export interface PasswordResetConfirm {
  /**
   * @member {string} newPassword1 New password1.
   */
  newPassword1: string;
  /**
   * @member {string} newPassword2 New password2.
   */
  newPassword2: string;
  /**
   * @member {string} uid Uid.
   */
  uid: string;
  /**
   * @member {string} token Token.
   */
  token: string;
}

/**
 * @interface
 * An interface representing UserDetails.
 */
export interface UserDetails {
  /**
   * @member {number} [pk] ID. **NOTE: This property will not be serialized. It
   * can only be populated by the server.**
   */
  readonly pk?: number;
  /**
   * @member {string} username Nombre de usuario. Requerido. 150 carácteres
   * como máximo. Únicamente letras, dígitos y @/./+/-/_
   */
  username: string;
  /**
   * @member {string} [email] Dirección de correo electrónico. **NOTE: This
   * property will not be serialized. It can only be populated by the server.**
   */
  readonly email?: string;
  /**
   * @member {string} [firstName] Nombre.
   */
  firstName?: string;
  /**
   * @member {string} [lastName] Apellidos.
   */
  lastName?: string;
}

/**
 * @interface
 * An interface representing JSONWebToken.
 */
export interface JSONWebToken {
  /**
   * @member {string} username Username.
   */
  username: string;
  /**
   * @member {string} password Password.
   */
  password: string;
}

/**
 * @interface
 * An interface representing RefreshJSONWebToken.
 */
export interface RefreshJSONWebToken {
  /**
   * @member {string} token Token.
   */
  token: string;
}

/**
 * @interface
 * An interface representing VerifyJSONWebToken.
 */
export interface VerifyJSONWebToken {
  /**
   * @member {string} token Token.
   */
  token: string;
}

/**
 * @interface
 * An interface representing Departament.
 */
export interface Departament {
  /**
   * @member {number} [id] ID. **NOTE: This property will not be serialized. It
   * can only be populated by the server.**
   */
  readonly id?: number;
  /**
   * @member {string} name Nombre.
   */
  name: string;
  /**
   * @member {string} [description] Descripción.
   */
  description?: string;
  /**
   * @member {boolean} [isActive] Esta activo.
   */
  isActive?: boolean;
  /**
   * @member {Date} [createdAt] Created at. **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly createdAt?: Date;
  /**
   * @member {Date} [updatedAt] Updated at. **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly updatedAt?: Date;
}

/**
 * @interface
 * An interface representing DocumentType.
 */
export interface DocumentType {
  /**
   * @member {number} [id] ID. **NOTE: This property will not be serialized. It
   * can only be populated by the server.**
   */
  readonly id?: number;
  /**
   * @member {string} name Nombre.
   */
  name: string;
  /**
   * @member {string} [description] Descripción.
   */
  description?: string;
  /**
   * @member {boolean} [isActive] Esta activo.
   */
  isActive?: boolean;
  /**
   * @member {string} [upload] Enlace de descarga. **NOTE: This property will
   * not be serialized. It can only be populated by the server.**
   */
  readonly upload?: string;
  /**
   * @member {Date} [createdAt] Created at. **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly createdAt?: Date;
  /**
   * @member {Date} [updatedAt] Updated at. **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly updatedAt?: Date;
}

/**
 * @interface
 * An interface representing User.
 * @summary User
 *
 */
export interface User {
  /**
   * @member {number} [id] ID. **NOTE: This property will not be serialized. It
   * can only be populated by the server.**
   */
  readonly id?: number;
  /**
   * @member {string} email Email.
   */
  email: string;
  /**
   * @member {string} username Username.
   */
  username: string;
  /**
   * @member {string} password Password.
   */
  password: string;
  /**
   * @member {Date} [lastLogin] Último inicio de sesión.
   */
  lastLogin?: Date;
  /**
   * @member {boolean} [isSuperuser] Es superusuario. Indica que este usuario
   * tiene todos los permisos sin asignárselos explícitamente.
   */
  isSuperuser?: boolean;
  /**
   * @member {string} [firstName] Nombre.
   */
  firstName?: string;
  /**
   * @member {string} [lastName] Apellidos.
   */
  lastName?: string;
  /**
   * @member {boolean} [isStaff] Es staff. Indica si el usuario puede entrar en
   * este sitio de administración.
   */
  isStaff?: boolean;
  /**
   * @member {boolean} [isActive] Activo. Indica si el usuario debe ser tratado
   * como activo. Desmarque esta opción en lugar de borrar la cuenta.
   */
  isActive?: boolean;
  /**
   * @member {Date} [dateJoined] Fecha de alta.
   */
  dateJoined?: Date;
  /**
   * @member {number[]} [groups] Los grupos a los que pertenece este usuario.
   * Un usuario tendrá todos los permisos asignados a cada uno de sus grupos.
   */
  groups?: number[];
  /**
   * @member {number[]} [userPermissions] Permisos específicos para este
   * usuario.
   */
  userPermissions?: number[];
}

/**
 * @interface
 * An interface representing Person.
 */
export interface Person {
  /**
   * @member {string} [secondName] Segundo nombre.
   */
  secondName?: string;
  /**
   * @member {string} [secondLastName] Segundo apellido.
   */
  secondLastName?: string;
  /**
   * @member {string} [identification] Identificación.
   */
  identification?: string;
  /**
   * @member {string} [phoneNumber] Teléfono.
   */
  phoneNumber?: string;
  /**
   * @member {string} [address] Dirección.
   */
  address?: string;
  /**
   * @member {boolean} [isActive] Esta activo.
   */
  isActive?: boolean;
  /**
   * @member {Date} [createdAt] Creado el. **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly createdAt?: Date;
  /**
   * @member {Date} [updatedAt] Actualizdo el. **NOTE: This property will not
   * be serialized. It can only be populated by the server.**
   */
  readonly updatedAt?: Date;
  /**
   * @member {User} user
   */
  user: User;
}

/**
 * @interface
 * An interface representing Procedure.
 */
export interface Procedure {
  /**
   * @member {number} [id] ID. **NOTE: This property will not be serialized. It
   * can only be populated by the server.**
   */
  readonly id?: number;
  /**
   * @member {string} name Nombre.
   */
  name: string;
  /**
   * @member {string} description Descripción.
   */
  description: string;
  /**
   * @member {boolean} [isActive] Esta activo.
   */
  isActive?: boolean;
  /**
   * @member {Date} [createdAt] Created at. **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly createdAt?: Date;
  /**
   * @member {Date} [updatedAt] Updated at. **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly updatedAt?: Date;
}

/**
 * @interface
 * An interface representing UserList.
 */
export interface UserList {
  /**
   * @member {number} [id] ID. **NOTE: This property will not be serialized. It
   * can only be populated by the server.**
   */
  readonly id?: number;
  /**
   * @member {string} password Contraseña.
   */
  password: string;
  /**
   * @member {Date} [lastLogin] Último inicio de sesión.
   */
  lastLogin?: Date;
  /**
   * @member {boolean} [isSuperuser] Es superusuario. Indica que este usuario
   * tiene todos los permisos sin asignárselos explícitamente.
   */
  isSuperuser?: boolean;
  /**
   * @member {string} username Nombre de usuario. Requerido. 150 carácteres
   * como máximo. Únicamente letras, dígitos y @/./+/-/_
   */
  username: string;
  /**
   * @member {string} [firstName] Nombre.
   */
  firstName?: string;
  /**
   * @member {string} [lastName] Apellidos.
   */
  lastName?: string;
  /**
   * @member {string} [email] Dirección de correo electrónico.
   */
  email?: string;
  /**
   * @member {boolean} [isStaff] Es staff. Indica si el usuario puede entrar en
   * este sitio de administración.
   */
  isStaff?: boolean;
  /**
   * @member {boolean} [isActive] Activo. Indica si el usuario debe ser tratado
   * como activo. Desmarque esta opción en lugar de borrar la cuenta.
   */
  isActive?: boolean;
  /**
   * @member {Date} [dateJoined] Fecha de alta.
   */
  dateJoined?: Date;
  /**
   * @member {number[]} [groups] Los grupos a los que pertenece este usuario.
   * Un usuario tendrá todos los permisos asignados a cada uno de sus grupos.
   */
  groups?: number[];
  /**
   * @member {number[]} [userPermissions] Permisos específicos para este
   * usuario.
   */
  userPermissions?: number[];
}

/**
 * @interface
 * An interface representing ConcordiaApiOptions.
 * @extends ServiceClientOptions
 */
export interface ConcordiaApiOptions extends ServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * Contains response data for the create operation.
 */
export type ApiRestAuthCreateResponse = Login & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Login;
    };
};

/**
 * Contains response data for the create2 operation.
 */
export type ApiRestAuthCreate2Response = PasswordChange & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PasswordChange;
    };
};

/**
 * Contains response data for the create3 operation.
 */
export type ApiRestAuthCreate3Response = PasswordReset & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PasswordReset;
    };
};

/**
 * Contains response data for the create4 operation.
 */
export type ApiRestAuthCreate4Response = PasswordResetConfirm & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PasswordResetConfirm;
    };
};

/**
 * Contains response data for the read operation.
 */
export type ApiRestAuthReadResponse = UserDetails & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: UserDetails;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ApiRestAuthUpdateResponse = UserDetails & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: UserDetails;
    };
};

/**
 * Contains response data for the update1 operation.
 */
export type ApiRestAuthUpdate1Response = UserDetails & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: UserDetails;
    };
};

/**
 * Contains response data for the create operation.
 */
export type ApiTokenAuthCreateResponse = JSONWebToken & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: JSONWebToken;
    };
};

/**
 * Contains response data for the create operation.
 */
export type ApiTokenRefreshCreateResponse = RefreshJSONWebToken & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RefreshJSONWebToken;
    };
};

/**
 * Contains response data for the create operation.
 */
export type AuthJwtRefreshCreateResponse = RefreshJSONWebToken & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RefreshJSONWebToken;
    };
};

/**
 * Contains response data for the create operation.
 */
export type AuthJwtVerifyCreateResponse = VerifyJSONWebToken & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: VerifyJSONWebToken;
    };
};

/**
 * Contains response data for the create operation.
 */
export type AuthJwtCreateResponse = JSONWebToken & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: JSONWebToken;
    };
};

/**
 * Contains response data for the list operation.
 */
export type DepartamentListResponse = Array<Departament> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Departament[];
    };
};

/**
 * Contains response data for the create operation.
 */
export type DepartamentCreateResponse = Departament & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Departament;
    };
};

/**
 * Contains response data for the read operation.
 */
export type DepartamentReadResponse = Departament & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Departament;
    };
};

/**
 * Contains response data for the update operation.
 */
export type DepartamentUpdateResponse = Departament & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Departament;
    };
};

/**
 * Contains response data for the update1 operation.
 */
export type DepartamentUpdate1Response = Departament & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Departament;
    };
};

/**
 * Contains response data for the list operation.
 */
export type DocumentTypeListResponse = Array<DocumentType> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DocumentType[];
    };
};

/**
 * Contains response data for the create operation.
 */
export type DocumentTypeCreateResponse = DocumentType & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DocumentType;
    };
};

/**
 * Contains response data for the read operation.
 */
export type DocumentTypeReadResponse = DocumentType & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DocumentType;
    };
};

/**
 * Contains response data for the update operation.
 */
export type DocumentTypeUpdateResponse = DocumentType & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DocumentType;
    };
};

/**
 * Contains response data for the update1 operation.
 */
export type DocumentTypeUpdate1Response = DocumentType & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DocumentType;
    };
};

/**
 * Contains response data for the list operation.
 */
export type PersonListResponse = Array<Person> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Person[];
    };
};

/**
 * Contains response data for the create operation.
 */
export type PersonCreateResponse = Person & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Person;
    };
};

/**
 * Contains response data for the read operation.
 */
export type PersonReadResponse = Person & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Person;
    };
};

/**
 * Contains response data for the update operation.
 */
export type PersonUpdateResponse = Person & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Person;
    };
};

/**
 * Contains response data for the update1 operation.
 */
export type PersonUpdate1Response = Person & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Person;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ProcedureListResponse = Array<Procedure> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Procedure[];
    };
};

/**
 * Contains response data for the create operation.
 */
export type ProcedureCreateResponse = Procedure & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Procedure;
    };
};

/**
 * Contains response data for the read operation.
 */
export type ProcedureReadResponse = Procedure & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Procedure;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ProcedureUpdateResponse = Procedure & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Procedure;
    };
};

/**
 * Contains response data for the update1 operation.
 */
export type ProcedureUpdate1Response = Procedure & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Procedure;
    };
};

/**
 * Contains response data for the create operation.
 */
export type RegisterCreateResponse = Person & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Person;
    };
};

/**
 * Contains response data for the list operation.
 */
export type UserListResponse = Array<UserList> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: UserList[];
    };
};

/**
 * Contains response data for the create operation.
 */
export type UserCreateResponse = UserList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: UserList;
    };
};

/**
 * Contains response data for the read operation.
 */
export type UserReadResponse = UserList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: UserList;
    };
};

/**
 * Contains response data for the update operation.
 */
export type UserUpdateResponse = UserList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: UserList;
    };
};

/**
 * Contains response data for the update1 operation.
 */
export type UserUpdate1Response = UserList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: UserList;
    };
};
