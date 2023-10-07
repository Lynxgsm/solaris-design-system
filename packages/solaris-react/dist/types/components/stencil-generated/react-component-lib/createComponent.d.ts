import React from "react";
export interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
}
interface StencilReactInternalProps<ElementType> extends React.HTMLAttributes<ElementType> {
    forwardedRef: React.RefObject<ElementType>;
    ref?: React.Ref<any>;
}
export declare const createReactComponent: <PropType, ElementType extends HTMLStencilElement, ContextStateType = {}, ExpandedPropsTypes = {}>(tagName: string, ReactComponentContext?: React.Context<ContextStateType> | undefined, manipulatePropsFunction?: ((originalProps: StencilReactInternalProps<ElementType>, propsToPass: any) => ExpandedPropsTypes) | undefined, defineCustomElement?: () => void) => React.ForwardRefExoticComponent<React.PropsWithoutRef<import("./utils").StencilReactExternalProps<PropType, ElementType>> & React.RefAttributes<ElementType>>;
export {};
//# sourceMappingURL=createComponent.d.ts.map