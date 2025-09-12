import React, { useState } from "react";

const ClinicPage = () => {
    const [appointments] = useState([
        {
            id: 1,
            patient: "Ananya Singh",
            therapist: "Dr. Mehta",
            time: "10:00 AM",
            status: "Scheduled",
        },
        {
            id: 2,
            patient: "Rahul Verma",
            therapist: "Dr. Nair",
            time: "11:30 AM",
            status: "Completed",
        },
        {
            id: 3,
            patient: "Priya Sharma",
            therapist: "Dr. Iyer",
            time: "02:00 PM",
            status: "Scheduled",
        },
    ]);

    const [availability] = useState([
        { therapist: "Dr. Mehta", slot: "10:00 AM - 1:00 PM" },
        { therapist: "Dr. Nair", slot: "2:00 PM - 5:00 PM" },
    ]);

    const [notificationType, setNotificationType] = useState("Pre-Procedure");
    const [customMessage, setCustomMessage] = useState("");

    const notify = (patient) => {
        alert(`📢 Notification sent to ${patient}`);
    };

    const sendBulkNotification = () => {
        const message =
            customMessage.trim() || "Please follow the necessary precautions.";
        const patientNames = appointments.map((appt) => appt.patient).join(", ");
        alert(
            `📢 ${notificationType} sent to all patients:\n\n${patientNames}\n\nMessage: ${message}`
        );
    };

    return (
        <div className="min-h-screen p-6 bg-gradient-to-br from-green-50 via-yellow-50 to-purple-50">
            <h1 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-orange-500 to-purple-600 drop-shadow-md p-2">
                Clinic Manager Dashboard
            </h1>



            {/* Top grid */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Patient Appointments */}
                <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-green-400 hover:shadow-xl transition">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-700">
                        👥 Patient Appointments
                    </h2>
                    <ul className="space-y-4">
                        {appointments.map((appt) => (
                            <li
                                key={appt.id}
                                className="flex justify-between items-center border p-3 rounded-xl bg-green-100"
                            >
                                <div>
                                    <p className="font-bold text-gray-800">{appt.patient}</p>
                                    <p className="text-sm text-gray-500">
                                        {appt.therapist} - {appt.time}
                                    </p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span
                                        className={`px-2 py-1 rounded-lg text-sm font-semibold ${appt.status === "Completed"
                                            ? "bg-white text-black border border-black"
                                            : "bg-yellow-100 text-yellow-700 border border-yellow-700"
                                            }`}
                                    >
                                        {appt.status}
                                    </span>
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:scale-105 transition"
                                        onClick={() => notify(appt.patient)}
                                    >
                                        Notify
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Therapist Availability */}
                <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-purple-400 hover:shadow-xl transition">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-700">
                        🕑 Therapist Availability
                    </h2>
                    <ul className="space-y-4">
                        {availability.map((av, index) => (
                            <li
                                key={index}
                                className="border p-3 rounded-xl flex justify-between bg-purple-100"
                            >
                                <span className="font-semibold text-gray-800">
                                    {av.therapist}
                                </span>
                                <span className="text-sm font-semibold text-gray-600">{av.slot}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Notifications Panel */}
            <div className="bg-white shadow-lg rounded-2xl p-6 mt-6 border-t-4 border-orange-400 hover:shadow-xl transition">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-orange-700">
                    🔔 Pre/Post Procedure Notifications
                </h2>

                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <select
                        value={notificationType}
                        onChange={(e) => setNotificationType(e.target.value)}
                        className="border rounded-lg p-2 flex-1 bg-orange-100 focus:ring-2 focus:ring-orange-400"
                    >
                        <option value="Pre-Procedure">Pre-Procedure Notification</option>
                        <option value="Post-Procedure">Post-Procedure Notification</option>
                    </select>

                    <button
                        onClick={sendBulkNotification}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition w-full md:w-auto"
                    >
                        Send to All Patients
                    </button>
                </div>

                <textarea
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="w-full border rounded-lg p-3 mt-4 bg-green-50 focus:ring-2 focus:ring-green-400"
                    rows="3"
                    placeholder="Enter custom message (optional)..."
                />
            </div>
        </div>
    );
};

export default ClinicPage;
