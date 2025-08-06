'use strict';
class Navigation {
    constructor() {
        this.links = document.querySelectorAll('.nav-link');
        this.content = document.getElementById('content');
        this.handleClick = this.handleClick.bind(this);
        this.handlePopState = this.handlePopState.bind(this);
        this.init();
    }
    init() {
        this.links.forEach(link => {
            link.addEventListener('click', this.handleClick);
        });
        window.addEventListener('popstate', this.handlePopState);
        this.updateActiveLink(location.pathname);
    }
    handleClick(event) {
        event.preventDefault();
        const path = event.currentTarget.dataset.path;
        history.pushState({}, '', path);
        this.updateActiveLink(path);
    }
    handlePopState(){
        this.updateActiveLink(location.pathname);
    }
    updateActiveLink(path) {
        this.links.forEach(link => {
            link.classList.toggle('active', link.dataset.path === path);
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});