export default function Home() {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - startYear;

  const skillCards = [
    {
      title: "Kotlin",
      skills: ["readLine() Handling", "Platform-Specific Quirks", "Encryption Logic", "Structured Debugging"],
    },
    {
      title: "Jetpack Compose",
      skills: ["Material Design 3", "Coroutines", "State Management", "Room DB"],
    },
    {
      title: "Backend Integration",
      skills: ["API Consumption", "Data Parsing", "Auth Mechanisms", "Error Handling"],
    },
    {
      title: "Front End Web Development",
      skills: ["React.js", "Tailwind CSS", "Responsive Layouts", "Component Reuse"],
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 pt-12 pb-24">
      {/* 👤 Intro Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
        <img
          src="/kdphoto.png"
          alt="Kaustubh Deshpande"
           className="w-72 h-72 sm:w-96 sm:h-96 object-cover rounded-xl shadow-xl"
        />
        <div className="text-center md:text-left">
          <h1 className="text-1xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hello, I'm KAUSTUBH
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Native Android | Jetpack Compose
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400 italic mb-6">
            {experienceYears} {experienceYears === 1 ? "year" : "years"} of experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View Projects
            </a>
            <a
              href="/about"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* 💡 Skills Section */}
      <section className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Skills & Strengths
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCards.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {card.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm space-y-1">
                {card.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
