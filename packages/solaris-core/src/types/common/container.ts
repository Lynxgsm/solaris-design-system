import Values from '../../../../constants';
const { ContainerTypeValues } = Values;

export type ContainerType = (typeof ContainerTypeValues)[number];
