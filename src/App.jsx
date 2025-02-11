import React from "react";
import EventForm from "./form.jsx";
import "./index.css";

function App() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen w-full">
      <header className="bg-teal-100 text-2xl flex justify-center text-center w-full p-4">
        {/* <h1 className="text-2xl font-bold">Event Form</h1> */}
      </header>
      <div className="p-4">
        <EventForm />
      </div>
    </div>
  );
}

export default App;