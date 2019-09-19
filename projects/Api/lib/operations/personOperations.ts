/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/personOperationsMappers";
import * as Parameters from "../models/parameters";
import { ConcordiaApiContext } from "../concordiaApiContext";

/** Class representing a PersonOperations. */
export class PersonOperations {
  private readonly client: ConcordiaApiContext;

  /**
   * Create a PersonOperations.
   * @param {ConcordiaApiContext} client Reference to the service client.
   */
  constructor(client: ConcordiaApiContext) {
    this.client = client;
  }

  /**
   * This viewset automatically provides list and detail actions
   * @param [options] The optional parameters
   * @returns Promise<Models.PersonListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.PersonListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.Person[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Person[]>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Person[]>, callback?: msRest.ServiceCallback<Models.Person[]>): Promise<Models.PersonListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PersonListResponse>;
  }

  /**
   * This viewset automatically provides list and detail actions
   * @param data
   * @param [options] The optional parameters
   * @returns Promise<Models.PersonCreateResponse>
   */
  create(data: Models.Person, options?: msRest.RequestOptionsBase): Promise<Models.PersonCreateResponse>;
  /**
   * @param data
   * @param callback The callback
   */
  create(data: Models.Person, callback: msRest.ServiceCallback<Models.Person>): void;
  /**
   * @param data
   * @param options The optional parameters
   * @param callback The callback
   */
  create(data: Models.Person, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Person>): void;
  create(data: Models.Person, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Person>, callback?: msRest.ServiceCallback<Models.Person>): Promise<Models.PersonCreateResponse> {
    return this.client.sendOperationRequest(
      {
        data,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.PersonCreateResponse>;
  }

  /**
   * This viewset automatically provides list and detail actions
   * @param user A unique value identifying this persona.
   * @param [options] The optional parameters
   * @returns Promise<Models.PersonReadResponse>
   */
  read(user: string, options?: msRest.RequestOptionsBase): Promise<Models.PersonReadResponse>;
  /**
   * @param user A unique value identifying this persona.
   * @param callback The callback
   */
  read(user: string, callback: msRest.ServiceCallback<Models.Person>): void;
  /**
   * @param user A unique value identifying this persona.
   * @param options The optional parameters
   * @param callback The callback
   */
  read(user: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Person>): void;
  read(user: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Person>, callback?: msRest.ServiceCallback<Models.Person>): Promise<Models.PersonReadResponse> {
    return this.client.sendOperationRequest(
      {
        user,
        options
      },
      readOperationSpec,
      callback) as Promise<Models.PersonReadResponse>;
  }

  /**
   * This viewset automatically provides list and detail actions
   * @param data
   * @param user A unique value identifying this persona.
   * @param [options] The optional parameters
   * @returns Promise<Models.PersonUpdateResponse>
   */
  update(data: Models.Person, user: string, options?: msRest.RequestOptionsBase): Promise<Models.PersonUpdateResponse>;
  /**
   * @param data
   * @param user A unique value identifying this persona.
   * @param callback The callback
   */
  update(data: Models.Person, user: string, callback: msRest.ServiceCallback<Models.Person>): void;
  /**
   * @param data
   * @param user A unique value identifying this persona.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(data: Models.Person, user: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Person>): void;
  update(data: Models.Person, user: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Person>, callback?: msRest.ServiceCallback<Models.Person>): Promise<Models.PersonUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        data,
        user,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.PersonUpdateResponse>;
  }

  /**
   * This viewset automatically provides list and detail actions
   * @param data
   * @param user A unique value identifying this persona.
   * @param [options] The optional parameters
   * @returns Promise<Models.PersonUpdate1Response>
   */
  update1(data: Models.Person, user: string, options?: msRest.RequestOptionsBase): Promise<Models.PersonUpdate1Response>;
  /**
   * @param data
   * @param user A unique value identifying this persona.
   * @param callback The callback
   */
  update1(data: Models.Person, user: string, callback: msRest.ServiceCallback<Models.Person>): void;
  /**
   * @param data
   * @param user A unique value identifying this persona.
   * @param options The optional parameters
   * @param callback The callback
   */
  update1(data: Models.Person, user: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Person>): void;
  update1(data: Models.Person, user: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Person>, callback?: msRest.ServiceCallback<Models.Person>): Promise<Models.PersonUpdate1Response> {
    return this.client.sendOperationRequest(
      {
        data,
        user,
        options
      },
      update1OperationSpec,
      callback) as Promise<Models.PersonUpdate1Response>;
  }

  /**
   * This viewset automatically provides list and detail actions
   * @param user A unique value identifying this persona.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(user: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param user A unique value identifying this persona.
   * @param callback The callback
   */
  deleteMethod(user: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param user A unique value identifying this persona.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(user: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(user: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        user,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "person/",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Person"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "person/",
  requestBody: {
    parameterPath: "data",
    mapper: {
      ...Mappers.Person,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.Person
    },
    default: {}
  },
  serializer
};

const readOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "person/{user}/",
  urlParameters: [
    Parameters.user
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Person
    },
    default: {}
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "person/{user}/",
  urlParameters: [
    Parameters.user
  ],
  requestBody: {
    parameterPath: "data",
    mapper: {
      ...Mappers.Person,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Person
    },
    default: {}
  },
  serializer
};

const update1OperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "person/{user}/",
  urlParameters: [
    Parameters.user
  ],
  requestBody: {
    parameterPath: "data",
    mapper: {
      ...Mappers.Person,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Person
    },
    default: {}
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "person/{user}/",
  urlParameters: [
    Parameters.user
  ],
  responses: {
    204: {},
    default: {}
  },
  serializer
};
