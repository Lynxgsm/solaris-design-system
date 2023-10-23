declare const MessageTypeValues: readonly ["info-nebula", "error", "warning", "success", "info"];
export type MessageType = (typeof MessageTypeValues)[number];
export {};
