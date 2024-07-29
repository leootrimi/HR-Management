import React, { useState } from 'react';
import { groupByRole, getMetrics } from '../utils/employer'
import './Employers.css';

const employees = [
    { id: 1, name: 'Rebecca Fox', username: '@rebecca', role: 'CEO', img: 'https://www.prepareforcanada.com/wp-content/uploads/Copy-of-Copy-of-Canadian-Style-Resume-and-Interview.png' },
    { id: 2, name: 'Stanis Ryle', username: '@stanis', role: 'HR Manager', img: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Brian Lord', username: '@brian', role: 'Finance Manager', img: 'https://www.corporatephotographerslondon.com/wp-content/uploads/2022/02/FRA-1699dark-sq.jpg' },
    { id: 4, name: 'Diane Hall', username: '@diane', role: 'Social Media Manager', img: 'https://via.placeholder.com/50' },
    { id: 5, name: 'Marie Goodwin', username: '@marie', role: 'Accountant', img: 'https://via.placeholder.com/50' },
    { id: 6, name: 'Taylor Hardy', username: '@taylor', role: 'Marketing Manager', img: 'https://www.prepareforcanada.com/wp-content/uploads/Copy-of-Copy-of-Canadian-Style-Resume-and-Interview.png' },
    { id: 7, name: 'Sofia Reynolds', username: '@sofia', role: 'Community Officer', img: 'https://via.placeholder.com/50' },
    { id: 8, name: 'Gabriel Allen', username: '@gabriel', role: 'Support', img: 'https://i.pinimg.com/736x/f8/66/8e/f8668e5328cfb4938903406948383cf6.jpg' },
    { id: 9, name: 'Benjamin Hunter', username: '@benjamin', role: 'Research Analyst', img: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc' },
    { id: 10, name: 'Edward Crawford', username: '@edward', role: 'Business Consultant', img: 'https://via.placeholder.com/50' },
    { id: 11, name: 'Amber Foster', username: '@amber', role: 'Support', img: 'https://via.placeholder.com/50' }
];


const Employers = () => {
    const [filterRole, setFilterRole] = useState('');
    const [filterName, setFilterName] = useState('');

    const handleRoleChange = (event) => {
        setFilterRole(event.target.value);
    };

    const handleNameChange = (event) => {
        setFilterName(event.target.value);
    };

    const filteredEmployees = employees.filter(employee => {
        return (
            (filterRole === '' || employee.role === filterRole) &&
            (filterName === '' || employee.name.toLowerCase().includes(filterName.toLowerCase()))
        );
    });

    const groupedEmployees = groupByRole(filteredEmployees);
    const { totalEmployees, activeEmployees, supportEmployees } = getMetrics(employees);

    return (
        <div className="employers-management">

            {/* Metrics Section */}
            <div className="metrics">
                <div className="metric-box">
                    <h3>Total Employees</h3>
                    <p>{totalEmployees}</p>
                </div>
                <div className="metric-box">
                    <h3>Active Employees</h3>
                    <p>{activeEmployees}</p>
                </div>
                <div className="metric-box">
                    <h3>Support Employees</h3>
                    <p>{supportEmployees}</p>
                </div>
                <div className="metric-box">
                    <h3>Unique Roles</h3>
                    <p>{Object.keys(groupedEmployees).length}</p>
                </div>
            </div>

            <div className="filter-bar">
                <select value={filterRole} onChange={handleRoleChange}>
                    <option value="">All Roles</option>
                    <option value="CEO">CEO</option>
                    <option value="HR Manager">HR Manager</option>
                    <option value="Finance Manager">Finance Manager</option>
                    <option value="Social Media Manager">Social Media Manager</option>
                    <option value="Accountant">Accountant</option>
                    <option value="Marketing Manager">Marketing Manager</option>
                    <option value="Community Officer">Community Officer</option>
                    <option value="Support">Support</option>
                    <option value="Research Analyst">Research Analyst</option>
                    <option value="Business Consultant">Business Consultant</option>
                </select>
                <input
                    type="text"
                    placeholder="Search by name"
                    value={filterName}
                    onChange={handleNameChange}
                />
               <a href='/admin/add'> <button className="add-user-btn">Add User</button></a>
            </div>
            {Object.keys(groupedEmployees).map((role) => (
                <div key={role} className="role-section">
                    <h3>{role}</h3>
                    <div className="employers-list">
                        {groupedEmployees[role].map(employee => (
                            <div key={employee.id} className="employer-card">
                                <img src={employee.img} alt={employee.name} />
                                <div className="employer-details">
                                    <h3>{employee.name}</h3>
                                    <p>{employee.username}</p>
                                    <p>{employee.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Employers;