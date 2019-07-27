let videos = [
    {
        title: "Photoshop tutorial",
        lengthInMinutes: 70,
        category: "Education",
        uploadDate: new Date("07-22-2019"),
        tags: "design, digital, photoshop, creativity",
        features: ["Live", "360°", "HDR"],
        viewCount: 4700,
        rating: 4.3
    },
    {
        title: "Episode # 01 - The Best Comedy Show",
        lengthInMinutes: 19,
        category: "Entertainment",
        uploadDate: new Date("07-03-2019"),
        tags: "comedy, funny",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 145615,
        rating: 3.9
    },
    {
        title: "How to use FOR EACH loop - tutorial by Tech Karo",
        lengthInMinutes: 6,
        category: "Education",
        uploadDate: new Date("11-10-2018"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    },
    {
        title: "Motu Patlu Season 1 - Episode 71 Part 1",
        lengthInMinutes: "11:26",
        category: "Entertainment",
        uploadDate: new Date("07-16-2019"),
        tags: "cartoon",
        features: ["hd"],
        viewCount: 11374055,
        rating: 4.5
    },
    {
        title: "Full Song Mere Sohneya ve maahi kitho dil lagna Shahid Kapoor Kiara",
        lengthInMinutes: "3",
        category: "Entertainment",
        uploadDate: new Date("07-16-2019"),
        tags: "MereSohneya, ShahidKapoor, KiaraAdvani",
        features: ["hd"],
        viewCount: 14824360,
        rating: 4.9
    },
    {
        title: "Full Song Mere Sohneya ve maahi kitho dil lagna Shahid Kapoor Kiara",
        lengthInMinutes: "3",
        category: "Entertainment",
        uploadDate: new Date("07-16-2019"),
        tags: "MereSohneya, ShahidKapoor, KiaraAdvani",
        features: ["hd"],
        viewCount: 14824360,
        rating: 4.9
    }
];

for (i = 0; i < videos.length; i++) {
    console.log("Title: " + videos[i].title);
    console.log("Length: " + videos[i].lengthInMinutes + " minutes");
    console.log("Category: " + videos[i].category);
    console.log("Views: " + videos[i].viewCount);
    console.log("Uploaded On: " + videos[i].uploadDate);
    console.log("Rating:: " + videos[i].rating);
    console.log("");
}