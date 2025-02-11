import React from "react";

const EventPrintView = ({ eventData }) => {
  return (
    <div className="print-container">
      {/* University Header */}
      <div className="text-center mb-6">
        <img src={eventData.collegeLogo} alt="College Logo" className="mx-auto w-24 h-24" />
        <h1 className="text-3xl font-bold mt-4">Manipal University Jaipur</h1>
        <h2 className="text-xl mt-2">Event Report</h2>
      </div>

      {/* Event Details */}
      <h2 className="text-lg font-semibold">Faculty: {eventData.faculty}</h2>
      <h2 className="text-lg font-semibold">School: {eventData.school}</h2>
      <h2 className="text-lg font-semibold">Department: {eventData.department}</h2>
      <h2 className="text-lg font-semibold">Event Name: {eventData.eventName}</h2>
      <h2 className="text-lg font-semibold">Nature: {eventData.eventType}</h2>
      <h2 className="text-lg font-semibold">Date: {eventData.eventDate}</h2>
      
      {/* Event Sections */}
      <section className="mb-4">
        <h3 className="font-bold text-xl">1. Introduction</h3>
        <p>{eventData.introduction}</p>
      </section>
      
      <section className="mb-4">
        <h3 className="font-bold text-xl">2. Objectives & SDG Mapping</h3>
        <p>{eventData.objective}</p>
      </section>

      <section className="mb-4">
        <h3 className="font-bold text-xl">3. Beneficiaries</h3>
        <p>{eventData.beneficiaries}</p>
      </section>

      <section className="mb-4">
        <h3 className="font-bold text-xl">4. Details of the Guests</h3>
        <ul>
          {eventData.guests.map((guest, index) => (
            <li key={index}>
              <p>Name: {guest.name}</p>
              <p>Designation: {guest.designation}</p>
              <p>Organization: {guest.organization}</p>
              <p>Contact: {guest.contact}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h3 className="font-bold text-xl">5. Brief Description of the Event</h3>
        <p>{eventData.description}</p>
      </section>

      <section className="mb-4">
        <h3 className="font-bold text-xl">6. Photographs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {eventData.photos.map((photo, index) => (
            <div key={index} className="mb-4">
              {photo.file && (
                <img
                  src={URL.createObjectURL(photo.file)}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              )}
              <p className="text-center">{photo.caption}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-4">
        <h3 className="font-bold text-xl">7. Brochure or Creative of the Event</h3>
        {eventData.brochure && (
          <div className="mb-4">
            <img src={URL.createObjectURL(eventData.brochure)} alt="Brochure" className="w-full h-48 object-cover" />
          </div>
        )}
      </section>

      <section className="mb-4">
        <h3 className="font-bold text-xl">8. Schedule of the Event</h3>
        {eventData.schedule && (
          <div className="mb-4">
            <img src={URL.createObjectURL(eventData.schedule)} alt="Schedule" className="w-full h-48 object-cover" />
          </div>
        )}
      </section>

      <section className="mb-4">
        <h3 className="font-bold text-xl">9. Final Remarks by the Team Leader</h3>
        <p>{eventData.finalRemarks}</p>
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
    </div>
  );
};

export default EventPrintView;