export default class Alert {

    constructor(jsonFile) {
        this.jsonFile = jsonFile;
      }
    
      async fetchAlerts() {
        try {
          const response = await fetch(this.jsonFile);
          const alerts = await response.json();
          return alerts;
        } catch (error) {
          console.error("Error fetching alerts:", error);
          return [];
        }
      }
    
      async render() {
        const alerts = await this.fetchAlerts();
    
        if (alerts.length === 0) return;
    
        const alertSection = document.createElement("section");
        alertSection.classList.add("alert-list");
    
        alerts.forEach(alert => {
          const alertMessage = document.createElement("p");
          alertMessage.textContent = alert.message;
          alertMessage.style.backgroundColor = alert.background;
          alertMessage.style.color = alert.color;
          alertMessage.style.padding = "10px";
          alertMessage.style.margin = "5px 0";
          alertMessage.style.borderRadius = "5px";
          alertMessage.style.textAlign = "center";
          alertSection.appendChild(alertMessage);
        });
    
        const mainElement = document.querySelector("main");
        if (mainElement) {
          mainElement.prepend(alertSection);
        }
      }
      
}