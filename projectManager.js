function createProjectManager() {
    const projects = [];

    function cloneProject(project) {
        return { 
            ...project, 
            tasks: project.tasks.map(task => ({ ...task })) 
        };
    }

    return {
        addProject(project) {
            const clonedProject = { 
                ...project, 
                tasks: project.tasks ? project.tasks.map(task => ({ ...task })) : [] 
            };
            projects.push(clonedProject);
        },

        addTaskToProject(projectId, task) {
            const project = projects.find(p => p.id === projectId);
            if (project) {
                project.tasks.push({ ...task });
            }
        },

        getProjectById(projectId) {
            const project = projects.find(p => p.id === projectId);
            return project ? cloneProject(project) : undefined;
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

module.exports = createProjectManager;
