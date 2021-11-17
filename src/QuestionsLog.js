const QuestionsLog = [
    { question: "How do your friends most often describe you?", options: ["Kind & Cheerful", "Funny & Flaky", "Quiet & Wise", "Extroverted & Exhausting"], results: [0, 3, 1, 2] },
    { question: "What do you like to do in your free time?", options: ["Read, weep & repeat", "Cook & clean a.k.a 'self-care'", "Nap, slumber & sleep", "Organise a fun activity!"], results: [1, 3, 2, 0] },
    { question: "It's lunchtime! What are you eating?", options: ["Depends on what I'm reading", "Reheated kichdi & biryani", "Does alcohol count?", "Takeout"], results: [3, 0, 2, 1] },
    { question: "It's Saturday night! What does the playlist look like?!", options: ["Farida Khannun on loop", "Broadway!", "Ben Platt, Adele, All Too Well (10 Min Ver)", "Whatever's playing on Discord"], results: [0, 2, 1, 3] },
    { question: "What does the future look like in you mind?", options: ["\"There are all these moments you don't think you will survive. And then you survive.\"", "It can only get bigger & better.", "🦁🐱🐗🐝🐋🐓🐢🐍🐠🐒", "I hate this question. Stfu."], results: [0, 3, 2, 1] },
    { question: "And finally, what do you think of the novel, Memory of Light", options: ["A lyrical romance", "A superficial ghazal", "A vain romanticisation of love", "It fucking sucks"], results: [2, 2, 2, Math.floor(Math.random() * 4)] }
];

export default QuestionsLog;