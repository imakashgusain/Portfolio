import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen  text-black flex flex-col justify-center items-center p-6">
      <h1 className="text-5xl font-extrabold mb-6 tracking-wide text-center hover:text-yellow-400 transition-colors duration-300">Contact Me</h1>
      <div className=" rounded-lg shadow-lg p-10 w-full max-w-3xl hover:scale-110 transition-transform duration-300">
        <div className="space-y-6 ">
          {/* Email */}
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-yellow-400 w-6 h-6" />
            <span className="text-lg">Email: <a href="mailto:akashgusain57@gmail.com" className="hover:underline">akashgusain57@gmail.com</a></span>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <FaPhone className="text-yellow-400 w-6 h-6" />
            <span className="text-lg">Phone: <span className="hover:underline">7906685542</span></span>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-yellow-400 w-6 h-6" />
            <span className="text-lg">Location: Dehradun, Uttarakhand India</span>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Contact;
