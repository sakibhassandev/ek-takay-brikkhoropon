export default function PromotionalVideo() {
  return (
    <div className="max-w-4xl mt-72 sm:mt-52 md:mt-16 mx-auto space-y-8">
      {/* Video Section */}
      <div className="aspect-video w-full">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="EK Takay Shikkha Promotional Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Call to Action Section */}
      <div className="border-2 border-orange-400 rounded-lg p-6 text-center">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <p className="text-lg">আমাদের সাথে যুক্ত হতে চাইলে</p>
          <button className="bg-gray-100 px-4 py-2 rounded-md shadow-sm hover:bg-gray-200 transition-colors">
            এখানে ক্লিক করুন
          </button>
        </div>
      </div>
    </div>
  );
}
