"use client";
import { useMountedState } from "react-use";
import { useEffect, useState } from "react";

import PortfolioCard from "@/components/cards/portfolio-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllPortfolio } from "@/lib/portfolio";
import { Portfolio } from "@/lib/types";
import { ListMotion } from "@/components/motion/list-motion";

const PortfolioPage = () => {
  const isMounted = useMountedState();
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await getAllPortfolio();
        setPortfolio(response);
      } catch (error) {
        console.error("Error occured on getting portfolio", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!isMounted) return null;

  // filter developing
  const developing = portfolio.filter((item) => item.tag === "developing");

  // filter funded
  const funded = portfolio.filter((item) => item.tag === "funded");

  return (
    <div className="h-full flex flex-col">
      <div className="py-14 md:py-16  flex flex-col items-center  w-full justify-center gap-3 md:gap-5 border-b-2 border-b-primary/70 ">
        <div className="text-3xl tracking-widest font-meduim">
          Our Portfolio
        </div>

        <div className="text-center">
          We build our ventures based on three (3) simple principles
        </div>

        <div className="flex w-full items-center">
          <Tabs defaultValue="all" className="w-full space-y-4 lg:space-y-8">
            <div className="w-full flex justify-center items-center">
              <TabsList className="grid grid-cols-3 w-full gap-3 lg:max-w-[50vw] bg-transparent">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-primary/70 rounded-2xl text-black data-[state=active]:text-white border border-primary/60"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="developing"
                  className="data-[state=active]:bg-primary/70 rounded-2xl text-black data-[state=active]:text-white border border-primary/60"
                >
                  Developing
                </TabsTrigger>
                <TabsTrigger
                  value="funded"
                  className="data-[state=active]:bg-primary/70 rounded-2xl text-black data-[state=active]:text-white border border-primary/60"
                >
                  Funded
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent
              value="all"
              className="grid text-sm grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {portfolio.map((item, index) => (
                <PortfolioCard
                  key={index}
                  title={item.name}
                  description={item.description}
                  img={
                    "https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?w=446&ssl=1%20446w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=300%2C300&ssl=1%20300w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=150%2C150&ssl=1%20150w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=100%2C100&ssl=1%20100w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=250%2C250&ssl=1%20250w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=320%2C320&ssl=1%20320w,%20https://i0.wp.com/susaventures.com/wp-content/uploads/2022/05/Screen-Shot-2023-03-31-at-9.16.23-AM.png?resize=280%2C280&ssl=1%20280w"
                  }
                  link={item.projectLink}
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
                  title={item.name}
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
                  title={item.name}
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
