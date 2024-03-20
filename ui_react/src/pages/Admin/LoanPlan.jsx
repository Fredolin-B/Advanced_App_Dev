import React, { useState } from 'react';

const LoanPlan = () => {
  const [loanPlan, setLoanPlan] = useState({
    loanName: '',
    duration: '',
    age: '',
    familyMembers: [{ name: '', contact: '' }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanPlan({
      ...loanPlan,
      [name]: value,
    });
  };

  const handleFamilyMemberChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFamilyMembers = [...loanPlan.familyMembers];
    updatedFamilyMembers[index][name] = value;
    setLoanPlan({
      ...loanPlan,
      familyMembers: updatedFamilyMembers,
    });
  };

  const addFamilyMember = () => {
    setLoanPlan({
      ...loanPlan,
      familyMembers: [...loanPlan.familyMembers, { name: '', contact: '' }],
    });
  };

  const removeFamilyMember = (index) => {
    const updatedFamilyMembers = [...loanPlan.familyMembers];
    updatedFamilyMembers.splice(index, 1);
    setLoanPlan({
      ...loanPlan,
      familyMembers: updatedFamilyMembers,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend or perform validation
    console.log(loanPlan);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-400 to-yellow-300">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-bold mb-4">Add Loan Plan</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="loanName" className="block text-gray-700 font-bold mb-2">
              Loan Name
            </label>
            <input
              type="text"
              id="loanName"
              name="loanName"
              value={loanPlan.loanName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="duration" className="block text-gray-700 font-bold mb-2">
              Duration (in months)
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={loanPlan.duration}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={loanPlan.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Family Members</label>
            {loanPlan.familyMembers.map((familyMember, index) => (
              <div key={index} className="flex items-center space-x-4">
                <input
                  type="text"
                  name="name"
                  value={familyMember.name}
                  onChange={(e) => handleFamilyMemberChange(index, e)}
                  placeholder="Name"
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                  required
                />
                <input
                  type="text"
                  name="contact"
                  value={familyMember.contact}
                  onChange={(e) => handleFamilyMemberChange(index, e)}
                  placeholder="Contact"
                  className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => removeFamilyMember(index)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addFamilyMember}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
            >
              Add Family Member
            </button>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanPlan;
