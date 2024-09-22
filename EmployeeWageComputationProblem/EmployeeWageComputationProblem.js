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

let wagesForMonth = ()=>{

    let TotalWages = 0;
    let workingDays = 0;
    let workingHours = 0;
    /* for(let i=1; i<=20; i++){
        if(Attendance()==true){
            TotalWages+= DailyWages;
        }
    } */
        while(workingDays <= 20 && workingHours < 100) {
            workingDays++;
            if (Attendance()) {
                workingHours += 8;
                TotalWages += 160;
            }
        }


    return TotalWages;

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