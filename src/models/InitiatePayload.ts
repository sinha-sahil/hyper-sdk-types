import type { Service } from "./Service";

export interface InitiatePayload {
  requestId: string,
  service: Service,
  payload: {
    action: 'initiate',
    merchantId: string,
    clientId: string,
    environment: 'prod' | 'sandbox',
    integrationType: 'iframe' | 'redirection',
    hyperSDKDiv: string
  }
}