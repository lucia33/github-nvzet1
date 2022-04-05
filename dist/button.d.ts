import { Button as FoundationButton } from '@microsoft/fast-foundation';
declare const styles: import("@microsoft/fast-element").ElementStyles;
/**
 * Types of button appearance.
 * @public
 */
export declare type ButtonAppearance = 'accent' | 'lightweight' | 'neutral' | 'outline' | 'stealth';
export declare class Button extends FoundationButton {
    /**
     * The appearance the button should have.
     *
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    appearance: ButtonAppearance;
}
export declare const cerButtonBasic: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<{
    baseName: string;
    baseClass: typeof FoundationButton;
    template: import("@microsoft/fast-foundation").FoundationElementTemplate<import("@microsoft/fast-element").ViewTemplate<FoundationButton, any>, import("@microsoft/fast-foundation").ButtonOptions>;
    styles: import("@microsoft/fast-element").ElementStyles;
    shadowOptions: {
        delegatesFocus: true;
    };
}>) => import("@microsoft/fast-foundation").FoundationElementRegistry<{
    baseName: string;
    baseClass: typeof FoundationButton;
    template: import("@microsoft/fast-foundation").FoundationElementTemplate<import("@microsoft/fast-element").ViewTemplate<FoundationButton, any>, import("@microsoft/fast-foundation").ButtonOptions>;
    styles: import("@microsoft/fast-element").ElementStyles;
    shadowOptions: {
        delegatesFocus: true;
    };
}, typeof Button>;
export { styles as buttonBasicStyles };
//# sourceMappingURL=button.d.ts.map