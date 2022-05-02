export class HyperServices {
    static preFetch(preFetchPayload: any): void;
    isIframeIntegration: boolean;
    initiateTriggered: boolean;
    pendingHyperCalls: any[];
    isHyperReady: boolean;
    consumeBackpress: boolean;
    hyperSDKDiv: any;
    initiate(initiatePayload: any, callback: any): void;
    initiatePayload: any;
    hyperCallbackHandler: any;
    iframeHash: string;
    hyperIframe: any;
    process(processPayload: any): void;
    terminate(): void;
    attachEventListener(): void;
    hyperCallbackWrapper: (message: any) => void;
    handleBackpress(): boolean;
    isInitialised(): boolean;
}
