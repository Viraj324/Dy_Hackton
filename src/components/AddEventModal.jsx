import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

export default function AddEventModal({ isOpen, onClose, onEventAdded }) {
    const [title, setTitle] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/api/events", { start, end, title });
            onEventAdded({ start, end, title });
            onClose(); // Close modal after successful creation
        } catch (error) {
            console.error("Error adding event:", error);
            // Handle error (e.g., display error message)
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
                <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                <div>
                    <label>Start Date</label>
                    <input type="datetime-local" value={start} onChange={e => setStart(e.target.value)} />
                </div>
                <div>
                    <label>End Date</label>
                    <input type="datetime-local" value={end} onChange={e => setEnd(e.target.value)} />
                </div>
                <button>Add event</button>
            </form>
        </Modal>
    );
}
