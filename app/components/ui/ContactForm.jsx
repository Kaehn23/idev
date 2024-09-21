import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify"; // Import DOMPurify

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [isSending, setIsSending] = useState(false); // Email sending state
  const [isCooldown, setIsCooldown] = useState(false); // Cooldown state
  const [timer, setTimer] = useState(0); // Timer for cooldown

  // Sanitize input to prevent XSS
  const sanitizeInput = (input) => {
    return DOMPurify.sanitize(input); // Sanitize input using DOMPurify
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value); // Sanitize each input value
    setFormData((prevData) => ({
      ...prevData,
      [name]: sanitizedValue,
    }));
  };

  // Cooldown function: Prevent the form from being spammed
  const startCooldown = () => {
    setIsCooldown(true);
    let countdown = 30; // 30 seconds cooldown
    setTimer(countdown);

    const interval = setInterval(() => {
      countdown--;
      setTimer(countdown);

      if (countdown <= 0) {
        clearInterval(interval);
        setIsCooldown(false); // Cooldown finished
      }
    }, 1000); // Update every second
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isCooldown) {
      alert(`Patientez ${timer} secondes avant de renvoyer un mail.`);
      return; // Prevent multiple submissions during cooldown
    }

    setIsSending(true); // Start loading

    emailjs
      .send(
        "service_duwr84u",
        "template_9x0rbfa",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          companyName: formData.companyName,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          message: formData.message,
        },
        "pgajVcON7x0V8aG1O" // Replace with your EmailJS User ID or Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false); // Stop loading
          setIsModalOpen(true); // Open success modal
          setFormData({
            lastName: "",
            firstName: "",
            companyName: "",
            phoneNumber: "",
            email: "",
            message: "",
          }); // Clear the form
          startCooldown(); // Start cooldown after submission
        },
        (error) => {
          console.error(error.text);
          setIsSending(false); // Stop loading even if failed
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md glass-effect-form mb-4">
      <h2 className="text-xl md:text-2xl font-bold m-4 md:m-6 text-center border-b-2 border-t-2 border-orange-300 text-gray-900 dark:text-white">
        Contactez-nous
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="flex flex-col">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Votre nom*"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="p-2 md:p-3 border rounded-xl text-black focus:outline-none focus:ring focus:ring-green-300 placeholder-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Entreprise*"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              className="p-2 md:p-3 border rounded-xl text-black focus:outline-none focus:ring focus:ring-green-300 placeholder-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Numéro de téléphone*"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="p-2 md:p-3 border rounded-xl text-black focus:outline-none focus:ring focus:ring-green-300 placeholder-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="p-2 md:p-3 border rounded-xl text-black focus:outline-none focus:ring focus:ring-green-300 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <textarea
            id="message"
            name="message"
            placeholder="Quel est votre projet ?"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className="p-2 md:p-3 border rounded-xl text-black focus:outline-none focus:ring focus:ring-green-300 placeholder-gray-400"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-md focus:outline-none focus:ring focus:ring-green-300 bg-orange-300 px-4 md:px-6 font-medium text-black hover:text-black"
            disabled={isSending || isCooldown}
          >
            <span className="absolute h-40 md:h-56 w-24 md:w-32 text-black rounded-full bg-green-300 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
            <span className="relative font-semibold text-sm md:text-base text-black">
              {isSending ? "Envoi..." : "Envoyer"}
            </span>
          </button>
        </div>
      </form>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg md:text-xl text-black font-bold mb-4">
              Message envoyé avec succès!
            </h2>
            <p className="mb-4 text-black">Nous vous contacterons bientôt.</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-green-300 text-black rounded hover:bg-green-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
