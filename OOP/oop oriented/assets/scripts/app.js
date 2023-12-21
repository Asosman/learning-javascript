class DomHelper{

    static clearEventListners(element){
        const clonedElemnent = element.cloneNode(true);
        element.replaceWith(clonedElemnent);
        return clonedElemnent;
    }

    static moveElement(elementId,destinationSelector){
        const element = document.getElementById(elementId);
        const destination = document.querySelector(destinationSelector);

        destination.append(element);
    }
}


class Component{
    constructor(hostElementId, insertBefore= false){
        if(hostElementId){
            this.hostElement = document.getElementById(hostElementId);
        }else{
            this.hostElement = document.body;
        }
        this.insertBefore = insertBefore;
    }
    detach(){
        this.element.remove();
    }
    
 
    attach(){
         this.hostElement.insertAdjacentElement(this.insertBefore ? 'afterbegin' : 'beforeend', this.element);
    }
}


class Tooltip extends Component {
    constructor(closeTooltipNotifierfunction){
        super('active-projects', true);
        this.closeTooltipNotifier = closeTooltipNotifierfunction;
        this.create();
    }

    closeTooltip = ()=>{
        this.detach ()
        this.closeTooltipNotifier();
        
    }
    
    create(){
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'card';
        tooltipElement.textContent = 'uche';
        this.element = tooltipElement
        tooltipElement.addEventListener('click',this.closeTooltip)

    }
}


class ProjectItem {
    hasActiveTooltip = false;
    constructor(id, updateProjectListsFunction,type) {
        this.id = id;
        this.updateProjectListsHandular = updateProjectListsFunction;
        this.connectSwitchButton();
        this.connectmoreInfoButton(type);
    }

    moreInfoHandular(){
        if(this.hasActiveTooltip){
            return;
        }
        const tooltip =  new Tooltip(() => {
            this.hasActiveTooltip = false;
        });
        tooltip.attach();
        this.hasActiveTooltip = true;
    }


    connectmoreInfoButton() {
        const projectItemElement = document.getElementById(this.id);
        const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
        moreInfoBtn.addEventListener('click',this.moreInfoHandular)
    }


    connectSwitchButton(type) {
        const projectItemElement = document.getElementById(this.id);
        let switchbtn = projectItemElement.querySelector('button:last-of-type');
        switchbtn = DomHelper.clearEventListners(switchbtn);
        switchbtn.textContent = type === 'active' ? 'finished':'activate';
        switchbtn.addEventListener('click', this.updateProjectListsHandular.bind(null,this.id));
    }

    update(updateprojectfn, type){
        this.updateProjectListsHandular = updateprojectfn
        this.connectSwitchButton(type);
    }
}


class ProjectList {
    projects = [];

    constructor(type) {
        this.type = type;
        const projItems = document.querySelectorAll(`#${type}-projects li`);

        for (const projItem of projItems) {
            this.projects.push(new ProjectItem(projItem.id, this.switchProject.bind(this),this.type))
        }
        console.log(this.projects)

    }

    setSwitchHandularFunction(switchHandularFunction) {
        this.switchHandularFunction = switchHandularFunction;
    }

    addProject(project) {
        console.log(this);
        this.projects.push(project);
        DomHelper.moveElement(project.id,`#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this), this.type)
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