import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./portfolio.css";


export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />



      {/* WEBSITE SECTION */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-bold mb-20 mt-20 text-center">
            Website Design
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Project 1 */}
            <PortfolioCard
              image="/images/Saffron.png"
              title="Restaurant Website"
              category="Website Design"
              link="https://restaurantdesign11.netlify.app/"
            />

            {/* Project 2 */}
            <PortfolioCard
              image="/images/Home-SJS.png"
              title="SJ Hospital Website"
              category="Hospital"
              link="https://sjshospital.in/"
            />

            {/* Project 3 */}
            <PortfolioCard
              image="/images/PrimeEstate.png"
              title="Real Estate DX"
              category="Real Estate"
              link="https://realestatedx.netlify.app/"
            />

            {/* Project 4 */}
            <PortfolioCard
              image="/images/IronVault.png"
              title="Gym Sambhajinagar"
              category="Gym"
              link="https://gymsambhajinagar.netlify.app/"
            />

            {/* Project 5 */}
            <PortfolioCard
              image="/images/Sant-Kabi.png"
              title="Sant Kabir Vidyalay"
              category="School"
              link="https://santakabervidyalay.netlify.app/"
            />

          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA SECTION */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-4">
            Social Media Post Design
          </h2>

          <p className="mb-10 text-muted-foreground">
            Creative designs that engage and convert
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <SocialCard text="Instagram Post" />
            <SocialCard text="Facebook Post" />
            <SocialCard text="LinkedIn Post" />
            <SocialCard text="Story Design" />
          </div>

        </div>
      </section>

      {/* LOGO SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-4">
            Logo Design
          </h2>

          <p className="mb-10 text-muted-foreground">
            Memorable brand identities that stand out
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <SocialCard text="Tech Startup Logo" />
            <SocialCard text="Restaurant Logo" />
            <SocialCard text="Fitness Logo" />
            <SocialCard text="Creative Agency Logo" />
          </div>

        </div>
      </section>



      <Footer />
    </div>
  )
}

/* ---------------- COMPONENTS ---------------- */

function PortfolioCard({ image, title, category, link }: any) {
  return (
    <div className="group border rounded-xl overflow-hidden shadow hover:shadow-xl transition">

      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover"
        />

        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <a
            href={link}
            target="_blank"
            className="bg-white text-black px-6 py-2 rounded-lg font-semibold"
          >
            Live Preview
          </a>
        </div>
      </div>

      <div className="p-4">
        <span className="text-sm text-muted-foreground">
          {category}
        </span>
        <h3 className="text-lg font-semibold mt-1">
          {title}
        </h3>
      </div>

    </div>
  )
}

function SocialCard({ text }: any) {
  return (
    <div className="border rounded-xl p-6 shadow hover:shadow-xl transition">
      <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
        {text}
      </div>
    </div>
  )
}