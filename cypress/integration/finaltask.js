beforeEach(() => {
  cy.viewport(1000, 1000);
});
describe("Final Task Automation", () => {
  it("Visits the automation practice form", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
  });
  it("Inputs first name", () => {
    cy.get("#firstName").type("Ricards");
  });
  it("Inputs first last name", () => {
    cy.get("#lastName").type("Vidners");
  });
  it("Inputs email address", () => {
    cy.get("#userEmail").type("ricards.vidners@va.lv");
  });
  it("Clicks on gender", () => {
    cy.contains("Male").click();
  });
  it("Enters phone number", () => {
    cy.get("#userNumber").type("12345678");
  });
  it("Sets up the birthdate", () => {
    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__month-select").select("February");
    cy.get(".react-datepicker__year-select").select("1930");
    cy.get(".react-datepicker__week").contains("28").click();
  });
  it("Enters subject", () => {
    cy.get("#subjectsContainer").type("e").contains("Economics").click();
  });
  it("Clicks on hobbies", () => {
    cy.contains("Music").click();
  });
  it("Uploads an image", () => {
    cy.get("input[type=file]").selectFile(
      "../WEB_AUT_RICARDS_VIDNERS/cypress/files/travel.jpg"
    );
  });
  it("Inputs current address", () => {
    cy.get("#currentAddress").type("Valmiera");
    cy.get("#state").click().type("NCR{enter}");
    cy.get("#city").click().type("Delhi{enter}");
  });
});
