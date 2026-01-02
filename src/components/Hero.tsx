import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-6">Where AI Meets Human orchestration</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed text-justify">We design, build, and manage AI call agents that answer every call, qualify leads, book appointments, and support customers automatically. From strategy and scripting to system integration and ongoing optimization, we handle everything—so your business captures more opportunities, reduces costs, and scales without adding staff.</p>
            
            {/* Email Form */}
            
          </div>

          {/* Right Visual */}
          <div className="relative lg:h-[560px] h-[400px]">
            {/* Hero Background Image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <img src={heroBackground} alt="Abstract flowing shapes" className="w-full h-full object-cover" />
            </div>

            {/* Floating Cards */}
            <div className="absolute top-8 left-8 bg-foreground/90 text-background px-4 py-3 rounded-xl shadow-lg animate-float flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-teal-light" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium">Data validation</span>
            </div>

            <div className="absolute top-24 right-8 bg-background/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg animate-float-delayed border border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center">
                  <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">AI Form Agent</p>
                  <p className="text-sm font-medium text-foreground">Reviewing proposal packet</p>
                </div>
              </div>
            </div>

            <div className="absolute top-40 left-16 bg-foreground/90 text-background px-4 py-3 rounded-xl shadow-lg animate-float-slow flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-coral/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-coral" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium">Signature completed</span>
            </div>

            <div className="absolute bottom-32 left-12 bg-background/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg animate-float border border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center">
                  <span className="text-teal text-sm">+</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">AI Copilot</p>
                  <p className="text-sm font-medium text-foreground">It's your turn to review the Stelaris request</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 right-12 bg-background/95 backdrop-blur px-4 py-3 rounded-xl shadow-lg animate-float-delayed border border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-coral/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-coral" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">Manager review</span>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-teal" />
                  <div className="w-6 h-6 rounded-full bg-coral" />
                </div>
              </div>
            </div>

            <div className="absolute top-56 left-1/2 -translate-x-1/2 bg-foreground/90 text-background px-4 py-3 rounded-xl shadow-lg animate-float-slow flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-light/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-teal-light" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <span className="text-sm font-medium">Customer onboarding template</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;