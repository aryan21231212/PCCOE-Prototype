const CARD = ({ title, subtitle, icon }) => (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col gap-3 hover:shadow-lg">
      <div className="w-12 h-12 rounded-md bg-white/6 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-300">{subtitle}</p>
    </div>
  );
  
  export default function FeatureCard() {
    return (
      <div className="max-w-7xl mx-auto px-6 -mt-12 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CARD
            title="For Waste Generators"
            subtitle="Turn industrial waste into revenue streams"
            icon={<svg className="w-6 h-6 text-green-300" viewBox="0 0 24 24" fill="none"><path d="M3 7h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>}
          />
          <CARD
            title="For Material Buyers"
            subtitle="Source quality raw materials at competitive prices"
            icon={<svg className="w-6 h-6 text-green-300" viewBox="0 0 24 24" fill="none"><path d="M12 5v14" stroke="currentColor" strokeWidth="2"/></svg>}
          />
          <CARD
            title="Circular Economy"
            subtitle="Transform linear waste into circular value"
            icon={<svg className="w-6 h-6 text-green-300" viewBox="0 0 24 24" fill="none"><path d="M4 12h16" stroke="currentColor" strokeWidth="2"/></svg>}
          />
          <CARD
            title="AI-Powered Matching"
            subtitle="Intelligent connections for optimal efficiency"
            icon={<svg className="w-6 h-6 text-green-300" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="currentColor" strokeWidth="2"/></svg>}
          />
        </div>
      </div>
    );
  }
  