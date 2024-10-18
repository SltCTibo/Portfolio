import toast from "react-hot-toast";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const ContactModal = ({ isOpen, setIsOpen}) => {
    const { contact } = useLanguage();
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: ""
    })
    const [status, setStatus] = useState("")

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
            toast.success()
            setFormData({ email: '', subject: '', message: '' }); // Reset form after successful submission
        } else {
            setStatus(contact.error);
        }
    } catch (error) {
        console.error('Error:', error);
        setStatus(contact.error);
    }
    };

    return (
        <div>
        {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#242732] p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">{contact.contactMe}</h2>

                <form onSubmit={handleSubmit}>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium">
                    Email
                    </label>
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
                    <label htmlFor="name" className="block text-sm font-medium">
                    {contact.subject}
                    </label>
                    <input
                    type="text"
                    id="name"
                    className="text-black mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium">
                    Message
                    </label>
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
                    onClick={() => setIsOpen(false)}
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
                {status && <p className="text-red-400">{status}</p>}
            </div>
            </div>
        )}
        </div>
    )
}

export default ContactModal;