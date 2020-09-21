const codeDemos = {
    "mainId": "codeDemos",
    "displayTitle": "Code Demos",
    "defaultStr": "Coding Tutorials",
    "options": {
      "type": "tabbed",
      "contentTemplateId": "tabbed-content-window",
      "tabs": [
        {
        "id": "internalCodeDemos",
        "title": "Xavier Made",
        "content": {
          "defaultStr": "Locally Sourced Tutorials & Livestreams.",
          "panelTemplateId": "collapsing-tile-tab-panel",
          "sourceJSON": "../../data/internalDemos.json",
          "filters": [
            {
              "id": "language",
              "labelMsg": "Filter by Language",
              "filters": {
                "python": "Python",
                "htmlCss": "HTML & CSS",
                "vanillaJS": "JavaScript",
                "c++": "C++",
                "bash": "$Bash"}
              },
              {
                "id": "topics",
                "labelMsg": "Filter by Topic",
                "filters": {
                  "fundamentals": "Fundamentals",
                  "frontEnd": "Front End",
                  "appStructure": "App Architecture",
                  "iot": "Internet of Things",
                  "animation": "Animation",
                  "frameworks": "Frameworks"}
                }
            ]
            }
          },
        {
        "id": "externalCodeDemos",
        "title": "External",
        "content": {
          "defaultStr": "Great Stuff from the wide wide world of sports.",
          "sourceJSON": "some-url"
          }
        }
      ]
    }
  }

export default codeDemos
