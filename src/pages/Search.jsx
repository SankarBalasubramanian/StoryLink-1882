import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch, BiStar } from 'react-icons/bi';
import { motion } from 'framer-motion';

const mockStorytellers = [
  {
    id: 1,
    name: "Sarah Johnson",
    specialties: ["Fantasy", "Children's Literature"],
    rating: 4.8,
    price: 25,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    specialties: ["Science Fiction", "Mystery"],
    rating: 4.9,
    price: 30,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  },
  {
    id: 3,
    name: "Emma Davis",
    specialties: ["Historical Fiction", "Romance"],
    rating: 4.7,
    price: 28,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
  }
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search by genre, topic, or storyteller name..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockStorytellers.map((storyteller, index) => (
          <motion.div
            key={storyteller.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={storyteller.image}
                  alt={storyteller.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{storyteller.name}</h3>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <BiStar />
                    <span className="text-gray-600">{storyteller.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
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

              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-800">
                  ${storyteller.price}/hour
                </span>
                <Link
                  to={`/storyteller/${storyteller.id}`}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Search;