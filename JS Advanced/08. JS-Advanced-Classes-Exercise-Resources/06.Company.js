class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(...elements) {
        const [name, salary, position, department] = elements;

        let isTrue = elements.some(x => (x === undefined || x === "" || x === null) || x < 0);
        if (isTrue) {
            throw new Error("Invalid input!");
        }

        const employee = this.crateObj(department);
        employee.employees.push(name);
        employee.salaries.push(salary);
        employee.positions.push(position);
        return `New employee is hired. Name: ${name}. Position: ${position}`

    }
    getSalariesSum(depart) {
        return depart.salaries.reduce((a, v) => a + v, 0);
    }

    crateObj(name) {
        let checkingDepart = this.departments.find(el => el.name === name);

        if (!checkingDepart) {
            const empObj = {
                name,
                employees: [],
                salaries: [],
                positions: []
            };
            this.departments.push(empObj);
            return empObj;
        }
        return checkingDepart;
    }

    bestSalaryDepart() {
        return this.departments.sort(
            (a, b) =>
            this.getSalariesSum(b) / b.salaries.length - this.getSalariesSum(a) / a.salaries.length)[0];
        }
        bestDepartment() {

        const best = this.bestSalaryDepart();

        const combinedEmployees = best.employees.reduce((a, v, i) => {
            a[i] = [];
            a[i].push(v, best.salaries[i], best.positions[i]);
            return a;
        }, []);

        const sorted = combinedEmployees.sort((a, b) => {
            return b[1] - a[1] === 0 ? a[0].localeCompare(b[0]) : b[1] - a[1];
        });

        const printData = sorted.map((x) => x.join(" ")).join("\n");

        const avgSalary = (
            this.getSalariesSum(best) / best.salaries.length
        ).toFixed(2);
        return `Best Department is: ${best.name}
  Average salary: ${avgSalary}
  ${printData}`;
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
