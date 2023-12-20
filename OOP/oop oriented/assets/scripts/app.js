class Tooltip {}


class ProjectItem {
    constructor(id, updateProjectListsFunction) {
        this.id = id;
        this.updateProjectListsHandular = updateProjectListsFunction;
        this.connectSwitchButton();
        this.connectmoreInfoButton();
    }

    connectmoreInfoButton() {

    }
    connectSwitchButton() {
        const projectItemElement = document.getElementById(this.id);
        const switchbtn = projectItemElement.querySelector('button:last-of-type');
        switchbtn.addEventListener('click', this.updateProjectListsHandular);
    }

}


class ProjectList {
    projects = [];

    constructor(type) {
        this.type = type;
        const projItems = document.querySelectorAll(`#${type}-projects li`);

        for (const projItem of projItems) {
            this.projects.push(new ProjectItem(projItem.id, this.switchProject.bind(this)))
        }
        console.log(this.projects)

    }

    setSwitchHandularFunction(switchHandularFunction) {
        this.switchHandularFunction = switchHandularFunction;
    }

    addProject() {
        console.log(this);
    }

    switchProject(projectId) {
        // console.log(projectId)
        this.switchHandularFunction(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
    }
}


class App {
    static init() {
        const activeProjects = new ProjectList('active');
        const finishedProjects = new ProjectList('finished');
        activeProjects.setSwitchHandularFunction(finishedProjects.addProject.bind(finishedProjects));
        finishedProjects.setSwitchHandularFunction(activeProjects.addProject.bind(activeProjects));
    }
}

App.init()