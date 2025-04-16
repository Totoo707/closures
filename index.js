const createProjectManager = require('./projectManager');  // importer la fonction depuis l'autre fichier

const projectManager = createProjectManager();

projectManager.addProject({ id: 1, name: 'Projet Alpha', tasks: [] });
projectManager.addTaskToProject(1, { id: 101, title: 'Configurer le serveur', completed: false });

const project = projectManager.getProjectById(1);

projectManager.addTaskToProject(1, { id: 102, title: "Déployer l'application", completed: false });  // erreur par rapport au '' j'ai remplacé par ""

const updatedProject = projectManager.getProjectById(1);

const addTask = projectManager.addTaskToProject;
addTask(1, { id: 103, title: "Tester l'application", completed: false }); // meme erreur remplacé par ""

projectManager.markTaskAsCompleted(1, 102); // marquer la tâche comme terminée

console.log("\x1b[34m%s\x1b[0m", "------------------------Liste des projets------------------------");
console.log(projectManager.getProjectById(1));
console.log("\x1b[34m%s\x1b[0m", "------------------------Fin Liste des projets------------------------");