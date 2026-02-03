document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Get the content ID
      const contentId = this.getAttribute('data-content');
      
      // Hide all tab contents
      const allContents = document.querySelectorAll('.tab-content');
      allContents.forEach(content => content.classList.remove('active'));
      
      // Show selected content if it exists
      const selectedContent = document.getElementById(contentId + '-content');
      if (selectedContent) {
        selectedContent.classList.add('active');
      }
    });
  });
  
  // Initialize by showing the first tab content
  const firstContent = document.getElementById('home-content');
  if (firstContent) {
    firstContent.classList.add('active');
  }
});
