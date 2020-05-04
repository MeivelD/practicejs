class Util {
    constructor() {

    }
    createGrid(gridId, gridOptions) {
        let gridDiv = document.querySelector('#' + gridId);
        new agGrid.Grid(gridDiv, gridOptions);
    }

    formatAgGridDate(data, dateFormat) {
        return moment(data).format(dateFormat);
    }
}
util = new Util();