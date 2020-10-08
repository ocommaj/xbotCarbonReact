const codeDemos = {
    "mainId": "codeDemos",
    "displayTitle": "Code Demos",
    "defaultStr": "Coding Tutorials",
    "windowType": "tabbedWindow",
    "options": {
      "type": "tabbedWindow",
      "contentTemplateId": "tabbedWindow",
      "tabs": [
        {
        "id": "internalCodeDemos",
        "title": "Xavier Made",
        "content": {
          "defaultStr": "Locally sourced tutorials & livestreams.",
          "panelTemplateId": "tilesPreviewer",
          "sourceJSON": "@models/sectionConfigs/_codeDemos.json",
          "filters": [
            {
              "id": "language",
              "label": "Filter by Language",
              "items": [
                {id: "python", label: "Python"},
                {id: "htmlCss", label: "HTML & CSS"},
                {id: "vanillaJS", label: "JavaScript"},
                {id: "c++", label: "C++"},
                {id: "bash", label: "$Bash"} ]
              },
              {
                "id": "topics",
                "label": "Filter by Topic",
                "items": [
                  {id: "fundamentals", label: "Fundamentals"},
                  {id: "frontEnd", label: "Front End"},
                  {id: "appStructure", label: "App Architecture"},
                  {id: "iot", label: "Internet of Things"},
                  {id: "animation", label: "Animation"},
                  {id: "frameworks", label: "Frameworks"}]
                }
            ]
            }
          },
        {
        "id": "externalCodeDemos",
        "title": "External",
        "content": {
          "defaultStr": "Great Stuff from the wide wide world of sports.",
          "panelTemplateId": "singlePane",
          "sourceJSON": "some-url"
          }
        }
      ]
    }
  }

export default codeDemos
