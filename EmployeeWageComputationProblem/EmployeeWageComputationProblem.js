console.log("\t\t\t Welcome to EmployeeWage Computation");
console.log("--------------------------------------------------------------------------------------------");

const WagePerHour=20;
const FullDayHour=8;
const PartTimeHour=8;

let DailyWages = 20 * 8;

let Attendance = ()=>{if(Math.random()>=0.5){
                        return true;
                        }           
                    else{
                        return false;
                        }
                    }

if(Attendance()){
    console.log("\nEmployee : Present \n");
}
else{
    console.log("\nEmployee : Absent \n");
}

let EmployeeType = ()=>{

    if(Math.random()>=0.5)
        return "fullTimeEmployee";         
    else
        return "partTimeEmployee";

}

switch(EmployeeType()){

    case "fullTimeEmployee" : console.log("Employee Type : Full Time Employee\n");
                              console.log(`Daily Wages  : ${DailyWages}\n`);
                              console.log(`Montly Wages : ${wagesForMonth()}`);
                            break;
    case "partTimeEmployee" : console.log("Employee Type : Part Time Employee\n");
                              console.log(`Daily Wages  : ${DailyWages}\n`);
                              console.log(`Montly Wages : ${wagesForMonth()}`);
                            break;                        

}