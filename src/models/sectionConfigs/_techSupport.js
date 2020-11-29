const techSupport = {
  "mainId": "techSupport",
  "displayTitle": "Tech Support",
  "defaultStr": "Get Help with Your Tech",
  "windowType": "tabbedWindow",
  "options": {
    "type": "tabbedWindow",
    "contentTemplateId": "tabbedWindow",
    "tabs": [
      {
      "id": "xavierDevicesTechSupport",
      "title": "Xavier 1:1",
      "content": {
        "defaultStr": "Tools for making Xavier Pinebooks go.",
        "sampleText": "Tools for making Xavier Pinebooks go.",
        "panelTemplateId": "singlePane",
        "sourceJSON": "some-url"
      }
      },
      {
      "id": "personalDevicesTechSupport",
      "title": "Other Devices",
      "content": {
        "defaultStr": "Guides to get coding on your own machine.",
        "panelTemplateId": "singlePane",
        "sourceJSON": "some-url"
      }
    },
    {
      "id": "learningResourcesTechSupport",
      "title": "More Resources",
      "content": {
        "defaultStr": "Explore & become an IT ninja admin mage overlord.",
        "panelTemplateId": "singlePane",
        "sourceJSON": "some-url"
        }
      }
    ]
  }
};

export default techSupport;
