

document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const fleetContainer = document.querySelector(".fleet-container");
    const fleetItems = document.querySelectorAll(".fleet-item");
    const totalItems = fleetItems.length;
    const itemsToShow = 3; // Number of items to show at a time
    let currentIndex = 1 // Current starting index
  
    // Set the fleet container width dynamically based on the number of items
    fleetContainer.style.width = `calc(${totalItems} * 100% / ${itemsToShow})`;
  
    // Set each item's width dynamically
    fleetItems.forEach(item => {
      item.style.flex = `0 0 calc(100% / ${itemsToShow})`;
    });
  
    // Function to move the slider
    const moveSlider = () => {
      currentIndex++;
      if (currentIndex > totalItems - itemsToShow) {
        currentIndex = 0; // Reset to the beginning when reaching the end
      }
      const offset = -(currentIndex * (100 / itemsToShow)); // Calculate the offset
      fleetContainer.style.transform = `translateX(${offset}%)`;
    };
  
    // Auto-play slider
    setInterval(moveSlider, 3000); // Adjust the interval (3000ms = 3 seconds)
  });
  

  function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger i');
  
    menu.classList.toggle('active'); // Toggle menu visibility
  
    if (menu.classList.contains('active')) {
      hamburger.classList.remove('fa-bars');
      hamburger.classList.add('fa-times'); // Show cancel icon
    } else {
      hamburger.classList.remove('fa-times');
      hamburger.classList.add('fa-bars'); // Revert to hamburger
    }
  }
  
  function toggleServiceContent(contentId) {
    const content = document.getElementById(contentId);
    const button = content.previousElementSibling.querySelector("button");

    if (content.style.display === "none") {
      content.style.display = "block";
      button.textContent = "Show Less";
    } else {
      content.style.display = "none";
      button.textContent = "Read More";
    }
  }

  // Toggle Search Modal
function toggleSearch() {
  const modal = document.getElementById('search-modal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// Toggle Profile Modal
function toggleProfile() {
  const modal = document.getElementById('profile-modal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// Toggle Booking Modal
function toggleBooking() {
  const modal = document.getElementById('booking-modal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// Close Modals when clicking outside content
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};


function showLogin() {
  // Show login form, hide sign-up form
  document.getElementById("login-form").style.display = "block";
  document.getElementById("signup-form").style.display = "none";

  // Highlight the active button
  document.getElementById("show-login").classList.add("active");
  document.getElementById("show-signup").classList.remove("active");
}

function showSignUp() {
  // Show sign-up form, hide login form
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";

  // Highlight the active button
  document.getElementById("show-signup").classList.add("active");
  document.getElementById("show-login").classList.remove("active");
}

function selectSearchOption(option) {
  const searchInput = document.getElementById("search-input");
  searchInput.value = option; // Populate the input value with the selected option
}


function showOptions() {
  document.getElementById('search-options').style.display = 'block'; // Show options when input is clicked
}

function selectSearchOption(option) {
  const searchInput = document.getElementById("search-input");
  searchInput.placeholder = `Search for ${option}...`; // Update the placeholder with selected option
  document.getElementById('search-options').style.display = 'none'; // Hide options after selection
}

let selectedSearchOption = ""; // Track selected search option

function showOptions() {
  document.getElementById('search-options').style.display = 'block'; // Show options when input is clicked
}

function selectSearchOption(option) {
  const searchInput = document.getElementById("search-input");
  searchInput.value = option; // Update input value with selected option
  selectedSearchOption = option; // Store the selected option
  document.getElementById('search-options').style.display = 'none'; // Hide options after selection
}

function performSearch() {
  // Check if there's a selected search option
  if (!selectedSearchOption) {
    alert("Please select a valid option.");
    return;
  }

  let redirectUrl = ""; // Placeholder for URL

  // Define URLs based on selected option
  if (selectedSearchOption === "Services") {
    redirectUrl = "services.html"; // Update with your actual link
  } else if (selectedSearchOption === "Taxis") {
    redirectUrl = "taxis.html"; // Update with your actual link
  } else if (selectedSearchOption === "Blogs") {
    redirectUrl = "blog.html"; // Update with your actual link
  } else if (selectedSearchOption === "Contact") {
    redirectUrl = "contact.html"; // Update with your actual link
  } else if (selectedSearchOption === "Support") {
    redirectUrl = "support.html"; // Update with your actual link
  }

  if (redirectUrl) {
    window.location.href = redirectUrl; // Redirect to the selected page
  }
}


document.getElementById("booking-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting immediately
  
  // Capture the form data
  const formData = new FormData(this);
  const urlParams = new URLSearchParams(formData).toString();
  
  // Redirect to another page with the form data appended as query parameters
  window.location.href = `booking-details.html?${urlParams}`;
});

