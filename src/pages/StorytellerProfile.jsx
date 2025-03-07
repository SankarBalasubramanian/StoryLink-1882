import { useParams } from 'react-router-dom';
import { BiStar, BiTime, BiBook, BiCalendar } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const StorytellerProfile = () => {
  const { id } = useParams();

  // Mock data - in a real app, fetch this based on the id
  const storyteller = {
    id: 1,
    name: "Sarah Johnson",
    specialties: ["Fantasy", "Children's Literature"],
    rating: 4.8,
    price: 25,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    bio: "Professional storyteller with 5+ years of experience bringing books to life. Specialized in creating immersive experiences for fantasy and children's literature.",
    experience: "5+ years",
    booksRead: "200+",
    availability: "Mon-Fri: 9AM-6PM"
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={storyteller.image}
              alt={storyteller.name}
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{storyteller.name}</h1>
                <div className="flex items-center mt-2">
                  <BiStar className="text-yellow-400" />
                  <span className="ml-1 text-gray-600">{storyteller.rating} Rating</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-800">${storyteller.price}</p>
                <p className="text-gray-600">per hour</p>
              </div>
            </div>

            <p className="mt-4 text-gray-600">{storyteller.bio}</p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="flex items-center">
                <BiTime className="text-primary-500 text-xl" />
                <span className="ml-2 text-gray-600">{storyteller.experience}</span>
              </div>
              <div className="flex items-center">
                <BiBook className="text-primary-500 text-xl" />
                <span className="ml-2 text-gray-600">{storyteller.booksRead}</span>
              </div>
              <div className="flex items-center">
                <BiCalendar className="text-primary-500 text-xl" />
                <span className="ml-2 text-gray-600">Available Now</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-800">Specialties</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {storyteller.specialties.map(specialty => (
                  <span
                    key={specialty}
                    className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Link
                to={`/book/${storyteller.id}`}
                className="block w-full text-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StorytellerProfile;