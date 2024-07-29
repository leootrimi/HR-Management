// utils.js

export const groupByRole = (employees) => {
    return employees.reduce((groups, employee) => {
        const role = employee.role;
        if (!groups[role]) {
            groups[role] = [];
        }
        groups[role].push(employee);
        return groups;
    }, {});
};

export const getMetrics = (employees) => {
    const totalEmployees = employees.length;
    const activeEmployees = employees.filter(employee => employee.role !== 'Support').length;
    const supportEmployees = employees.filter(employee => employee.role === 'Support').length;
    
    return { totalEmployees, activeEmployees, supportEmployees };
};
