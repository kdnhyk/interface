interface IsTeam {
  id?: number;
  name: string;
  color: string;
  menu1: string[];
  menu2: string[];
  member: string[];
}

interface IsTeams {
  sort: string;
  units: IsTeam[];
}

export const Teams: IsTeams[] = [
  {
    sort: "Clubs(Univ.)",
    units: [
      {
        name: "mute",
        color: "white",
        menu1: [],
        menu2: [],
        member: [],
      },
    ],
  },
  {
    sort: "Crews",
    units: [
      {
        name: "Interface",
        color: "#B92EDC",
        menu1: ["Mixtape", "Photo", "Magagine"],
        menu2: ["익명"],
        member: ["강동혁", "ㅁㅁㅁ"],
      },
      {
        name: "Interface Archive",
        color: "white",
        menu1: ["Mixtape", "Photo", "Magagine"],
        menu2: ["익명"],
        member: ["강동혁", "ㅁㅁㅁ"],
      },
      {
        name: "Green Park",
        color: "#2EDC88",
        menu1: ["Mixtape", "Photo"],
        menu2: ["익명"],
        member: ["강동혁", "ㅁㅁㅁ"],
      },
      {
        name: "평화",
        color: "#CA2626",
        menu1: ["Mixtape", "Photo", "Magagine"],
        menu2: ["익명"],
        member: ["강동혁", "ㅁㅁㅁ"],
      },
    ],
  },
];
