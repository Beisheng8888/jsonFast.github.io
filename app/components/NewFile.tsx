import { DragAndDropForm } from "./DragAndDropForm";
import { UrlForm } from "./UrlForm";

export function NewFile() {
    return (
        <div>
            <div className="mb-4">
                <UrlForm />
            </div>
            <DragAndDropForm />
        </div>
    );
}
