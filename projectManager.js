function createProjectManager() {
    const projects = [];

    return {
        addProject(project) {
            projects.push(project);
        },

        addTaskToProject(projectId, task) {
            const project = projects.find(p => p.id === projectId);
            if (project) {
                project.tasks.push(task);
            }
        },

        getProjectById(projectId) {
            const project = projects.find(p => p.id === projectId);
            return project;
        },

        markTaskAsCompleted(projectId, taskId) {
            const project = projects.find(p => p.id === projectId);
            if (project) {
                const task = project.tasks.find(t => t.id === taskId);
                if (task) {
                    task.completed = true;
                }
            }
        }
    };
}

module.exports = createProjectManager;  // Exportez la fonction