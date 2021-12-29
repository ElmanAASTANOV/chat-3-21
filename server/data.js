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
      lastMessage: "Hi Guys, Wassup",
    },
    {
      name: "Friends Forever",
      lastMessage: "Good to see you.",
    },
    {
      name: "Crazy Cousins",
      lastMessage: "What plans today.",
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
          content: "Hi",
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
      message: {
        content: "Hi, how are you?",
        date: "Yesterday, 6:22pm",
        status: messageStatus.read,
      },
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
