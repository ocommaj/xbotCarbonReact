const techSupport = {
  "mainId": "techSupport",
  "displayTitle": "Tech Support",
  "defaultStr": "Get Help with Your Tech",
  "options": {
    "type": "tabbed",
    "contentTemplateId": "tabbed-content-window",
    "tabs": [
      {
      "id": "xavierDevicesTechSupport",
      "title": "Xavier 1:1",
      "content": {
        "defaultStr": "Tools for making Xavier Pinebooks go.",
        "sourceJSON": "some-url"
      }
      },
      {
      "id": "personalDevicesTechSupport",
      "title": "Other Devices",
      "content": {
        "defaultStr": "Guides to get coding on your own machine.",
        "sourceJSON": "some-url"
      }
    },
    {
      "id": "learningResourcesTechSupport",
      "title": "More Resources",
      "content": {
        "defaultStr": "Explore & become an IT ninja admin mage overlord.",
        "sourceJSON": "some-url"
      }
    }
  ]
}
}

export default techSupport
