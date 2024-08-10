import PortfolioCard from "@/components/cards/portfolio-card";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const dummyPortfolio = [
  {
    img: "",
    title: "STYLES",
    description: "A novel fashion brand.",
    tag: "funded",
  },
  {
    img: "",
    title: "FIREFLY",
    description: "Firefighting Drone Technology.",
    tag: "developing",
  },
  {
    img: "",
    title: "FRUCHEZ",
    description: "A new fruit based snack.",
    tag: "developing",
  },
  {
    img: "",
    title: "TESSELLATE",
    description: "A tactile design application.",
    tag: "developing",
  },
  {
    img: "",
    title: "PARALLEL TV",
    description: "A gamified video streaming platform.",
    tag: "developing",
  },
  {
    img: "",
    title: "SYNC",
    description: "A bio-sensor technology company.",
    tag: "developing",
  },
  {
    img: "",
    title: "FLOWER",
    description: "A Growth Evolution Management Application.",
    tag: "developing",
  },
];
const PortfolioPage = () => {
  // filter developing
  const developing = dummyPortfolio.filter((item) => item.tag === "developing");

  // filter funded
  const funded = dummyPortfolio.filter((item) => item.tag === "funded");

  return (
    <div className="h-full flex flex-col">
      <div className="py-14 md:py-16  flex flex-col items-center  w-full justify-center gap-3 md:gap-5 border-b-2 border-b-primary/70 ">
        <div className="text-3xl tracking-widest font-meduim">
          Our Portfolio
        </div>

        <div className="flex w-full items-center">
          <Tabs defaultValue="all" className="w-full space-y-4 lg:space-y-8">
            <div className="w-full flex justify-center items-center">
              <TabsList className="grid grid-cols-3 w-full gap-3 lg:max-w-[50vw] bg-transparent">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-primary/70 text-black data-[state=active]:text-white border border-primary/60"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="developing"
                  className="data-[state=active]:bg-primary/70 text-black data-[state=active]:text-white border border-primary/60"
                >
                  Developing
                </TabsTrigger>
                <TabsTrigger
                  value="funded"
                  className="data-[state=active]:bg-primary/70 text-black data-[state=active]:text-white border border-primary/60"
                >
                  Funded
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent
              value="all"
              className="grid text-sm grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {dummyPortfolio.map((item, index) => (
                <PortfolioCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  img={
                    "https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?w=446&ssl=1%20446w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=300%2C300&ssl=1%20300w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=150%2C150&ssl=1%20150w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=100%2C100&ssl=1%20100w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=250%2C250&ssl=1%20250w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=320%2C320&ssl=1%20320w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=280%2C280&ssl=1%20280w"
                  }
                  link={""}
                />
              ))}
            </TabsContent>
            <TabsContent
              value="developing"
              className="grid text-sm grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {developing.map((item, index) => (
                <PortfolioCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  img={
                    "https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?w=446&ssl=1%20446w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=300%2C300&ssl=1%20300w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=150%2C150&ssl=1%20150w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=100%2C100&ssl=1%20100w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=250%2C250&ssl=1%20250w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=320%2C320&ssl=1%20320w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=280%2C280&ssl=1%20280w"
                  }
                  link={""}
                />
              ))}
            </TabsContent>

            <TabsContent
              value="funded"
              className="grid text-sm grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {funded.map((item, index) => (
                <PortfolioCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  img={
                    "https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?w=446&ssl=1%20446w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=300%2C300&ssl=1%20300w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=150%2C150&ssl=1%20150w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=100%2C100&ssl=1%20100w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=250%2C250&ssl=1%20250w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=320%2C320&ssl=1%20320w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=280%2C280&ssl=1%20280w"
                  }
                  link={""}
                />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
