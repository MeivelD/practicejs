var columnDefs = [
    /* { headerName: "S NO", field: "id"}, */
    {
        headerName: 'S NO',
        valueGetter: 'node.id',
        minWidth: 80,
        cellClass: "grid-cell-centered",
        cellRenderer: (data) => {
            return parseInt(data.value) + 1;
        },
    },
    { headerName: "NAME", field: "name", minWidth: 150, cellClass: "grid-cell-left" },
    { headerName: "PSNO", field: "ps_no", minWidth: 100, cellClass: "grid-cell-centered" },
    {
        headerName: "DOB",
        field: "dob",
        minWidth: 100,
        cellClass: "grid-cell-centered",
        cellRenderer: (data) => {
            return util.formatAgGridDate(data.value, 'DD-MMM-YYYY');
        },
        filter: 'agDateColumnFilter',
        filterParams: {
            comparator: function(filterLocalDateAtMidnight, cellValue) {
                return util.filterParamsDateComparator(filterLocalDateAtMidnight, cellValue);
            },
            browserDatePicker: true,
        },
    },
    { headerName: "EMAILID", field: "email", minWidth: 200, cellClass: "grid-cell-left" },
    {
        headerName: "DATEOFFILLING",
        field: "dateOfFilling",
        minWidth: 100,
        cellClass: "grid-cell-centered",
        cellRenderer: (data) => {
            return util.formatAgGridDate(data.value, 'DD-MMM-YYYY');
        },
        filter: 'agDateColumnFilter',
        filterParams: {
            comparator: function(filterLocalDateAtMidnight, cellValue) {
                return util.filterParamsDateComparator(filterLocalDateAtMidnight, cellValue);
            },
            browserDatePicker: true,
        },
    },
    { headerName: "GENDER", field: "gender", minWidth: 80, cellClass: "grid-cell-centered" },
    { headerName: "DESIGNATION", field: "designation", minWidth: 200, cellClass: "grid-cell-centered" },
    { headerName: "EXPERIENCE", field: "experience", minWidth: 50, cellClass: "grid-cell-centered", filter: 'agNumberColumnFilter' }
];

// specify the data
var rowData = employeeResponse;


// let the grid know which columns and what data to use
var gridOptions = {
    columnDefs: columnDefs,
    defaultColDef: {
        // setup the grid after the page has finished loading
        flex: 2,
        filter: true,
        resizable: true
    },
    id: "id",
    rowData: rowData
};

document.addEventListener('DOMContentLoaded', function() {
    util.createGrid("employeeGrid", gridOptions);
});