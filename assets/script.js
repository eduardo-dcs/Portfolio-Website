document.addEventListener('DOMContentLoaded', function() {
    // Grab all the tooltip triggers
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
  
    // Initialize tooltips
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
      const tooltip = new bootstrap.Tooltip(tooltipTriggerEl);
      
      // When the user clicks, blur the link to remove focus
      tooltipTriggerEl.addEventListener('click', function () {
        // Delay slightly so the click can open the link before blurring
        setTimeout(() => {
          tooltipTriggerEl.blur();
        }, 50);
      });
      
      return tooltip;
    });
  });
  