class EmployeeWageComputation {
    WagePerHour = 20;
    FullDayHour = 8;
    PartTimeHour = 8;
    DailyWages = this.WagePerHour * 8;
    Attendance = () => {
        return Math.random() >= 0.5;
    }

    EmployeeType = () => {
        return Math.random() >= 0.5 ? "fullTimeEmployee" : "partTimeEmployee";
    }
    WagesForMonth = () => {
        let TotalWages = 0;
        let workingDays = 0;
        let workingHours = 0;

        while (workingDays <= 20 && workingHours < 100) {
            workingDays++;
            if (this.Attendance()) {
                workingHours += 8;
                TotalWages += this.DailyWages;
            }
        }
        return TotalWages;
    }
    Display = () => {
        console.log("\t\t\t Welcome to Employee Wage Computation");
        console.log("--------------------------------------------------------------------------------------------");

        if (this.Attendance()) {
            console.log("\nEmployee       : Present \n");
        } else {
            console.log("\nEmployee       : Absent \n");
        }

        const employeeType = this.EmployeeType();
        switch (employeeType) {
            case "fullTimeEmployee":
                console.log("Employee Type  : Full Time Employee\n");
                console.log(`Daily Wage     : ${this.DailyWages}\n`);
                console.log(`Monthly Wages  : ${this.WagesForMonth()}`);
                break;
            case "partTimeEmployee":
                console.log("Employee Type  : Part Time Employee\n");
                console.log(`Daily Wage     : ${this.DailyWages}\n`);
                console.log(`Monthly Wages  : ${this.WagesForMonth()}`);
                break;
        }
    }
}
new EmployeeWageComputation().Display();

