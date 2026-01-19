/**
 * This function prints the cards (one for each member)
 */
function printCards() {
  const teamCardSpace = document.getElementById("team-cards-space");

  teamCardSpace.classList.add(
    "row",
    "row-cols-1",
    "row-cols-sm-2",
    "row-cols-xl-3",
    "gy-2",
    "justify-content-center",
  );

  let htmlString = "";

  for (const member of teamMembers) {
    htmlString += generateCard(member);
  }

  teamCardSpace.innerHTML = htmlString;
}

/**
 * This function takes an object as argument which represents a team member and returns the associated html card string
 *
 * @param {object} member the input object
 * @returns {string} the output html card
 */
function generateCard(member) {
  const { name, role, email, img } = member;

  const cardTemplateHTML = `<div class="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-xl-4 d-flex justify-content-center">
                  <img
                    src="./assets/${img}"
                    class="img-fluid"
                    alt="${img}"
                  />
                </div>
                <div class="col-xl-8 d-flex align-items-center">
                  <div class="card-body text-center text-xl-start">
                    <h5 class="card-title fw-bold fs-4">${name}</h5>
                    <p class="card-text fs-5">${role}</p>
                    <p class="card-text fs-5">
                      <a
                        class="text-decoration-none"
                        href="mailto:${email}"
                        >${email}</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

  return cardTemplateHTML;
}
