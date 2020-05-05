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

    filterParamsDateComparator(filterLocalDateAtMidnight, cellValue) {
        debugger
        let dateAsString = cellValue;
        if (dateAsString == null) return -1;
        let dateParts = dateAsString.split('-');
        let cellDate = new Date(
            Number(dateParts[0]),
            Number(dateParts[1]) - 1,
            Number(dateParts[2])
        );

        if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) {
            return 0;
        }

        if (cellDate < filterLocalDateAtMidnight) {
            return -1;
        }

        if (cellDate > filterLocalDateAtMidnight) {
            return 1;
        }
    }
}
util = new Util();