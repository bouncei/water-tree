"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useMountedState } from "react-use";

import { getTeamMembers } from "@/lib/team";
import { Team } from "@/lib/types";
import TeamCard from "@/components/cards/team-card";
import { ListMotion } from "@/components/motion/list-motion";

const TeamPage = () => {
  const isMounted = useMountedState();
  const [team, setTeam] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await getTeamMembers();
        setTeam(response);
      } catch (error) {
        console.error("Error occured on getting team members", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!isMounted) return null;

  return (
    <div className="h-full flex flex-col">
      <div className="py-14 md:py-16  flex flex-col items-center justify-center gap-10 border-b-2 border-b-primary/70 ">
        <div className="text-3xl font-medium ">Meet the Team</div>
      </div>

      <ListMotion className="grid text-base grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 py-4 md:py-8 ">
        {team.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </ListMotion>
    </div>
  );
};

export default TeamPage;
