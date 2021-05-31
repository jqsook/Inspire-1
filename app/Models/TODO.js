export class TODO{
    constructor({ name }) {
        this.name = name
        this.todo = todo
    }

    get template() {
        return /*html*/`
            <ul>
                        <li class="col-12 flex-column">
                        <input
                        required
                        minlength="2"
                        maxlength="15"
                        class="form-check-input"
                        type="checkbox"
                        id="${t.id}"
                        />
                    <label class="form-check-label" for="defaultCheck1">
                        ${c.name}
                    </label>
                    <button id="remove" onclick="app.checkItemsController.endRepairItem('${t.id}')"><span class="bg-transparent">🗑</span></button>
                </div>
                </li>
                </ul>

        `
    }
}