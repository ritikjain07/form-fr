import React, { useState } from "react";
import collegeLogo from './manipal-university-jaipur-logo.svg'; // Make sure to have a logo image in your project
import EventPrintView from "./EventPrintView.jsx"; // Updated import statement

function EventForm() {
  const [guests, setGuests] = useState([{ name: "", designation: "", organization: "", contact: "" }]);
  const [photos, setPhotos] = useState([{ file: null, caption: "" }]);
  const [brochure, setBrochure] = useState(null);
  const [schedule, setSchedule] = useState(null);
  const [eventData, setEventData] = useState({
    faculty: "",
    school: "",
    department: "",
    eventName: "",
    eventType: "",
    eventDate: "",
    introduction: "",
    objective: "",
    beneficiaries: "",
    guests: [],
    description: "",
    photos: [],
    brochure: null,
    schedule: null,
    finalRemarks: "",
    collegeLogo: collegeLogo
  });

  const handlePrint = (event) => {
    event.preventDefault();
    const printWindow = window.open("", "_blank");
    printWindow.document.write("<html><head><title>Print Event Report</title></head><body>");
    printWindow.document.write("<div id='print-content'>");
    printWindow.document.write(document.getElementById("print-area").innerHTML);
    printWindow.document.write("</div>");
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  const handleGuestChange = (index, event) => {
    const newGuests = [...guests];
    newGuests[index][event.target.name] = event.target.value;
    setGuests(newGuests);
    setEventData({ ...eventData, guests: newGuests });
  };

  const addGuest = () => {
    const newGuests = [...guests, { name: "", designation: "", organization: "", contact: "" }];
    setGuests(newGuests);
    setEventData({ ...eventData, guests: newGuests });
  };

  const removeGuest = (index) => {
    const newGuests = guests.filter((_, i) => i !== index);
    setGuests(newGuests);
    setEventData({ ...eventData, guests: newGuests });
  };

  const handlePhotoChange = (index, event) => {
    const newPhotos = [...photos];
    if (event.target.name === "file") {
      newPhotos[index][event.target.name] = event.target.files[0];
    } else {
      newPhotos[index][event.target.name] = event.target.value;
    }
    setPhotos(newPhotos);
    setEventData({ ...eventData, photos: newPhotos });
  };

  const addPhoto = () => {
    const newPhotos = [...photos, { file: null, caption: "" }];
    setPhotos(newPhotos);
    setEventData({ ...eventData, photos: newPhotos });
  };

  const removePhoto = (index) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);
    setEventData({ ...eventData, photos: newPhotos });
  };

  const handleBrochureChange = (event) => {
    setBrochure(event.target.files[0]);
    setEventData({ ...eventData, brochure: event.target.files[0] });
  };

  const handleScheduleChange = (event) => {
    setSchedule(event.target.files[0]);
    setEventData({ ...eventData, schedule: event.target.files[0] });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEventData({ ...eventData, [name]: value });
  };

  return (
    <main className="container mx-auto p-4">
      <div className="text-center mb-6">
        <img src={collegeLogo} alt="College Logo" className="mx-auto w-24 h-24" />
        <h1 className="text-3xl font-bold mt-4">Manipal University Jaipur</h1>
        <h2 className="text-xl mt-2">Event Report Form</h2>
      </div>
      <form id="eventReportForm" className="bg-white shadow-md rounded-lg p-6" onSubmit={handlePrint}>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Introduction of the Event</h2>
          <div className="p-4 border rounded-lg bg-gray-50">
            <textarea
              name="introduction"
              value={eventData.introduction}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              rows="4"
              placeholder="Please give an introduction of the event – what is the event about, how it's going to help the stakeholders and MUJ."
            ></textarea>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Objective of the Event</h2>
          <div className="p-4 border rounded-lg bg-gray-50">
            <textarea
              name="objective"
              value={eventData.objective}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              rows="2"
              placeholder="Please include at least one objective that how this event is mapped with one of the SDG."
            ></textarea>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Beneficiaries of the Event</h2>
          <div className="p-4 border rounded-lg bg-gray-50">
            <textarea
              name="beneficiaries"
              value={eventData.beneficiaries}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              rows="2"
              placeholder="Student/Faculty/Community etc."
            ></textarea>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Details of the Guests</h2>
          <div className="p-4 border rounded-lg bg-gray-50">
            {guests.map((guest, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={guest.name}
                  onChange={(e) => handleGuestChange(index, e)}
                  className="w-full p-2 mb-2 border rounded-lg"
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="designation"
                  value={guest.designation}
                  onChange={(e) => handleGuestChange(index, e)}
                  className="w-full p-2 mb-2 border rounded-lg"
                  placeholder="Designation"
                />
                <input
                  type="text"
                  name="organization"
                  value={guest.organization}
                  onChange={(e) => handleGuestChange(index, e)}
                  className="w-full p-2 mb-2 border rounded-lg"
                  placeholder="Organization"
                />
                <input
                  type="text"
                  name="contact"
                  value={guest.contact}
                  onChange={(e) => handleGuestChange(index, e)}
                  className="w-full p-2 mb-2 border rounded-lg"
                  placeholder="Contact Details"
                />
                <button
                  type="button"
                  onClick={() => removeGuest(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addGuest}
              className="mt-2 p-2 bg-blue-500 text-white rounded-lg"
            >
              Add Guest
            </button>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Brief Description of the Event</h2>
          <div className="p-4 border rounded-lg bg-gray-50">
            <textarea
              name="description"
              value={eventData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              rows="6"
              placeholder="About 200 words."
            ></textarea>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Photographs</h2>
          <div className="p-4 border rounded-lg bg-gray-50">
            <p>3 to 5 geotagged photographs of the event or screenshots of the event (if online) with captions.</p>
            {photos.map((photo, index) => (
              <div key={index} className="mb-4">
                <input
                  type="file"
                  name="file"
                  onChange={(e) => handlePhotoChange(index, e)}
                  className="w-full p-2 mb-2 border rounded-lg"
                />
                <input
                  type="text"
                  name="caption"
                  value={photo.caption}
                  onChange={(e) => handlePhotoChange(index, e)}
                  className="w-full p-2 mb-2 border rounded-lg"
                  placeholder="Caption"
                />
                <button
                  type="button"
                  onClick={() => removePhoto(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addPhoto}
              className="mt-2 p-2 bg-blue-500 text-white rounded-lg"
            >
              Add Photo
            </button>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Brochure or Creative of the Event</h2>
          <div className="p-4 border rounded-lg bg-gray-50">
            <p>Please attach a proper brochure with good resolution where one can find all the details clearly. Please avoid blur and stretched images.</p>
            <input
              type="file"
              onChange={handleBrochureChange}
              className="w-full p-2 mb-2 border rounded-lg"
            />
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Schedule of the Event</h2>
          <div className="p-4 border rounded-lg bg-gray-50">
            <input
              type="file"
              onChange={handleScheduleChange}
              className="w-full p-2 mb-2 border rounded-lg"
            />
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Final Remarks by the Team Leader</h2>
          <div className="p-4 border rounded-lg bg-gray-50">
            <textarea
              name="finalRemarks"
              value={eventData.finalRemarks}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              rows="4"
              placeholder="Final remarks content"
            ></textarea>
          </div>
        </section>

        <section className="flex flex-col md:flex-row justify-between mt-6">
          <div className="text-center mb-4 md:mb-0">
            <p className="font-semibold">Signature of the Event Coordinator</p>
            <div className="border-t mt-2"></div>
          </div>
          <div className="text-center">
            <p className="font-semibold">Signature of the Team Leader</p>
            <p>(Event Management Unit)</p>
            <div className="border-t mt-2"></div>
          </div>
        </section>

        <button type="submit" className="mt-4 p-2 bg-green-500 text-white rounded-lg">
          Submit
        </button>
      </form>

      <div id="print-area" style={{ display: "none" }}>
        <EventPrintView eventData={eventData} />
      </div>
    </main>
  );
}

export default EventForm;