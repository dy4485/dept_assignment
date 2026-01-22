import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";


const TeamSection = () => {
  const team = [
    {
      name: "Devon Lane",
      role: "CEO & Founder of Gilio",
      bgColor: "bg-[#d1e7dd]", // Light Green
      image: team1
    },
    {
      name: "Kristin Watson",
      role: "UI Designer",
      bgColor: "bg-[#e2d9f3]", // Light Purple
      image: team2
    },
    {
      name: "Jacob Jones",
      role: "Product Designer",
      bgColor: "bg-[#fff2d1]", // Light Yellow
      image: team3
    },
    {
      name: "Esther Howard",
      role: "Front-end Developer",
      bgColor: "bg-[#d1e1f7]", // Light Blue
      image: team4
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
            Say hello to our team members
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto leading-relaxed">
            Praesent sagittis eros in convallis rutrum. Donec auctor nibh justo. Vestibu 
            tincidunt, libero sit amet vestibulum euismod, ex nisl imperdiet leo.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className={`${member.bgColor} rounded-lg aspect-[4/5] overflow-hidden mb-4 relative`}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover   transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-1">{member.name}</h3>
              <p className="text-[#64748b] text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4">
          <button className="p-4 rounded-full bg-[#f1f5f9] text-[#2563eb] hover:bg-[#2563eb] hover:text-white transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button className="p-4 rounded-full bg-[#f1f5f9] text-[#2563eb] hover:bg-[#2563eb] hover:text-white transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;