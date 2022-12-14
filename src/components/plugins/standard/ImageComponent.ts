import { ComponentDefinition, ComponentInformation, ShorthandDefinition } from "../../components";
import ImageComponent from "./ImageComponent.svelte";

export class ImageComponentDefinition extends ComponentDefinition<String> {
    identifier = "spanner.image";
    componentType = ImageComponent;

    information = new ComponentInformation("Image", "Add an image to your document");
    shorthand = new ShorthandDefinition("image", "img");
    actions = [];

    defaultState = "";

    serialize(state: string): string {
        return state;
    }

    deserialize(serialized: string): string {
        return serialized;
    }
}
