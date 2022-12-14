import { ComponentDefinition, ComponentInformation, ComponentAction, ShorthandDefinition } from "../../components";
import CheckboxComponent from "./CheckboxComponent.svelte";

export class CheckboxComponentDefinition extends ComponentDefinition<Boolean> {
    identifier = "spanner.checkbox";

    componentType = CheckboxComponent;

    information = new ComponentInformation("Checkbox", "Add a checkbox to your document");
    shorthand = new ShorthandDefinition("checkbox", "c");
    actions = [
        new ComponentAction<Boolean>("Checkbox", "check", (state) => {
            return true;
        }),

        new ComponentAction<Boolean>("Checkbox", "check", (state) => {
            return false;
        }),
    ];

    defaultState = false;

    serialize(state: boolean): string {
        return state.toString();
    }

    deserialize(serialized: string): boolean {
        return serialized === "true";
    }
}
