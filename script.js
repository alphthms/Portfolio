// script.js

document.addEventListener('DOMContentLoaded', () => {
    const workTab = document.getElementById('work-tab');
    const educationTab = document.getElementById('education-tab');
    const workContent = document.getElementById('work-content');
    const educationContent = document.getElementById('education-content');
    const whiteOverlay = document.getElementById('white-overlay'); // Get the white overlay element

    // Define scroll thresholds for the gradient transition
    const scrollThresholdStart = 100; // Start fading to white after scrolling 100px
    // Increased scrollThresholdEnd to make the transition cover more scroll distance
    const scrollThresholdEnd = 1500; // Fully white after scrolling 1500px (adjusted from 800px)

    // Function to activate a tab
    const activateTab = (activeTab, activeContent, inactiveTab, inactiveContent) => {
        // Update tab styles
        activeTab.classList.remove('text-gray-400');
        activeTab.classList.add('text-white', 'border-blue-500');
        inactiveTab.classList.remove('text-white', 'border-blue-500');
        inactiveTab.classList.add('text-gray-400', 'border-transparent');

        // Show/hide content
        activeContent.classList.remove('hidden');
        inactiveContent.classList.add('hidden');
    };

    // Event listener for Work tab
    workTab.addEventListener('click', () => {
        activateTab(workTab, workContent, educationTab, educationContent);
    });

    // Event listener for Education tab
    educationTab.addEventListener('click', () => {
        activateTab(educationTab, educationContent, workTab, workContent);
    });

    // Initial activation: Set Work tab as active by default
    activateTab(workTab, workContent, educationTab, educationContent);

    // Scroll event listener for the gradient transition
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY; // Current vertical scroll position

        if (scrollY >= scrollThresholdStart) {
            // Calculate the progress of the scroll within the defined range (0 to 1)
            let progress = (scrollY - scrollThresholdStart) / (scrollThresholdEnd - scrollThresholdStart);

            // Clamp the progress value between 0 and 1 to ensure valid opacity
            progress = Math.min(1, Math.max(0, progress));

            // Set the opacity of the white overlay
            whiteOverlay.style.opacity = progress;
        } else {
            // If scroll position is before the start threshold, ensure overlay is transparent
            whiteOverlay.style.opacity = 0;
        }
    });
});
