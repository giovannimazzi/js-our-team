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

function addNewMember() {
  const newMemberInputName = document.getElementById("input-name");
  const newMemberInputRole = document.getElementById("input-role");
  const newMemberInputEmail = document.getElementById("input-email");

  const name = capitalize(newMemberInputName.value.trim());
  const role = capitalize(newMemberInputRole.value.trim());
  const email = newMemberInputEmail.value.trim().toLowerCase();
  const img = "img/new_member.png";

  teamMembers.push({ name, role, email, img });

  newMemberInputName.value = "";
  newMemberInputRole.value = "";
  newMemberInputEmail.value = "";
}

/**
 * This function receives a string as a name and returns the capitalized version:
 * first char of each word in uppercase and the rest in lowercase.
 * @param {string} name The string to capitalize
 * @returns {string} The capitalized string
 */
const capitalize = (name) => {
  if (!name) return "";
  if (name.includes(" ")) {
    return name
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
      .join(" ");
  } else {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
};
