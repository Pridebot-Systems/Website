document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.pridebot.xyz/commands")
    .then((response) => response.json())
    .then((data) => {
      const accordionContainer = document.querySelector(".modern-accordion");
      if (!accordionContainer) {
        console.error("Accordion container not found");
        return;
      }
      
      accordionContainer.innerHTML = "";

      for (const [category, details] of Object.entries(data)) {
        if (category === "Dev") continue;

        // Create accordion item
        const accordionItem = document.createElement("div");
        accordionItem.className = "accordion-item";

        const button = document.createElement("button");
        button.className = "accordion-button";
        button.id = `accordion-button-${category}`;
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", `accordion-content-${category}`);

        const titleSpan = document.createElement("span");
        titleSpan.className = "accordion-title";
        titleSpan.textContent = `${category} Commands (${details.count})`;

        button.appendChild(titleSpan);
        accordionItem.appendChild(button);

        const accordionContent = document.createElement("div");
        accordionContent.className = "accordion-content";
        accordionContent.id = `accordion-content-${category}`;
        accordionContent.style.display = "none";

        const paragraph = document.createElement("p");
        details.commands.forEach((command, index) => {
          const strong = document.createElement("strong");
          strong.textContent = `/${command}`;
          paragraph.appendChild(strong);
          
          // Add spacing between commands
          if (index < details.commands.length - 1) {
            paragraph.appendChild(document.createTextNode(" "));
          }
        });

        accordionContent.appendChild(paragraph);
        accordionItem.appendChild(accordionContent);
        accordionContainer.appendChild(accordionItem);

        // Add click event listener with smooth animation
        button.addEventListener("click", function () {
          const isExpanded = button.getAttribute("aria-expanded") === "true";
          
          // Close all other accordion items
          document.querySelectorAll(".modern-accordion .accordion-button").forEach(btn => {
            if (btn !== button) {
              btn.setAttribute("aria-expanded", "false");
              const content = btn.nextElementSibling;
              if (content) {
                content.style.display = "none";
              }
            }
          });

          // Toggle current item
          button.setAttribute("aria-expanded", !isExpanded);
          
          if (!isExpanded) {
            accordionContent.style.display = "block";
            // Smooth scroll to the opened accordion
            setTimeout(() => {
              button.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
              });
            }, 100);
          } else {
            accordionContent.style.display = "none";
          }
        });
      }
    })
    .catch((error) => {
      console.error("Failed to fetch commands:", error);
      
      // Show error message to user
      const accordionContainer = document.querySelector(".modern-accordion");
      if (accordionContainer) {
        accordionContainer.innerHTML = `
          <div class="accordion-item">
            <div class="accordion-content" style="display: block; text-align: center; padding: 2rem;">
              <p style="color: var(--secondary-text-color);">
                <i class="fa fa-exclamation-triangle" style="color: var(--main-color); margin-right: 0.5rem;"></i>
                Unable to load commands at the moment. Please try again later.
              </p>
            </div>
          </div>
        `;
      }
    });
});
