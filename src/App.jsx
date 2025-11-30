import React from "react";
import FamilyTree from "./components/FamilyTree.jsx";
import familyData from "./data/familyData";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Family Tree</h1>
      <h2 style={{ textAlign: "center", marginBottom: "-15px" }}>
        ওয়াহেদ আলী সিকদার
      </h2>
      <h3 style={{ textAlign: "center", marginBottom: "-15px" }}>
        পিতা: সাদেক আলী সিকদার <br /> মাতা: অজানা,
      </h3>

      <h3 style={{ textAlign: "center", marginBottom: "-15px" }}>
        ওয়াহেদ আলী সিকদার, ইয়াজর পাড়া, দক্ষিণ মাদার্শা
      </h3>
      <h3 style={{ textAlign: "center" }}>সাতকানিয়া, চট্টগ্রাম, বাংলাদেশ।</h3>
      <FamilyTree data={familyData} />
    </div>
  );
}

export default App;
