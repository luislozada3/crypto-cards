export const dataCardMock = [
  {
    "Number": 1,
    "Name": "Kutuzov Hold",
    "CardType": "HQ",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:12",
            "filters": [
              "add-player-character-line",
              "most-wounded"
            ]
          }
        ],
        "triggers": [
          "start-end-phase"
        ],
        "conditions": [
          "in-game",
          "without-basal-planning"
        ]
      }
    ],
    "St": 585,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK001",
    "Rarity": "Legendary",
    "id": "OTK001",
    "Set": "Outbreak",
    "CardInSet": 1,
    "CardNumber": 1,
    "Description": "[End step]: If General Planning is 0, your most wounded ally Heals 12."
  },
  {
    "Number": 2,
    "Name": "Dogana",
    "CardType": "HQ",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:RES:1",
            "filters": [
              "add-player-technology-line",
              "is-entropy"
            ]
          }
        ],
        "triggers": [
          "player-character-died-[id]"
        ],
        "conditions": []
      }
    ],
    "St": 616,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK002",
    "Rarity": "Legendary",
    "id": "OTK002",
    "Set": "Outbreak",
    "CardInSet": 2,
    "CardNumber": 2,
    "Description": "Whenever an ally [Dies], your Entropy Techs get +1 RES."
  },
  {
    "Number": 3,
    "Name": "The Elephant",
    "CardType": "HQ",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:=multiply(count(add-player-faction|I);2)",
            "filters": [
              "add-opponent-character-line",
              "last"
            ]
          }
        ],
        "triggers": [
          "player-character-died-[id]"
        ],
        "conditions": []
      }
    ],
    "St": 559,
    "Artist": "Carlos Moreno",
    "SetAndNumber": "OTK003",
    "Rarity": "Legendary",
    "id": "OTK003",
    "Set": "Outbreak",
    "CardInSet": 3,
    "CardNumber": 3,
    "Description": "Whenever an ally [Dies], deal 2xInhuman damage to the rightmost foe."
  },
  {
    "Number": 4,
    "Name": "OS Ares",
    "CardType": "HQ",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS_ABILITY:TRIGGERED:OSARES",
            "filters": [
              "add-player-deck",
              "is-character"
            ]
          }
        ],
        "triggers": [
          "engine-loaded-ready"
        ],
        "conditions": []
      },
      {
        "effects": [
          {
            "headline": "GETS_ABILITY:TRIGGERED:OSARES2",
            "filters": [
              "add-player-deck",
              "is-character",
              "is-owner"
            ]
          }
        ],
        "triggers": [
          "engine-loaded-ready"
        ],
        "conditions": []
      }
    ],
    "St": 605,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK004",
    "Rarity": "Legendary",
    "id": "OTK004",
    "Set": "Outbreak",
    "CardInSet": 4,
    "CardNumber": 4,
    "Description": "Armed allies get Grip and +4xRES ATK.\nLeftmost armed Owner ally gets Toughness 2."
  },
  {
    "Number": 5,
    "Name": "Stoneward",
    "CardType": "HQ",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS_ABILITY:TRIGGERED:STONES",
            "filters": [
              "add-player-deck",
              "is-character",
              "is-awaken"
            ]
          }
        ],
        "triggers": [
          "engine-loaded-ready"
        ],
        "conditions": []
      }
    ],
    "St": 582,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK005",
    "Rarity": "Legendary",
    "id": "OTK005",
    "Set": "Outbreak",
    "CardInSet": 5,
    "CardNumber": 5,
    "Description": "As long as you have exactly 1 Awaken ally and they have no planning, they get +40/+40."
  },
  {
    "Number": 6,
    "Name": "Reene's",
    "CardType": "HQ",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS_ABILITY:TRIGGERED:RENEES",
            "filters": [
              "add-player-deck",
              "is-character"
            ]
          }
        ],
        "triggers": [
          "engine-loaded-ready"
        ],
        "conditions": []
      }
    ],
    "St": 610,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK006",
    "Rarity": "Legendary",
    "id": "OTK006",
    "Set": "Outbreak",
    "CardInSet": 6,
    "CardNumber": 6,
    "Description": "Whenever an ally Riots, they get +8 ATK."
  },
  {
    "Number": 7,
    "Name": "Sand Abbey",
    "CardType": "HQ",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS_ABILITY:TRIGGERED:ABBEYS",
            "filters": [
              "add-player-deck",
              "is-character"
            ]
          }
        ],
        "triggers": [
          "engine-loaded-ready"
        ],
        "conditions": []
      }
    ],
    "St": 604,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK007",
    "Rarity": "Legendary",
    "id": "OTK007",
    "Set": "Outbreak",
    "CardInSet": 7,
    "CardNumber": 7,
    "Description": "Whenever an ally Frightens, they get +8 ATK."
  },
  {
    "Number": 8,
    "Name": "WPD Comms Inc.",
    "CardType": "HQ",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:=first(count(add-player-faction|O))",
            "filters": [
              "add-opponent-character-line",
              "first"
            ]
          }
        ],
        "triggers": [
          "start-draw-phase"
        ],
        "conditions": [
          "in-game"
        ]
      }
    ],
    "St": 605,
    "Artist": "Javier Bahamonde",
    "SetAndNumber": "OTK008",
    "Rarity": "Legendary",
    "id": "OTK008",
    "Set": "Outbreak",
    "CardInSet": 8,
    "CardNumber": 8,
    "Description": "[Draw step]: If General Planning is 0, deal Owner damage to the leftmost foe."
  },
  {
    "Number": 9,
    "Name": "Attentio Prima",
    "CardType": "HQ",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:HP:20",
            "filters": [
              "add-player-character-line",
              "is-awaken",
              "is-armed"
            ]
          }
        ],
        "triggers": [
          "player-character-died-[id]"
        ],
        "conditions": [
          "in-game"
        ]
      }
    ],
    "St": 575,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK009",
    "Rarity": "Legendary",
    "id": "OTK009",
    "Set": "Outbreak",
    "CardInSet": 9,
    "CardNumber": 9,
    "Description": "Whenever a foe [Dies], your armed Awaken allies get +20 HP."
  },
  {
    "Number": 10,
    "Name": "Alexandria",
    "CardType": "HQ",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:8",
            "filters": [
              "add-player-character-line",
              "is-entropy",
              "lowest|HP"
            ]
          }
        ],
        "triggers": [
          "start-end-phase"
        ],
        "conditions": [
          "in-game",
          "without-basal-planning"
        ]
      }
    ],
    "St": 603,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK010",
    "Rarity": "Legendary",
    "id": "OTK010",
    "Set": "Outbreak",
    "CardInSet": 10,
    "CardNumber": 10,
    "Description": "[End step]: If General Planning is 0, your Entropy ally with the lowest HP gets +8 ATK."
  },
  {
    "Number": 11,
    "Name": "Binder Tattoo Studio",
    "CardType": "HQ",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:=first(count(add-player-faction|I))",
            "filters": [
              "add-player-character-line",
              "is-inhuman",
              "is-armed"
            ]
          }
        ],
        "triggers": [
          "start-end-phase"
        ],
        "conditions": [
          "in-game",
          "without-basal-planning"
        ]
      }
    ],
    "St": 594,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK011",
    "Rarity": "Legendary",
    "id": "OTK011",
    "Set": "Outbreak",
    "CardInSet": 11,
    "CardNumber": 11,
    "Description": "[End step]:  If General Planning is 0, armed Inhuman allies get +Inhuman ATK."
  },
  {
    "Number": 12,
    "Name": "The Unifier",
    "CardType": "HQ",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:3",
            "filters": [
              "add-player-character-line"
            ]
          }
        ],
        "triggers": [
          "player-has-played-[id]",
          "player-character-died-[id]"
        ],
        "conditions": [
          "in-game"
        ]
      }
    ],
    "St": 587,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK012",
    "Rarity": "Legendary",
    "id": "OTK012",
    "Set": "Outbreak",
    "CardInSet": 12,
    "CardNumber": 12,
    "Description": "Your allies get Toughness 3."
  },
  {
    "Number": 13,
    "Name": "Ouroboros",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:7",
            "filters": [
              "add-player-characters-faction|A"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "card-has-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-loyal",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:10",
            "filters": [
              "add-player-characters-faction|A",
              "remove-self"
            ]
          }
        ],
        "triggers": [
          "start-development-phase"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(R)",
    "AtkRange": 1,
    "AtkNature": "Volition",
    "Atk": 67,
    "HP": 242,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK013",
    "Rarity": "Legendary",
    "id": "OTK013",
    "Set": "Outbreak",
    "CardInSet": 13,
    "CardNumber": 13,
    "Description": "(Loyal): Awaken allies get Toughness 7.\n[Dev step]: Other Awaken allies Heal 10.",
    "Rank": "Enlightened,Prophet"
  },
  {
    "Number": 14,
    "Name": "Casemira Kutuzov",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:=multiply(count(add-player-faction|A);5)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "start-draw-phase"
        ],
        "conditions": [
          "in-game",
          "is-lower:=first(get-slot(add-self)):3",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-opponent-technology-line",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-got-struck-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-loyal"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "One Shot Rifle",
    "Atk": 50,
    "HP": 313,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK014",
    "Rarity": "Legendary",
    "id": "OTK014",
    "Set": "Outbreak",
    "CardInSet": 14,
    "CardNumber": 14,
    "Description": "(Loyal)[Struck]: Hit leftmost opposing Tech once.\n(Slot <3)[Draw step]: Gets +5xAwaken ATK.\n",
    "Rank": "Mouth,Prophet"
  },
  {
    "Number": 15,
    "Name": "Elena Davre",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:62",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-has-died-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]",
          "player-has-played-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-higher-or-equal:=first(count(add-player-faction|E)):1",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:21",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-character-died-[id]",
          "player-has-played-[id]",
          "player-technology-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-higher-or-equal:=first(count(add-player-faction|I)):1",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:120",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-character-died-[id]",
          "player-has-played-[id]",
          "player-technology-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-higher-or-equal:=first(count(add-player-faction|O)):1",
          "is-ready"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Martial Arts",
    "Atk": 71,
    "HP": 182,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK015",
    "Rarity": "Legendary",
    "id": "OTK015",
    "Set": "Outbreak",
    "CardInSet": 15,
    "CardNumber": 15,
    "Description": "(Entropy 1): Gets +62 ATK.\n(Inhuman 1): Gets Toughness 21.\n(Owner 1): Gets +120 HP.",
    "Rank": "Mouth,Mindbender "
  },
  {
    "Number": 16,
    "Name": "Sredoje Petrović",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "SWAP:TRIGGERED",
            "filters": [
              "add-player-character-line",
              "remove-self",
              "most-wounded",
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:32",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Slash",
    "Atk": 53,
    "HP": 248,
    "Planning": 0,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK016",
    "Rarity": "Legendary",
    "id": "OTK016",
    "Set": "Outbreak",
    "CardInSet": 16,
    "CardNumber": 16,
    "Description": "Toughness 32.\n[Arrive]: Swaps with your most wounded ally.",
    "Rank": "Mouth,Thaumaturgist"
  },
  {
    "Number": 17,
    "Name": "Stonehand",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:120",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "is-ready",
          "in-game",
          "is-higher:=first(get-slot(add-self)):2"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(L)",
    "AtkRange": 3,
    "AtkNature": "Martial Arts",
    "Atk": 102,
    "HP": 213,
    "Planning": 0,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK017",
    "Rarity": "Legendary",
    "id": "OTK017",
    "Set": "Outbreak",
    "CardInSet": 17,
    "CardNumber": 17,
    "Description": "(Slot>2) [Arrive]: Deals 120 damage to rival.",
    "Rank": "Enlightened,Mindbender "
  },
  {
    "Number": 18,
    "Name": "Breeze",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GRIP:CONTINUOUS",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=multiply(count(add-player-females);3)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "RIOT:TRIGGERED:2",
            "filters": [
              "add-player-character-line",
              "last"
            ]
          }
        ],
        "triggers": [
          "card-has-killed-a-character-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-lower:=first(get-slot(add-self)):3"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Assault Rifle",
    "Atk": 72,
    "HP": 252,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK018",
    "Rarity": "Legendary",
    "id": "OTK018",
    "Set": "Outbreak",
    "CardInSet": 18,
    "CardNumber": 18,
    "Description": "Grip. Toughness 3x[F].\n(Slot<3)[Kill]: Rightmost ally Riots 2 to the right.",
    "Rank": "Sworn,Revolutionary"
  },
  {
    "Number": 19,
    "Name": "Namonaki Yuki",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GRIP:CONTINUOUS",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:12",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-has-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:-55",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-has-died-[id]",
          "card-has-been-moved-[id]",
          "player-has-moved-a-board-card-[opponent-id]",
          "player-has-played-[opponent-id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-loyal"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Heavy Handed Fists",
    "Atk": 91,
    "HP": 205,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK019",
    "Rarity": "Legendary",
    "id": "OTK019",
    "Set": "Outbreak",
    "CardInSet": 19,
    "CardNumber": 19,
    "Description": "Grip. Toughness 12.\n(Loyal): Rival gets -55 HP.",
    "Rank": "Sworn,Assassin"
  },
  {
    "Number": 20,
    "Name": "Florencia Wolff",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-opponent-technology-line",
              "first"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-opponent-technology-line",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-healthy:35"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Range(L)",
    "AtkRange": 2,
    "AtkNature": "Frontkick",
    "Atk": 56,
    "HP": 201,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK020",
    "Rarity": "Legendary",
    "id": "OTK020",
    "Set": "Outbreak",
    "CardInSet": 20,
    "CardNumber": 20,
    "Description": "(HP>35%)[Attack]: Hit the leftmost opposing Tech. Repeat.",
    "Rank": "Saboteur"
  },
  {
    "Number": 21,
    "Name": "San Amaro",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:RES:2",
            "filters": [
              "add-technology-armed"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "is-ready",
          "is-healthy:51"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:HP:12",
            "filters": [
              "add-player-relative-character|right|1"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": []
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Smash",
    "Atk": 49,
    "HP": 349,
    "Planning": 0,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK021",
    "Rarity": "Legendary",
    "id": "OTK021",
    "Set": "Outbreak",
    "CardInSet": 21,
    "CardNumber": 21,
    "Description": "(Armed & HP>51%)[Attack]: Assigned Tech gets +2 RES.\n[Attack]: Ally to the right gets +12 HP.",
    "Rank": "Poietes"
  },
  {
    "Number": 22,
    "Name": "Chaski",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:=multiply(count(add-player-faction|E);3)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "start-draw-phase"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:-30",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "player-has-played-[opponent-id]",
          "player-has-moved-a-board-card-[id]",
          "player-has-moved-a-board-card-[opponent-id]",
          "card-has-died-[id]",
          "card-planning-changed-[id]",
          "card-arrive-[id]"
        ],
        "conditions": [
          "is-ready",
          "in-game",
          "is-higher:=first(get-slot(add-self)):2"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(L)",
    "AtkRange": 2,
    "AtkNature": "Frontkick",
    "Atk": 66,
    "HP": 241,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK022",
    "Rarity": "Legendary",
    "id": "OTK022",
    "Set": "Outbreak",
    "CardInSet": 22,
    "CardNumber": 22,
    "Description": "(Slot >2): Rival gets -30 ATK.\n[Draw step]: Gets +3xEntropy ATK.",
    "Rank": "Messenger"
  },
  {
    "Number": 23,
    "Name": "Azrael",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:20",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(get-live(add-technology-armed);4)",
            "filters": [
              "add-player-character-line",
              "remove-self"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:HP:=multiply(get-live(add-technology-armed);4)",
            "filters": [
              "add-player-character-line",
              "remove-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-armed"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Range(R)",
    "AtkRange": 1,
    "AtkNature": "Slash",
    "Atk": 96,
    "HP": 252,
    "Planning": 0,
    "Artist": "Matías Cabezas",
    "SetAndNumber": "OTK023",
    "Rarity": "Legendary",
    "id": "OTK023",
    "Set": "Outbreak",
    "CardInSet": 23,
    "CardNumber": 23,
    "Description": "Toughness 20.\n(Armed): Other allies get (+4/+4)xRES.",
    "Rank": "Junklord,Master of Secrets"
  },
  {
    "Number": 24,
    "Name": "Von Koenig",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GRIP:CONTINUOUS",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=multiply(count(add-player-faction|I);4)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(count(add-player-faction|I);4)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]",
          "card-planning-changed-[id]",
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-armed"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Revolver",
    "Atk": 80,
    "HP": 183,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK024",
    "Rarity": "Legendary",
    "id": "OTK024",
    "Set": "Outbreak",
    "CardInSet": 24,
    "CardNumber": 24,
    "Description": "Grip. Toughness 4xInhuman.\n(Armed): Gets +4xInhuman ATK.",
    "Rank": "Martyr,Overlord"
  },
  {
    "Number": 25,
    "Name": "Aléc Binder",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(count(add-player-non-binaries);10)",
            "filters": [
              "add-player-non-binaries"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-healthy:28"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(R)",
    "AtkRange": 2,
    "AtkNature": "Slash",
    "Atk": 42,
    "HP": 230,
    "Planning": 0,
    "Artist": "Javiera Díaz",
    "SetAndNumber": "OTK025",
    "Rarity": "Legendary",
    "id": "OTK025",
    "Set": "Outbreak",
    "CardInSet": 25,
    "CardNumber": 25,
    "Description": "(HP>28%): [NB] allies get +10x[NB] ATK.",
    "Rank": "Martyr,Master of Secrets"
  },
  {
    "Number": 26,
    "Name": "Khaldun",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "BERSERK:CONTINUOUS",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-has-died-[id]",
          "card-planning-changed-[id]",
          "card-damage-changed-[id]",
          "card-live-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:12",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:-25",
            "filters": [
              "add-rival"
            ]
          },
          {
            "headline": "FRIGHTEN:TRIGGERED",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Volition",
    "Atk": 108,
    "HP": 205,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK026",
    "Rarity": "Legendary",
    "id": "OTK026",
    "Set": "Outbreak",
    "CardInSet": 26,
    "CardNumber": 26,
    "Description": "Berserk. Toughness 12.\n[Arrive]: Rival gets -25 ATK. Then, Frightens rival.",
    "Rank": "Berserk,Overlord"
  },
  {
    "Number": 27,
    "Name": "Nightress",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GRIP:CONTINUOUS",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(count(add-player-females);12)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=multiply(count(add-player-females);count(add-player-faction|I))",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Range(R)",
    "AtkRange": 1,
    "AtkNature": "Slash",
    "Atk": 57,
    "HP": 273,
    "Planning": 0,
    "Artist": "Sara Contreras",
    "SetAndNumber": "OTK027",
    "Rarity": "Legendary",
    "id": "OTK027",
    "Set": "Outbreak",
    "CardInSet": 27,
    "CardNumber": 27,
    "Description": "Grip. Toughness [F]xInhuman.\nGets +12x[F] ATK.",
    "Rank": "Junklord,Overlord"
  },
  {
    "Number": 28,
    "Name": "C",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:20",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "card-planning-changed-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-higher:=first(count(add-player-faction|I)):0"
        ]
      },
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:17",
            "filters": [
              "add-player-character-line",
              "remove-self"
            ]
          }
        ],
        "triggers": [
          "start-end-phase"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-higher:=first(count(add-player-faction|A)):0"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:40",
            "filters": [
              "add-self"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:HP:80",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "card-planning-changed-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-higher:=first(count(add-player-faction|E)):0"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(L)",
    "AtkRange": 3,
    "AtkNature": "Revolver",
    "Atk": 42,
    "HP": 163,
    "Planning": 0,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK028",
    "Rarity": "Legendary",
    "id": "OTK028",
    "Set": "Outbreak",
    "CardInSet": 28,
    "CardNumber": 28,
    "Description": "(Inhuman 1): Toughness 20.\n(Entropy 1): Gets +40/+80.\n(Awaken 1)[End step]: Other allies Heal 17.",
    "Rank": "Fateshaper,Whale"
  },
  {
    "Number": 29,
    "Name": "Pauline Weber",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:20",
            "filters": [
              "add-player-females",
              "remove-self",
              "most-wounded"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:20",
            "filters": [
              "add-player-females",
              "remove-self",
              "most-wounded"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": []
      }
    ],
    "Gender": "Female",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Frontkick",
    "Atk": 65,
    "HP": 220,
    "Planning": 0,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK029",
    "Rarity": "Legendary",
    "id": "OTK029",
    "Set": "Outbreak",
    "CardInSet": 29,
    "CardNumber": 29,
    "Description": "[Arrive] or [Attack]: Your most wounded [F] ally, excluding Pauline Weber, Heals 20.",
    "Rank": "Directorate,Whale"
  },
  {
    "Number": 30,
    "Name": "Johnny Patriot",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:9",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-loyal",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "OBEY:TRIGGERED",
            "filters": [
              "add-opponent-character-line",
              "highest|ATK"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": []
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Heavy Handed Fists",
    "Atk": 84,
    "HP": 240,
    "Planning": 0,
    "Artist": "Genzo",
    "SetAndNumber": "OTK030",
    "Rarity": "Legendary",
    "id": "OTK030",
    "Set": "Outbreak",
    "CardInSet": 30,
    "CardNumber": 30,
    "Description": "(Loyal): Toughness 9.\n[Attack]: The foe with the highest ATK Obeys.",
    "Rank": "Directorate,Ruler"
  },
  {
    "Number": 31,
    "Name": "William Abioye",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(count(add-player-faction|O);7)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-has-been-moved-[id]",
          "card-planning-changed-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "is-lower:=first(get-slot(add-self)):3",
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "OBEY:TRIGGERED",
            "filters": [
              "add-opponent-character-line",
              "lowest|ATK"
            ]
          }
        ],
        "triggers": [
          "start-fight-phase"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-healthy:72"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Martial Arts",
    "Atk": 63,
    "HP": 258,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK031",
    "Rarity": "Legendary",
    "id": "OTK031",
    "Set": "Outbreak",
    "CardInSet": 31,
    "CardNumber": 31,
    "Description": "(Slot <3): Gets +7xOwner ATK.\n(HP>72%)[Fight step]: The foe with the lowest ATK Obeys.",
    "Rank": "Directorate,Ruler"
  },
  {
    "Number": 32,
    "Name": "Dominika Dudek",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:=sum(count(add-player-faction|A);count(add-player-faction|E);9)",
            "filters": [
              "add-opponent-most-wounded-character"
            ]
          }
        ],
        "triggers": [
          "card-got-struck-[id]"
        ],
        "conditions": []
      },
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:60",
            "filters": [
              "add-player-characters-faction|O",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-has-killed-a-character-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Range(L)",
    "AtkRange": 4,
    "AtkNature": "One Shot Rifle",
    "Atk": 97,
    "HP": 218,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK032",
    "Rarity": "Legendary",
    "id": "OTK032",
    "Set": "Outbreak",
    "CardInSet": 32,
    "CardNumber": 32,
    "Description": "[Struck]: Deals 9+Awaken+Entropy to the most wounded foe.\n[Kill]: Leftmost Owner ally Heals 60.",
    "Rank": "Fateshaper,Praefectus"
  },
  {
    "Number": 33,
    "Name": "Spilling Nick",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:12",
            "filters": [
              "add-rival",
              "add-opponent-relative-character|left|1",
              "add-opponent-relative-character|right|1"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": [
          "is-higher:=first(count(add-player-faction|A)):2"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Poison",
    "Atk": 60,
    "HP": 228,
    "Planning": 0,
    "Artist": "Felipe Araya",
    "SetAndNumber": "OTK033",
    "Rarity": "Rare",
    "id": "OTK033",
    "Set": "Outbreak",
    "CardInSet": 33,
    "CardNumber": 33,
    "Description": "(Awaken 3)[Attack]: Deals 12 damage to rival and adjacent foes.",
    "Rank": "Gatherer"
  },
  {
    "Number": 34,
    "Name": "Claw",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:44",
            "filters": [
              "add-self"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:HP:33",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "GRIP:CONTINUOUS",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "SWAP:TRIGGERED",
            "filters": [
              "add-player-character-line",
              "last",
              "add-self"
            ]
          },
          {
            "headline": "FRIGHTEN:TRIGGERED",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Slash",
    "Atk": 101,
    "HP": 257,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK034",
    "Rarity": "Rare",
    "id": "OTK034",
    "Set": "Outbreak",
    "CardInSet": 34,
    "CardNumber": 34,
    "Description": "(Armed): Grip. Gets +44/+33\n[Pick-up]: Swaps with your rightmost ally. Then, Frightens rival.",
    "Rank": "Maestro"
  },
  {
    "Number": 35,
    "Name": "María del Tránsito",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:DAMAGE:=multiply(count(add-player-females);6)",
            "filters": [
              "add-opponent-hq"
            ]
          }
        ],
        "triggers": [
          "player-character-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=sum(count(add-player-females);6)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Blast(L)",
    "AtkRange": 1,
    "AtkNature": "Smash",
    "Atk": 48,
    "HP": 233,
    "Planning": 1,
    "Artist": "Tae Valenzuela",
    "SetAndNumber": "OTK035",
    "Rarity": "Rare",
    "id": "OTK035",
    "Set": "Outbreak",
    "CardInSet": 35,
    "CardNumber": 35,
    "Description": "Toughness 6+[F]. Whenever an ally [Dies], María del Tránsito deals 6x[F] damage to the opposing HQ.",
    "Rank": "Prophet"
  },
  {
    "Number": 36,
    "Name": "Hadrianus",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(count(add-player-faction|A);6)",
            "filters": [
              "add-self",
              "add-player-relative-character|left|1"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-character-died-[id]",
          "player-has-played-[id]",
          "player-technology-died-[id]",
          "player-has-moved-a-board-card-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Slash",
    "Atk": 77,
    "HP": 247,
    "Planning": 0,
    "Artist": "Dreg",
    "SetAndNumber": "OTK036",
    "Rarity": "Rare",
    "id": "OTK036",
    "Set": "Outbreak",
    "CardInSet": 36,
    "CardNumber": 36,
    "Description": "Hadrianus and the ally to his left both get +6xAwaken ATK.",
    "Rank": "Medium"
  },
  {
    "Number": 37,
    "Name": "Thanata",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:43",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "card-has-been-moved-[id]",
          "player-has-played-[opponent-id]",
          "player-has-moved-a-board-card-[opponent-id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-equal:=first(count(add-rival)):0"
        ]
      },
      {
        "effects": [
          {
            "headline": "FRIGHTEN:TRIGGERED",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Revolver",
    "Atk": 57,
    "HP": 248,
    "Planning": 0,
    "Artist": "Dreg",
    "SetAndNumber": "OTK037",
    "Rarity": "Rare",
    "id": "OTK037",
    "Set": "Outbreak",
    "CardInSet": 37,
    "CardNumber": 37,
    "Description": "As long as Thanata has no rival, she gets +43 ATK.\n[Arrive]: Frightens rival.",
    "Rank": "Medium"
  },
  {
    "Number": 38,
    "Name": "Santiago Pieldelobo",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(count(add-player-faction|A);-6)",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[opponent-id]",
          "player-has-moved-a-board-card-[opponent-id]",
          "card-has-died-[id]",
          "card-planning-changed-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:10",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]",
          "card-has-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Revolver",
    "Atk": 80,
    "HP": 266,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK038",
    "Rarity": "Rare",
    "id": "OTK038",
    "Set": "Outbreak",
    "CardInSet": 38,
    "CardNumber": 38,
    "Description": "Toughness 10.\nRival gets -6xAwaken ATK.",
    "Rank": "Gatherer"
  },
  {
    "Number": 39,
    "Name": "Fazir",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:8",
            "filters": [
              "add-self"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:HP:95",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-has-been-moved-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "is-lower:=first(get-slot(add-self)):3",
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "SWAP:TRIGGERED",
            "filters": [
              "add-self",
              "add-player-relative-character|left|1"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:DAMAGE:15",
            "filters": [
              "add-opponent-character-line",
              "first"
            ]
          }
        ],
        "triggers": [
          "start-end-phase"
        ],
        "conditions": [
          "is-higher:=first(get-slot(add-self)):1",
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(R)",
    "AtkRange": 1,
    "AtkNature": "Martial Arts",
    "Atk": 80,
    "HP": 201,
    "Planning": 0,
    "Artist": "Javier Bahamonde",
    "SetAndNumber": "OTK039",
    "Rarity": "Rare",
    "id": "OTK039",
    "Set": "Outbreak",
    "CardInSet": 39,
    "CardNumber": 39,
    "Description": "(Slot <3): Gets Toughness 8 and +95 HP.\n(Slot>1)[End step]: Swaps with the ally to his left and deals 15 damage to the leftmost foe.",
    "Rank": "Thaumaturgist"
  },
  {
    "Number": 40,
    "Name": "Marduk Urshan",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GRIP:CONTINUOUS",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=sum(count(add-player-faction|E);12)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:124",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed",
          "is-ready"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Range(L)",
    "AtkRange": 2,
    "AtkNature": "Revolver",
    "Atk": 125,
    "HP": 196,
    "Planning": 0,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK040",
    "Rarity": "Rare",
    "id": "OTK040",
    "Set": "Outbreak",
    "CardInSet": 40,
    "CardNumber": 40,
    "Description": "Grip. Toughness 12+Entropy.\n(Armed): Gets +124 HP.",
    "Rank": "Ambusher"
  },
  {
    "Number": 41,
    "Name": "Dusk",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:=first(multiply(count(add-player-females);3))",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "start-end-phase"
        ],
        "conditions": [
          "in-game"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Smash",
    "Atk": 66,
    "HP": 255,
    "Planning": 0,
    "Artist": "Alexia Oñate",
    "SetAndNumber": "OTK041",
    "Rarity": "Rare",
    "id": "OTK041",
    "Set": "Outbreak",
    "CardInSet": 41,
    "CardNumber": 41,
    "Description": "\n[End step]: Gets +2x[F] ATK. This ability triggers even if Dusk is not Ready.",
    "Rank": "Demolitionist"
  },
  {
    "Number": 42,
    "Name": "The Bannerwasps",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:42",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "player-has-played-[id]",
          "player-character-died-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "is-higher-or-equal:=first(count(add-player-non-binaries)):3",
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "RIOT:TRIGGERED:2",
            "filters": [
              "add-player-character-line",
              "last"
            ]
          }
        ],
        "triggers": [
          "start-fight-phase"
        ],
        "conditions": [
          "is-loyal",
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Smash",
    "Atk": 58,
    "HP": 233,
    "Planning": 0,
    "Artist": "Irma Matus",
    "SetAndNumber": "OTK042",
    "Rarity": "Rare",
    "id": "OTK042",
    "Set": "Outbreak",
    "CardInSet": 42,
    "CardNumber": 42,
    "Description": "(NB 3): Gets +42 ATK.\n(Loyal)[Fight step]: Rightmost ally Riots 2 to the right.",
    "Rank": "Agitator"
  },
  {
    "Number": 43,
    "Name": "Lucio Fernández",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:100",
            "filters": [
              "add-self"
            ]
          },
          {
            "headline": "TOUGHNESS:CONTINUOUS:17",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "card-has-been-moved-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-equal:=first(get-slot(add-self)):1"
        ]
      },
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:=multiply(get-live(add-technology-armed);11)",
            "filters": [
              "add-player-males",
              "remove-self"
            ]
          }
        ],
        "triggers": [
          "start-end-phase"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Heavy Handed Fists",
    "Atk": 82,
    "HP": 170,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK043",
    "Rarity": "Rare",
    "id": "OTK043",
    "Set": "Outbreak",
    "CardInSet": 43,
    "CardNumber": 43,
    "Description": "(Slot 1): Gets Toughness 17 and +100 HP.\n(Armed)[End step]: Your other [M] allies Heal 11xRES.",
    "Rank": "Poietes"
  },
  {
    "Number": 44,
    "Name": "Artaxerxes",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:80",
            "filters": [
              "add-opponent-character-line",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=multiply(count(add-player-faction|E);8)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "card-has-been-moved-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-higher:=first(get-slot(add-self)):2"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(L)",
    "AtkRange": 2,
    "AtkNature": "Assault Rifle",
    "Atk": 109,
    "HP": 201,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK044",
    "Rarity": "Rare",
    "id": "OTK044",
    "Set": "Outbreak",
    "CardInSet": 44,
    "CardNumber": 44,
    "Description": "[Arrive]: Deals 80 damage to the leftmost foe.\n(Slot >2): Gets Toughness 8xEntropy.",
    "Rank": "Strategist"
  },
  {
    "Number": 45,
    "Name": "Mangoose",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "FRIGHTEN:TRIGGERED",
            "filters": [
              "add-opponent-characters-slots|1"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-loyal"
        ]
      },
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:60",
            "filters": [
              "add-player-characters-faction|E",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "is-ready",
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:60",
            "filters": [
              "add-player-characters-faction|E",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-has-died-[id]"
        ],
        "conditions": []
      }
    ],
    "Gender": "Female",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Frontkick",
    "Atk": 88,
    "HP": 190,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK045",
    "Rarity": "Rare",
    "id": "OTK045",
    "Set": "Outbreak",
    "CardInSet": 45,
    "CardNumber": 45,
    "Description": "(Loyal)[Arrive]: Frightens foe in Slot 1. \n[Arrive] or [Dies]: Your leftmost Entropy ally Heals 60.",
    "Rank": "Strategist"
  },
  {
    "Number": 46,
    "Name": "Hyun-ki",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:30",
            "filters": [
              "add-player-relative-character|right|1",
              "add-player-relative-character|right|2",
              "add-player-relative-character|right|3",
              "first",
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-has-moved-a-board-card-[id]",
          "player-character-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-equal:=first(get-gender(add-player-relative-character|right|1)):FEMALE"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:18",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Range(R)",
    "AtkRange": 1,
    "AtkNature": "Heavy Handed Fists",
    "Atk": 60,
    "HP": 262,
    "Planning": 0,
    "Artist": "Rowein",
    "SetAndNumber": "OTK046",
    "Rarity": "Rare",
    "id": "OTK046",
    "Set": "Outbreak",
    "CardInSet": 46,
    "CardNumber": 46,
    "Description": "Toughness 18.\nAs long as ally to the right is [F], Hyun-ki and her both get +30 ATK.",
    "Rank": "Ambusher"
  },
  {
    "Number": 47,
    "Name": "Ulfhild",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "BERSERK:CONTINUOUS",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-live-changed-[id]",
          "card-damage-changed-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:16",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:=multiply(count(add-player-males);10)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "player-character-died-[id]",
          "player-technology-died-[id]",
          "player-has-played-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(R)",
    "AtkRange": 1,
    "AtkNature": "Slash",
    "Atk": 95,
    "HP": 218,
    "Planning": 0,
    "Artist": "Thor",
    "SetAndNumber": "OTK047",
    "Rarity": "Rare",
    "id": "OTK047",
    "Set": "Outbreak",
    "CardInSet": 47,
    "CardNumber": 47,
    "Description": "Berserk. Toughness 16.\nGets +10x[M] HP.",
    "Rank": "Berserk"
  },
  {
    "Number": 48,
    "Name": "Landvættir",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(get-live(add-technology-armed);15)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "card-armed-tech-damage-changed-[id]",
          "card-armed-tech-live-changed-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:18",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GRIP:CONTINUOUS",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Electricity",
    "Atk": 62,
    "HP": 280,
    "Planning": 0,
    "Artist": "Sara Contreras",
    "SetAndNumber": "OTK048",
    "Rarity": "Rare",
    "id": "OTK048",
    "Set": "Outbreak",
    "CardInSet": 48,
    "CardNumber": 48,
    "Description": "Grip. Toughness 18.\n(Armed): Gets + 15*RES ATK.",
    "Rank": "Chipper"
  },
  {
    "Number": 49,
    "Name": "Epsilon",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:=multiply(count(add-player-faction|E);-13)",
            "filters": [
              "add-rival"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(count(add-player-faction|O);-9)",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "card-planning-changed-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]",
          "card-has-been-moved-[id]",
          "player-has-played-[opponent-id]",
          "player-has-moved-a-board-card-[opponent-id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Cyber Attack",
    "Atk": 78,
    "HP": 248,
    "Planning": 0,
    "Artist": "Thor",
    "SetAndNumber": "OTK049",
    "Rarity": "Rare",
    "id": "OTK049",
    "Set": "Outbreak",
    "CardInSet": 49,
    "CardNumber": 49,
    "Description": "Rival gets -13xEntropy HP and -9xOwner ATK.",
    "Rank": "Martyr"
  },
  {
    "Number": 50,
    "Name": "Murder of Crows",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:9",
            "filters": [
              "add-player-non-binaries",
              "remove-self"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": []
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:=multiply(count(add-player-non-binaries);10)",
            "filters": [
              "add-opponent-hq"
            ]
          }
        ],
        "triggers": [
          "card-has-killed-a-character-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Slash",
    "Atk": 66,
    "HP": 230,
    "Planning": 0,
    "Artist": "Patricio Araya",
    "SetAndNumber": "OTK050",
    "Rarity": "Rare",
    "id": "OTK050",
    "Set": "Outbreak",
    "CardInSet": 50,
    "CardNumber": 50,
    "Description": "[Attack]: Other [NB] allies Heal 9.\n[Kill]: Deals 10x[NB] damage to the opposing HQ.",
    "Rank": "Tank"
  },
  {
    "Number": 51,
    "Name": "Colonel Galkin",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "BERSERK:CONTINUOUS",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-damage-changed-[id]",
          "card-live-changed-[id]"
        ],
        "conditions": [
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:=multiply(count(add-player-faction|I);3)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": []
      }
    ],
    "Gender": "Female",
    "AtkType": "Range(R)",
    "AtkRange": 1,
    "AtkNature": "One Shot Rifle",
    "Atk": 55,
    "HP": 291,
    "Planning": 0,
    "Artist": "Noelia Véliz",
    "SetAndNumber": "OTK051",
    "Rarity": "Rare",
    "id": "OTK051",
    "Set": "Outbreak",
    "CardInSet": 51,
    "CardNumber": 51,
    "Description": "Berserk.\n[Attack]: Gets +3xInhuman ATK.",
    "Rank": "Juicer"
  },
  {
    "Number": 52,
    "Name": "Cleo Pierce",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=sum(count(add-player-females);count(add-player-faction|I);8)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "FRIGHTEN:TRIGGERED",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-higher:=first(count(add-player-faction|I)):2"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Explosives",
    "Atk": 72,
    "HP": 245,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK052",
    "Rarity": "Rare",
    "id": "OTK052",
    "Set": "Outbreak",
    "CardInSet": 52,
    "CardNumber": 52,
    "Description": "Toughness 8+[F]+Inhuman.\n(Inhuman 3)[Arrive]: Frightens rival.",
    "Rank": "Tank"
  },
  {
    "Number": 53,
    "Name": "Gustav Bilyk",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:21",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:80",
            "filters": [
              "add-opponent-character-line",
              "most-healthy"
            ]
          }
        ],
        "triggers": [
          "card-has-died-[id]"
        ],
        "conditions": []
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Revolver",
    "Atk": 86,
    "HP": 240,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK053",
    "Rarity": "Rare",
    "id": "OTK053",
    "Set": "Outbreak",
    "CardInSet": 53,
    "CardNumber": 53,
    "Description": "Toughness 21.\n[Dies]: Deals 80 damage to the healthiest foe.",
    "Rank": "Junklord"
  },
  {
    "Number": 54,
    "Name": "Alia Oz",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:13",
            "filters": [
              "add-player-relative-character|left|1",
              "add-player-relative-character|left|2",
              "add-player-relative-character|left|3",
              "add-player-relative-character|left|4",
              "add-player-relative-character|left|5",
              "add-player-relative-character|left|6",
              "get-positions|0|1|2"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-moved-a-board-card-[id]",
          "player-has-played-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "is-loyal",
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Frontkick",
    "Atk": 79,
    "HP": 206,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK054",
    "Rarity": "Rare",
    "id": "OTK054",
    "Set": "Outbreak",
    "CardInSet": 54,
    "CardNumber": 54,
    "Description": "(Loyal): Up to 3 allies to the left get +13 ATK.",
    "Rank": "Trader"
  },
  {
    "Number": 55,
    "Name": "Admiral Galazzio",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:6",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-loyal",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:HP:40",
            "filters": [
              "add-self"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:ATK:10",
            "filters": [
              "add-partner-characters"
            ]
          }
        ],
        "triggers": [
          "card-has-killed-a-character-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(L)",
    "AtkRange": 3,
    "AtkNature": "Revolver",
    "Atk": 83,
    "HP": 257,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK055",
    "Rarity": "Rare",
    "id": "OTK055",
    "Set": "Outbreak",
    "CardInSet": 55,
    "CardNumber": 55,
    "Description": "(Loyal): Toughness 6.\n[Kill]: Gets +40 HP and Owners allies get +10 ATK.",
    "Rank": "Praefectus"
  },
  {
    "Number": 56,
    "Name": "Three Fists",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=multiply(count(add-player-faction|O);5)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-higher:=first(count(add-player-faction|O)):2"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:-15",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-has-been-moved-[id]",
          "player-has-played-[opponent-id]",
          "player-has-moved-a-board-card-[opponent-id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "is-equal:=first(get-slot(add-self)):1",
          "is-ready",
          "is-equal:=first(get-attack-type(add-rival)):BASIC"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Heavy Handed Fists",
    "Atk": 105,
    "HP": 307,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK056",
    "Rarity": "Rare",
    "id": "OTK056",
    "Set": "Outbreak",
    "CardInSet": 56,
    "CardNumber": 56,
    "Description": "Toughness 5xOwner.\n(Slot 1): As long as rival has Basic Attack Type, they get -15 ATK.",
    "Rank": "Interrogator"
  },
  {
    "Number": 57,
    "Name": "General Tanaka",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:37",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-has-been-moved-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "is-loyal",
          "is-lower:=first(get-slot(add-self)):3",
          "is-ready",
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "OBEY:TRIGGERED",
            "filters": [
              "add-opponent-character-line",
              "most-healthy"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:DAMAGE:50",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Revolver",
    "Atk": 70,
    "HP": 310,
    "Planning": 0,
    "Artist": "Javiera Díaz",
    "SetAndNumber": "OTK057",
    "Rarity": "Rare",
    "id": "OTK057",
    "Set": "Outbreak",
    "CardInSet": 57,
    "CardNumber": 57,
    "Description": "(Loyal & Slot <3): Gets +37 ATK.\n[Arrive]: Healthiest opponent Obeys. Then, Tanaka deals 50 damage to her rival.",
    "Rank": "Ruler"
  },
  {
    "Number": 58,
    "Name": "Isabel Bennett",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:RES:1",
            "filters": [
              "add-player-technology-line",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "is-loyal"
        ]
      },
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:100",
            "filters": [
              "add-player-character-line",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Range(L)",
    "AtkRange": 2,
    "AtkNature": "Martial Arts",
    "Atk": 77,
    "HP": 212,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK058",
    "Rarity": "Rare",
    "id": "OTK058",
    "Set": "Outbreak",
    "CardInSet": 58,
    "CardNumber": 58,
    "Description": "(Loyal)[Arrive]: Your leftmost Owner Tech gets +1 RES.\n[Arrive]: Leftmost ally Heals 100.",
    "Rank": "Interrogator"
  },
  {
    "Number": 59,
    "Name": "Ilyich",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:24",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-has-been-moved-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-equal:=first(get-slot(add-self)):1",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "OBEY:TRIGGERED",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Shotgun",
    "Atk": 84,
    "HP": 264,
    "Planning": 0,
    "Artist": "Isabel Bennett",
    "SetAndNumber": "OTK059",
    "Rarity": "Rare",
    "": " ",
    "id": "OTK059",
    "Set": "Outbreak",
    "CardInSet": 59,
    "CardNumber": 59,
    "Description": "(Slot 1): Toughness 24.\n[Arrive]: Rival Obeys.\n",
    "Rank": "Lobbyist"
  },
  {
    "Number": 60,
    "Name": "Spider Wolff",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:24",
            "filters": [
              "add-player-relative-character|left|1",
              "add-player-relative-character|right|1"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "is-higher-or-equal:=first(count(add-player-faction|O)):3",
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=multiply(count(add-player-faction|O);4)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Shotgun",
    "Atk": 91,
    "HP": 203,
    "Planning": 0,
    "Artist": "Genzo",
    "SetAndNumber": "OTK060",
    "Rarity": "Rare",
    "id": "OTK060",
    "Set": "Outbreak",
    "CardInSet": 60,
    "CardNumber": 60,
    "Description": "Toughness 4xOwner.\n(Owner 3): Adjacent allies get +24 ATK.",
    "Rank": "Trader"
  },
  {
    "Number": 61,
    "Name": "El-Baz",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:120",
            "filters": [
              "add-player-relative-character|right|1"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-moved-a-board-card-[id]",
          "player-has-played-[id]",
          "card-has-died-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-higher:=first(count(add-player-faction|A)):2"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(R)",
    "AtkRange": 2,
    "AtkNature": "Volition",
    "Atk": 82,
    "HP": 287,
    "Planning": 0,
    "Artist": "Gustavo Lara",
    "SetAndNumber": "OTK061",
    "Rarity": "Uncommon",
    "id": "OTK061",
    "Set": "Outbreak",
    "CardInSet": 61,
    "CardNumber": 61,
    "Description": "(Awaken 3): Ally to the right gets +120 HP.",
    "Rank": "Gatherer"
  },
  {
    "Number": 62,
    "Name": "The Warren",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=sum(count(add-player-non-binaries);8)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(count(add-player-non-binaries);7)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-character-died-[id]",
          "player-has-played-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "SWAP:TRIGGERED",
            "filters": [
              "add-player-character-line",
              "remove-self",
              "lowest|ATK",
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Revolver",
    "Atk": 76,
    "HP": 260,
    "Planning": 0,
    "Artist": "Matías Cabezas",
    "SetAndNumber": "OTK062",
    "Rarity": "Uncommon",
    "id": "OTK062",
    "Set": "Outbreak",
    "CardInSet": 62,
    "CardNumber": 62,
    "Description": "Toughness 8+[NB]. Gets +7x[NB] ATK.\n[Arrive]: Swaps with ally with the lowest ATK.",
    "Rank": "Maestro"
  },
  {
    "Number": 63,
    "Name": "Dr. Lee Park",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=sum(get-base-attack(add-rival);-52)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-moved-a-board-card-[id]",
          "player-has-moved-a-board-card-[opponent-id]",
          "player-has-played-[opponent-id]",
          "player-character-died-[opponent-id]",
          "card-planning-changed-[id]",
          "player-atk-changed-[opponent-id]"
        ],
        "conditions": [
          "is-ready",
          "in-game",
          "is-equal:=first(count(add-rival)):1"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Frontkick",
    "Atk": 52,
    "HP": 224,
    "Planning": 0,
    "Artist": "Patricio Araya",
    "SetAndNumber": "OTK063",
    "Rarity": "Uncommon",
    "id": "OTK063",
    "Set": "Outbreak",
    "CardInSet": 63,
    "CardNumber": 63,
    "Description": "Dr. Lee Park's base ATK is equal to her rival's, if any.",
    "Rank": "Medium"
  },
  {
    "Number": 64,
    "Name": "Sadiq",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:30",
            "filters": [
              "add-player-characters-faction|A",
              "remove-self",
              "first"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:HP:20",
            "filters": [
              "add-player-characters-faction|A",
              "remove-self",
              "first"
            ]
          }
        ],
        "triggers": [
          "player-has-played-[id]",
          "player-character-died-[id]",
          "card-arrive-[id]",
          "player-has-moved-a-board-card-[id]",
          "player-technology-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:36",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "player-has-played-[opponent-id]",
          "player-character-died-[opponent-id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-moved-a-board-card-[opponent-id]",
          "card-has-been-moved-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-loyal"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Assault Rifle",
    "Atk": 62,
    "HP": 250,
    "Planning": 0,
    "Artist": "José Huichamán",
    "SetAndNumber": "OTK064",
    "Rarity": "Uncommon",
    "id": "OTK064",
    "Set": "Outbreak",
    "CardInSet": 64,
    "CardNumber": 64,
    "Description": "Other leftmost Awaken ally gets (+30/+20).\n(Loyal): Toughness 28.",
    "Rank": "Medium"
  },
  {
    "Number": 65,
    "Name": "Poncho & Montgomery",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:12",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "start-draw-phase"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-wounded:53"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:13",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-planning-changed-[id]",
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-higher:=first(count(add-player-males)):2"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Heavy Handed Fists",
    "Atk": 94,
    "HP": 253,
    "Planning": 0,
    "Artist": "Felipe Araya",
    "SetAndNumber": "OTK065",
    "Rarity": "Uncommon",
    "id": "OTK065",
    "Set": "Outbreak",
    "CardInSet": 65,
    "CardNumber": 65,
    "Description": "(M 3): Gets Toughness 13.\n(HP<53%)[Draw step]: Heals 12.",
    "Rank": "Yoke"
  },
  {
    "Number": 66,
    "Name": "Ava Nasseri",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:80",
            "filters": [
              "add-self"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:HP:-40",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "is-loyal",
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Range(L)",
    "AtkRange": 3,
    "AtkNature": "Piercing",
    "Atk": 93,
    "HP": 242,
    "Planning": 0,
    "Artist": "Alexia Oñate",
    "SetAndNumber": "OTK066",
    "Rarity": "Uncommon",
    "id": "OTK066",
    "Set": "Outbreak",
    "CardInSet": 66,
    "CardNumber": 66,
    "Description": "(Loyal): Gets +80/-40.",
    "Rank": "Medium"
  },
  {
    "Number": 67,
    "Name": "Sofia Dunn",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=multiply(count(add-player-faction|E);3)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-loyal",
          "is-higher:=first(count(add-player-faction|E)):2"
        ]
      },
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:60",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-has-killed-a-character-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Martial Arts",
    "Atk": 57,
    "HP": 345,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK067",
    "Rarity": "Uncommon",
    "id": "OTK067",
    "Set": "Outbreak",
    "CardInSet": 67,
    "CardNumber": 67,
    "Description": "(Loyal & Entropy 3): Toughness 3xEntropy.\n[Kill]: Heals 60.",
    "Rank": "Assassin"
  },
  {
    "Number": 68,
    "Name": "Falstaff",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:27",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "is-loyal",
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:38",
            "filters": [
              "add-rival"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:ATK:8",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-armed"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Slash",
    "Atk": 72,
    "HP": 220,
    "Planning": 0,
    "Artist": "Sara Contreras",
    "SetAndNumber": "OTK068",
    "Rarity": "Uncommon",
    "id": "OTK068",
    "Set": "Outbreak",
    "CardInSet": 68,
    "CardNumber": 68,
    "Description": "(Loyal): Gets Toughness 27.\n[Pick-up]: Deals 38 damage to rival and gets +8 ATK.",
    "Rank": "Demolitionist"
  },
  {
    "Number": 69,
    "Name": "Mitrovic",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=multiply(count(add-player-faction|E);count(add-player-males))",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-opponent-relative-technology|same|0"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-opponent-relative-technology|same|0"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-opponent-relative-technology|same|0"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Slash",
    "Atk": 66,
    "HP": 271,
    "Planning": 0,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK069",
    "Rarity": "Uncommon",
    "id": "OTK069",
    "Set": "Outbreak",
    "CardInSet": 69,
    "CardNumber": 69,
    "Description": "Toughness Entropyx[M].\n[Arrive]: Hit the opposing Tech in Mitrovic's Slot 3 times.\n",
    "Rank": "Saboteur"
  },
  {
    "Number": 70,
    "Name": "Rashkov",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:-18",
            "filters": [
              "add-opponent-characters-with-atk-type|range(l)",
              "add-opponent-characters-with-atk-type|range(R)"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[opponent-id]",
          "card-has-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:8",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-damage-changed-[id]",
          "card-live-changed-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "is-ready",
          "in-game",
          "is-wounded:42"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Frontkick",
    "Atk": 81,
    "HP": 260,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK070",
    "Rarity": "Uncommon",
    "id": "OTK070",
    "Set": "Outbreak",
    "CardInSet": 70,
    "CardNumber": 70,
    "Description": "Foes with Ranged Attack Type get -18 ATK.\n(HP<42%): Gets Toughness 8.",
    "Rank": "Ambusher"
  },
  {
    "Number": 71,
    "Name": "Hendrickson",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:=multiply(count(add-player-faction|E);18)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "card-has-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-loyal"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(count(add-opponent-males);15)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[opponent-id]",
          "player-character-died-[opponent-id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(R)",
    "AtkRange": 2,
    "AtkNature": "Assault Rifle",
    "Atk": 77,
    "HP": 220,
    "Planning": 0,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK071",
    "Rarity": "Uncommon",
    "id": "OTK071",
    "Set": "Outbreak",
    "CardInSet": 71,
    "CardNumber": 71,
    "Description": "Gets +15 ATK for each M foe.\n(Loyal): Gets +18xEntropy HP.",
    "Rank": "Strategist"
  },
  {
    "Number": 72,
    "Name": "Nasrin",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(count(add-player-faction|E);count(add-player-faction|O);2)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:=multiply(get-live(add-technology-armed);4)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-armed"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Range(R)",
    "AtkRange": 1,
    "AtkNature": "Assault Rifle",
    "Atk": 61,
    "HP": 257,
    "Planning": 0,
    "Artist": "Raúl Maldonado Ikkitouch",
    "SetAndNumber": "OTK072",
    "Rarity": "Uncommon",
    "id": "OTK072",
    "Set": "Outbreak",
    "CardInSet": 72,
    "CardNumber": 72,
    "Description": "Gets +2xEntropyxOwner ATK.\n(Armed)[Attack]: Gets +4xRES ATK.",
    "Rank": "Tactician"
  },
  {
    "Number": 73,
    "Name": "Finn",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:22",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:54",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-has-killed-a-character-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Blast(R)",
    "AtkRange": 1,
    "AtkNature": "Missil",
    "Atk": 46,
    "HP": 294,
    "Planning": 1,
    "Artist": "Dreg",
    "SetAndNumber": "OTK073",
    "Rarity": "Uncommon",
    "id": "OTK073",
    "Set": "Outbreak",
    "CardInSet": 73,
    "CardNumber": 73,
    "Description": "Toughness 22.\n[Kill]: Heals 54.",
    "Rank": "Acolyte of Circuits"
  },
  {
    "Number": 74,
    "Name": "Lara Domain",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "BERSERK:CONTINUOUS",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-live-changed-[id]",
          "card-damage-changed-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:=multiply(count(add-player-females);8)",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-got-struck-[id]"
        ],
        "conditions": []
      },
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:69",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-has-killed-a-character-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Martial Arts",
    "Atk": 66,
    "HP": 220,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK074",
    "Rarity": "Uncommon",
    "id": "OTK074",
    "Set": "Outbreak",
    "CardInSet": 74,
    "CardNumber": 74,
    "Description": "Berserk.\n[Struck]: Deals 8x[F] damage to the rival.\n[Kill]: Heal 69. ",
    "Rank": "Acolyte of the Needle"
  },
  {
    "Number": 75,
    "Name": "Yui Koumoto",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=sum(5;count(add-player-females);count(add-player-faction|I))",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:=sum(20;multiply(count(add-player-females);count(add-player-faction|I)))",
            "filters": [
              "add-opponent-hq"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": []
      }
    ],
    "Gender": "Female",
    "AtkType": "Range(R)",
    "AtkRange": 1,
    "AtkNature": "Cyber Attack",
    "Atk": 71,
    "HP": 292,
    "Planning": 0,
    "Artist": "Genzo",
    "SetAndNumber": "OTK075",
    "Rarity": "Uncommon",
    "id": "OTK075",
    "Set": "Outbreak",
    "CardInSet": 75,
    "CardNumber": 75,
    "Description": "Toughnes 5+[F]+Inhuman.\n[Attack]: Deals 20+[F]xInhuman damage to the opposing HQ.",
    "Rank": "Chipper"
  },
  {
    "Number": 76,
    "Name": "Moody Mary",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:13",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": [
          "is-wounded:77"
        ]
      },
      {
        "effects": [
          {
            "headline": "BERSERK:CONTINUOUS",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-damage-changed-[id]",
          "card-live-changed-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Smash",
    "Atk": 66,
    "HP": 238,
    "Planning": 0,
    "Artist": "Javiera Díaz",
    "SetAndNumber": "OTK076",
    "Rarity": "Uncommon",
    "id": "OTK076",
    "Set": "Outbreak",
    "CardInSet": 76,
    "CardNumber": 76,
    "Description": "Berserk.\n(HP<77%)[Attack]: Heal 13.\n",
    "Rank": "Juicer"
  },
  {
    "Number": 77,
    "Name": "Grunting Grunts",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:=multiply(count(add-player-faction|I);10)",
            "filters": [
              "add-self"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(count(add-player-faction|I);4)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "is-higher-or-equal:=first(count(add-player-faction|I)):3",
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:12",
            "filters": [
              "add-player-characters-faction|I"
            ]
          }
        ],
        "triggers": [
          "card-has-killed-a-character-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-loyal"
        ]
      },
      {
        "effects": [
          {
            "headline": "BERSERK:CONTINUOUS",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-damage-changed-[id]",
          "card-live-changed-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Heavy Handed Fists",
    "Atk": 70,
    "HP": 240,
    "Planning": 0,
    "Artist": "Dreg",
    "SetAndNumber": "OTK077",
    "Rarity": "Uncommon",
    "id": "OTK077",
    "Set": "Outbreak",
    "CardInSet": 77,
    "CardNumber": 77,
    "Description": "Berserk. \n(Inhuman 3): Gets (+4/+10)xInhuman.\n(Loyal)[Kill]: Inhuman allies get +12 ATK.",
    "Rank": "Juicer"
  },
  {
    "Number": 78,
    "Name": "Mürag",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:36",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(count(add-player-faction|I);8)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "is-loyal",
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Slash",
    "Atk": 64,
    "HP": 210,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK078",
    "Rarity": "Uncommon",
    "id": "OTK078",
    "Set": "Outbreak",
    "CardInSet": 78,
    "CardNumber": 78,
    "Description": "Toughness 36.\n(Loyal): Gets +8xInhuman ATK.",
    "Rank": "Acolyte of Beryllium"
  },
  {
    "Number": 79,
    "Name": "Baranov",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:24",
            "filters": [
              "add-player-characters-slots|1|2|3"
            ]
          }
        ],
        "triggers": [
          "card-has-killed-a-character-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-higher:=first(get-slot(add-self)):2"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:9",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-planning-changed-[id]",
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Revolver",
    "Atk": 72,
    "HP": 244,
    "Planning": 0,
    "Artist": "Dreg",
    "SetAndNumber": "OTK079",
    "Rarity": "Uncommon",
    "id": "OTK079",
    "Set": "Outbreak",
    "CardInSet": 79,
    "CardNumber": 79,
    "Description": "Toughness 9.\n(Slot >2)[Kill]: Each ally in the first 3 slots Heals 24.",
    "Rank": "Interrogator"
  },
  {
    "Number": 80,
    "Name": "Maria Debeaumont",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:12",
            "filters": [
              "add-player-males",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-moved-a-board-card-[id]",
          "player-character-died-[id]",
          "player-has-played-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(count(add-player-males);-4)",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-moved-a-board-card-[id]",
          "player-has-moved-a-board-card-[opponent-id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]",
          "player-has-played-[opponent-id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-higher:=first(count(add-player-faction|O)):2"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Explosives",
    "Atk": 71,
    "HP": 212,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK080",
    "Rarity": "Uncommon",
    "id": "OTK080",
    "Set": "Outbreak",
    "CardInSet": 80,
    "CardNumber": 80,
    "Description": "Leftmost [M] ally gets Toughness 12.\n(Owner 3): Rival gets -4x[M] ATK.",
    "Rank": "Free Agent of Command"
  },
  {
    "Number": 81,
    "Name": "Petrorian",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:9",
            "filters": [
              "add-player-males",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-moved-a-board-card-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-loyal",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:10",
            "filters": [
              "add-player-males"
            ]
          }
        ],
        "triggers": [
          "card-has-died-[id]"
        ],
        "conditions": []
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(L)",
    "AtkRange": 2,
    "AtkNature": "Assault Rifle",
    "Atk": 83,
    "HP": 265,
    "Planning": 0,
    "Artist": "Felipe Araya",
    "SetAndNumber": "OTK081",
    "Rarity": "Uncommon",
    "id": "OTK081",
    "Set": "Outbreak",
    "CardInSet": 81,
    "CardNumber": 81,
    "Description": "(Loyal): Leftmost [M] ally gets Toughness 9.\n[Dies]: [M] allies get +10 ATK.",
    "Rank": "Free Agent of Command"
  },
  {
    "Number": 82,
    "Name": "Tadashi",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:62",
            "filters": [
              "add-player-females",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-moved-a-board-card-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:=multiply(count(add-player-females);5)",
            "filters": [
              "add-self"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-technology-armed"
            ]
          }
        ],
        "triggers": [
          "start-fight-phase"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-armed"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Slash",
    "Atk": 61,
    "HP": 321,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK082",
    "Rarity": "Uncommon",
    "id": "OTK082",
    "Set": "Outbreak",
    "CardInSet": 82,
    "CardNumber": 82,
    "Description": "Leftmost [F] ally gets +62 ATK.\n(Armed)[Fight step]: Gets +5x[F] ATK. Then, hit assigned Tech.",
    "Rank": "Free Agent Luxury"
  },
  {
    "Number": 83,
    "Name": "Gaby & Freya",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:-5",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": []
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:=multiply(count(add-player-females);10)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-has-killed-a-character-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Blast(R)",
    "AtkRange": 2,
    "AtkNature": "Smash",
    "Atk": 32,
    "HP": 278,
    "Planning": 1,
    "Artist": "Sara Contreras",
    "SetAndNumber": "OTK083",
    "Rarity": "Uncommon",
    "id": "OTK083",
    "Set": "Outbreak",
    "CardInSet": 83,
    "CardNumber": 83,
    "Description": "[Attack]: Gets -5 ATK.\n[Kill]: Gets +10x[F] ATK.",
    "Rank": "Hinger"
  },
  {
    "Number": 84,
    "Name": "Mr. Dunkel",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "OBEY:TRIGGERED",
            "filters": [
              "add-opponent-character-line",
              "last"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": []
      },
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:8",
            "filters": [
              "add-player-relative-character|left|1",
              "add-player-relative-character|left|2",
              "add-player-relative-character|left|3"
            ]
          }
        ],
        "triggers": [
          "start-draw-phase"
        ],
        "conditions": [
          "is-loyal",
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Revolver",
    "Atk": 79,
    "HP": 215,
    "Planning": 0,
    "Artist": "Sergio Lantadilla",
    "SetAndNumber": "OTK084",
    "Rarity": "Uncommon",
    "id": "OTK084",
    "Set": "Outbreak",
    "CardInSet": 84,
    "CardNumber": 84,
    "Description": "[Attack]: Rightmost foe Obeys.\n(Loyal) [Draw step]: Up to 3 allies to the left Heal 8.",
    "Rank": "Lobbyist"
  },
  {
    "Number": 85,
    "Name": "Peshmerga Rebel Cell",
    "CardType": "Character",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=sum(first(count(add-player-non-binaries));12)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "RIOT:TRIGGERED:1",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Range(R)",
    "AtkRange": 1,
    "AtkNature": "Assault Rifle",
    "Atk": 82,
    "HP": 282,
    "Planning": 0,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK085",
    "Rarity": "Uncommon",
    "id": "OTK085",
    "Set": "Outbreak",
    "CardInSet": 85,
    "CardNumber": 85,
    "Description": "Toughness 12+[NB].\n[Arrive]: Riots 1 to the right.",
    "Rank": "Undeviant"
  },
  {
    "Number": 86,
    "Name": "Shinjuku Gang",
    "CardType": "Character",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "FRIGHTEN:TRIGGERED",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "start-fight-phase"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Slash",
    "Atk": 80,
    "HP": 220,
    "Planning": 0,
    "Artist": "Javiera Díaz",
    "SetAndNumber": "OTK086",
    "Rarity": "Uncommon",
    "id": "OTK086",
    "Set": "Outbreak",
    "CardInSet": 86,
    "CardNumber": 86,
    "Description": "[Fight step]: Frightens rival.",
    "Rank": "Undeviant"
  },
  {
    "Number": 87,
    "Name": "Hired Ops Team",
    "CardType": "Character",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "BERSERK:CONTINUOUS",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-damage-changed-[id]",
          "card-live-changed-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=multiply(first(count(add-player-non-binaries));5)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-damage-changed-[id]",
          "card-live-changed-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-opponent-technology-line",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-opponent-technology-line",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "is-ready",
          "in-game",
          "is-higher:=first(count(add-player-characters-faction|A)):0"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-opponent-technology-line",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "is-ready",
          "in-game",
          "is-higher:=first(count(add-player-characters-faction|E)):0"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-opponent-technology-line",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "is-ready",
          "in-game",
          "is-higher:=first(count(add-player-characters-faction|I)):0"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-opponent-technology-line",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "is-ready",
          "in-game",
          "is-higher:=first(count(add-player-characters-faction|O)):0"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Assault Rifle",
    "Atk": 92,
    "HP": 210,
    "Planning": 0,
    "Artist": "Carlos Moreno",
    "SetAndNumber": "OTK087",
    "Rarity": "Uncommon",
    "id": "OTK087",
    "Set": "Outbreak",
    "CardInSet": 87,
    "CardNumber": 87,
    "Description": "Berserk. Toughness 5x[NB].\n[Arrive]: Hit leftmost opposing Tech once. Repeat this process for each different Faction among allies.",
    "Rank": "Undeviant"
  },
  {
    "Number": 88,
    "Name": "Lt. Krammerman",
    "CardType": "Character",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=multiply(first(count(add-player-females));2)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:=multiply(first(count(add-player-females));2)",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-got-struck-[id]"
        ],
        "conditions": []
      }
    ],
    "Gender": "Female",
    "AtkType": "Blast(L)",
    "AtkRange": 2,
    "AtkNature": "Assault Rifle",
    "Atk": 31,
    "HP": 247,
    "Planning": 0,
    "Artist": "Alexia Oñate",
    "SetAndNumber": "OTK088",
    "Rarity": "Uncommon",
    "id": "OTK088",
    "Set": "Outbreak",
    "CardInSet": 88,
    "CardNumber": 88,
    "Description": "Toughness 2x[F].\n[Struck]: Deal 2x[F] damage to the rival.",
    "Rank": "Undeviant"
  },
  {
    "Number": 89,
    "Name": "Giuseppe Mori",
    "CardType": "Character",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(first(count(add-player-males));8)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "player-has-played-[id]",
          "player-character-died-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:100",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-has-killed-a-character-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Slash",
    "Atk": 82,
    "HP": 260,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK089",
    "Rarity": "Uncommon",
    "id": "OTK089",
    "Set": "Outbreak",
    "CardInSet": 89,
    "CardNumber": 89,
    "Description": "Gets +[M]x[M] ATK.\n[Kill]: Heals 100.",
    "Rank": "Undeviant"
  },
  {
    "Number": 90,
    "Name": "Adil Nasseri",
    "CardType": "Character",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:-45",
            "filters": [
              "add-opponent-relative-character|left|1",
              "add-opponent-relative-character|right|1"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:ATK:-40",
            "filters": [
              "add-opponent-character-line",
              "last"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-moved-a-board-card-[opponent-id]",
          "card-has-been-moved-[id]",
          "card-damage-changed-[id]",
          "card-live-changed-[id]",
          "player-has-played-[opponent-id]"
        ],
        "conditions": [
          "is-healthy:25",
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(R)",
    "AtkRange": 1,
    "AtkNature": "Piercing",
    "Atk": 76,
    "HP": 246,
    "Planning": 0,
    "Artist": "Patricio Araya",
    "SetAndNumber": "OTK090",
    "Rarity": "Uncommon",
    "id": "OTK090",
    "Set": "Outbreak",
    "CardInSet": 90,
    "CardNumber": 90,
    "Description": "(HP>25%): Foes adjacent to rival both get -45 HP and rightmost foe gets -40 ATK.",
    "Rank": "Undeviant"
  },
  {
    "Number": 91,
    "Name": "Cassie Hayes",
    "CardType": "Character",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:13",
            "filters": [
              "add-player-females",
              "first"
            ]
          }
        ],
        "triggers": [
          "player-character-died-[id]"
        ],
        "conditions": [
          "is-last",
          "is-ready",
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "OBEY:TRIGGERED",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Frontkick",
    "Atk": 72,
    "HP": 237,
    "Planning": 0,
    "Artist": "Rowein",
    "SetAndNumber": "OTK091",
    "Rarity": "Uncommon",
    "id": "OTK091",
    "Set": "Outbreak",
    "CardInSet": 91,
    "CardNumber": 91,
    "Description": "(Rightmost): Whenever an ally [Dies], your leftmost [F] ally gets +13 ATK.\n[Arrive]: Rival Obeys.",
    "Rank": "Undeviant"
  },
  {
    "Number": 92,
    "Name": "Clockdown",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(count(add-player-males);10)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "player-has-played-[id]",
          "player-character-died-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:HP:=multiply(count(add-player-faction|A);count(add-player-faction|E);6)",
            "filters": [
              "add-player-characters-faction|A",
              "first",
              "add-player-characters-faction|E",
              "get-positions|0|1"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Frontkick",
    "Atk": 85,
    "HP": 220,
    "Planning": 0,
    "Artist": "Koi",
    "SetAndNumber": "OTK092",
    "Rarity": "Common",
    "id": "OTK092",
    "Set": "Outbreak",
    "CardInSet": 92,
    "CardNumber": 92,
    "Description": "Gets +10x[M] ATK.\n[Arrive]: Leftmost Entropy and leftmost Awaken allies both get +6x(AwakenxEntropy) HP.",
    "Rank": "Yoke"
  },
  {
    "Number": 93,
    "Name": "Vole",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [],
    "Gender": "Non Binary",
    "AtkType": "Blast(R)",
    "AtkRange": 2,
    "AtkNature": "Cyber Attack",
    "Atk": 38,
    "HP": 297,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK093",
    "Rarity": "Common",
    "id": "OTK093",
    "Set": "Outbreak",
    "CardInSet": 93,
    "CardNumber": 93,
    "Description": "Textless",
    "Rank": "Monk"
  },
  {
    "Number": 94,
    "Name": "Starry Louise",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:9",
            "filters": [
              "add-player-females"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:40",
            "filters": [
              "add-player-character-line",
              "lowest|ATK"
            ]
          }
        ],
        "triggers": [
          "card-has-died-[id]"
        ],
        "conditions": [
          "is-loyal"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Revolver",
    "Atk": 72,
    "HP": 233,
    "Planning": 0,
    "Artist": "Javiera Díaz",
    "SetAndNumber": "OTK094",
    "Rarity": "Common",
    "id": "OTK094",
    "Set": "Outbreak",
    "CardInSet": 94,
    "CardNumber": 94,
    "Description": "[F] allies get Toughness 9.\n(Loyal)[Dies]: Ally with the lowest ATK gets +40 ATK. ",
    "Rank": "Monk"
  },
  {
    "Number": 95,
    "Name": "Weye Tahiel",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=sum(count(add-player-faction|A);count(add-player-faction|I);9)",
            "filters": [
              "add-player-non-binaries"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=sum(multiply(count(add-player-faction|A);count(add-player-faction|I));10)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Volition",
    "Atk": 112,
    "HP": 204,
    "Planning": 0,
    "Artist": "Dreg",
    "SetAndNumber": "OTK095",
    "Rarity": "Common",
    "id": "OTK095",
    "Set": "Outbreak",
    "CardInSet": 95,
    "CardNumber": 95,
    "Description": "Toughness 10+(AwakenxInhuman).\n[NB] allies get +9+Awaken+Inhuman ATK.",
    "Rank": "Eye Sage"
  },
  {
    "Number": 96,
    "Name": "Kelsey K",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(count(add-player-females);10)",
            "filters": [
              "add-player-females",
              "first"
            ]
          }
        ],
        "triggers": [
          "player-has-moved-a-board-card-[id]",
          "player-character-died-[id]",
          "player-has-played-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:RES:1",
            "filters": [
              "add-player-technology-line",
              "last"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": []
      }
    ],
    "Gender": "Female",
    "AtkType": "Range(R)",
    "AtkRange": 1,
    "AtkNature": "Explosives",
    "Atk": 78,
    "HP": 312,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK096",
    "Rarity": "Common",
    "id": "OTK096",
    "Set": "Outbreak",
    "CardInSet": 96,
    "CardNumber": 96,
    "Description": "Leftmost [F] ally gets +10x[F] ATK.\n[Attack]: Your rightmost Tech gets +1 RES.",
    "Rank": "Yoke"
  },
  {
    "Number": 97,
    "Name": "Feste",
    "CardType": "Character",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=multiply(count(add-player-non-binaries);4)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "card-has-been-moved-[id]",
          "player-has-played-[opponent-id]",
          "player-has-moved-a-board-card-[opponent-id]",
          "player-character-died-[opponent-id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:=multiply(sum(count(add-opponent-males);count(add-opponent-females));12)",
            "filters": [
              "add-self"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:HP:=multiply(sum(count(add-opponent-males);count(add-opponent-females));5)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Volition",
    "Atk": 80,
    "HP": 236,
    "Planning": 0,
    "Artist": "Tae Valenzuela",
    "SetAndNumber": "OTK097",
    "Rarity": "Common",
    "id": "OTK097",
    "Set": "Outbreak",
    "CardInSet": 97,
    "CardNumber": 97,
    "Description": "Toughness 4x[NB].\n[Arrive]: Gets +12/+5 for each [F] and [M] foe.",
    "Rank": "Eye Sage"
  },
  {
    "Number": 98,
    "Name": "Lexie",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=multiply(sum(count(add-player-faction|A);count(add-player-faction|I);count(add-player-faction|O));4)",
            "filters": [
              "add-player-characters-faction|E"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:=multiply(4;count(add-player-faction|E))",
            "filters": [
              "add-player-characters-faction|A"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:HP:=multiply(8;count(add-player-faction|E))",
            "filters": [
              "add-player-characters-faction|I"
            ]
          },
          {
            "headline": "HEAL:TRIGGERED:=multiply(11;count(add-player-faction|E))",
            "filters": [
              "add-player-characters-faction|O"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Slash",
    "Atk": 64,
    "HP": 243,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK098",
    "Rarity": "Common",
    "id": "OTK098",
    "Set": "Outbreak",
    "CardInSet": 98,
    "CardNumber": 98,
    "Description": "Entropy allies get Toughness 4x(Awaken+Inhuman+Owner).\n[Arrive]: Awaken allies get +4xEntropy ATK. Inhuman allies get +8xEntropy HP. Owner allies Heal 11xEntropy.",
    "Rank": "Rebel"
  },
  {
    "Number": 99,
    "Name": "Eryn Eryn",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=multiply(first(count(add-player-faction|I));5)",
            "filters": [
              "add-player-characters-faction|E"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "RIOT:TRIGGERED:2",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-got-struck-[id]"
        ],
        "conditions": [
          "is-higher:=first(get-slot(add-self)):1"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Slash",
    "Atk": 98,
    "HP": 244,
    "Planning": 0,
    "Artist": "Carlos Moreno",
    "SetAndNumber": "OTK099",
    "Rarity": "Common",
    "id": "OTK099",
    "Set": "Outbreak",
    "CardInSet": 99,
    "CardNumber": 99,
    "Description": "Entropy allies get Toughness 5xInhuman.\n(Slot>1)[Struck]: Riots 2 to the right.",
    "Rank": "Rebel"
  },
  {
    "Number": 100,
    "Name": "Amir Elnaiem",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [],
    "Gender": "Non Binary",
    "AtkType": "Blast",
    "AtkRange": 1,
    "AtkNature": "Slash",
    "Atk": 38,
    "HP": 250,
    "Planning": 0,
    "Artist": "Rowein",
    "SetAndNumber": "OTK100",
    "Rarity": "Common",
    "id": "OTK100",
    "Set": "Outbreak",
    "CardInSet": 100,
    "CardNumber": 100,
    "Description": "Textless",
    "Rank": "Tactician"
  },
  {
    "Number": 101,
    "Name": "Ryder Dallas",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:10",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:29",
            "filters": [
              "add-player-males",
              "remove-self",
              "last"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:ATK:29",
            "filters": [
              "add-player-characters-faction|E",
              "remove-self",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-played-[id]",
          "player-has-moved-a-board-card-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Smash",
    "Atk": 85,
    "HP": 241,
    "Planning": 0,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK101",
    "Rarity": "Common",
    "id": "OTK101",
    "Set": "Outbreak",
    "CardInSet": 101,
    "CardNumber": 101,
    "Description": "Toughness 10.\nOther rightmost [M] ally gets +29 ATK. \nOther leftmost Entropy ally gets +29 ATK.",
    "Rank": "Artisan"
  },
  {
    "Number": 102,
    "Name": "Milly & Gilly",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:22",
            "filters": [
              "add-player-characters-faction|E"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:ATK:23",
            "filters": [
              "add-player-non-binaries"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "is-equal:=first(count(add-player-characters-faction|E)):2",
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "RIOT:TRIGGERED:2",
            "filters": [
              "add-player-character-line",
              "last"
            ]
          }
        ],
        "triggers": [
          "card-got-struck-[id]"
        ],
        "conditions": [
          "is-lower:=first(get-slot(add-self)):3"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Smash",
    "Atk": 72,
    "HP": 290,
    "Planning": 0,
    "Artist": "Catalina Carlesi",
    "SetAndNumber": "OTK102",
    "Rarity": "Common",
    "id": "OTK102",
    "Set": "Outbreak",
    "CardInSet": 102,
    "CardNumber": 102,
    "Description": "(Entropy allies =2): Entropy allies get Toughness 22 and [NB] allies get +23 ATK.\n(Slot <3)[Struck]: Rightmost ally Riots 2 to the right.",
    "Rank": "Rebel"
  },
  {
    "Number": 103,
    "Name": "Jerick",
    "CardType": "Character",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:=multiply(sum(count(add-opponent-females);count(add-opponent-non-binaries));3)",
            "filters": [
              "add-opponent-hq"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": []
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:-30",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "is-equal:=first(count(add-self;add-rival;highest|ATK;remove-self)):1",
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Slash",
    "Atk": 70,
    "HP": 214,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK103",
    "Rarity": "Common",
    "id": "OTK103",
    "Set": "Outbreak",
    "CardInSet": 103,
    "CardNumber": 103,
    "Description": "[Arrive]: If rival has higher ATK than Jerick, they get -30 ATK.\n[Attack]: Deals 3 damage to opposing HQ for each foe that is [F] or [NB]. ",
    "Rank": "Artisan"
  },
  {
    "Number": 104,
    "Name": "Josie Sankoh",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:-5",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "start-development-phase"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Slash",
    "Atk": 70,
    "HP": 274,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK104",
    "Rarity": "Common",
    "id": "OTK104",
    "Set": "Outbreak",
    "CardInSet": 104,
    "CardNumber": 104,
    "Description": "[Dev step]: Rival gets -5 ATK.",
    "Rank": "Proven"
  },
  {
    "Number": 105,
    "Name": "Mubarak",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:8",
            "filters": [
              "add-player-non-binaries"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:12",
            "filters": [
              "add-player-non-binaries"
            ]
          }
        ],
        "triggers": [
          "card-has-killed-a-character-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Assault Rifle",
    "Atk": 108,
    "HP": 189,
    "Planning": 0,
    "Artist": "Dreg",
    "SetAndNumber": "OTK105",
    "Rarity": "Common",
    "id": "OTK105",
    "Set": "Outbreak",
    "CardInSet": 105,
    "CardNumber": 105,
    "Description": "[NB] allies get Toughness 8.\n[Kill]: [NB] allies get +12 ATK.",
    "Rank": "Proven"
  },
  {
    "Number": 106,
    "Name": "Al-Hafeez",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [],
    "Gender": "Male",
    "AtkType": "Blast(R)",
    "AtkRange": 2,
    "AtkNature": "Shotgun",
    "Atk": 27,
    "HP": 283,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK106",
    "Rarity": "Common",
    "id": "OTK106",
    "Set": "Outbreak",
    "CardInSet": 106,
    "CardNumber": 106,
    "Description": "Textless",
    "Rank": "Fresh Meat"
  },
  {
    "Number": 107,
    "Name": "Vex Nation",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "FRIGHTEN:TRIGGERED",
            "filters": [
              "add-opponent-characters-slots|1"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-opponent-technology-line"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-opponent-technology-line"
            ]
          }
        ],
        "triggers": [
          "card-has-died-[id]"
        ],
        "conditions": []
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Slash",
    "Atk": 76,
    "HP": 220,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK107",
    "Rarity": "Common",
    "id": "OTK107",
    "Set": "Outbreak",
    "CardInSet": 107,
    "CardNumber": 107,
    "Description": "[Arrive]: Frightens foe in Slot 1.\n[Arrive] or [Dies]: Hits each opposing Tech once.",
    "Rank": "Proven"
  },
  {
    "Number": 108,
    "Name": "Lenny Boi",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=sum(count(add-player-faction|O);6)",
            "filters": [
              "add-player-characters-faction|I"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "FRIGHTEN:TRIGGERED",
            "filters": [
              "add-opponent-characters-slots|1"
            ]
          }
        ],
        "triggers": [
          "start-fight-phase"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-equal:=first(get-faction(add-player-characters-slots|1)):OWNER"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Smash",
    "Atk": 74,
    "HP": 246,
    "Planning": 0,
    "Artist": "Sergio Lantadilla",
    "SetAndNumber": "OTK108",
    "Rarity": "Common",
    "id": "OTK108",
    "Set": "Outbreak",
    "CardInSet": 108,
    "CardNumber": 108,
    "Description": "Inhuman allies get Toughness 6+Owner.\n[Fight step]: If there's an Owner ally in Slot 1, Frighten their rival.",
    "Rank": "Fresh Meat"
  },
  {
    "Number": 109,
    "Name": "The Jackals",
    "CardType": "Character",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(first(count(add-player-non-binaries));4)",
            "filters": [
              "add-self"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:HP:=multiply(first(count(add-player-non-binaries));10)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "player-has-played-[id]",
          "player-character-died-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:-10",
            "filters": [
              "add-rival"
            ]
          },
          {
            "headline": "FRIGHTEN:TRIGGERED",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "start-fight-phase"
        ],
        "conditions": [
          "is-loyal",
          "in-game",
          "is-ready",
          "is-equal:=first(get-faction(add-rival)):AWAKEN"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Explosives",
    "Atk": 60,
    "HP": 249,
    "Planning": 0,
    "Artist": "Patricio Araya",
    "SetAndNumber": "OTK109",
    "Rarity": "Common",
    "id": "OTK109",
    "Set": "Outbreak",
    "CardInSet": 109,
    "CardNumber": 109,
    "Description": "Gets (+4/+10)x[NB].\n(Loyal)[Fight step]: If rival is Awaken, they get -10 ATK. Then, Frighten them.",
    "Rank": "Proven"
  },
  {
    "Number": 110,
    "Name": "Jasper",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [],
    "Gender": "Male",
    "AtkType": "Blast",
    "AtkRange": 1,
    "AtkNature": "Slash",
    "Atk": 37,
    "HP": 186,
    "Planning": 0,
    "Artist": " Daniel Vega",
    "SetAndNumber": "OTK110",
    "Rarity": "Common",
    "id": "OTK110",
    "Set": "Outbreak",
    "CardInSet": 110,
    "CardNumber": 110,
    "Description": "Textless",
    "Rank": "Intern"
  },
  {
    "Number": 111,
    "Name": "Sphynx",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:=multiply(count(add-player-females);5)",
            "filters": [
              "add-opponent-males",
              "add-opponent-non-binaries"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Female",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Revolver",
    "Atk": 62,
    "HP": 239,
    "Planning": 0,
    "Artist": "Dreg",
    "SetAndNumber": "OTK111",
    "Rarity": "Common",
    "id": "OTK111",
    "Set": "Outbreak",
    "CardInSet": 111,
    "CardNumber": 111,
    "Description": "[Arrive]: Deals 5x[F] damage to every [M] and [NB] foe.",
    "Rank": "Hinger"
  },
  {
    "Number": 112,
    "Name": "Fyodor Volkov",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(first(count(add-player-faction|O));11)",
            "filters": [
              "add-player-characters-faction|A"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:HP:=multiply(first(count(add-player-faction|O));19)",
            "filters": [
              "add-player-characters-faction|A"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=multiply(first(count(add-player-faction|A));4)",
            "filters": [
              "add-player-characters-faction|O"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-higher:=first(count(add-player-faction|A)):2"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Slash",
    "Atk": 80,
    "HP": 243,
    "Planning": 0,
    "Artist": "Dreg",
    "SetAndNumber": "OTK112",
    "Rarity": "Common",
    "id": "OTK112",
    "Set": "Outbreak",
    "CardInSet": 112,
    "CardNumber": 112,
    "Description": "Awaken allies get (+11/+19)xOwner.\n(Awaken 3): Owner allies get Toughness 4xAwaken.",
    "Rank": "Hinger"
  },
  {
    "Number": 113,
    "Name": "Junichiro",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:8",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready",
          "is-loyal"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:=multiply(first(count(add-player-non-binaries));4)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-has-killed-a-character-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Slash",
    "Atk": 67,
    "HP": 256,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK113",
    "Rarity": "Common",
    "id": "OTK113",
    "Set": "Outbreak",
    "CardInSet": 113,
    "CardNumber": 113,
    "Description": "(Loyal): Gets Toughness 8.\n[Kill]: Gets +4xNB ATK.",
    "Rank": "Intern"
  },
  {
    "Number": 114,
    "Name": "Reinhold",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:=multiply(get-live(add-technology-armed);30)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "card-armed-tech-live-changed-[id]",
          "card-armed-tech-damage-changed-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:19",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-has-been-moved-[id]",
          "card-planning-changed-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Smash",
    "Atk": 97,
    "HP": 242,
    "Planning": 0,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK114",
    "Rarity": "Common",
    "id": "OTK114",
    "Set": "Outbreak",
    "CardInSet": 114,
    "CardNumber": 114,
    "Description": "Toughness 19.\n(Armed): Gets +30xRES HP.\n",
    "Rank": "Hinger"
  },
  {
    "Number": 115,
    "Name": "Qui Long",
    "CardType": "Character",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:20",
            "filters": [
              "add-player-relative-character|left|1",
              "add-player-relative-character|left|2",
              "add-player-relative-character|left|3",
              "add-player-relative-character|left|4",
              "get-positions|0|1"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:-22",
            "filters": [
              "add-opponent-character-line",
              "first"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "is-loyal",
          "in-game",
          "is-ready",
          "is-equal:=first(get-faction(add-opponent-character-line;first)):ENTROPY"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(L)",
    "AtkRange": 3,
    "AtkNature": "Revolver",
    "Atk": 74,
    "HP": 261,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK115",
    "Rarity": "Common",
    "id": "OTK115",
    "Set": "Outbreak",
    "CardInSet": 115,
    "CardNumber": 115,
    "Description": "[Arrive]: Up to 2 allies to the left get +20 ATK.\n(Loyal) [Arrive]: If the leftmost foe is Entropy, they get -22 ATK. ",
    "Rank": "Intern"
  },
  {
    "Number": 116,
    "Name": "Rahmi",
    "CardType": "Character",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(get-live(add-technology-armed);10)",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "card-armed-tech-damage-changed-[id]",
          "card-armed-tech-live-changed-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:13",
            "filters": [
              "add-player-relative-character|right|1",
              "add-player-relative-character|right|2",
              "add-player-relative-character|right|3",
              "add-player-relative-character|right|4",
              "add-player-relative-character|right|5",
              "add-player-relative-character|right|6",
              "get-positions|0|1|2"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": [
          "is-lower:=first(get-slot(add-self)):3"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(R)",
    "AtkRange": 1,
    "AtkNature": "Missil",
    "Atk": 81,
    "HP": 349,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK116",
    "Rarity": "Common",
    "id": "OTK116",
    "Set": "Outbreak",
    "CardInSet": 116,
    "CardNumber": 116,
    "Description": "(Armed): Gets +10xRES ATK.\n(Slot <3)[Attack]: Up to 3 allies to the right get +13 ATK each.",
    "Rank": "Undeviant"
  },
  {
    "Number": 117,
    "Name": "Leon Radić",
    "CardType": "Character",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:-45",
            "filters": [
              "add-rival",
              "add-opponent-relative-character|right|1",
              "add-opponent-relative-character|left|1"
            ]
          }
        ],
        "triggers": [
          "player-has-played-[opponent-id]",
          "player-character-died-[id]",
          "player-has-moved-a-board-card-[opponent-id]",
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "card-has-been-moved-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:-25",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-planning-changed-[id]",
          "player-has-played-[opponent-id]",
          "player-character-died-[opponent-id]",
          "card-has-been-moved-[id]",
          "player-has-moved-a-board-card-[opponent-id]"
        ],
        "conditions": [
          "is-ready",
          "in-game",
          "is-equal:=first(get-attack-type(add-rival)):BASIC"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Revolver",
    "Atk": 72,
    "HP": 346,
    "Planning": 0,
    "Artist": "Thor",
    "SetAndNumber": "OTK117",
    "Rarity": "Common",
    "id": "OTK117",
    "Set": "Outbreak",
    "CardInSet": 117,
    "CardNumber": 117,
    "Description": "As long as rival has Basic Attack Type, they get -25 ATK.\nRival and adjacent foes get -45 HP.",
    "Rank": "Undeviant"
  },
  {
    "Number": 118,
    "Name": "Ottavia Ricci",
    "CardType": "Character",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:11",
            "filters": [
              "add-player-relative-character|right|1",
              "add-player-relative-character|left|1"
            ]
          }
        ],
        "triggers": [
          "card-got-struck-[id]"
        ],
        "conditions": []
      },
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:31",
            "filters": [
              "add-player-character-line"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-has-died-[id]"
        ],
        "conditions": []
      }
    ],
    "Gender": "Female",
    "AtkType": "Range(R)",
    "AtkRange": 1,
    "AtkNature": "Shotgun",
    "Atk": 73,
    "HP": 420,
    "Planning": 2,
    "Artist": "Javier Bahamonde",
    "SetAndNumber": "OTK118",
    "Rarity": "Common",
    "id": "OTK118",
    "Set": "Outbreak",
    "CardInSet": 118,
    "CardNumber": 118,
    "Description": "[Struck]: Regardless of Ottavia Ricci's planning, adjacent allies Heal 11.\n[Dies]: Allies Heal 31.",
    "Rank": "Undeviant"
  },
  {
    "Number": 119,
    "Name": "Sargento Cárdenas",
    "CardType": "Character",
    "Faction": "Undeviant",
    "Ability": [],
    "Gender": "Male",
    "AtkType": "Blast(R)",
    "AtkRange": 1,
    "AtkNature": "Shotgun",
    "Atk": 41,
    "HP": 287,
    "Planning": 0,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK119",
    "Rarity": "Common",
    "id": "OTK119",
    "Set": "Outbreak",
    "CardInSet": 119,
    "CardNumber": 119,
    "Description": "Textless",
    "Rank": "Undeviant"
  },
  {
    "Number": 120,
    "Name": "Clayton Harris, P.I",
    "CardType": "Character",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:-30",
            "filters": [
              "add-player-characters-with-atk-type|BLAST",
              "add-opponent-characters-with-atk-type|BLAST",
              "add-player-characters-with-atk-type|BLAST(L)",
              "add-opponent-characters-with-atk-type|BLAST(L)",
              "add-player-characters-with-atk-type|BLAST(R)",
              "add-opponent-characters-with-atk-type|BLAST(R)"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "Gender": "Male",
    "AtkType": "Range(L)",
    "AtkRange": 1,
    "AtkNature": "Cyber Attack",
    "Atk": 95,
    "HP": 252,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK120",
    "Rarity": "Common",
    "id": "OTK120",
    "Set": "Outbreak",
    "CardInSet": 120,
    "CardNumber": 120,
    "Description": "[Arrive]: Characters with Blast Attack Type get -30 ATK.",
    "Rank": "Undeviant"
  },
  {
    "Number": 121,
    "Name": "Arthur LaRue",
    "CardType": "Character",
    "Faction": "Undeviant",
    "Ability": [],
    "Gender": "Male",
    "AtkType": "Blast(L)",
    "AtkRange": 1,
    "AtkNature": "Frontkick",
    "Atk": 46,
    "HP": 212,
    "Planning": 0,
    "Artist": "Rowein",
    "SetAndNumber": "OTK121",
    "Rarity": "Common",
    "id": "OTK121",
    "Set": "Outbreak",
    "CardInSet": 121,
    "CardNumber": 121,
    "Description": "Textless",
    "Rank": "Undeviant"
  },
  {
    "Number": 122,
    "Name": "Cisneros",
    "CardType": "Character",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:-16",
            "filters": [
              "add-opponent-character-line",
              "get-positions|0|1"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": []
      }
    ],
    "Gender": "Non Binary",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Slash",
    "Atk": 115,
    "HP": 230,
    "Planning": 0,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK122",
    "Rarity": "Common",
    "id": "OTK122",
    "Set": "Outbreak",
    "CardInSet": 122,
    "CardNumber": 122,
    "Description": "[Attack]: The 2 leftmost foes get -16 ATK each.",
    "Rank": "Undeviant"
  },
  {
    "Number": 123,
    "Name": "Lyudmila",
    "CardType": "Technology",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:50",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:RANGE:2",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "is-equal:=first(get-attack-type(add-character-armed)):RANGE(L)"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:RANGE:2",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "is-ready",
          "is-equal:=first(get-attack-type(add-character-armed)):RANGE(R)"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:48",
            "filters": [
              "add-opponent-hq"
            ]
          }
        ],
        "triggers": [
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "AtkNature": "One Shot Rifle",
    "Res": 2,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK123",
    "Rarity": "Legendary",
    "id": "OTK123",
    "Set": "Outbreak",
    "CardInSet": 123,
    "CardNumber": 123,
    "Description": "User gets +50 ATK. As long as the user has Ranged Attack Type, they add +2 to their Range.\n[Drop]: Deal 48 damage to the rightmost foe.",
    "Class": "FireArm",
    "Atk": 0
  },
  {
    "Number": 124,
    "Name": "Airshutter",
    "CardType": "Technology",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(count(add-player-faction|A);9)",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:30",
            "filters": [
              "add-opponent-hq"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": [
          "is-loyal"
        ]
      }
    ],
    "AtkNature": "Missil",
    "Res": 2,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK124",
    "Rarity": "Legendary",
    "id": "OTK124",
    "Set": "Outbreak",
    "CardInSet": 124,
    "CardNumber": 124,
    "Description": "User gets +9xAwaken ATK.\n(Loyal)[Attack]: Deals 30 damage to the opposing HQ.",
    "Class": "Explosive",
    "Atk": 0
  },
  {
    "Number": 125,
    "Name": "The Panther",
    "CardType": "Technology",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:7",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:ATK:36",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:2",
            "filters": [
              "add-player-characters-faction|E"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:ATK:5",
            "filters": [
              "add-player-characters-faction|E"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "is-loyal"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 3,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK125",
    "Rarity": "Legendary",
    "id": "OTK125",
    "Set": "Outbreak",
    "CardInSet": 125,
    "CardNumber": 125,
    "Description": "User gets Toughness 7 and +36 ATK.\n(Loyal): Entropy allies get Toughness 2 and +5 ATK.",
    "Class": "Vehicle",
    "Atk": 0
  },
  {
    "Number": 126,
    "Name": "Oathmaker",
    "CardType": "Technology",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:=multiply(count(add-player-faction|E);3)",
            "filters": [
              "add-opponent-hq"
            ]
          }
        ],
        "triggers": [
          "start-draw-phase"
        ],
        "conditions": [
          "in-game",
          "is-loyal",
          "is-armed",
          "without-basal-planning"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:=multiply(count(add-player-faction|E);4)",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "RIOT:TRIGGERED:-1",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "start-end-phase"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "without-basal-planning"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 2,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK126",
    "Rarity": "Legendary",
    "id": "OTK126",
    "Set": "Outbreak",
    "CardInSet": 126,
    "CardNumber": 126,
    "Description": "(Loyal)[Draw step]: If General Planning is 0, deals 3xEntropy damage to the opposing HQ.\n[End step]: If General Planning is 0, user gets +4xEntropy ATK. Then, Riots 1 to the left.",
    "Class": "Enhancer",
    "Atk": 0
  },
  {
    "Number": 127,
    "Name": "St. Trophime",
    "CardType": "Technology",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:=multiply(5;count(add-player-faction|I))",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "start-fight-phase"
        ],
        "conditions": [
          "in-game",
          "is-armed",
          "is-ready"
        ]
      }
    ],
    "AtkNature": "Slash",
    "Res": 3,
    "Artist": "Alexia Oñate",
    "SetAndNumber": "OTK127",
    "Rarity": "Legendary",
    "id": "OTK127",
    "Set": "Outbreak",
    "CardInSet": 127,
    "CardNumber": 127,
    "Description": "[Fight- step]: User gets +5xInhuman ATK. Hit this Tech once. ",
    "Class": "WhiteArm",
    "Atk": 0
  },
  {
    "Number": 128,
    "Name": "Azrael's Needles",
    "CardType": "Technology",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:40",
            "filters": [
              "add-opponent-character-line",
              "last"
            ]
          }
        ],
        "triggers": [
          "start-end-phase"
        ],
        "conditions": [
          "in-game",
          "is-armed",
          "without-basal-planning"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:17",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-ready"
        ]
      }
    ],
    "AtkNature": "Slash",
    "Res": 2,
    "Artist": "Felipe Araya",
    "SetAndNumber": "OTK128",
    "Rarity": "Legendary",
    "id": "OTK128",
    "Set": "Outbreak",
    "CardInSet": 128,
    "CardNumber": 128,
    "Description": "User gets +17 ATK.\n[End step]: If General Planning is 0, deal 40 Damage to the rightmost foe.",
    "Class": "Sabotage,WhiteArm",
    "Atk": 0
  },
  {
    "Number": 129,
    "Name": "Watchbear",
    "CardType": "Technology",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:15",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:HP:60",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:45",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "start-draw-phase"
        ],
        "conditions": [
          "in-game",
          "is-lower:=first(get-slot(add-self)):3"
        ]
      }
    ],
    "AtkNature": "Revolver",
    "Res": 2,
    "Artist": "Felipe Araya",
    "SetAndNumber": "OTK129",
    "Rarity": "Legendary",
    "id": "OTK129",
    "Set": "Outbreak",
    "CardInSet": 129,
    "CardNumber": 129,
    "Description": "Automated. User gets +15/+60.\n(Slot <3)[Draw step]: Deals 45 damage to the rival.\n",
    "Class": "Automaton,FireArm",
    "Atk": 0
  },
  {
    "Number": 130,
    "Name": "Mother",
    "CardType": "Technology",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "OBEY:TRIGGERED",
            "filters": [
              "add-opponent-most-wounded-character"
            ]
          }
        ],
        "triggers": [
          "start-development-phase"
        ],
        "conditions": [
          "in-game",
          "without-basal-planning"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:30",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 3,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK130",
    "Rarity": "Legendary",
    "id": "OTK130",
    "Set": "Outbreak",
    "CardInSet": 130,
    "CardNumber": 130,
    "Description": "Automated. User gets +30 ATK.\n[Dev step]:If General Planning is 0, the most wounded foe Obeys.",
    "Class": "Automaton",
    "Atk": 0
  },
  {
    "Number": 131,
    "Name": "Temazcal",
    "CardType": "Technology",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:60",
            "filters": [
              "add-player-character-line",
              "add-opponent-character-line"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game",
          "without-basal-planning"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:88",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game"
        ]
      }
    ],
    "AtkNature": "Volition",
    "Res": 2,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK131",
    "Rarity": "Rare",
    "id": "OTK131",
    "Set": "Outbreak",
    "CardInSet": 131,
    "CardNumber": 131,
    "Description": "Automated. User gets +88 ATK.\n[Arrive]: If General Planning is 0, Characters Heal 60.",
    "Class": "Automaton,Enhancer",
    "Atk": 0
  },
  {
    "Number": 132,
    "Name": "Dancing Dazer",
    "CardType": "Technology",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:5",
            "filters": [
              "add-player-character-line",
              "add-opponent-character-line"
            ]
          }
        ],
        "triggers": [
          "start-draw-phase"
        ],
        "conditions": [
          "in-game",
          "is-armed",
          "without-basal-planning"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:120",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 2,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK132",
    "Rarity": "Rare",
    "id": "OTK132",
    "Set": "Outbreak",
    "CardInSet": 132,
    "CardNumber": 132,
    "Description": "Automated. User gets +120 HP.\n[Draw step]: If General Planning is 0, Characters get +5 ATK.",
    "Class": "Enhancer,Sabotage",
    "Atk": 0
  },
  {
    "Number": 133,
    "Name": "Bloodsuckers",
    "CardType": "Technology",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:-40",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-moved-a-board-card-[opponent-id]",
          "card-has-been-moved-[id]",
          "player-has-played-[opponent-id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:42",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:40",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-got-struck-[id]"
        ],
        "conditions": []
      }
    ],
    "AtkNature": "None",
    "Res": 2,
    "Artist": "Dreg",
    "SetAndNumber": "OTK133",
    "Rarity": "Rare",
    "id": "OTK133",
    "Set": "Outbreak",
    "CardInSet": 133,
    "CardNumber": 133,
    "Description": "Automated. User gets +42 ATK and rival gets -40 HP.\n[Struck]: Deals 40 Damage to the rival.\n",
    "Class": "Automaton,Sabotage",
    "Atk": 0
  },
  {
    "Number": 134,
    "Name": "Dethroner",
    "CardType": "Technology",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GRIP:CONTINUOUS",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=sum(first(count(add-player-faction|E));9)",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:ATK:=sum(first(count(add-player-faction|E));18)",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      }
    ],
    "AtkNature": "Missil",
    "Res": 4,
    "Artist": "Genzo",
    "SetAndNumber": "OTK134",
    "Rarity": "Rare",
    "id": "OTK134",
    "Set": "Outbreak",
    "CardInSet": 134,
    "CardNumber": 134,
    "Description": "Grip. User gets Toughness 9+Entropy and +18+Entropy ATK.\n",
    "Class": "Explosive,Vehicle",
    "Atk": 0
  },
  {
    "Number": 135,
    "Name": "Double Boomer",
    "CardType": "Technology",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:45",
            "filters": [
              "add-opponent-hq"
            ]
          }
        ],
        "triggers": [
          "start-end-phase"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "without-basal-planning"
        ]
      }
    ],
    "AtkNature": "Missil",
    "Res": 3,
    "Artist": "Felipe Araya",
    "SetAndNumber": "OTK135",
    "Rarity": "Rare",
    "id": "OTK135",
    "Set": "Outbreak",
    "CardInSet": 135,
    "CardNumber": 135,
    "Description": "[End step]: If General Planning is 0, deal 45 damage to the opposing HQ.",
    "Class": "Explosive",
    "Atk": 0
  },
  {
    "Number": 136,
    "Name": "B-37 Razer",
    "CardType": "Technology",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:25",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:HP:100",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:17",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      }
    ],
    "AtkNature": "Missil",
    "Res": 2,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK136",
    "Rarity": "Rare",
    "id": "OTK136",
    "Set": "Outbreak",
    "CardInSet": 136,
    "CardNumber": 136,
    "Description": "User gets Toughness 25 and +100 HP.\n[Pick-up]: User gets +17 ATK.",
    "Class": "Armor,Vehicle",
    "Atk": 0
  },
  {
    "Number": 137,
    "Name": "Stinger",
    "CardType": "Technology",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:22",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "start-development-phase"
        ],
        "conditions": [
          "in-game",
          "without-basal-planning"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:32",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      }
    ],
    "AtkNature": "Revolver",
    "Res": 2,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK137",
    "Rarity": "Rare",
    "id": "OTK137",
    "Set": "Outbreak",
    "CardInSet": 137,
    "CardNumber": 137,
    "Description": "Automated. User gets +32 ATK.\n[Dev step]: If General Planning is 0, deal 22 damage to the rival.\n",
    "Class": "Automaton,FireArm",
    "Atk": 0
  },
  {
    "Number": 138,
    "Name": "MS-021",
    "CardType": "Technology",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GRIP:CONTINUOUS",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:27",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "TOUGHNESS:CONTINUOUS:9",
            "filters": [
              "add-player-relative-character|left|1",
              "add-player-relative-character|right|1"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]",
          "player-has-moved-a-board-card-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 3,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK138",
    "Rarity": "Rare",
    "id": "OTK138",
    "Set": "Outbreak",
    "CardInSet": 138,
    "CardNumber": 138,
    "Description": "User gets Grip and Toughness 27. Adjacent allies get Toughness 9.",
    "Class": "Armor",
    "Atk": 0
  },
  {
    "Number": 139,
    "Name": "Time Waster",
    "CardType": "Technology",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:80",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:=multiply(count(add-player-faction|A);4)",
            "filters": [
              "add-opponent-character-line"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]"
        ],
        "conditions": [
          "in-game"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 3,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK139",
    "Rarity": "Uncommon",
    "id": "OTK139",
    "Set": "Outbreak",
    "CardInSet": 139,
    "CardNumber": 139,
    "Description": "Automated. User gets +80 HP.\n[Arrive]: Deals 4xAwaken damage to each foe.",
    "Class": "Automaton,Sabotage",
    "Atk": 0
  },
  {
    "Number": 140,
    "Name": "Fast Map Toolkit",
    "CardType": "Technology",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:-25",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-has-been-moved-[id]",
          "card-drop-technology-[id]",
          "player-has-moved-a-board-card-[opponent-id]",
          "player-has-played-[opponent-id]"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:RES:1",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:=multiply(first(get-live(add-self));5)",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "start-development-phase"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 1,
    "Artist": "Sara Contreras",
    "SetAndNumber": "OTK140",
    "Rarity": "Uncommon",
    "id": "OTK140",
    "Set": "Outbreak",
    "CardInSet": 140,
    "CardNumber": 140,
    "Description": "Rival gets -25 ATK.\n[Pick up]: Gets +1 RES.\n[Dev step]: User gets +5xRES ATK.",
    "Class": "Enhancer",
    "Atk": 0
  },
  {
    "Number": 141,
    "Name": "Yellow Battleflag",
    "CardType": "Technology",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:200",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:9",
            "filters": [
              "add-player-characters-faction|E"
            ]
          }
        ],
        "triggers": [
          "player-character-died-[opponent-id]"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "is-loyal",
          "is-higher:=first(count(add-player-faction|E)):2"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 2,
    "Artist": "Patricio Araya",
    "SetAndNumber": "OTK141",
    "Rarity": "Uncommon",
    "id": "OTK141",
    "Set": "Outbreak",
    "CardInSet": 141,
    "CardNumber": 141,
    "Description": "User gets +200 HP.\n(Loyal & Entropy 3): Whenever a foe dies, your Entropy allies get +9 ATK.",
    "Class": "Enhancer",
    "Atk": 0
  },
  {
    "Number": 142,
    "Name": "Darkling Rover",
    "CardType": "Technology",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:16",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(first(count(add-player-faction|E));8)",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      }
    ],
    "AtkNature": "Assault Rifle",
    "Res": 2,
    "Artist": "Carlos Moreno",
    "SetAndNumber": "OTK142",
    "Rarity": "Uncommon",
    "id": "OTK142",
    "Set": "Outbreak",
    "CardInSet": 142,
    "CardNumber": 142,
    "Description": "User gets Toughness 16 and +8xEntropy ATK.",
    "Class": "FireArm,Vehicle",
    "Atk": 0
  },
  {
    "Number": 143,
    "Name": "First Grader",
    "CardType": "Technology",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:75",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:-10",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": []
      }
    ],
    "AtkNature": "Heavy Handed Fists",
    "Res": 4,
    "Artist": "Carlos Moreno",
    "SetAndNumber": "OTK143",
    "Rarity": "Uncommon",
    "id": "OTK143",
    "Set": "Outbreak",
    "CardInSet": 143,
    "CardNumber": 143,
    "Description": "User gets +75 ATK. \n[Attack]: User gets -10 ATK. Hit this Tech once.\n",
    "Class": "Enhancer",
    "Atk": 0
  },
  {
    "Number": 144,
    "Name": "Bull-Up 3x",
    "CardType": "Technology",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "BERSERK:CONTINUOUS",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-user-damage-changed-[id]",
          "card-user-live-changed-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:35",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:=multiply(first(count(add-player-faction|I));2)",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:HP:35",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]",
          "player-has-played-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "is-loyal"
        ]
      }
    ],
    "AtkNature": "Heavy Handed Fists",
    "Res": 1,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK144",
    "Rarity": "Uncommon",
    "id": "OTK144",
    "Set": "Outbreak",
    "CardInSet": 144,
    "CardNumber": 144,
    "Description": "User gets Berserk and +35 HP.\n(Loyal): User gets Toughness 2xInhuman and +35 HP.",
    "Class": "Enhancer",
    "Atk": 0
  },
  {
    "Number": 145,
    "Name": "Spy-flies",
    "CardType": "Technology",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:-55",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-moved-a-board-card-[opponent-id]",
          "player-has-played-[opponent-id]",
          "card-has-been-moved-[id]",
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-loyal"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:64",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "player-has-moved-a-board-card-[opponent-id]",
          "player-character-died-[opponent-id]",
          "player-has-played-[opponent-id]",
          "card-has-been-moved-[id]",
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed",
          "is-equal:=first(get-faction(add-rival)):AWAKEN"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:64",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "player-has-moved-a-board-card-[opponent-id]",
          "player-character-died-[opponent-id]",
          "player-has-played-[opponent-id]",
          "card-has-been-moved-[id]",
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed",
          "is-equal:=first(get-faction(add-rival)):ENTROPY"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:64",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "player-has-moved-a-board-card-[opponent-id]",
          "player-character-died-[opponent-id]",
          "player-has-played-[opponent-id]",
          "card-has-been-moved-[id]",
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed",
          "is-equal:=first(get-faction(add-rival)):INHUMAN"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:64",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "player-has-moved-a-board-card-[opponent-id]",
          "player-character-died-[opponent-id]",
          "player-has-played-[opponent-id]",
          "card-has-been-moved-[id]",
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed",
          "is-equal:=first(get-faction(add-rival)):UNDEVIANT"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 2,
    "Artist": "Carlos Moreno",
    "SetAndNumber": "OTK145",
    "Rarity": "Uncommon",
    "NFT Serial #": 0,
    "id": "OTK145",
    "Set": "Outbreak",
    "CardInSet": 145,
    "CardNumber": 145,
    "Description": "Automated. As long as rival is not Owner, user gets +64 ATK.\n(Loyal): Rival gets -55 ATK.",
    "Class": "Automaton,Sabotage",
    "Atk": 0
  },
  {
    "Number": 146,
    "Name": "C-14",
    "CardType": "Technology",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:19",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:35",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed",
          "is-lower:=first(get-slot(add-self)):3"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 4,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK146",
    "Rarity": "Uncommon",
    "id": "OTK146",
    "Set": "Outbreak",
    "CardInSet": 146,
    "CardNumber": 146,
    "Description": "User gets Toughness 19.\n(Slot <3): User gets +35 ATK.",
    "Class": "Armor,Enhancer",
    "Atk": 0
  },
  {
    "Number": 147,
    "Name": "Lucky Bento Box",
    "CardType": "Technology",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:8",
            "filters": [
              "add-player-non-binaries"
            ]
          }
        ],
        "triggers": [
          "start-development-phase"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:60",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "start-end-phase"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "is-lower:=first(get-health(add-character-armed)):80"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 3,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK147",
    "Rarity": "Uncommon",
    "id": "OTK147",
    "Set": "Outbreak",
    "CardInSet": 147,
    "CardNumber": 147,
    "Description": "[Dev step]: [NB] allies Heal 8.\n(User's HP<80%)[End step]: User Heals 60. Hit this Tech once.",
    "Class": "Enhancer",
    "Atk": 0
  },
  {
    "Number": 148,
    "Name": "Escape Pod",
    "CardType": "Technology",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:22",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "is-equal:=first(get-gender(add-character-armed)):MALE"
        ]
      },
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:120",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "start-fight-phase"
        ],
        "conditions": [
          "in-game",
          "is-armed",
          "is-lower:=first(get-health(add-character-armed)):25"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 2,
    "Artist": "Javier Bahamonde",
    "SetAndNumber": "OTK148",
    "Rarity": "Uncommon",
    "id": "OTK148",
    "Set": "Outbreak",
    "CardInSet": 148,
    "CardNumber": 148,
    "Description": "As long as user is [M], he gets +22 ATK.\n(User's HP<25%)[Pick-up] or [Fight step]: User Heals 120. Hit this Tech once.",
    "Class": "Enhancer",
    "Atk": 0
  },
  {
    "Number": 149,
    "Name": "Enhanced Taser",
    "CardType": "Technology",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:35",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed",
          "is-equal:=first(get-gender(add-character-armed)):FEMALE"
        ]
      },
      {
        "effects": [
          {
            "headline": "FRIGHTEN:TRIGGERED",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      }
    ],
    "AtkNature": "Electricity",
    "Res": 1,
    "Artist": "Javier Bahamonde",
    "SetAndNumber": "OTK149",
    "Rarity": "Uncommon",
    "id": "OTK149",
    "Set": "Outbreak",
    "CardInSet": 149,
    "CardNumber": 149,
    "Description": "As long as user is [F], she gets +35 ATK.  \n[Pick-up]: User Frightens rival.",
    "Class": "Enhancer,FireArm",
    "Atk": 0
  },
  {
    "Number": 150,
    "Name": "Lobotomizer",
    "CardType": "Technology",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GRIP:CONTINUOUS",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:HP:100",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-opponent-technology-line",
              "last"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-opponent-technology-line",
              "last"
            ]
          }
        ],
        "triggers": [
          "start-end-phase"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:RES:-1",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-has-killed-a-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      }
    ],
    "AtkNature": "Cyber Attack",
    "Res": 3,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK150",
    "Rarity": "Common",
    "id": "OTK150",
    "Set": "Outbreak",
    "CardInSet": 150,
    "CardNumber": 150,
    "Description": "User gets Grip and +100 HP.\n[End step]: Hit the rightmost opposing Tech once. Repeat.\n[Destroy]: Gets -1 RES.",
    "Class": "Sabotage",
    "Atk": 0
  },
  {
    "Number": 151,
    "Name": "Modular Leech",
    "CardType": "Technology",
    "Faction": "Awaken",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:-35",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "card-has-been-moved-[id]",
          "player-has-moved-a-board-card-[opponent-id]",
          "player-has-played-[opponent-id]"
        ],
        "conditions": [
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:20",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:HP:30",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-loyal",
          "is-armed"
        ]
      }
    ],
    "AtkNature": "Cyber Attack",
    "Res": 1,
    "Artist": "Manuel Rivera",
    "SetAndNumber": "OTK151",
    "Rarity": "Common",
    "id": "OTK151",
    "Set": "Outbreak",
    "CardInSet": 151,
    "CardNumber": 151,
    "Description": "Automated. Rival gets -35 ATK. \n(Loyal): User gets +20/+30.",
    "Class": "Automaton,Sabotage",
    "Atk": 0
  },
  {
    "Number": 152,
    "Name": "Lysso's Eyes",
    "CardType": "Technology",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GRIP:CONTINUOUS",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:55",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:HP:30",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:20",
            "filters": [
              "add-player-characters-faction|E",
              "is-armed"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:HP:10",
            "filters": [
              "add-player-characters-faction|E",
              "is-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]",
          "player-has-played-[id]",
          "player-has-moved-a-board-card-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "is-loyal"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 3,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK152",
    "Rarity": "Common",
    "id": "OTK152",
    "Set": "Outbreak",
    "CardInSet": 152,
    "CardNumber": 152,
    "Description": "User gets Grip and +55/+30.\n(Loyal): Armed Entropy allies get +20/+10.",
    "Class": "Enhancer",
    "Atk": 0
  },
  {
    "Number": 153,
    "Name": "Retirement Plan",
    "CardType": "Technology",
    "Faction": "Entropy",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:60",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:120",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-got-struck-[id]"
        ],
        "conditions": []
      }
    ],
    "AtkNature": "None",
    "Res": 1,
    "Artist": "Gonzo Snow",
    "SetAndNumber": "OTK153",
    "Rarity": "Common",
    "id": "OTK153",
    "Set": "Outbreak",
    "CardInSet": 153,
    "CardNumber": 153,
    "Description": "Automated. User gets +60 ATK.\n[Struck]: Deal 120 damage to the rival.\n",
    "Class": "Explosive,Vehicle",
    "Atk": 0
  },
  {
    "Number": 154,
    "Name": "Acid Tank",
    "CardType": "Technology",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:10",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:-10",
            "filters": [
              "add-opponent-character-line"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[opponent-id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]"
        ],
        "conditions": [
          "in-game",
          "is-higher:=first(count(add-player-faction|I)):2"
        ]
      }
    ],
    "AtkNature": "Poison",
    "Res": 1,
    "Artist": "Daniel Vega",
    "SetAndNumber": "OTK154",
    "Rarity": "Common",
    "id": "OTK154",
    "Set": "Outbreak",
    "CardInSet": 154,
    "CardNumber": 154,
    "Description": "Automated. User gets Toughness 10.\n(Inhuman 3): Foes get -10 ATK.",
    "Class": "Automaton,Sabotage",
    "Atk": 0
  },
  {
    "Number": 155,
    "Name": "Yaba",
    "CardType": "Technology",
    "Faction": "Inhuman",
    "Ability": [
      {
        "effects": [
          {
            "headline": "TOUGHNESS:CONTINUOUS:21",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:ATK:64",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      }
    ],
    "AtkNature": "Heavy Handed Fists",
    "Res": 2,
    "Artist": "Romina Cares",
    "SetAndNumber": "OTK155",
    "Rarity": "Common",
    "id": "OTK155",
    "Set": "Outbreak",
    "CardInSet": 155,
    "CardNumber": 155,
    "Description": "User gets Toughness 21 and +64 ATK.",
    "Class": "Enhancer",
    "Atk": 0
  },
  {
    "Number": 156,
    "Name": "Red Council",
    "CardType": "Technology",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:15",
            "filters": [
              "add-player-characters-faction|O"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]"
        ],
        "conditions": [
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:ATK:=multiply(first(count(add-player-faction|O));8)",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]",
          "player-has-played-[id]",
          "player-character-died-[id]",
          "player-technology-died-[id]",
          "card-has-been-moved-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "is-loyal",
          "is-equal:=first(get-slot(add-self)):1"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 2,
    "Artist": "Gustavo Lara",
    "SetAndNumber": "OTK156",
    "Rarity": "Common",
    "id": "OTK156",
    "Set": "Outbreak",
    "CardInSet": 156,
    "CardNumber": 156,
    "Description": "Automated. Owner allies get +15 HP.\n(Loyal & Slot 1): User gets +8xOwner ATK.",
    "Class": "Enhancer",
    "Atk": 0
  },
  {
    "Number": 157,
    "Name": "Scarlet Strainer",
    "CardType": "Technology",
    "Faction": "Owner",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:HP:60",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-self",
              "add-opponent-relative-technology|same|0"
            ]
          }
        ],
        "triggers": [
          "start-draw-phase"
        ],
        "conditions": [
          "in-game",
          "without-basal-planning",
          "is-equal:=first(count(add-opponent-relative-technology|same|0)):1"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 2,
    "Artist": "Javier Bahamonde",
    "SetAndNumber": "OTK157",
    "Rarity": "Common",
    "id": "OTK157",
    "Set": "Outbreak",
    "CardInSet": 157,
    "CardNumber": 157,
    "Description": "Automated. User gets +60 HP.\n[Draw step]: If there's an opposing Tech in Scarlet Strainer's Slot, hit both Techs once.",
    "Class": "Enhancer",
    "Atk": 0
  },
  {
    "Number": 158,
    "Name": "Kevlar",
    "CardType": "Technology",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GRIP:CONTINUOUS",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "TOUGHNESS:CONTINUOUS:28",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 2,
    "Artist": "Dreg",
    "SetAndNumber": "OTK158",
    "Rarity": "Common",
    "id": "OTK158",
    "Set": "Outbreak",
    "CardInSet": 158,
    "CardNumber": 158,
    "Description": "User gets Grip and Toughness 28.",
    "Class": "Armor",
    "Atk": 0
  },
  {
    "Number": 159,
    "Name": "Home Stereo",
    "CardType": "Technology",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:25",
            "filters": [
              "add-opponent-character-line",
              "last"
            ]
          }
        ],
        "triggers": [
          "start-draw-phase",
          "start-end-phase"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      }
    ],
    "AtkNature": "Missil",
    "Res": 1,
    "Artist": "Felipe Araya",
    "SetAndNumber": "OTK159",
    "Rarity": "Common",
    "id": "OTK159",
    "Set": "Outbreak",
    "CardInSet": 159,
    "CardNumber": 159,
    "Description": "[Draw step] or [End step]: User deals 25 Damage to the rightmost foe.",
    "Class": "Explosive",
    "Atk": 0
  },
  {
    "Number": 160,
    "Name": "Bull Spikes",
    "CardType": "Technology",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:65",
            "filters": [
              "add-rival"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-equal:=first(count(add-rival)):1"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:DAMAGE:60",
            "filters": [
              "add-rival"
            ]
          }
        ],
        "triggers": [
          "card-got-struck-[id]"
        ],
        "conditions": []
      }
    ],
    "AtkNature": "None",
    "Res": 4,
    "Artist": "Pamela Meza",
    "SetAndNumber": "OTK160",
    "Rarity": "Common",
    "id": "OTK160",
    "Set": "Outbreak",
    "CardInSet": 160,
    "CardNumber": 160,
    "Description": "Automated. \n[Drop]: Deals 65 damage to the rival. Hit this Tech once.\n[Struck]: Deals 60 damage to the rival.",
    "Class": "Sabotage",
    "Atk": 0
  },
  {
    "Number": 161,
    "Name": "Molotov Cocktail",
    "CardType": "Technology",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:=multiply(first(get-live(add-self));-8)",
            "filters": [
              "add-rival",
              "add-opponent-relative-character|left|1",
              "add-opponent-relative-character|right|1"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "is-higher:=first(count(add-rival;add-opponent-relative-character|left|1;add-opponent-relative-character|right|1)):0"
        ]
      }
    ],
    "AtkNature": "Explosives",
    "Res": 3,
    "Artist": "José Huichamán",
    "SetAndNumber": "OTK161",
    "Rarity": "Common",
    "id": "OTK161",
    "Set": "Outbreak",
    "CardInSet": 161,
    "CardNumber": 161,
    "Description": "[Attack]: Rival and adjacent foes get -8xRES ATK. Hit this Tech once.",
    "Class": "Explosive",
    "Atk": 0
  },
  {
    "Number": 162,
    "Name": "Tacos",
    "CardType": "Technology",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:75",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "is-lower:=first(get-health(add-character-armed)):40"
        ]
      },
      {
        "effects": [
          {
            "headline": "HEAL:TRIGGERED:40",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "start-end-phase"
        ],
        "conditions": [
          "is-armed",
          "in-game",
          "is-lower:=first(get-health(add-character-armed)):30"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 4,
    "Artist": "Catalina Carlesi",
    "SetAndNumber": "OTK162",
    "Rarity": "Common",
    "id": "OTK162",
    "Set": "Outbreak",
    "CardInSet": 162,
    "CardNumber": 162,
    "Description": "(User's HP<40%)[Pick-up]: User Heals 75. Hit this Tech once.\n(User's HP<30%)[End step]: User Heals 40. Hit this Tech once.",
    "Class": "Enhancer",
    "Atk": 0
  },
  {
    "Number": 163,
    "Name": "Panopticon",
    "CardType": "Technology",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GRIP:CONTINUOUS",
            "filters": [
              "add-character-armed"
            ]
          },
          {
            "headline": "GETS:CONTINUOUS:HP:90",
            "filters": [
              "add-character-armed"
            ]
          }
        ],
        "triggers": [
          "card-pick-up-technology-[id]",
          "card-drop-technology-[id]"
        ],
        "conditions": [
          "in-game",
          "is-armed"
        ]
      },
      {
        "effects": [
          {
            "headline": "GETS:CONTINUOUS:RANGE:1",
            "filters": [
              "add-player-characters-with-atk-type|RANGE(L)",
              "add-player-characters-with-atk-type|RANGE(R)"
            ]
          }
        ],
        "triggers": [
          "card-arrive-[id]",
          "player-has-played-[id]"
        ],
        "conditions": [
          "in-game"
        ]
      }
    ],
    "AtkNature": "None",
    "Res": 3,
    "Artist": "Sebastián Franchini",
    "SetAndNumber": "OTK163",
    "Rarity": "Common",
    "id": "OTK163",
    "Set": "Outbreak",
    "CardInSet": 163,
    "CardNumber": 163,
    "Description": "Automated. User gets Grip and +90 HP.\nAllies with Ranged Attack Type add +1 to their Range.",
    "Class": "Automaton,Enhancer",
    "Atk": 0
  },
  {
    "Number": 164,
    "Name": "Tear Gas Launcher",
    "CardType": "Technology",
    "Faction": "Undeviant",
    "Ability": [
      {
        "effects": [
          {
            "headline": "GETS:TRIGGERED:ATK:-8",
            "filters": [
              "add-opponent-character-line"
            ]
          },
          {
            "headline": "GETS:TRIGGERED:DAMAGE:1",
            "filters": [
              "add-self"
            ]
          }
        ],
        "triggers": [
          "card-attacked-[id]"
        ],
        "conditions": [
          "is-higher:=first(count(add-opponent-character-line)):0"
        ]
      }
    ],
    "AtkNature": "Missil",
    "Res": 3,
    "Artist": "Gustavo Lara",
    "SetAndNumber": "OTK164",
    "Rarity": "Common",
    "id": "OTK164",
    "Set": "Outbreak",
    "CardInSet": 164,
    "CardNumber": 164,
    "Description": "[Attack]: Each foe gets -8 ATK. Hit this Tech once.",
    "Class": "FireArm",
    "Atk": 0
  },
  {
    "Number": 165,
    "Name": "OG",
    "CardType": "Character",
    "Faction": "Undeviant",
    "Ability": [],
    "Gender": "Non Binary",
    "AtkType": "Basic",
    "AtkRange": 0,
    "AtkNature": "Heavy Handed Fists",
    "Atk": 71,
    "HP": 246,
    "Rarity": "Promo",
    "Set": "Outbreak",
    "CardInSet": 165,
    "CardNumber": 165,
    "Description": "Promo.",
    "Rank": "Undeviant"
  }
]