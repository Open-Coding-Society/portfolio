import { volunteerAPI, fetchOptions } from "./api/config.js";

(() => {
  const form = document.getElementById("ocs-volunteer-signup");
  const submitButton = document.getElementById("volunteer-submit-button");
  const status = document.getElementById("volunteer-submit-status");

  if (!(form instanceof HTMLFormElement)
      || !(submitButton instanceof HTMLButtonElement)
      || !(status instanceof HTMLParagraphElement)) {
    return;
  }

  submitButton.disabled = false;

  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (!form.reportValidity() || submitButton.disabled) {
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Submitting…";
    form.setAttribute("aria-busy", "true");
    status.dataset.state = "loading";
    status.textContent = "Submitting your application…";

    try {
      const formData = new FormData(form);
      const application = {
        name: String(formData.get("name") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        role: String(formData.get("role") ?? ""),
        message: String(formData.get("message") ?? "").trim(),
      };
      const response = await fetch(volunteerAPI, {
        ...fetchOptions,
        method: "POST",
        body: JSON.stringify(application),
      });

      if (!response.ok) {
        let errorMessage = `The server returned error ${response.status}. Please try again.`;
        try {
          const error = await response.json();
          if (typeof error.message === "string" && error.message.trim()) {
            errorMessage = error.message;
          }
        } catch (parseError) {
          console.error("Could not read volunteer application error response:", parseError);
        }
        throw new Error(errorMessage);
      }

      form.reset();
      status.dataset.state = "success";
      status.textContent = "Thank you! Your volunteer application has been submitted.";
    } catch (error) {
      console.error("Volunteer application submission failed:", error);
      status.dataset.state = "error";
      status.textContent = error instanceof Error
        ? `We couldn't submit your application: ${error.message}`
        : "We couldn't submit your application. Please try again.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Submit application";
      form.setAttribute("aria-busy", "false");
    }
  });
})();
