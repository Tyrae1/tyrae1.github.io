'use strict';
class HistoryTracker {
    constructor() {
        this.visited = [];
        window.addEventListener('popstate', event => {
            console.log('popstate triggered!');
            console.log('current url:', location.href);
            console.log('State:', event.state);
        });
    }
    push(url){
        this.visited.push(url);
        history.pushState({from: 'tracker'}, '', url);
    }
    back(){
        history.back();
    }
}
const tracker = new HistoryTracker();
tracker.push('?page=1');
tracker.back();
tracker.push('?page=2');
tracker.back();