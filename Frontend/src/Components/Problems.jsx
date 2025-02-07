import React, { useState, useEffect } from "react";
import questionsData from "./450Questions.json"; // Import the JSON file
import './Problems.css'

const Problems = () => {
  const [problemsList, setProblemsList] = useState([]);

  useEffect(() => {
    // Load the questions from JSON
    setProblemsList(questionsData);
  }, []);

  const toggleSolved = (id) => {
    setProblemsList((prevProblems) =>
      prevProblems.map((problem) =>
        problem.id === id ? { ...problem, solved: !problem.solved } : problem
      )
    );
  };

  return (
    <div className="problems-container">
      <h2 className="title">450 DSA Questions</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Topic</th>
              <th>Problem</th>
              <th>Link</th>
              <th>Mark/Unmark</th>
            </tr>
          </thead>
          <tbody>
            {problemsList.map((problem) => (
              <tr key={problem.id}>
                <td>{problem.id}</td>
                <td>{problem.topic}</td>
                <td>{problem.question}</td>
                <td>
                  <a href={problem.link} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                </td>
                <td>
                  <button
                    className={problem.solved ? "solved" : "unsolved"}
                    onClick={() => toggleSolved(problem.id)}
                  >
                    {problem.solved ? "Solved" : "Unsolved"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Problems;
