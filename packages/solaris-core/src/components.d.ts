/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IconName, IconParams, IconVariant } from "./types/icons/icon";
import { Size } from "./types/common/size";
import { MessageType } from "./types/common/message";
import { Color, ColorScheme } from "./types/common/color-scheme";
import { Breakpoints } from "./types/common/breakpoints";
import { ContainerType } from "./types/common/container";
import { UnitString } from "./types/common/unit-string";
import { Variant } from "./types/common/variants";
import { ColumnSize } from "./types/common/column-size";
import { TypographyVariant } from "./types/common/typography-variants";
import { FontFamily } from "./types/text/font-family";
import { TitleType } from "./types/text/title";
import { FontWeight } from "./types/text/weight";
export { IconName, IconParams, IconVariant } from "./types/icons/icon";
export { Size } from "./types/common/size";
export { MessageType } from "./types/common/message";
export { Color, ColorScheme } from "./types/common/color-scheme";
export { Breakpoints } from "./types/common/breakpoints";
export { ContainerType } from "./types/common/container";
export { UnitString } from "./types/common/unit-string";
export { Variant } from "./types/common/variants";
export { ColumnSize } from "./types/common/column-size";
export { TypographyVariant } from "./types/common/typography-variants";
export { FontFamily } from "./types/text/font-family";
export { TitleType } from "./types/text/title";
export { FontWeight } from "./types/text/weight";
export namespace Components {
    interface SolarisAlert {
        "bordered"?: boolean;
        "closable": boolean;
        "icon"?: IconName;
        "iconPosition"?: 'left' | 'right';
        "maxWidth"?: number;
        "radius"?: Size;
        "type"?: MessageType;
    }
    interface SolarisAvatar {
        "backgroundColor"?: ColorScheme;
        "backgroundImage"?: string;
        "size"?: Size;
        "variant"?: 'rectangle' | 'circle' | 'square';
    }
    interface SolarisBadge {
        "icon"?: IconParams;
        "iconPosition"?: 'left' | 'right';
        "radius"?: Size;
        "size"?: Size;
        "type"?: MessageType;
    }
    interface SolarisBlock {
        "breakpoints": Breakpoints;
        "element": ContainerType;
    }
    interface SolarisBlockquote {
        "__title"?: string;
        "bordered"?: boolean;
        "decorationPosition"?: 'top' | 'bottom' | 'left' | 'right';
        "icon"?: IconParams;
        "iconPosition"?: 'left' | 'right';
        "maxWidth"?: UnitString;
        "radius"?: Size;
        "type"?: MessageType;
    }
    interface SolarisBubble {
        "innerStyle": { [key: string]: string };
        "text": string;
        "type"?: MessageType | 'default';
    }
    interface SolarisButton {
        "colorScheme": ColorScheme;
        "fullWidth": boolean;
        "href": string;
        "radius": UnitString;
        "size": Size;
        "variant": Variant;
    }
    interface SolarisCard {
        "elevation": number;
        "radius": Size;
    }
    interface SolarisCards {
        "elevation": number;
        "radius": Size;
    }
    interface SolarisColumn {
        "col": ColumnSize;
        "element": ContainerType;
        "gap": number;
        "lg": ColumnSize;
        "md": ColumnSize;
        "sm": ColumnSize;
        "xl": ColumnSize;
        "xs": ColumnSize;
    }
    interface SolarisDropdown {
        "arrowPosition"?: 'left' | 'right';
        "backdrop"?: boolean;
        "button": Element;
        "colorScheme"?: ColorScheme;
        "decorated"?: boolean;
        "left"?: number;
        "top"?: number;
    }
    interface SolarisFlex {
        "alignItems": 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
        "direction": 'row' | 'row-reverse' | 'column' | 'column-reverse';
        "gap": number;
        "justifyContent": 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
        "variant": ContainerType;
        "wide": boolean;
        "wrap": 'nowrap' | 'wrap' | 'wrap-reverse';
    }
    interface SolarisIcon {
        "name"?: IconName;
        "size"?: Size;
        "variant"?: IconVariant;
    }
    interface SolarisLabel {
        "element": TypographyVariant;
        "icon": IconName;
        "variant": MessageType | 'default';
    }
    interface SolarisListTile {
        "__title": string;
        "width"?: UnitString;
    }
    interface SolarisNavbar {
        "colorScheme": ColorScheme;
        "decoration": 'top' | 'left' | 'right' | 'bottom' | 'none';
        "position": 'fixed' | 'relative';
    }
    interface SolarisPill {
        "active": boolean;
        "count": number;
        "label": string;
        "loading": boolean;
        "position": 'left' | 'right';
        "size": Size;
        "type": MessageType;
    }
    interface SolarisRow {
        "gap": number;
    }
    interface SolarisSkeleton {
        "animated": boolean;
        "height"?: number;
        "radius"?: Size;
        "width"?: number;
    }
    interface SolarisStatusText {
        "dot": 'left' | 'right' | 'none';
        "type": MessageType | 'disabled';
        "variant": TypographyVariant;
    }
    interface SolarisStepper {
        "colorScheme"?: ColorScheme;
        "currentIndex"?: number;
        "steps": string[];
    }
    interface SolarisTab {
        "tab": string;
    }
    interface SolarisTabPanel {
        "active": boolean;
        "tab": string;
    }
    interface SolarisTabs {
    }
    interface SolarisTypography {
        "colorScheme": Color;
        "fontFamily"?: FontFamily;
        "innerStyle": { [key: string]: string };
        "lineHeight": number;
        "margin": number;
        "truncated"?: boolean;
        "underline"?: boolean;
        "variant"?: 'p' | TitleType | 'link' | 'caption' | 'subtitle' | 'small';
        "weight": FontWeight;
        "width"?: UnitString;
    }
}
export interface SolarisAlertCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSolarisAlertElement;
}
export interface SolarisTabCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSolarisTabElement;
}
declare global {
    interface HTMLSolarisAlertElement extends Components.SolarisAlert, HTMLStencilElement {
    }
    var HTMLSolarisAlertElement: {
        prototype: HTMLSolarisAlertElement;
        new (): HTMLSolarisAlertElement;
    };
    interface HTMLSolarisAvatarElement extends Components.SolarisAvatar, HTMLStencilElement {
    }
    var HTMLSolarisAvatarElement: {
        prototype: HTMLSolarisAvatarElement;
        new (): HTMLSolarisAvatarElement;
    };
    interface HTMLSolarisBadgeElement extends Components.SolarisBadge, HTMLStencilElement {
    }
    var HTMLSolarisBadgeElement: {
        prototype: HTMLSolarisBadgeElement;
        new (): HTMLSolarisBadgeElement;
    };
    interface HTMLSolarisBlockElement extends Components.SolarisBlock, HTMLStencilElement {
    }
    var HTMLSolarisBlockElement: {
        prototype: HTMLSolarisBlockElement;
        new (): HTMLSolarisBlockElement;
    };
    interface HTMLSolarisBlockquoteElement extends Components.SolarisBlockquote, HTMLStencilElement {
    }
    var HTMLSolarisBlockquoteElement: {
        prototype: HTMLSolarisBlockquoteElement;
        new (): HTMLSolarisBlockquoteElement;
    };
    interface HTMLSolarisBubbleElement extends Components.SolarisBubble, HTMLStencilElement {
    }
    var HTMLSolarisBubbleElement: {
        prototype: HTMLSolarisBubbleElement;
        new (): HTMLSolarisBubbleElement;
    };
    interface HTMLSolarisButtonElement extends Components.SolarisButton, HTMLStencilElement {
    }
    var HTMLSolarisButtonElement: {
        prototype: HTMLSolarisButtonElement;
        new (): HTMLSolarisButtonElement;
    };
    interface HTMLSolarisCardElement extends Components.SolarisCard, HTMLStencilElement {
    }
    var HTMLSolarisCardElement: {
        prototype: HTMLSolarisCardElement;
        new (): HTMLSolarisCardElement;
    };
    interface HTMLSolarisCardsElement extends Components.SolarisCards, HTMLStencilElement {
    }
    var HTMLSolarisCardsElement: {
        prototype: HTMLSolarisCardsElement;
        new (): HTMLSolarisCardsElement;
    };
    interface HTMLSolarisColumnElement extends Components.SolarisColumn, HTMLStencilElement {
    }
    var HTMLSolarisColumnElement: {
        prototype: HTMLSolarisColumnElement;
        new (): HTMLSolarisColumnElement;
    };
    interface HTMLSolarisDropdownElement extends Components.SolarisDropdown, HTMLStencilElement {
    }
    var HTMLSolarisDropdownElement: {
        prototype: HTMLSolarisDropdownElement;
        new (): HTMLSolarisDropdownElement;
    };
    interface HTMLSolarisFlexElement extends Components.SolarisFlex, HTMLStencilElement {
    }
    var HTMLSolarisFlexElement: {
        prototype: HTMLSolarisFlexElement;
        new (): HTMLSolarisFlexElement;
    };
    interface HTMLSolarisIconElement extends Components.SolarisIcon, HTMLStencilElement {
    }
    var HTMLSolarisIconElement: {
        prototype: HTMLSolarisIconElement;
        new (): HTMLSolarisIconElement;
    };
    interface HTMLSolarisLabelElement extends Components.SolarisLabel, HTMLStencilElement {
    }
    var HTMLSolarisLabelElement: {
        prototype: HTMLSolarisLabelElement;
        new (): HTMLSolarisLabelElement;
    };
    interface HTMLSolarisListTileElement extends Components.SolarisListTile, HTMLStencilElement {
    }
    var HTMLSolarisListTileElement: {
        prototype: HTMLSolarisListTileElement;
        new (): HTMLSolarisListTileElement;
    };
    interface HTMLSolarisNavbarElement extends Components.SolarisNavbar, HTMLStencilElement {
    }
    var HTMLSolarisNavbarElement: {
        prototype: HTMLSolarisNavbarElement;
        new (): HTMLSolarisNavbarElement;
    };
    interface HTMLSolarisPillElement extends Components.SolarisPill, HTMLStencilElement {
    }
    var HTMLSolarisPillElement: {
        prototype: HTMLSolarisPillElement;
        new (): HTMLSolarisPillElement;
    };
    interface HTMLSolarisRowElement extends Components.SolarisRow, HTMLStencilElement {
    }
    var HTMLSolarisRowElement: {
        prototype: HTMLSolarisRowElement;
        new (): HTMLSolarisRowElement;
    };
    interface HTMLSolarisSkeletonElement extends Components.SolarisSkeleton, HTMLStencilElement {
    }
    var HTMLSolarisSkeletonElement: {
        prototype: HTMLSolarisSkeletonElement;
        new (): HTMLSolarisSkeletonElement;
    };
    interface HTMLSolarisStatusTextElement extends Components.SolarisStatusText, HTMLStencilElement {
    }
    var HTMLSolarisStatusTextElement: {
        prototype: HTMLSolarisStatusTextElement;
        new (): HTMLSolarisStatusTextElement;
    };
    interface HTMLSolarisStepperElement extends Components.SolarisStepper, HTMLStencilElement {
    }
    var HTMLSolarisStepperElement: {
        prototype: HTMLSolarisStepperElement;
        new (): HTMLSolarisStepperElement;
    };
    interface HTMLSolarisTabElement extends Components.SolarisTab, HTMLStencilElement {
    }
    var HTMLSolarisTabElement: {
        prototype: HTMLSolarisTabElement;
        new (): HTMLSolarisTabElement;
    };
    interface HTMLSolarisTabPanelElement extends Components.SolarisTabPanel, HTMLStencilElement {
    }
    var HTMLSolarisTabPanelElement: {
        prototype: HTMLSolarisTabPanelElement;
        new (): HTMLSolarisTabPanelElement;
    };
    interface HTMLSolarisTabsElement extends Components.SolarisTabs, HTMLStencilElement {
    }
    var HTMLSolarisTabsElement: {
        prototype: HTMLSolarisTabsElement;
        new (): HTMLSolarisTabsElement;
    };
    interface HTMLSolarisTypographyElement extends Components.SolarisTypography, HTMLStencilElement {
    }
    var HTMLSolarisTypographyElement: {
        prototype: HTMLSolarisTypographyElement;
        new (): HTMLSolarisTypographyElement;
    };
    interface HTMLElementTagNameMap {
        "solaris-alert": HTMLSolarisAlertElement;
        "solaris-avatar": HTMLSolarisAvatarElement;
        "solaris-badge": HTMLSolarisBadgeElement;
        "solaris-block": HTMLSolarisBlockElement;
        "solaris-blockquote": HTMLSolarisBlockquoteElement;
        "solaris-bubble": HTMLSolarisBubbleElement;
        "solaris-button": HTMLSolarisButtonElement;
        "solaris-card": HTMLSolarisCardElement;
        "solaris-cards": HTMLSolarisCardsElement;
        "solaris-column": HTMLSolarisColumnElement;
        "solaris-dropdown": HTMLSolarisDropdownElement;
        "solaris-flex": HTMLSolarisFlexElement;
        "solaris-icon": HTMLSolarisIconElement;
        "solaris-label": HTMLSolarisLabelElement;
        "solaris-list-tile": HTMLSolarisListTileElement;
        "solaris-navbar": HTMLSolarisNavbarElement;
        "solaris-pill": HTMLSolarisPillElement;
        "solaris-row": HTMLSolarisRowElement;
        "solaris-skeleton": HTMLSolarisSkeletonElement;
        "solaris-status-text": HTMLSolarisStatusTextElement;
        "solaris-stepper": HTMLSolarisStepperElement;
        "solaris-tab": HTMLSolarisTabElement;
        "solaris-tab-panel": HTMLSolarisTabPanelElement;
        "solaris-tabs": HTMLSolarisTabsElement;
        "solaris-typography": HTMLSolarisTypographyElement;
    }
}
declare namespace LocalJSX {
    interface SolarisAlert {
        "bordered"?: boolean;
        "closable"?: boolean;
        "icon"?: IconName;
        "iconPosition"?: 'left' | 'right';
        "maxWidth"?: number;
        "onOnCloseClick"?: (event: SolarisAlertCustomEvent<void>) => void;
        "radius"?: Size;
        "type"?: MessageType;
    }
    interface SolarisAvatar {
        "backgroundColor"?: ColorScheme;
        "backgroundImage"?: string;
        "size"?: Size;
        "variant"?: 'rectangle' | 'circle' | 'square';
    }
    interface SolarisBadge {
        "icon"?: IconParams;
        "iconPosition"?: 'left' | 'right';
        "radius"?: Size;
        "size"?: Size;
        "type"?: MessageType;
    }
    interface SolarisBlock {
        "breakpoints"?: Breakpoints;
        "element"?: ContainerType;
    }
    interface SolarisBlockquote {
        "__title"?: string;
        "bordered"?: boolean;
        "decorationPosition"?: 'top' | 'bottom' | 'left' | 'right';
        "icon"?: IconParams;
        "iconPosition"?: 'left' | 'right';
        "maxWidth"?: UnitString;
        "radius"?: Size;
        "type"?: MessageType;
    }
    interface SolarisBubble {
        "innerStyle"?: { [key: string]: string };
        "text"?: string;
        "type"?: MessageType | 'default';
    }
    interface SolarisButton {
        "colorScheme"?: ColorScheme;
        "fullWidth"?: boolean;
        "href"?: string;
        "radius"?: UnitString;
        "size"?: Size;
        "variant"?: Variant;
    }
    interface SolarisCard {
        "elevation"?: number;
        "radius"?: Size;
    }
    interface SolarisCards {
        "elevation"?: number;
        "radius"?: Size;
    }
    interface SolarisColumn {
        "col"?: ColumnSize;
        "element"?: ContainerType;
        "gap"?: number;
        "lg"?: ColumnSize;
        "md"?: ColumnSize;
        "sm"?: ColumnSize;
        "xl"?: ColumnSize;
        "xs"?: ColumnSize;
    }
    interface SolarisDropdown {
        "arrowPosition"?: 'left' | 'right';
        "backdrop"?: boolean;
        "button"?: Element;
        "colorScheme"?: ColorScheme;
        "decorated"?: boolean;
        "left"?: number;
        "top"?: number;
    }
    interface SolarisFlex {
        "alignItems"?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
        "direction"?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
        "gap"?: number;
        "justifyContent"?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
        "variant"?: ContainerType;
        "wide"?: boolean;
        "wrap"?: 'nowrap' | 'wrap' | 'wrap-reverse';
    }
    interface SolarisIcon {
        "name"?: IconName;
        "size"?: Size;
        "variant"?: IconVariant;
    }
    interface SolarisLabel {
        "element"?: TypographyVariant;
        "icon"?: IconName;
        "variant"?: MessageType | 'default';
    }
    interface SolarisListTile {
        "__title"?: string;
        "width"?: UnitString;
    }
    interface SolarisNavbar {
        "colorScheme"?: ColorScheme;
        "decoration"?: 'top' | 'left' | 'right' | 'bottom' | 'none';
        "position"?: 'fixed' | 'relative';
    }
    interface SolarisPill {
        "active"?: boolean;
        "count"?: number;
        "label"?: string;
        "loading"?: boolean;
        "position"?: 'left' | 'right';
        "size"?: Size;
        "type"?: MessageType;
    }
    interface SolarisRow {
        "gap"?: number;
    }
    interface SolarisSkeleton {
        "animated"?: boolean;
        "height"?: number;
        "radius"?: Size;
        "width"?: number;
    }
    interface SolarisStatusText {
        "dot"?: 'left' | 'right' | 'none';
        "type"?: MessageType | 'disabled';
        "variant"?: TypographyVariant;
    }
    interface SolarisStepper {
        "colorScheme"?: ColorScheme;
        "currentIndex"?: number;
        "steps"?: string[];
    }
    interface SolarisTab {
        "onTabSelected"?: (event: SolarisTabCustomEvent<string>) => void;
        "tab"?: string;
    }
    interface SolarisTabPanel {
        "active"?: boolean;
        "tab"?: string;
    }
    interface SolarisTabs {
    }
    interface SolarisTypography {
        "colorScheme"?: Color;
        "fontFamily"?: FontFamily;
        "innerStyle"?: { [key: string]: string };
        "lineHeight"?: number;
        "margin"?: number;
        "truncated"?: boolean;
        "underline"?: boolean;
        "variant"?: 'p' | TitleType | 'link' | 'caption' | 'subtitle' | 'small';
        "weight"?: FontWeight;
        "width"?: UnitString;
    }
    interface IntrinsicElements {
        "solaris-alert": SolarisAlert;
        "solaris-avatar": SolarisAvatar;
        "solaris-badge": SolarisBadge;
        "solaris-block": SolarisBlock;
        "solaris-blockquote": SolarisBlockquote;
        "solaris-bubble": SolarisBubble;
        "solaris-button": SolarisButton;
        "solaris-card": SolarisCard;
        "solaris-cards": SolarisCards;
        "solaris-column": SolarisColumn;
        "solaris-dropdown": SolarisDropdown;
        "solaris-flex": SolarisFlex;
        "solaris-icon": SolarisIcon;
        "solaris-label": SolarisLabel;
        "solaris-list-tile": SolarisListTile;
        "solaris-navbar": SolarisNavbar;
        "solaris-pill": SolarisPill;
        "solaris-row": SolarisRow;
        "solaris-skeleton": SolarisSkeleton;
        "solaris-status-text": SolarisStatusText;
        "solaris-stepper": SolarisStepper;
        "solaris-tab": SolarisTab;
        "solaris-tab-panel": SolarisTabPanel;
        "solaris-tabs": SolarisTabs;
        "solaris-typography": SolarisTypography;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "solaris-alert": LocalJSX.SolarisAlert & JSXBase.HTMLAttributes<HTMLSolarisAlertElement>;
            "solaris-avatar": LocalJSX.SolarisAvatar & JSXBase.HTMLAttributes<HTMLSolarisAvatarElement>;
            "solaris-badge": LocalJSX.SolarisBadge & JSXBase.HTMLAttributes<HTMLSolarisBadgeElement>;
            "solaris-block": LocalJSX.SolarisBlock & JSXBase.HTMLAttributes<HTMLSolarisBlockElement>;
            "solaris-blockquote": LocalJSX.SolarisBlockquote & JSXBase.HTMLAttributes<HTMLSolarisBlockquoteElement>;
            "solaris-bubble": LocalJSX.SolarisBubble & JSXBase.HTMLAttributes<HTMLSolarisBubbleElement>;
            "solaris-button": LocalJSX.SolarisButton & JSXBase.HTMLAttributes<HTMLSolarisButtonElement>;
            "solaris-card": LocalJSX.SolarisCard & JSXBase.HTMLAttributes<HTMLSolarisCardElement>;
            "solaris-cards": LocalJSX.SolarisCards & JSXBase.HTMLAttributes<HTMLSolarisCardsElement>;
            "solaris-column": LocalJSX.SolarisColumn & JSXBase.HTMLAttributes<HTMLSolarisColumnElement>;
            "solaris-dropdown": LocalJSX.SolarisDropdown & JSXBase.HTMLAttributes<HTMLSolarisDropdownElement>;
            "solaris-flex": LocalJSX.SolarisFlex & JSXBase.HTMLAttributes<HTMLSolarisFlexElement>;
            "solaris-icon": LocalJSX.SolarisIcon & JSXBase.HTMLAttributes<HTMLSolarisIconElement>;
            "solaris-label": LocalJSX.SolarisLabel & JSXBase.HTMLAttributes<HTMLSolarisLabelElement>;
            "solaris-list-tile": LocalJSX.SolarisListTile & JSXBase.HTMLAttributes<HTMLSolarisListTileElement>;
            "solaris-navbar": LocalJSX.SolarisNavbar & JSXBase.HTMLAttributes<HTMLSolarisNavbarElement>;
            "solaris-pill": LocalJSX.SolarisPill & JSXBase.HTMLAttributes<HTMLSolarisPillElement>;
            "solaris-row": LocalJSX.SolarisRow & JSXBase.HTMLAttributes<HTMLSolarisRowElement>;
            "solaris-skeleton": LocalJSX.SolarisSkeleton & JSXBase.HTMLAttributes<HTMLSolarisSkeletonElement>;
            "solaris-status-text": LocalJSX.SolarisStatusText & JSXBase.HTMLAttributes<HTMLSolarisStatusTextElement>;
            "solaris-stepper": LocalJSX.SolarisStepper & JSXBase.HTMLAttributes<HTMLSolarisStepperElement>;
            "solaris-tab": LocalJSX.SolarisTab & JSXBase.HTMLAttributes<HTMLSolarisTabElement>;
            "solaris-tab-panel": LocalJSX.SolarisTabPanel & JSXBase.HTMLAttributes<HTMLSolarisTabPanelElement>;
            "solaris-tabs": LocalJSX.SolarisTabs & JSXBase.HTMLAttributes<HTMLSolarisTabsElement>;
            "solaris-typography": LocalJSX.SolarisTypography & JSXBase.HTMLAttributes<HTMLSolarisTypographyElement>;
        }
    }
}
