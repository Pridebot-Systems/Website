async function updateCommandPreview(category, details) {
  const panel = document.getElementById("commandPreview");
  if (!panel) return;
  const profileTime = new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  const response = await fetch("https://api.pridebot.xyz/stats");
  const data = await response.json();

  if (category.toLowerCase().includes("fun")) {
    panel.innerHTML = `
      <div class="discord-mock">
        <div class="discord-mock-message">
          <img class="discord-mock-avatar" src="https://pridebot.xyz/pridebotlogo.png" alt="Pridebot" />
          <div class="discord-mock-content">
            <div class="discord-mock-header">
              <span class="discord-mock-username">Pridebot</span>
              <span class="discord-mock-app-tag">APP</span>
              <span class="discord-mock-timestamp">Today at ${profileTime}</span>
            </div>
            <div class="discord-mock-embed" style="border-left: none;">
              <div class="discord-mock-embed-accent" style="background: #FF00EA;"></div>
              <div class="discord-mock-embed-body">
                <div class="discord-mock-embed-title" style="font-size:1rem;">How gay is Pridebot?</div>
                <div style="color:#dbdee1; font-size:0.875rem; margin: 0.35rem 0;">
                  <strong style="color:#fff;">@Pridebot</strong> is <strong style="color:#fff;">101% gay!</strong>
                </div>
                <div class="discord-mock-embed-footer">The bot has 99.99% accuracy rate on checking users gayness</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (category.toLowerCase().includes("profile")) {
    panel.innerHTML = `
      <div class="discord-mock">
        <div class="discord-mock-message">
          <img class="discord-mock-avatar" src="https://pridebot.xyz/pridebotlogo.png" alt="Pridebot" />
          <div class="discord-mock-content">
            <div class="discord-mock-header">
              <span class="discord-mock-username">Pridebot</span>
              <span class="discord-mock-app-tag">APP</span>
              <span class="discord-mock-timestamp">Today at ${profileTime}</span>
            </div>
            <div class="discord-mock-embed">
              <div class="discord-mock-embed-accent" style="background: #FF00EA;"></div>
              <div class="discord-mock-embed-body" style="position:relative;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                  <div class="discord-mock-embed-title" style="font-size:1rem;">Pridebot's Profile 
                  <img class="discord-mock-badge" src="https://pridebot.xyz/pridebotlogo.png" alt="PridebotBadge" /></div>
                  <div style="font-size:1.6rem; line-height:1; margin-left:0.5rem;"><img class="discord-mock-profile" src="https://pridebot.xyz/pridebotlogo.png" alt="Pridebot" /></div>
                </div>
                <div class="discord-mock-embed-fields">
                  <div class="discord-mock-embed-field">
                    <div class="discord-mock-embed-field-name">Preferred Name</div>
                    <div class="discord-mock-embed-field-value">Pridebot, Roman</div>
                  </div>
                  <div class="discord-mock-embed-field">
                    <div class="discord-mock-embed-field-name">Age</div>
                    <div class="discord-mock-embed-field-value">3</div>
                  </div>
                  <div class="discord-mock-embed-field">
                    <div class="discord-mock-embed-field-name">Commands Ran</div>
                    <span class="discord-mock-embed-field-value">${data.totalUsage.toLocaleString()}</span>
                  </div>
                </div>
                <div style="color:#dbdee1; font-size:0.8rem; margin: 0.4rem 0;">
                  <strong style="color:#5865f2;">@Pridebot Aka Roman</strong> – Your Discord bot to LGBTQ Identities! Explore terms, definitions, resources, and more to be yourself.
                </div>
                <div style="color:#dbdee1; font-size:0.8rem; margin: 0.25rem 0;">
                  For more details visit: <span style="color:#00aff4;">https://pridebot.xyz/</span>
                </div>
                <div style="color:#dbdee1; font-size:0.8rem; margin: 0.25rem 0;">
                  Crush: EasySystems ❤️
                </div>
                <div class="discord-mock-embed-fields" style="margin-top:0.4rem;">
                  <div class="discord-mock-embed-field">
                    <div class="discord-mock-embed-field-name">Sexual Orientation</div>
                    <div class="discord-mock-embed-field-value">Botsexual</div>
                  </div>
                  <div class="discord-mock-embed-field">
                    <div class="discord-mock-embed-field-name">Romantic Orientation</div>
                    <div class="discord-mock-embed-field-value">Botromantic</div>
                  </div>
                  <div class="discord-mock-embed-field">
                    <div class="discord-mock-embed-field-name">Gender</div>
                    <div class="discord-mock-embed-field-value">Discord Bot</div>
                  </div>
                  <div class="discord-mock-embed-field">
                    <div class="discord-mock-embed-field-name">Pronouns</div>
                    <div class="discord-mock-embed-field-value">Bot/Bots/Botself</div>
                  </div>
                </div>
                <div class="discord-mock-embed-footer" style="margin-top:0.5rem;"><span class="discord-mock-embed-footer-text">Profile Information &nbsp;·&nbsp; Today at ${profileTime}</span></div>
              </div>
            </div>
            <div class="discord-mock-buttons" style="margin-top:0.4rem;">
              <a href="https://profile.pridebot.xyz/1101256478632972369" target="_blank" rel="noopener" class="discord-mock-btn">
                Web Profile <i class="fa fa-external-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    fetchTotalUsage();
    return;
  }

  if (category.toLowerCase() === "pride") {
    const prideTime = new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
    panel.innerHTML = `
      <div class="discord-mock">
        <div class="discord-mock-message">
          <img class="discord-mock-avatar" src="https://pridebot.xyz/pridebotlogo.png" alt="Pridebot" />
          <div class="discord-mock-content">
            <div class="discord-mock-header">
              <span class="discord-mock-username">Pridebot</span>
              <span class="discord-mock-app-tag">APP</span>
              <span class="discord-mock-timestamp">Today at ${prideTime}</span>
            </div>
            <div class="discord-mock-embed">
              <div class="discord-mock-embed-accent" style="background: #FF00EA;"></div>
              <div class="discord-mock-embed-body">
                <div class="discord-mock-embed-title"><img src="https://cdn.discordapp.com/emojis/1108868440363642930.png" alt="Lesbian!" style="width: 16px; height: 16px; vertical-align: middle;"> Lesbian!</div>
                <div style="color:#b5bac1; font-size:0.8rem; margin-bottom:0.5rem;">Here are some facts on "lesbians"</div>

                <div style="color:#fff; font-size:0.8rem; font-weight:700; margin-top:0.4rem;">What is Lesbian</div>
                <div style="color:#dbdee1; font-size:0.78rem; margin:0.15rem 0 0.4rem;">Lesbian is a term used to describe women who are romantically and/or sexually attracted to other women. This identity acknowledges the diverse experiences of women who love women, embracing a range of relationships and identities.</div>

                <div style="color:#fff; font-size:0.8rem; font-weight:700; margin-top:0.4rem;">History</div>
                <div style="color:#dbdee1; font-size:0.78rem; margin:0.15rem 0 0.4rem;">The term "lesbian" originates from the Greek island of Lesbos, home to the poet Sappho, who expressed affection for women in her works. Over time, "lesbian" evolved to specifically describe women attracted to women. It's a significant part of LGBTQ+ history and culture, reflecting the journey and struggles of women who love women.</div>
                <div style="color:#fff; font-size:0.8rem; font-weight:700; margin-top:0.4rem;">The Flag</div>
                <div style="color:#dbdee1; font-size:0.78rem; margin:0.15rem 0 0.4rem;">The first documented lesbian pride flag was designed by graphic designer Sean Campbell in 1999 and published in a 2000s issue of the Palm Springs Gay and Lesbian Times, the "Labrys Lesbian Flag". The "Lipstick Lesbian Flag" was the first design of the now more modern flag in 2010 and later had "Pink Flag" in 2015. These flags adopted horizontal stripes harkening to the Rainbow Pride Flag designed by Gilbert Baker but in a gradient of pink and white. Finally, in 2018 a woman on Tumblr named Emily Gwen posted her idea for the lesbian flag called "Sunset Lesbian Flag" which has 7 stripes and was later simplified to 5 aka now " Lesbian Pride Flag". (Source)</div>

                <div style="color:#fff; font-size:0.8rem; font-weight:700; margin-top:0.4rem;">Days/Honoring Times</div>
                <ul style="color:#dbdee1; font-size:0.78rem; margin:0.15rem 0 0; padding-left:1.1rem;">
                  <li>Lesbian Visibility Week – <strong style="color:#fff;">April 24th to 30th</strong></li>
                  <li>Masculine Lesbian Visibility and Awareness Week  – <strong style="color:#fff;">August 1st to 7th</strong></li>
                  <li>Lesbian Visibility Day – <strong style="color:#fff;">April 26</strong></li>
                  <li>Masculine Lesbian Visibility and Awareness Day – <strong style="color:#fff;">August 4th</strong></li>
                  <li>International Lesbian Day – <strong style="color:#fff;">October 8</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (category.toLowerCase() === "terms") {
    const termsTime = new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
    panel.innerHTML = `
      <div class="discord-mock">
        <div class="discord-mock-message">
          <img class="discord-mock-avatar" src="https://pridebot.xyz/pridebotlogo.png" alt="Pridebot" />
          <div class="discord-mock-content">
            <div class="discord-mock-header">
              <span class="discord-mock-username">Pridebot</span>
              <span class="discord-mock-app-tag">APP</span>
              <span class="discord-mock-timestamp">Today at ${termsTime}</span>
            </div>
            <div class="discord-mock-embed">
              <div class="discord-mock-embed-accent" style="background: #FF00EA"></div>
              <div class="discord-mock-embed-body">
                <div class="discord-mock-embed-title" style="font-size:0.95rem;">What are <em>sexualities</em> and which sexuality do you want to learn about?</div>
                <div style="color:#dbdee1; font-size:0.78rem; margin:0.35rem 0;">Sexualities are feelings, thoughts, attractions, and behaviors towards other people in which you find them physically, sexually, or emotionally attractive. Sexualities are typically categorized under two suffix categories: -sexual and -romantic. The suffix -sexual is the more common one and usually refers to an individual's sexual and physical attractions. The suffix -romantic is less common and is more often used if an individual's romantic/emotional attraction is different from their sexual/physical attraction. If someone's sexuality is the same for both sexual and romantic attraction, the romantic aspect is integrated into the -sexual suffix. Individuals can identify with more than one sexuality to more narrowly or specifically define their attractions. Sexualities are also some of the more fluid aspects of an individual's life as they can change or develop over time, so it's okay to be unsure; there's no need to rush:</div>
                <div style="color:#fff; font-size:0.8rem; font-weight:700; margin-top:0.4rem;">Choose one of the sexualities below that you want to learn about:</div>

                <div style="color:#fff; font-size:0.8rem; font-weight:700; margin-bottom:0.25rem;">Sexualities</div>
                <div style="color:#dbdee1; font-size:0.78rem; line-height:1.7;">
                  <img src="https://cdn.discordapp.com/emojis/1108870840709288111.webp?size=40" alt="Asexual/Aromantic" style="width:20px; height:20px; margin-right:5px;"> Asexual/Aromantic<br>
                  <img src="https://cdn.discordapp.com/emojis/1108823482856382474.webp?size=40" alt="Bisexual/Biromantic/Bicurious" style="width:20px; height:20px; margin-right:5px;"> Bisexual/Biromantic/Bicurious<br>
                  <img src="https://cdn.discordapp.com/emojis/1212919479550353408.webp?size=40" alt="Cupiosexual/Cupioromantic" style="width:20px; height:20px; margin-right:5px;"> Cupiosexual/Cupioromantic<br>
                  <img src="https://cdn.discordapp.com/emojis/1108868004042772561.webp?size=40" alt="Demisexual/Demiromantic" style="width:20px; height:20px; margin-right:5px;"> Demisexual/Demiromantic<br>
                  <i style="color:#dbdee1;">...and many more! </i>
                </div>
                <div class="discord-mock-embed-footer" style="margin-top:0.5rem;">Today at ${termsTime}</div>
              </div>
            </div>
            <div style="margin-top:0.5rem;">
              <div class="discord-mock-select">Choose sexuality here</div>
            </div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (category.toLowerCase() === "tools") {
    const toolsTime = new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
    panel.innerHTML = `
      <div class="discord-mock">
        <div class="discord-mock-message">
          <img class="discord-mock-avatar" src="https://pridebot.xyz/pridebotlogo.png" alt="Pridebot" />
          <div class="discord-mock-content">
            <div class="discord-mock-header">
              <span class="discord-mock-username">Pridebot</span>
              <span class="discord-mock-app-tag">APP</span>
              <span class="discord-mock-timestamp">Today at ${toolsTime}</span>
            </div>
            <div class="discord-mock-embed">
              <div class="discord-mock-embed-accent" style="background: #FF00EA"></div>
              <div class="discord-mock-embed-body">
                <div class="discord-mock-embed-title">Thank you for voting! (You can use the links to vote) </div>
                <div class="discord-mock-vote-links">
                  <a href="https://top.gg/bot/1101256478632972369/vote" target="_blank" rel="noopener" class="discord-mock-vote-link">
                    <img class="discord-mock-vote-icon" src="https://cdn.discordapp.com/emojis/1195866944482590731.webp?size=40" alt="Top.gg" style="width:20px; height:20px; margin-right:5px;">
                    <div>
                      <div class="discord-mock-vote-name">Top.gg</div>
                      <div class="discord-mock-vote-url">https://top.gg/bot/1101256478632972369/vote</div>
                    </div>
                  </a>
                  <a href="https://discords.com/bots/bot/1101256478632972369/vote" target="_blank" rel="noopener" class="discord-mock-vote-link">
                    <img class="discord-mock-vote-icon" src="https://cdn.discordapp.com/emojis/1317259330961018930.webp?size=40" alt="Discords.com" style="width:20px; height:20px; margin-right:5px;">
                    <div>
                      <div class="discord-mock-vote-name">Discords.com</div>
                      <div class="discord-mock-vote-url">https://discords.com/bots/bot/1101256478632972369/vote</div>
                    </div>
                  </a>
                  <a href="https://botlist.me/bots/1101256478632972369" target="_blank" rel="noopener" class="discord-mock-vote-link">
                    <img class="discord-mock-vote-icon" src="https://cdn.discordapp.com/emojis/1227425669642719282.webp?size=40" alt="Botlist.me" style="width:20px; height:20px; margin-right:5px;">
                    <div>
                      <div class="discord-mock-vote-name">Botlist.me</div>
                      <div class="discord-mock-vote-url">https://botlist.me/bots/1101256478632972369</div>
                    </div>
                  </a>
                  <a href="https://discordlist.gg/bot/1101256478632972369/vote" target="_blank" rel="noopener" class="discord-mock-vote-link">
                    <img class="discord-mock-vote-icon" src="https://cdn.discordapp.com/emojis/1252815882481303662.webp?size=40" alt="Discordlist.gg" style="width:20px; height:20px; margin-right:5px;">
                    <div>
                      <div class="discord-mock-vote-name">Discordlist.gg</div>
                      <div class="discord-mock-vote-url">https://discordlist.gg/bot/1101256478632972369/vote</div>
                    </div>
                  </a>
                </div>
                <div class="discord-mock-embed-footer" style="margin-top:0.6rem;">Today at ${toolsTime}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (category.toLowerCase() === "support") {
    const supportTime = new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
    panel.innerHTML = `
      <div class="discord-mock">
        <div class="discord-mock-message">
          <img class="discord-mock-avatar" src="https://pridebot.xyz/pridebotlogo.png" alt="Pridebot" />
          <div class="discord-mock-content">
            <div class="discord-mock-header">
              <span class="discord-mock-username">Pridebot Aka Roman</span>
              <span class="discord-mock-app-tag">APP</span>
              <span class="discord-mock-timestamp">Today at ${supportTime}</span>
            </div>
            <div class="discord-mock-embed">
              <div class="discord-mock-embed-accent" style="background: #FF00EA;"></div>
              <div class="discord-mock-embed-body">
                <div class="discord-mock-embed-title">Send Feedback</div>
                <div style="color:#dbdee1; font-size:0.8rem; margin:0.25rem 0 0.5rem;">Your feedback helps us make PrideBot better for everyone!</div>

                <div style="color:#fff; font-size:0.8rem; font-weight:700; margin-top:0.4rem;">What can you share with us?</div>
                <ul style="color:#dbdee1; font-size:0.78rem; margin:0.15rem 0 0.5rem; padding-left:0; list-style:none;">
                  <li>• General thoughts about the bot</li>
                  <li>• Bug reports and issues</li>
                  <li>• New feature suggestions</li>
                  <li>• Improvements to existing commands</li>
                  <li>• Anything else on your mind!</li>
                </ul>

                <div style="color:#dbdee1; font-size:0.78rem; margin:0.3rem 0;">If you have a data deletion request, please select the <em>'Data Delete Request'</em> option.</div>
                <div style="color:#dbdee1; font-size:0.78rem; margin:0.3rem 0;">If your feedback is related to any radar percentages, please keep in mind, they are random number generators (RNG) and have no meaning except for fun.</div>

                <div style="color:#fff; font-size:0.8rem; font-weight:700; margin-top:0.5rem;">Please select a category below to get started:</div>
                <div class="discord-mock-select">Select feedback category...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (category.toLowerCase().includes("avatar")) {
    panel.innerHTML = `
      <div class="discord-mock">
        <div class="discord-mock-message">
          <img class="discord-mock-avatar" src="https://pridebot.xyz/pridebotlogo.png" alt="Pridebot" />
          <div class="discord-mock-content">
            <div class="discord-mock-header">
              <span class="discord-mock-username">Pridebot</span>
              <span class="discord-mock-app-tag">APP</span>
              <span class="discord-mock-timestamp">Today at ${profileTime}</span>
            </div>
            <div class="discord-mock-text">Your pride avatar is ready!</div>
            <div class="discord-mock-embed">
              <div class="discord-mock-embed-accent" style="background: #FF00EA;"></div>
              <div class="discord-mock-embed-body">
                <div class="discord-mock-embed-title">Pridebot's lgbt Avatar</div>
                <img
                  src="https://pfp.pridebot.xyz/1101256478632972369/lgbt.png"
                  alt="LGBT Pride Avatar"
                  class="discord-mock-embed-image"
                />
                <div class="discord-mock-embed-footer">
                  For more flags use /avatar-list &nbsp;·&nbsp; Images deleted after 30 days
                </div>
              </div>
            </div>
            <div class="discord-mock-buttons">
              <a href="https://pfp.pridebot.xyz/1101256478632972369/lgbt.png" target="_blank" rel="noopener" class="discord-mock-btn">
                Download PNG <i class="fa fa-external-link"></i>
              </a>
              <a href="https://pfp.pridebot.xyz/1101256478632972369/lgbt.webp" target="_blank" rel="noopener" class="discord-mock-btn">
                Download WebP <i class="fa fa-external-link"></i>
              </a>
              <a href="https://pfp.pridebot.xyz/1101256478632972369" target="_blank" rel="noopener" class="discord-mock-btn">
                View All Avatars <i class="fa fa-external-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  const pills = details.commands
    .map((cmd) => `<span class="preview-cmd-pill">/${cmd}</span>`)
    .join("");

  panel.innerHTML = `
    <div class="discord-preview">
      <div class="discord-command-label">/${details.commands[0] || category.toLowerCase()}</div>
      <div class="discord-embed">
        <div class="discord-embed-accent"></div>
        <div class="discord-embed-body">
          <div class="discord-embed-title">${category} Commands</div>
          <div class="discord-embed-description preview-pills">${pills}</div>
          <div class="discord-embed-footer">
            <i class="fa fa-terminal me-1"></i> ${details.count} command${details.count !== 1 ? "s" : ""} available
          </div>
        </div>
      </div>
    </div>
  `;
}

function resetCommandPreview() {
  const panel = document.getElementById("commandPreview");
  if (!panel) return;
  panel.innerHTML = `
    <div class="command-preview-placeholder">
      <i class="fa fa-hand-o-left fa-2x mb-3"></i>
      <p>Select a category to preview its commands</p>
    </div>
  `;
}

function fetchTotalUsage() {
  fetch("https://api.pridebot.xyz/stats")
    .then((r) => r.json())
    .then((stats) => {
      const el = document.getElementById("totalcommandUsage");
      if (el) {
        el.textContent =
          stats.totalUsage != null ? stats.totalUsage.toLocaleString() : "N/A";
      }
    })
    .catch((err) => {
      console.error("fetchTotalUsage failed:", err);
    });
}

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

      const previewCommand = {
        Fun: "gaydar",
        Avatar: "prideavatar",
        Profile: "profile view",
        Pride: "lesbian",
        Support: "feedback",
        Terms: "sexuality",
        Tools: "vote",
      };

      for (const [category, details] of Object.entries(data)) {
        if (category === "Dev") continue;

        // Normalize nested Pride structure into flat commands list
        const normalized = details.categories
          ? {
              commands: Object.values(details.categories).flatMap(
                (sub) => sub.commands,
              ),
              count: details.count,
              subcategories: details.categories,
            }
          : details;

        // Override Profile with its known subcommands
        if (category === "Profile") {
          normalized.displayCommands = [
            "profile view",
            "profile setup",
            "profile edit",
            "profile update",
            "userprofile",
          ];
          normalized.count = 5;
        }

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
        titleSpan.textContent = `${category} Commands (${normalized.count})`;

        button.appendChild(titleSpan);
        accordionItem.appendChild(button);

        const accordionContent = document.createElement("div");
        accordionContent.className = "accordion-content";
        accordionContent.id = `accordion-content-${category}`;
        accordionContent.style.display = "none";

        if (normalized.subcategories) {
          // Render grouped subcategories for Pride
          for (const [subName, subDetails] of Object.entries(
            normalized.subcategories,
          )) {
            const subLabel = document.createElement("div");
            subLabel.className = "accordion-subcategory-label";
            subLabel.textContent =
              subName.charAt(0).toUpperCase() + subName.slice(1);
            accordionContent.appendChild(subLabel);

            const paragraph = document.createElement("p");
            const featuredSub = previewCommand[category];
            subDetails.commands.forEach((command, index) => {
              const strong = document.createElement("strong");
              strong.textContent = `/${command}`;
              if (featuredSub && command === featuredSub) {
                strong.classList.add("preview-cmd-highlight");
              }
              paragraph.appendChild(strong);
              if (index < subDetails.commands.length - 1) {
                paragraph.appendChild(document.createTextNode(" "));
              }
            });
            accordionContent.appendChild(paragraph);
          }
        } else {
          const paragraph = document.createElement("p");
          const cmdsToShow = normalized.displayCommands || normalized.commands;
          const featured = previewCommand[category];
          cmdsToShow.forEach((command, index) => {
            const strong = document.createElement("strong");
            strong.textContent = `/${command}`;
            if (featured && command === featured) {
              strong.classList.add("preview-cmd-highlight");
            }
            paragraph.appendChild(strong);
            if (index < cmdsToShow.length - 1) {
              paragraph.appendChild(document.createTextNode(" "));
            }
          });
          accordionContent.appendChild(paragraph);
        }

        accordionItem.appendChild(accordionContent);
        accordionContainer.appendChild(accordionItem);

        button.addEventListener("click", function () {
          const isExpanded = button.getAttribute("aria-expanded") === "true";

          // Close all other accordion items
          document
            .querySelectorAll(".modern-accordion .accordion-button")
            .forEach((btn) => {
              if (btn !== button) {
                btn.setAttribute("aria-expanded", "false");
                const content = btn.nextElementSibling;
                if (content) content.style.display = "none";
              }
            });

          // Toggle current item
          button.setAttribute("aria-expanded", !isExpanded);

          if (!isExpanded) {
            accordionContent.style.display = "block";
            updateCommandPreview(category, normalized);
          } else {
            accordionContent.style.display = "none";
            resetCommandPreview();
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
