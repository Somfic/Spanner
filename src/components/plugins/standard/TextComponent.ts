import { ComponentDefinition, ComponentInformation, ShorthandDefinition } from "../../components";
import TextComponent from "./TextComponent.svelte";

export class TextComponentDefinition extends ComponentDefinition<String> {
    identifier = "freenote.text";
    defaultState = "";
    componentType = TextComponent;

    information = new ComponentInformation("Text", "Add a text element to your document");
    shorthand = new ShorthandDefinition("p", "");

    serialize(state: string): string {
        return state;
    }

    deserialize(serialized: string): string {
        return serialized;
    }
}
