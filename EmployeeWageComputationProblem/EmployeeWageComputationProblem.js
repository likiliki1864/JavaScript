console.log("Welcome to EmployeeWage Computation");

const WagePerHour=20;
const FullDayHour=8;
const PartTimeHour=8;

let Attendance = ()=>{if(Math.random()>=0.5){
                        console.log("Employee Present");
                        return true;
                        }           
                    else{
                        console.log("Employee Absent");
                        return false;
                        }
                    }

Attendance();

let EmployeeType = ()=>{

    if(Math.random()>=0.5)
        return "fullTimeEmployee";         
    else
        return "partTimeEmployee";

}

switch(EmployeeType()){

    case "fullTimeEmployee" : console.log("Full Time Employee");
                            break;
    case "partTimeEmployee" : console.log("Part Time Employee");
                            break;                        

}



