(() => {
  const form = document.getElementById("ocs-volunteer-signup");
  const previewButton = document.getElementById("volunteer-preview-button");
  const status = document.getElementById("volunteer-preview-status");

  if (!(form instanceof HTMLFormElement)
      || !(previewButton instanceof HTMLButtonElement)
      || !(status instanceof HTMLParagraphElement)) {
    return;
  }

  previewButton.disabled = false;

  previewButton.addEventListener("click", () => {
    if (!form.reportValidity()) {
      return;
    }

    status.textContent = "Your form is complete for this preview. Nothing was sent or saved.";
  });
})();
