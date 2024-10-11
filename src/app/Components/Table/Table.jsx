import { Search } from "../svgs";

const employeeData = [
  {
    fullName: "Eleanor Pena",
    employeeId: "9261456",
    userId: "tanya.hil",
    hireDate: "8/21/15",
    event: "New Hire",
    position: "Medical Assistant",
    netSalary: "5,50,000",
    imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    fullName: "Albert Flores",
    employeeId: "4152764",
    userId: "michael123",
    hireDate: "5/27/15",
    event: "Transfer",
    position: "UI/UX Designer",
    netSalary: "19,000",
    imageUrl: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    fullName: "Arlene McCoy",
    employeeId: "5626082",
    userId: "lawson",
    hireDate: "8/16/13",
    event: "Re-Hire",
    position: "Dog Trainer",
    netSalary: "90,000",
    imageUrl: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    fullName: "Esther Howard",
    employeeId: "5021368",
    userId: "alma.@",
    hireDate: "1/28/17",
    event: "New Hire",
    position: "President of Sales",
    netSalary: "15,000",
    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    fullName: "Marvin McKinney",
    employeeId: "6690725",
    userId: "debra.holt",
    hireDate: "9/23/16",
    event: "Termination",
    position: "Web Designer",
    netSalary: "1,03,000",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export function Table() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h1>Employees</h1>
        <form className="w-96 px-4">
          <div className="relative">
            <div className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3">
              <Search />
            </div>
            <input
              type="text"
              placeholder="Search by Emplye name & Id"
              className="w-full py-3 pl-12 pr-4 text-gray-500 rounded-xl  border-gray-500 bg-gray-50 focus:bg-white focus:border-gray-50"
            />
          </div>
        </form>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left bg-gray-200">
            <th> </th>
            <th className="p-2">Full Name</th>
            <th className="p-2">Employee ID</th>
            <th className="p-2">User ID</th>
            <th className="p-2">Hire Date</th>
            <th className="p-2">Event</th>
            <th className="p-2">Position</th>
            <th className="p-2">Net Salary</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">
                <img
                  src={employee.imageUrl}
                  alt={employee.fullName}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="p-2">{employee.fullName}</td>
              <td className="p-2">{employee.employeeId}</td>
              <td className="p-2">{employee.userId}</td>
              <td className="p-2">{employee.hireDate}</td>
              <td className="p-2">{employee.event}</td>
              <td className="p-2">{employee.position}</td>
              <td className="p-2">{employee.netSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
