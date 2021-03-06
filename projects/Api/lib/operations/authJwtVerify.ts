/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/authJwtVerifyMappers";
import { ConcordiaApiContext } from "../concordiaApiContext";

/** Class representing a AuthJwtVerify. */
export class AuthJwtVerify {
  private readonly client: ConcordiaApiContext;

  /**
   * Create a AuthJwtVerify.
   * @param {ConcordiaApiContext} client Reference to the service client.
   */
  constructor(client: ConcordiaApiContext) {
    this.client = client;
  }

  /**
   * API View that checks the veracity of a token, returning the token if it
   * is valid.
   * @param data
   * @param [options] The optional parameters
   * @returns Promise<Models.AuthJwtVerifyCreateResponse>
   */
  create(data: Models.VerifyJSONWebToken, options?: msRest.RequestOptionsBase): Promise<Models.AuthJwtVerifyCreateResponse>;
  /**
   * @param data
   * @param callback The callback
   */
  create(data: Models.VerifyJSONWebToken, callback: msRest.ServiceCallback<Models.VerifyJSONWebToken>): void;
  /**
   * @param data
   * @param options The optional parameters
   * @param callback The callback
   */
  create(data: Models.VerifyJSONWebToken, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VerifyJSONWebToken>): void;
  create(data: Models.VerifyJSONWebToken, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VerifyJSONWebToken>, callback?: msRest.ServiceCallback<Models.VerifyJSONWebToken>): Promise<Models.AuthJwtVerifyCreateResponse> {
    return this.client.sendOperationRequest(
      {
        data,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.AuthJwtVerifyCreateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "auth-jwt-verify/",
  requestBody: {
    parameterPath: "data",
    mapper: {
      ...Mappers.VerifyJSONWebToken,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.VerifyJSONWebToken
    },
    default: {}
  },
  serializer
};
