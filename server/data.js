const messageStatus = {
  sent: 1,
  reach: 2,
  read: 3,
};
const messageType = {
  send: 1,
  recieve: 2,
};
const callType = {
  call: 1,
  video: 2,
};
const data = {
  users: [
    {
      username: "elmanastanov",
      password: "1234",
      name: "Elman",
      surname: "Astanov",
    },
    {
      username: "admin",
      password: "1234",
      name: "Admin",
      surname: "",
    },
    {
      username: "lamanmuradzada",
      password: "12345",
      name: "Ləman",
      surname: "Muradzadə",
    },

    {
      username: "xeyyamomar",
      password: "1234",
      name: "Xeyyam",
      surname: "Omar",
    },
    {
      username: "elvinmammadli",
      password: "1234",
      name: "Elvin",
      surname: "Mammadli",
    },
  ],
  groups: [
    {
      name: "Friends Reunion",
      lastMessage: "Hi Guys, Wassup!",
    },
    {
      name: "Friends Forever",
      lastMessage: "Good to see you.",
    },
    {
      name: "Crazy Cousins",
      lastMessage: "What plans today?",
    },
  ],
  recents: [
    {
      user: {
        name: "Raghav",
      },
      message: {
        content: "Dinner?",
        date: "Today, 8:56pm",
        status: messageStatus.read,
        type: messageType.send,
      },
    },
    {
      user: {
        name: "Swathi",
      },
      message: {
        content: "Sure!",
        date: "Today, 2:31pm",
        status: messageStatus.reach,
        type: messageType.send,
      },
    },
    {
      user: {
        name: "Kiran",
      },
      message: [
        {
          content: "Hi...",
          date: "Yesterday, 6:22pm",
          status: messageStatus.read,
          type: messageType.recieve,
        },
        {
          content: "How are you?",
          date: "Yesterday, 6:23pm",
          status: messageStatus.read,
          type: messageType.recieve,
        },
      ],
    },
    {
      user: {
        name: "Tejeshwini",
        surname: "C",
      },
      message: {
        content: "I will call him today.",
        date: "Today, 12:22pm",
        status: messageStatus.sent,
        type: messageType.send,
      },
    },
    {
      user: {
        name: "John",
        surname: "Dow",
      },
      message: {
        content: "Let's meet at five",
        date: "Today, 13:30pm",
        status: messageStatus.sent,
        type: messageType.send,
      },
    },
  ],
  friends: [
    {
      user: {
        name: "Raghav",
      },
      message: {
        content: "Dinner?",
        date: "Today, 8:56pm",
        status: messageStatus.read,
      },
      isOnline: false,
    },
    {
      user: {
        name: "Swathi",
      },
      message: {
        content: "Sure!",
        date: "Today, 2:31pm",
        status: messageStatus.reach,
      },
      isOnline: true,
    },
    {
      user: {
        name: "Kiran",
      },
      message: [
        {
          content: "Hi...",
          date: "Yesterday, 6:22pm",
          status: messageStatus.read,
          type: messageType.recieve,
        },
        {
          content: "How are you?",
          date: "Yesterday, 6:23pm",
          status: messageStatus.read,
          type: messageType.recieve,
        }
      ],
      isOnline: false,
    },
    {
      user: {
        name: "Tejeshwini",
        surname: "C",
      },
      message: {
        content: "I will call him today.",
        date: "Today, 12:22pm",
        status: messageStatus.sent,
      },
      isOnline: false,
    },
    {
      user: {
        name: "Marvin",
        surname: "McKinney",
      },
      message: {
        content: "legal-tenure.pdf",
        date: "Today, 8:56pm",
        status: messageStatus.sent,
      },
      isOnline: true,
    },
    {
      user: {
        name: "Kristin",
        surname: "Watson",
      },
      message: {
        content: "floor/reading lamp",
        date: "Today, 2:31pm",
        status: messageStatus.read,
      },
      isOnline: true,
    },
    {
      user: {
        name: "Ralph",
        surname: "Edwards",
      },
      message: {
        content: "99%",
        date: "Yesterday, 5:22pm",
        status: messageStatus.read,
      },
      isOnline: false,
    },
    {
      user: {
        name: "Savannah",
        surname: "Nguyen",
      },
      message: {
        content: "He's down on his luck.",
        date: "Yesterday, 1:22pm",
        status: messageStatus.read,
      },
      isOnline: true,
    },
    {
      user: {
        name: "Mary",
        surname: "Roseflower",
      },
      message: {
        content: "What a big truck!",
        date: "Yesterday, 4:56pm",
        status: messageStatus.read,
      },
      isOnline: false,
    },
    {
      user: {
        name: "Eleanor",
        surname: "Pena",
      },
      message: {
        content: "Tom is in a big hurry",
        date: "Yesterday",
        status: messageStatus.read,
      },
      isOnline: false,
    },
    {
      user: {
        name: "Robert",
        surname: "Fox",
      },
      message: {
        content: "What a big boy he is!",
        date: "2 days ago",
        status: messageStatus.read,
      },
      isOnline: false,
    }
  ],
  recentCalls: [
    {
      user: {
        name: "Raghav",
      },
      date: "Today, 8:56pm",
      callType: callType.call,
      messageType: messageType.send,
    },
    {
      user: {
        name: "Swathi",
      },
      date: "Today, 2:31pm",
      callType: callType.call,
      messageType: messageType.recieve,
    },
    {
      user: {
        name: "Kiran",
      },
      date: "Yesterday, 6:22pm",
      callType: callType.video,
      messageType: messageType.recieve,
    },
    {
      user: {
        name: "Tejeshwini",
        surname: "C",
      },
      date: "Today, 12:22pm",
      callType: callType.call,
      messageType: messageType.recieve,
    },
    {
      user: {
        name: "Marvin",
        surname: "McKinney",
      },
      date: "Today, 8:56pm",
      callType: callType.video,
      messageType: messageType.send,
    },
    {
      user: {
        name: "Kristin",
        surname: "Watson",
      },
      date: "Today, 2:31pm",
      callType: callType.video,
      messageType: messageType.send,
    },
    {
      user: {
        name: "Ralph",
        surname: "Edwards",
      },
      date: "Yesterday, 5:22pm",
      callType: callType.call,
      messageType: messageType.send,
    },
    {
      user: {
        name: "Savannah",
        surname: "Nguyen",
      },
      date: "Yesterday, 1:22pm",
      callType: callType.video,
      messageType: messageType.recieve,
    },
    {
      user: {
        name: "Mary",
        surname: "Roseflower",
      },
      date: "Yesterday,4:56pm",
      callType: callType.call,
      messageType: messageType.recieve,
    },
    {
      user: {
        name: "Eleanor",
        surname: "Pena",
      },
      date: "yesterday",
      callType: callType.call,
      messageType: messageType.send,
    },
    {
      user: {
        name: "Robert",
        surname: "Fox",
      },
      date: "2 days ago",
      callType: callType.video,
      messageType: messageType.recieve,
    }
  ],
  notifications: [
    {
      content:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    },
    {
      content:
        "So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would not cause intoxication.",
    },
    {
      content: "How a visual artist redefines success in graphic design",
    },
    {
      content:
        "For athletes, high altitude produces two contradictory effects on performance. For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance from the atmosphere and the athlete's performance will generally be better at high altitude.",
    },
    {
      content:
        "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue",
    },
    {
      content: "In fermentum posuere urna nec",
    },
    {
      content: "ID: 22739",
    },
    {
      content:
        "How We Keep Brand Consistency in Our Visual Language — A Design System for Illustrations",
    },
    {
      content:
        "How We Keep Brand Consistency in Our Visual Language — A Design System for Illustrations ",
    },
    {
      content:
        "How We Keep Brand Consistency in Our Visual Language — A Design System for Illustrations ",
    },
    {
      content:
        "How We Keep Brand Consistency in Our Visual Language — A Design System for Illustrations ",
    },
    {
      content:
        "How We Keep Brand Consistency in Our Visual Language — A Design System for Illustrations ",
    },
  ],
};

module.exports = data;
