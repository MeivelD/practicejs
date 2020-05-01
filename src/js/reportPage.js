var columnDefs = [
    { headerName: "NAME", field: "name" },
    { headerName: "PSNO", field: "ps_no" },
    { headerName: "DOB", field: "dob" },
    { headerName: "EMAILID", field: "email" },
    { headerName: "DATEOFFILLING", field: "dateOfFilling" },
    { headerName: "GENDER", field: "gender" },
    { headerName: "DESIGNATION", field: "designation" },
    { headerName: "EXPERIENCE", field: "experience" }
];

// specify the data
var rowData = employeeResponse;


// let the grid know which columns and what data to use
var gridOptions = {
    columnDefs: columnDefs,
    defaultColDef: {
        // setup the grid after the page has finished loading
        flex: 1,
        minWidth: 150,
        filter: true,
    },
    rowData: rowData
};

document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#employeeGrid');
    new agGrid.Grid(gridDiv, gridOptions);
});