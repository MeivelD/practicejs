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
        document.getElementById("dob").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("gender").disabled = true;
        document.getElementById("designation").disabled = true;
        document.getElementById("experience").disabled = true;
        document.getElementById("resetBtn").disabled = true;
        document.getElementById("delBtn").disabled = false;
        document.getElementById("updateBtn").disabled = true;
    }

    enableEmployeeCtrls() {
        document.getElementById("name").disabled = false;
        document.getElementById("dob").disabled = false;
        document.getElementById("email").disabled = false;
        document.getElementById("gender").disabled = false;
        document.getElementById("designation").disabled = false;
        document.getElementById("experience").disabled = false;
        document.getElementById("resetBtn").disabled = false;
        document.getElementById("delBtn").disabled = false;
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("updateBtn").disabled = false;
    }

    clearEmployeeCtrls() {
        document.getElementById("name").value = "";
        document.getElementById("ps_no").value = "";
        document.getElementById("dob").value = "";
        document.getElementById("email").value = "";
        document.getElementById("gender").value = "female";
        document.getElementById("designation").value = "";
        document.getElementById("experience").value = "";
        addEmployee.setDefaultValues();
    }

    submitEmployeeDetails() {
        let employeeData = {
            "name": document.getElementById("name").value,
            "ps_no": document.getElementById("ps_no").value,
            "dob": document.getElementById("dob").value,
            "email": document.getElementById("email").value,
            "dateOfFilling": document.getElementById("dateOfFilling").value,
            "gender": document.getElementById("gender").value,
            "designation": document.getElementById("designation").value,
            "experience": document.getElementById("experience").value
        };


        let duplicateEmployee = this.checkDuplicatePsno(employeeData);
        if (duplicateEmployee) {
            alert("PS_NO Already Exist");
        } else {
            employeeResponse.push(employeeData);
            this.closeAddEmpDialog();
            alert("Submitted Successfully");

        }
    }
    checkDuplicatePsno(employee) {
        for (let i = 0; i < employeeResponse.length; i++) {
            if (employeeResponse[i].ps_no == employee.ps_no) {
                return true;
            }
        }
        return false;
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
        document.getElementById("dateOfFilling").defaultValue = date;

    }

    validateForm() {

        let name = document.forms["registerform"]["name"].value;
        let psNo = document.forms["registerform"]["ps_no"].value;
        let dob = document.forms["registerform"]["dob"].value;
        let email = document.forms["registerform"]["email"].value;
        let dateOfFilling = document.forms["registerform"]["date"].value;
        let gender = document.forms["registerform"]["gender"].value;
        let designation = document.forms["registerform"]["designation"].value;
        let experience = document.forms["registerform"]["experience"].value;
    }

    enableAddBtnCtrls() {
        document.getElementById("submitBtn").style.display = "block";
        document.getElementById("editBtn").style.display = "none";
        document.getElementById("delBtn").style.display = "none";
        document.getElementById("updateBtn").style.display = "none";
        document.getElementById("ps_no").disabled = false;
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

    enableViewBtnCtrls() {
        document.getElementById("delBtn").style.display = "block";
        document.getElementById("editBtn").style.display = "block";
        document.getElementById("updateBtn").style.display = "block";
        document.getElementById("submitBtn").style.display = "none";
        document.getElementById("ps_no").disabled = true;

    }

    deleteEmployeeDetails() {
        let employeeData = {
            "name": document.getElementById("name").value,
            "ps_no": document.getElementById("ps_no").value,
            "dob": document.getElementById("dob").value,
            "email": document.getElementById("email").value,
            "dateOfFilling": document.getElementById("dateOfFilling").value,
            "gender": document.getElementById("gender").value,
            "designation": document.getElementById("designation").value,
            "experience": document.getElementById("experience").value
        };
        let deleteEmployeeIndex;

        for (let i = 0; i < employeeResponse.length; i++) {

            if (employeeResponse[i].ps_no == employeeData.ps_no) {
                deleteEmployeeIndex = i;
            }
        }
        employeeResponse.splice(deleteEmployeeIndex, 1);
        employee.closeAddEmpDialog();
        alert("Deleted successfully...!");
    }
    updateEmployeeDetails() {
        let updateEmployeeData = {
            "name": document.getElementById("name").value,
            "ps_no": document.getElementById("ps_no").value,
            "dob": document.getElementById("dob").value,
            "email": document.getElementById("email").value,
            "dateOfFilling": document.getElementById("dateOfFilling").value,
            "gender": document.getElementById("gender").value,
            "designation": document.getElementById("designation").value,
            "experience": document.getElementById("experience").value
        };
        for (let i = 0; i < employeeResponse.length; i++) {

            if (employeeResponse[i].ps_no == updateEmployeeData.ps_no) {
                employeeResponse[i].name = updateEmployeeData.name;
                employeeResponse[i].ps_no = updateEmployeeData.ps_no;
                employeeResponse[i].dob = updateEmployeeData.dob;
                employeeResponse[i].email = updateEmployeeData.email;
                employeeResponse[i].dateOfFilling = updateEmployeeData.dateOfFilling;
                employeeResponse[i].gender = updateEmployeeData.gender;
                employeeResponse[i].designation = updateEmployeeData.designation;
                employeeResponse[i].experience = updateEmployeeData.experience;
            }
        }
        employee.closeAddEmpDialog();
        alert("Updated successfully...!");
    }

}
viewEmployee = new ViewEmployee();