import toast from "react-hot-toast";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const ContactModal = ({ isOpen, setIsOpen }) => {
    const { contact } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState("");
    const modalRef = useRef(null);
    const firstInputRef = useRef(null);

    // Focus on the first input when modal opens
    useEffect(() => {
        if (isOpen && firstInputRef.current) {
            firstInputRef.current.focus();
        }
    }, [isOpen]);

    // Close modal when pressing ESC
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [setIsOpen]);

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast.success(contact.success);
                setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form after successful submission
            } else {
                setStatus(contact.error);
                toast.error(contact.error); // Show error using toast
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus(contact.error);
            toast.error(contact.error);
        }
    };

    const closeModal = () => {
        setIsOpen(false);
        setStatus("");
    };

    return (
        <div>
        {isOpen && (
            <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto"
            onClick={(e) => {
                if (modalRef.current && !modalRef.current.contains(e.target)) {
                closeModal();
                }
            }}
            >
            <div
                ref={modalRef}
                className="bg-[#242732] p-8 rounded-lg shadow-lg w-[90%] max-w-full md:max-w-md mx-auto overflow-hidden"
            >
                <h2 className="text-2xl font-bold mb-4">{contact.contactMe}</h2>

                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <input
                    type="text"
                    id="name"
                    ref={firstInputRef}
                    className="text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input
                    type="email"
                    id="email"
                    className="text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium">{contact.subject}</label>
                    <input
                    type="text"
                    id="subject"
                    className="text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                    <textarea
                    id="message"
                    className="text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    ></textarea>
                </div>

                <div className="flex justify-end">
                    <button
                    type="button"
                    onClick={closeModal}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 hover:bg-gray-400"
                    >
                    {contact.cancel}
                    </button>
                    <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                    {contact.send}
                    </button>
                </div>
                </form>
                {status && <p className="text-red-400 mt-4">{status}</p>}
            </div>
            </div>
        )}
        </div>
    );
};

export default ContactModal;