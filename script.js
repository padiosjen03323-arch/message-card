function personalizeMessage() {
  const name = document.getElementById("teacherName").value.trim();
  const message = document.getElementById("message");

  if (name) {
    message.innerHTML = `Dear <strong>${name}</strong>,<br>
    Happy Teacher’s Day!
Thank you for your endless patience, guidance, and inspiration.
You make learning a joy and have a lasting impact on every student’s life.
We’re so grateful for all that you do! :)`;
  } else {
    message.innerHTML = `Dear Teacher, thank you for being a guiding light and an inspiration.`;
  }
}

