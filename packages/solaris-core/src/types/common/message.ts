import Values from '../../../../constants';
const { MessageTypeValues } = Values;

export type MessageType = (typeof MessageTypeValues)[number];
