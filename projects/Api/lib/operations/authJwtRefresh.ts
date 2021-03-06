/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/authJwtRefreshMappers";
import { ConcordiaApiContext } from "../concordiaApiContext";

/** Class representing a AuthJwtRefresh. */
export class AuthJwtRefresh {
  private readonly client: ConcordiaApiContext;

  /**
   * Create a AuthJwtRefresh.
   * @param {ConcordiaApiContext} client Reference to the service client.
   */
  constructor(client: ConcordiaApiContext) {
    this.client = client;
  }

  /**
   * If 'orig_iat' field (original issued-at-time) is found, will first check
   * if it's within expiration window, then copy it to the new token
   * @summary API View that returns a refreshed token (with new expiration) based on
   * existing token
   * @param data
   * @param [options] The optional parameters
   * @returns Promise<Models.AuthJwtRefreshCreateResponse>
   */
  create(data: Models.RefreshJSONWebToken, options?: msRest.RequestOptionsBase): Promise<Models.AuthJwtRefreshCreateResponse>;
  /**
   * @param data
   * @param callback The callback
   */
  create(data: Models.RefreshJSONWebToken, callback: msRest.ServiceCallback<Models.RefreshJSONWebToken>): void;
  /**
   * @param data
   * @param options The optional parameters
   * @param callback The callback
   */
  create(data: Models.RefreshJSONWebToken, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RefreshJSONWebToken>): void;
  create(data: Models.RefreshJSONWebToken, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RefreshJSONWebToken>, callback?: msRest.ServiceCallback<Models.RefreshJSONWebToken>): Promise<Models.AuthJwtRefreshCreateResponse> {
    return this.client.sendOperationRequest(
      {
        data,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.AuthJwtRefreshCreateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "auth-jwt-refresh/",
  requestBody: {
    parameterPath: "data",
    mapper: {
      ...Mappers.RefreshJSONWebToken,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.RefreshJSONWebToken
    },
    default: {}
  },
  serializer
};
