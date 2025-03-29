// Common functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (if needed)
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Active link highlighting
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Messages Page Functionality
if (document.querySelector('.messages-container')) {
    // Modal handling
    const modal = document.getElementById('message-modal');
    const btn = document.getElementById('new-message-btn');
    const closeBtn = document.querySelector('.close-btn');
    
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Message form submission
    const messageForm = document.getElementById('message-form');
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const recipient = document.getElementById('recipient').value;
        const message = document.getElementById('message-text').value;
        
        // Here you would typically send the message to a server
        console.log(`Message to ${recipient}: ${message}`);
        
        // Show success message
        alert('Message sent successfully!');
        modal.style.display = 'none';
        messageForm.reset();
    });
    
    // Message card click handler
    document.querySelectorAll('.message-card').forEach(card => {
        card.addEventListener('click', () => {
            // In a real app, this would show the full conversation
            alert('Opening conversation...');
        });
    });
}

// Settings Page Functionality
if (document.querySelector('.settings-container')) {
    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show corresponding tab content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Profile picture preview
    const profilePicInput = document.getElementById('profile-pic');
    const profilePicPreview = document.getElementById('profile-pic-preview');
    
    profilePicInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                profilePicPreview.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Form submissions
    document.getElementById('profile-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Profile updated successfully!');
    });
    
    document.getElementById('notifications-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Notification preferences saved!');
    });
    
    document.getElementById('security-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const newPass = document.getElementById('new-password').value;
        const confirmPass = document.getElementById('confirm-password').value;
        
        if (newPass !== confirmPass) {
            alert('Passwords do not match!');
            return;
        }
        
        alert('Security settings updated successfully!');
    });
}

// Family Member Page Functionality
if (document.querySelector('.member-container')) {
    // Call button functionality
    document.querySelectorAll('.btn-primary').forEach(btn => {
        if (btn.textContent.includes('Call')) {
            btn.addEventListener('click', (e) => {
                // In a real app, this would initiate a call
                console.log('Initiating call...');
            });
        }
    });
    
    // Location button functionality
    document.querySelectorAll('.btn-secondary').forEach(btn => {
        if (btn.textContent.includes('Location')) {
            btn.addEventListener('click', (e) => {
                // In a real app, this would open maps
                console.log('Opening location...');
            });
        }
    });
}