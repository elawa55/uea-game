import React, { useState, useEffect } from 'react';
import { Play, Loader2 } from 'lucide-react';

const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null); 


  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('https://theway4business.27lashabab.com/api/faqs');
        const data = await response.json();
        const items = Array.isArray(data) ? data : (data.data || []);
        
        if (items.length > 0) {
            setFaqs(items);
        } else {
            setFaqs(dummyFaqs);
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
        setFaqs(dummyFaqs);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);
  const dummyFaqs = Array(6).fill({
    question: "What is your current passion project ?",
    answer: "This is a placeholder answer for the passion project question. It will be shown when you click on the question."
  });
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen  text-white font-sans flex flex-col items-center py-16 px-4">
      
      <div className="w-full max-w-2xl text-center mb-16 space-y-6">
        <h4 className="text-[#00e5ff] uppercase tracking-widest text-sm font-semibold">
          Newsletters
        </h4>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Stories and interviews
        </h1>
        
        <p className="text-gray-300 text-lg max-w-lg mx-auto leading-relaxed">
          Subscribe to learn about new product features, the latest in technology, solutions, and updates.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-8 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-3 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00e5ff]"
          />
          <button className="bg-[#00e5ff] text-black font-semibold px-6 py-3 rounded hover:bg-[#00b8cc] transition-colors">
            Subscribe
          </button>
        </div>
        
        <p className="text-gray-400 text-xs mt-2">
          We care about your data in our <span className="underline cursor-pointer">privacy policy</span>
        </p>
      </div>

      <div className="w-full max-w-4xl space-y-4">
        {loading ? (
          <div className="flex justify-center text-[#00e5ff]">
            <Loader2 className="animate-spin w-8 h-8" />
          </div>
        ) : (
          faqs.map((item, index) => (
            <div 
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`
                border rounded-lg transition-all duration-300 cursor-pointer overflow-hidden
                ${openIndex === index ? 'bg-[#004d40]/50 border-[#00e5ff]' : 'border-[#00e5ff]/60 hover:border-[#00e5ff]'}
              `}
            >
            
              <div className="flex items-center justify-between p-5">
                <h3 className="text-lg md:text-xl font-light tracking-wide pr-4">
                  {item.question}
                </h3>
                <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-90' : 'rotate-0'}`}>
                    <Play className="w-5 h-5 text-[#00e5ff] fill-[#00e5ff]" /> 
                </div>
              </div>

              <div 
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="p-5 pt-0 text-gray-300 text-sm leading-relaxed border-t border-[#00e5ff]/20 mt-2">
                  {item.answer || "No details provided for this answer."}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default FAQSection;