const partners: { name: string; description: string; category: string }[] = [];

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Partners
          </h2>
          <p className="text-lg text-muted-foreground">
            Working together with government agencies, private sector, and community organizations to support Busia's agricultural sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Partner cards will be added here */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-20 w-20 rounded-full bg-muted mb-4" />
            <h3 className="font-semibold text-lg mb-2 text-card-foreground">Partner Name</h3>
            <p className="text-sm text-muted-foreground mb-3">Partner description</p>
            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
              Category
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
