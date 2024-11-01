(() => {
  console.log("IIFE Fired");

  const hotspots = document.querySelectorAll(".Hotspot");

  // This is my data array for my hotspot info
  const infoboxes = [
    {
      title: "Earbuds Speaker Filter",
      text: "Protects the speaker, ensuring sound clarity while preventing debris from entering the earbud.",
      image: "images/s6.png",
    },
    {
      title: "Silicon Tipped Ear Piece",
      text: "Soft, ergonomic tip providing comfort and a secure fit for prolonged use.",
      image: "images/s7.png",
    },
    {
      title: "Microphone",
      text: "Captures voice input for calls and voice commands with noise-canceling capabilities.",
      image: "images/s5.png",
    },
    {
      title: "Charging Metal",
      text: "Conductive surface that connects with the charging case for efficient power transfer.",
      image: "images/s2s.png",
    },
    {
      title: "Bluetooth LED",
      text: "Indicator light showing the status of Bluetooth connection and pairing.",
      image: "images/s3.png",
    },
    {
      title: "Logo Breathing Light Effect",
      text: "Illuminated logo that pulses subtly, enhancing aesthetics and indicating power or connection status.",
      image: "images/s1.png",
    },
  ];

  // This function will Load the data from my array to display in the html/DOM
  function loadInfo() {
    hotspots.forEach((hotspot, index) => {
      const infobox = infoboxes[index];
      const annotation = hotspot.querySelector(".HotspotAnnotation");

      if (infobox) {
        annotation.innerHTML = "";

        const imgElement = document.createElement("img");
        imgElement.src = infobox.image;
        imgElement.alt = infobox.title;
        imgElement.style.width = "150px";
        imgElement.style.height = "auto";
        annotation.appendChild(imgElement);

        const titleElement = document.createElement("h2");
        titleElement.textContent = infobox.title;
        annotation.appendChild(titleElement);

        const textElement = document.createElement("p");
        textElement.textContent = infobox.text;
        annotation.appendChild(textElement);

        annotation.style.display = "none";
      }
    });
  }
  // This function will show and hide my hotspot
  function showInfo() {
    const annotation = this.querySelector(".HotspotAnnotation");
    annotation.style.display = "block";
    gsap.to(annotation, { autoAlpha: 1, duration: 1 });
  }

  function hideInfo() {
    const annotation = this.querySelector(".HotspotAnnotation");
    gsap.to(annotation, {
      autoAlpha: 0,
      duration: 1,
      onComplete: () => (annotation.style.display = "none"),
    });
  }

  loadInfo();

  // This is my event handler
  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });
})();
