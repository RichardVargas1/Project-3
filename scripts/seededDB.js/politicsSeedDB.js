// const mongoose = require("mongoose");
// const db = require("../models/speech");
// mongoose.Promise = global.Promise;

// This seeded db file is responsible for importing the following speeches

// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost/speechshare",
//     {
//         useMongoClient: true
//     }
// );

const politicsSeed = [
    {
        id: 1,
        title: "Bullhorn Address to Ground Zero Rescue Workers",
        author: "George W. Bush",
        genre: "Politics",
        synopsis:
            "President Bush: Thank you all. I want you all to know -- it [bullhorn] can't go any louder --  I want you all to know that American today, American today is on bended knee, in prayer for the people whose lives were lost here, for the workers who work here, for the families who mourn. The nation stands with the good people of New York City and New Jersey and Connecticut as we mourn the loss of thousands of our citizens Rescue Worker: I can't hear you! President Bush: I can hear you! I can hear you! The rest of the world hears you! And the people -- and the people who knocked these buildings down will hear all of us soon! Rescue Workers: [Chanting] U.S.A.! U.S.A.! U.S.A.! U.S.A.! U.S.A.! U.S.A.! U.S.A.! U.S.A.! President Bush: The nation -- The nation sends its love and compassion -- Rescue Worker: God bless America! President Bush: -- to everybody who is here. Thank you for your hard work. Thank you for makin' the nation proud, and may God bless America. Rescue Workers: [Chanting] U.S.A.! U.S.A.! U.S.A.! U.S.A.!",
    },
    {
        id: 2,
        title: "Explosion of the Space Shuttle Challenger Address to the Nation",
        author: "Ronald W. Reagan",
        genre: "Politics",
        synopsis:
            "Ladies and gentlemen, I'd planned to speak to you tonight to report on the state of the Union, but the events of earlier today have led me to change those plans. Today is a day for mourning and remembering. Nancy and I are pained to the core by the tragedy of the shuttle Challenger. We know we share this pain with all of the people of our country. This is truly a national loss. Nineteen years ago, almost to the day, we lost three astronauts in a terrible accident on the ground. But we've never lost an astronaut in flight; we've never had a tragedy like this. And perhaps we've forgotten the courage it took for the crew of the shuttle; but they, the Challenger Seven, were aware of the dangers, but overcame them and did their jobs brilliantly. We mourn seven heroes: Michael Smith, Dick Scobee, Judith Resnik, Ronald McNair, Ellison Onizuka, Gregory Jarvis, and Christa McAuliffe. We mourn their loss as a nation together. For the families of the seven, we cannot bear, as you do, the full impact of this tragedy. But we feel the loss, and we're thinking about you so very much. Your loved ones were daring and brave, and they had that special grace, that special spirit that says, Give me a challenge and I'll meet it with joy. They had a hunger to explore the universe and discover its truths. They wished to serve, and they did. They served all of us. We've grown used to wonders in this century. It's hard to dazzle us. But for 25 years the United States space program has been doing just that. We've grown used to the idea of space, and perhaps we forget that we've only just begun. We're still pioneers. They, the members of the Challenger crew, were pioneers. And I want to say something to the schoolchildren of America who were watching the live coverage of the shuttle's takeoff. I know it is hard to understand, but sometimes painful things like this happen. It's all part of the process of exploration and discovery. It's all part of taking a chance and expanding man's horizons. The future doesn't belong to the fainthearted; it belongs to the brave. The Challenger crew was pulling us into the future, and we'll continue to follow them. I've always had great faith in and respect for our space program, and what happened today does nothing to diminish it. We don't hide our space program. We don't keep secrets and cover things up. We do it all up front and in public. That's the way freedom is, and we wouldn't change it for a minute. We'll continue our quest in space. There will be more shuttle flights and more shuttle crews and, yes, more volunteers, more civilians, more teachers in space. Nothing ends here; our hopes and our journeys continue. I want to add that I wish I could talk to every man and woman who works for NASA or who worked on this mission and tell them: Your dedication and professionalism have moved and impressed us for decades. And we know of your anguish. We share it. There's a coincidence today. On this day 390 years ago, the great explorer Sir Francis Drake died aboard ship off the coast of Panama. In his lifetime the great frontiers were the oceans, and an historian later said, He lived by the sea, died on it, and was buried in it. Well, today we can say of the Challenger crew: Their dedication was, like Drake's, complete. The crew of the space shuttle Challenger honored us by the manner in which they lived their lives. We will never forget them, nor the last time we saw them, this morning, as they prepared for their journey and waved goodbye and slipped the surly bonds of earth to touch the face of God.",
    }
];

// db.Speech
//     .remove({})
//     .then(() => db.Speech.collection.insertMany(speechSeed))
//     .then(data => {
//         console.log(data.insertedIds.length + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });

module.exports = politicsSeed;