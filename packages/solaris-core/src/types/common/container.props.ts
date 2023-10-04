import { Breakpoints } from '../../types/common/breakpoints';
import { ContainerType } from '../../types/common/container';

export type IBox = {
  breakpoints?: Breakpoints;
};
export type IElement = {
  element?: ContainerType;
};

export type ContainerProps = HTMLDivElement & IBox & IElement;
