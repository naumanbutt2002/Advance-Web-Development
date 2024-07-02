import React from 'react'

function Content() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 bg-gray-200 p-4">
        <div id="leftContent" className="section">
          <h2 className="text-lg font-bold mb-2">Professional Skills</h2>
          <ol className="list-decimal pl-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJs</li>
            <li>NodeJs</li>
            <li>MongoDb</li>
            <li>Express JS</li>
            <li>MS SQL</li>
            <li>Kotlin / Jetpack Compose</li>

          </ol>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4">
        <div id="mainContent" className="section">
          <h2 className="text-lg font-bold mb-2">Educational History</h2>
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Degree Title</th>
                <th className="border p-2">Passing Year</th>
                <th className="border p-2">Total Marks</th>
                <th className="border p-2">Obtained Marks</th>
                <th className="border p-2">Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2">Bachelor's in Computer Science</td>
                <td className="border p-2">2024</td>
                <td className="border p-2">4</td>
                <td className="border p-2">3.49</td>
                <td className="border p-2">90%</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="border p-2">2</td>
                <td className="border p-2">FSc Pre Engineering</td>
                <td className="border p-2">2018</td>
                <td className="border p-2">1100</td>
                <td className="border p-2">836</td>
                <td className="border p-2">75%</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="border p-2">3</td>
                <td className="border p-2">Matriculation</td>
                <td className="border p-2">2016</td>
                <td className="border p-2">1100</td>
                <td className="border p-2">994</td>
                <td className="border p-2">90%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="hobbies" className="section">
          <h2 className="text-lg font-bold mb-2">Hobbies</h2>
          <ul className="list-disc pl-4">
            <li>Cricket</li>
            <li>Poetry</li>
          </ul>
        </div>

        <div id="life-ambitions" className="section">
          <h2 className="text-lg font-bold mb-2">Life Ambitions</h2>
          <ul className="list-disc pl-4">
            <li><strong>Achieved:</strong>
              <ul className="list-disc pl-4">
                <li>Make Goood Friends</li>
                <li>BS Computer Science</li>
                <li>Entrpreneurship</li>
                <li>Start Exercising</li>
              </ul>
            </li>
            <li><strong>Struggling:</strong>
              <ul className="list-disc pl-4">
                <li>Build a career</li>
                <li>Be financially independent</li>
                <li>Travelling and Learning</li>
              </ul>
            </li>
          </ul>
        </div>

        <div id="efforts-for-country" className="section">
          <h2 className="text-lg font-bold mb-2">Efforts for Country</h2>
          <ul className="list-disc pl-4">
            <li><strong>Succeeded:</strong>
              <ul className="list-disc pl-4">
                <li>HCS Tech Team</li>
                <li>SIMBOT Startup</li>
              </ul>
            </li>
            <li><strong>Struggling:</strong>
              <ul className="list-disc pl-4">
                <li>Supporting Education initiatives</li>
                <li>Making Good Communication Skill</li>
                <li>Raising awareness about social evils</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Container */}
      <div className="w-full md:w-1/4 p-4 bg-gray-200">
        <div id="rightContent" className="section">
          <h2 className="text-lg font-bold mb-2">Professional Projects</h2>
          <ol className="list-decimal pl-4">
            <li>MERN Authentication</li>  
            <li>Load Balancing using Neural Network</li>
            <li>POS Desktop App</li>
            <li>ArtSpace App</li>
          
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Content
