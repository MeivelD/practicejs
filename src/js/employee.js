class Employee {
    constructor() {

    }
    openAddEmpDialog() {
        let dialog = document.querySelector('#addEmpDialog');
        dialog.show();
    }

    closeAddEmpDialog() {
        let dialog = document.querySelector('#addEmpDialog');
        dialog.close();
    }

    getEmployeeNameList(employee) {
        return employee.name;
    }

    autoComplete(value) {
        let data = employeeResponse.map(this.getEmployeeNameList);
        let dataLength = data.length;
        document.getElementById('datalist').innerHTML = '';
        //setting datalist empty at the start of function 
        for (let i = 0; i < dataLength; i++) {
            if (((data[i].toLowerCase()).indexOf(value.toLowerCase())) > -1) {
                //comparing if input string is existing in tags[i] string 

                var node = document.createElement("option");
                var val = document.createTextNode(data[i]);
                node.appendChild(val);

                document.getElementById("datalist").appendChild(node);
                //creating and appending new elements in data list 
            }
        }
    }

    disableEmployeeCtrls() {
        document.getElementById("name").disabled = true;
        document.getElementById("ps_no").disabled = true;
        document.getElementById("dob").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("gender").disabled = true;
        document.getElementById("designation").disabled = true;
        document.getElementById("experience").disabled = true;
        document.getElementById("resetBtn").disabled = true;
        document.getElementById("delBtn").disabled = true;
        document.getElementById("submitBtn").disabled = true;
    }

    enableEmployeeCtrls() {
        document.getElementById("name").disabled = false;
        document.getElementById("ps_no").disabled = false;
        document.getElementById("dob").disabled = false;
        document.getElementById("email").disabled = false;
        document.getElementById("gender").disabled = false;
        document.getElementById("designation").disabled = false;
        document.getElementById("experience").disabled = false;
        document.getElementById("resetBtn").disabled = false;
        document.getElementById("delBtn").disabled = false;
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("editBtn").disabled = false;
    }


}
employee = new Employee();

class AddEmployee {
    constructor() {

    }
    setDefaultValues() {
        let today = new Date();
        let month = today.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let date = today.getFullYear() + '-' + month + '-' + today.getDate();
        //alert(date);

        document.getElementById("myDate").defaultValue = date;

    }

    validateForm() {
        alert(1);
        let name = document.forms["registerform"]["name"].value;
        let psNo = document.forms["registerform"]["ps_no"].value;
        let dob = document.forms["registerform"]["dob"].value;
        let email = document.forms["registerform"]["email"].value;
        let dateOfFilling = document.forms["registerform"]["date"].value;
        let gender = document.forms["registerform"]["gender"].value;
        let designation = document.forms["registerform"]["designation"].value;
        let experience = document.forms["registerform"]["experience"].value;
    }



}
addEmployee = new AddEmployee();

class ViewEmployee {
    constructor() {

    }
    name = ""

    viewEmployeeDetails() {
        name = document.getElementById("nameAutoComplete").value;
        if (name == "") {
            alert("Please enter the name");
        } else {
            let currentEmployee = employeeResponse.filter(this.getEmployeeByName);
            if (currentEmployee.length == 0) {
                alert("Enter the valid employee name");
            } else {
                employee.openAddEmpDialog();
                debugger
                document.getElementById("name").value = currentEmployee[0].name;
                document.getElementById("ps_no").value = currentEmployee[0].ps_no;
                document.getElementById("dob").value = currentEmployee[0].dob;
                document.getElementById("email").value = currentEmployee[0].email;
                document.getElementById("dateOfFilling").value = currentEmployee[0].dateOfFilling;
                document.getElementById("gender").value = currentEmployee[0].gender;
                document.getElementById("designation").value = currentEmployee[0].designation;
                document.getElementById("experience").value = currentEmployee[0].experience;
            }
        }
        document.getElementById("nameAutoComplete").value = "";
    }

    getEmployeeByName(employee) {
        return name == employee.name;
    }

}
viewEmployee = new ViewEmployee();