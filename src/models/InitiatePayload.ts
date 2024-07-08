import type { Service } from "./Service";

export interface InitiatePayload {
  requestId: string;
  service: Service;
  betaAssets: boolean;
  payload: {
    action: 'initiate',
    merchantId: string,
    clientId: string,
    customerId: string,
    apiBaseURL: string,
    environment: 'prod' | 'sandbox',
    integrationType: 'iframe' | 'redirection',
    hyperSDKDiv: string,
    logLevel: '0' | '1',
    deviceId?: string,
    sessionToken?: string;
    sessionId?: string;
    enableHyperCredit?:boolean;
  }
}