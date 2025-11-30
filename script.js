
        // Add your YouTube video links here
        const introVideos = [
    {
        title: "Introduction Video",
        description: "",
        youtubeUrl: "https://www.youtube.com/watch?v=udAbBBw62rc",
        thumbnail: "https://i.ytimg.com/vi/udAbBBw62rc/hqdefault.jpg"
    }
];

const longShortVideos = [
    {
        title: "Long Form Video",
        description: "",
        youtubeUrl: "https://www.youtube.com/watch?v=8ZyAyPg1KFU",
        thumbnail: "https://i.ytimg.com/vi/8ZyAyPg1KFU/hqdefault.jpg"
    },
    {
        title: "Short Form Video",
        description: "",
        youtubeUrl: "https://www.youtube.com/watch?v=iKrX3rRcPq8",
        thumbnail: "https://i.ytimg.com/vi/iKrX3rRcPq8/hqdefault.jpg"
    }
];

const motionGraphicsVideos = [
    {
        title: "Motion Graphics Video",
        description: "",
        youtubeUrl: "https://www.youtube.com/watch?v=18Y5T0uVMow",
        thumbnail: "https://i.ytimg.com/vi/18Y5T0uVMow/hqdefault.jpg"
    }
];

// Function to render cards
function renderVideos(array, containerId) {
    const container = document.getElementById(containerId);

    array.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = () => window.open(project.youtubeUrl, "_blank");

        card.innerHTML = `
            <div class="project-thumbnail">
                <img src="${project.thumbnail}" alt="${project.title}">
                <div class="play-icon">▶</div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// Render each category
renderVideos(introVideos, "introGrid");
renderVideos(longShortVideos, "longShortGrid");
renderVideos(motionGraphicsVideos, "motionGrid");

        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
   