// Add here all the scenarios you can think of!

// The only condition being : add 3 playerCard description for 1 hackerCard Situation. We've already added a few as an example.

// P.S.: Keep in mind the Power of the number so the witty players don't end up losing :p

// How 'power' works : write a power for the hacker's card and while you write powers for the player's cards, keep in mind that the power of the correct counters should be greater than the hacker's card's power. 

var scenarios = [
  { // add the text you'd want should appear on the hacker's card
    hackerCard : {
      description : "I set up a fake Wi-Fi station to steal people’s email and track them online.",
      power : 4,
    },
    // add 3 card descriptions you'd want should appear on the player's card. Keeping in mind that at least ONE of them should be an apt counter!
    playerCards : [
      {
        description : "I never use public wifi networks.",
        power : 5,
      },
      {
        description : "I browse the web, but I never do any personal business on a public wifi network.",
        power : 3,
      },
      {
        description : "I connect to any wifi network I can use in public.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I sent a fake email from your bank asking for your account details.",
      power : 3,
    },
    playerCards : [
      {
        description : "I checked the email address - the message didn’t come from my bank.",
        power : 5,
      },
      {
        description : "I never give out personal information in response to an email.",
        power : 4,
      },
      {
        description : "I sent the details you asked for so you could check on my account.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "Hello hello ,your bank account will be closed if you dont tell your OTP!!! ",
      power : 3,
    },
    playerCards : [
      {
        description : "I will not tell OTP to strangers.",
        power : 5,
      },
      {
        description : "Wait a little,You are from which bank?",
        power : 4,
      },
      {
        description : "Yes my OTP is 620936.",
        power : 1,
      }
    ]
  },
  { // add the text you'd want should appear on the hacker's card
    hackerCard : {
      description : "Hey,I am leaking your facebook photo",
      power : 4,
    },
    // add 3 card descriptions you'd want should appear on the player's card. Keeping in mind that at least ONE of them should be an apt counter!
    playerCards : [
      {
        description : " Please dont public it.",
        power : 1,
      },
      {
        description : "I am deactivating my account.",
        power : 3,
      },
      {
        description : "Haha!My account is private",
        power : 5,
      }
    ]
  },
 
  {
    hackerCard : {
      description : "I sent a fraud link in message.",
      power : 4,
    },
    playerCards : [
      {
        description : "I opened the link but only checked it.",
        power : 3,
      },
      {
        description : "I ignored the message as we should not click random link.",
        power : 5,
      },
      {
        description : "I filled the form in link.",
        power : 1,
      }
    ]
  },
  { // add the text you'd want should appear on the hacker's card
    hackerCard : {
      description : "I set up a fake Wi-Fi station to steal people’s email and track them online.",
      power : 4,
    },
    // add 3 card descriptions you'd want should appear on the player's card. Keeping in mind that at least ONE of them should be an apt counter!
    playerCards : [
      {
        description : "I never use public wifi networks.",
        power : 5,
      },
      {
        description : "I browse the web, but I never do any personal business on a public wifi network.",
        power : 3,
      },
      {
        description : "I connect to any wifi network I can use in public.",
        power : 1,
      }
    ]
  },
 
  {
    hackerCard : {
      description : "8th.",
      power : 3,
    },
    playerCards : [
      {
        description : "I checked .",
        power : 5,
      },
      {
        description : "I give .",
        power : 4,
      },
      {
        description : "I sent ",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "9th.",
      power : 3,
    },
    playerCards : [
      {
        description : " bank.",
        power : 5,
      },
      {
        description : "email.",
        power : 4,
      },
      {
        description : " account.",
        power : 1,
      }
    ]
  },
];