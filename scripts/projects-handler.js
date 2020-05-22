var projectsDiv = document.getElementById("projects-div");
for (var i = 0; i < PROJECTS.length; i++) {
  // div
  var projectDiv = document.createElement("div");
  var divStyle = document.createAttribute("style");
  divStyle.value = "display:inline-block; width: 300px; margin: 10px;";
  projectDiv.setAttributeNode(divStyle);

  // h3
  var title = document.createElement("h3");
  var titleNode = document.createTextNode(PROJECTS[i].title);
  title.appendChild(titleNode);

  // img
  var image = document.createElement("img");
  var source = document.createAttribute("src");
  source.value = "./images/" + PROJECTS[i].img;
  image.setAttributeNode(source);
  var style = document.createAttribute("style");
  style.value = "width: 180px; height: 100px;";
  image.setAttributeNode(style);

  // p
  var p = document.createElement("p");
  var node = document.createTextNode(PROJECTS[i].description);
  p.appendChild(node);

  projectDiv.appendChild(title);
  projectDiv.appendChild(image);
  projectDiv.appendChild(p);

  projectsDiv.appendChild(projectDiv);
}
