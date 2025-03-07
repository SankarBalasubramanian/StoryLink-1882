import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BiBookReader, BiTime, BiWallet } from 'react-icons/bi';

const features = [
  {
    icon: <BiBookReader className="text-4xl text-primary-500" />,
    title: 'Expert Storytellers',
    description: 'Connect with passionate storytellers across various genres and topics'
  },
  {
    icon: <BiTime className="text-4xl text-primary-500" />,
    title: 'Flexible Scheduling',
    description: 'Book sessions at your convenience, any time that works for you'
  },
  {
    icon: <BiWallet className="text-4xl text-primary-500" />,
    title: 'Affordable Prices',
    description: 'Choose from a range of pricing options that fit your budget'
  }
];

const Home = () => {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-gray-800"
        >
          Where Stories Come to Life
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Connect with expert storytellers who bring your favorite books to life through engaging narration and discussion.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            to="/search"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Find Your Storyteller
          </Link>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <div className="flex justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Home;