import { ComponentDefinition, ComponentInformation, ShorthandDefinition } from "../../components";
import H3Component from "./H3Component.svelte";

export class H3ComponentDefinition extends ComponentDefinition<String> {
    identifier = "spanner.H3";
    defaultState = "";
    componentType = H3Component;

    information = new ComponentInformation("Heading 3", "Add a Heading 2 to your document");
    shorthand = new ShorthandDefinition("h3", "###");
    actions = [];

    serialize(state: string): string {
        return state;
    }

    deserialize(serialized: string): string {
        return serialized;
    }
}
