const projects = [
  {
    title: "Smart Irrigation System App",
    description: "An IoT-powered Android app that manages irrigation based on live sensor input and weather data. Showcased at Dipex 2025 with real-time ESP32 integration.",
    image: "https://picsum.photos/300/180?random=101",
    link: "https://github.com/Kaustubh-Deshpande/smart-irrigation-system"
  },
  {
    title: "HR Management System",
    description: "Professional app built during internship at IDMS Infotech—complete UI overhaul, navigation fixes, and theme-consistent Android UX built with Compose and MVVM.",
    image: "https://picsum.photos/300/180?random=102",
    link: "https://github.com/Kaustubh-Deshpande/hr-management-system"
  },
  {
    title: "Personal Portfolio Website",
    description: "Designed using React, TypeScript, and Tailwind CSS—dynamic layout, AI-generated animations, and modular structure built via Lovable.dev.",
    image: "https://picsum.photos/300/180?random=103",
    link: "https://github.com/Kaustubh-Deshpande/kaustubh-portfolio"
  },
  {
    title: "30 Days of Kotlin",
    description: "Documented learning journey following Google’s Kotlin challenge—covers language fundamentals, Jetpack Compose components, and Android Studio mastery.",
    image: "https://picsum.photos/300/180?random=104",
    link: "https://github.com/Kaustubh-Deshpande/30-days-of-kotlin"
  },
  {
    title: "College Companion",
    description: "Flagship productivity app for students—event manager, reminders, dashboard analytics, built with Jetpack Compose, Firebase, and Material 3.",
    image: "https://picsum.photos/300/180?random=105",
    link: "https://github.com/Kaustubh-Deshpande/College-Companion"
  },
  {
    title: "Modulink Foundation Landing Page",
    description: "Homepage for your open-source student initiative—clean layout, inclusive design, and a spotlight on collaborative Android/IoT innovation.",
    image: "https://picsum.photos/300/180?random=106",
    link: "https://github.com/Kaustubh-Deshpande/modulink-foundation-site"
  }
];


export default function Projects() {
  return (
    <section className="pt-24 bg-cream dark:bg-gray-900 min-h-screen mb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-teal-500 mb-8 text-center mb-20">Projects</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-4 border-t-4 border-orange-400 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-bold text-orange-500 mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 flex-1">{project.description}</p>
              <span className="mt-4 inline-block text-teal-500 font-semibold hover:underline">
                View on GitHub
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}