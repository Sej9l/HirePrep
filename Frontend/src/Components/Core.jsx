import "./Core.css";

const Core = () => {
  return (
    <div className="core-container">
      <h2>Core Subjects Resources</h2>
      <div className="grid">
        {/* DBMS Card */}
        <div className="card">
          <h3>DBMS</h3>
          <div className="buttons">
            <a href="https://drive.google.com/file/d/1y3KKghRhQjKfbWhvLipMOCCemKd_XdTm/view" target="_blank" rel="noopener noreferrer" className="btn">
              <img src="/public/notes.jpg" alt="Notes" className="icon"/>
            </a>   
            <a href="https://www.youtube.com/watch?v=eYpXCdvKwEQ&list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU" target="_blank" rel="noopener noreferrer" className="btn">
              <img src="/public/video.png" alt="Video" className="icon" />
            </a>
          </div>
        </div>

        {/* Operating System Card */}
        <div className="card">
          <h3>Operating System</h3>
          <div className="buttons">
            <a href="https://drive.google.com/file/d/1kksqpGT_YBQsFwsyVyftikPRP-sZZF-e/view" target="_blank" rel="noopener noreferrer" className="btn">
              <img src="/public/notes.jpg" alt="Notes" className="icon" />
            
            </a>
            <a href="https://www.youtube.com/watch?v=a1l4MceYHaQ&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG&index=2" target="_blank" rel="noopener noreferrer" className="btn">
              <img src="/public/video.png" alt="Video" className="icon" />
               
            </a>
          </div>
        </div>
        {/* SQL Card */}
        <div className="card">
          <h3>SQL</h3>
          <div className="buttons">
            <a href="https://www.geeksforgeeks.org/sql-tutorial/" target="_blank" rel="noopener noreferrer" className="btn">
              <img src="/public/notes.jpg" alt="Notes" className="icon" />
            </a>
            <a href="https://leetcode.com/studyplan/top-sql-50/" target="_blank" rel="noopener noreferrer" className="btn">
            <img src="/public/leetcode.jpg" alt="Notes" className="icon" />  
            </a>
          </div>
          <p>SQL Notes & Practice Problems</p>
        </div>


        {/* OOPS Card */}
        <div className="card">
          <h3>OOPS</h3>
          <div className="buttons">
            <a href="https://drive.google.com/drive/folders/1XGI3YnWEviwJ3MryCH2f7dhlN9tnYTzh" target="_blank" rel="noopener noreferrer" className="btn">
               <img src="/public/notes.jpg" alt="Notes" className="icon" />
               
            </a>
            <a href="https://www.youtube.com/watch?v=mlIUKyZIUUU" target="_blank" rel="noopener noreferrer" className="btn">
              <img src="/public/video.png" alt="Video" className="icon" />
              
            </a>
          </div>
        </div>
        
                {/* Computer Networks Card */}
                <div className="card">
          <h3>Computer Networks</h3>
          <div className="buttons">
            <a href="https://drive.google.com/drive/folders/1XGI3YnWEviwJ3MryCH2f7dhlN9tnYTzh" target="_blank" rel="noopener noreferrer" className="btn">
              <img src="/public/notes.jpg" alt="Notes" className="icon" />
              
            </a>   
          </div>
        </div>

        {/* 150 Sheet of Question  */}
        <div className="card">
          <h3>150 DSA Question</h3>
          <div className="buttons">
            <a href="https://leetcode.com/studyplan/top-interview-150/" target="_blank" rel="noopener noreferrer" className="btn">
            <img src="/public/leetcode.jpg" alt="Notes" className="icon" />  
            </a>
          </div>
        </div>
        

      </div>
    </div>
  );
};

export default Core;
