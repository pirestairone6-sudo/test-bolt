
const FoundersStorySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 hero-text">
            Our Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Born from love, built from experience
          </p>
        </div>

        <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          <div className="space-y-8 lg:col-span-1">
            <div className="luxury-card p-8 lg:p-10">
              <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-6 text-primary">
                Tayrone Pires & Berlinda Aguilar
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-base lg:text-lg">
                <p>
                  Cutekiddo Inc. was founded by parents Tayrone Pires and Berlinda Aguilar after their son, 
                  Leonidas, was born with a rare condition that kept him in intensive care for over 446 days.
                </p>
                <p>
                  In that time, they lived what many families face in silence — the daily frustration of 
                  dressing a medically complex child with clothing that simply wasn't made for them.
                </p>
                <p>
                  Standard baby clothes failed their needs. Tubes, monitors, mobility challenges — nothing fit. 
                  Nothing felt safe. And nothing reflected the dignity their son deserved.
                </p>
                <p className="text-foreground font-medium text-lg">
                  So they built what didn't exist: thoughtfully designed, adaptive babywear that combines 
                  comfort, medical access, and emotional care — without sacrificing style.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 lg:col-span-1">
            <div className="luxury-card p-8 lg:p-10">
              <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-6 text-primary">
                From Personal to National Mission
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-base lg:text-lg">
                <p>
                  What started as a personal struggle became a national mission. Today, Cutekiddo is more 
                  than a brand. It's a movement to uplift families, redefine babywear, and give every child — 
                  no matter their needs — the comfort and confidence they deserve from day one.
                </p>
                <p className="text-foreground font-medium text-lg">
                  Every design decision is informed by real experience, tested by real families, and built 
                  for real needs.
                </p>
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-xl p-8 lg:p-10 border border-primary/20">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-display font-bold text-primary mb-3">446</div>
                <div className="text-base lg:text-lg text-muted-foreground font-medium">
                  Days in NICU/PICU that inspired our mission
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersStorySection;