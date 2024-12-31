import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";

const publications = [
  {
    title: "Abraham solvation parameter model: updated correlations for describing solute partitioning into plant cuticles from water and from air",
    authors: [
      { name: "Shrika Eddula" },
      { name: "Angelina Xu" },
      { name: "Carina Jiang" },
      { name: "Jennifer Huang" },
      { name: "Priya Tirumala" },
      { name: "Grace Liu" },
      { name: "William E. Acree" },
      { name: "Michael H. Abraham" }
    ],
    conference: "Physics and Chemistry of Liquids",
    date: "August 24, 2020",
    links: [
      { label: "PAPER", url: "https://www.tandfonline.com/doi/full/10.1080/00319104.2020.1808659" }
    ],
    image: "/placeholder.svg"
  },
  {
    title: "Diffusion models in protein structure and docking",
    authors: [
      { name: "Jason Yim" },
      { name: "Hannes Stärk" },
      { name: "Gabriele Corso" },
      { name: "Bowen Jing" },
      { name: "Regina Barzilay" },
      { name: "Tommi S Jaakkola" }
    ],
    conference: "Wiley Interdisciplinary Reviews: Computational Molecular Science",
    date: "Apr 5, 2024",
    links: [
      { label: "PAPER", url: "#" }
    ],
    image: "/placeholder.svg"
  },
  {
    title: "Improving protein optimization with smoothed fitness landscapes",
    authors: [
      { name: "Andrew Kirjner", isEqual: true },
      { name: "Jason Yim", isEqual: true },
      { name: "Raman Samusevich" },
      { name: "Shahar Bracha" },
      { name: "Tommi Jaakkola" },
      { name: "Regina Barzilay" },
      { name: "Ila Fiete" }
    ],
    conference: "International Conference on Learning Representations",
    date: "May 7, 2024",
    links: [
      { label: "PAPER", url: "#" },
      { label: "CODE", url: "#" },
      { label: "NEWS", url: "#" }
    ],
    image: "/placeholder.svg"
  }
];

const Research = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      <div className="fixed top-20 right-4 z-40 scale-125">
        <ThemeToggle />
      </div>
      <div className="pt-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4 text-center"
          >
            Publications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-muted-foreground mb-8"
          >
            * denotes equal contribution
          </motion.p>
          <div className="space-y-12">
            {publications.map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="w-32 h-32 shrink-0">
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-full object-cover rounded-lg border"
                  />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold">{publication.title}</h2>
                  <p className="text-muted-foreground">
                    {publication.authors.map((author, authorIndex) => (
                      <span key={authorIndex}>
                        {author.name}
                        {author.isEqual && "*"}
                        {authorIndex < publication.authors.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                  <p className="text-sm italic text-muted-foreground">
                    {publication.conference}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {publication.date}
                  </p>
                  <div className="flex gap-2 pt-2">
                    {publication.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        className="inline-block px-3 py-1 text-xs border rounded hover:bg-accent transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;