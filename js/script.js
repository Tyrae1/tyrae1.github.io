'use strict';
const valueEl = document.getElementById('value');
const incBtn = document.getElementById('inc');
const decBtn = document.getElementById('dec');



history.replaceState({count}, '', '?count=' + count);
function renderCount(count) {
    valueEl.textContent = count;
}
function increment() {
    count++;
    renderCount(count);
    history.pushState({count}, '', '?count='+ count);
}
function decrement() {
    count--;
    renderCount(count);
    history.pushState({count}, '', '?count=' + count);
}

incBtn.addEventListener('click', increment);
decBtn.addEventListener('click', decrement);

window.addEventListener('popstate', event => {
    if (event.state && typeof event.state.count === 'number') {
        count = event.state.count;
        renderCount(count);
    }
});

/*class HistoryTracker {
    constructor() {
        this.visited = [location.href];
        this.current = 0;
        history.replaceState({from: 'tracker', index: 0}, '', location.href);
        
        window.addEventListener('popstate', event => {
            const st = event.state;
            if (st?.from === 'tracker' && Number.isInteger(st.index)) {
                this.current = st.index;
                console.log('popstate -> index:', this.current);
                console.log('now at:', this.visited[this.current]);
            } else {
                console.log('popstate (not ours):', st, location.href);
            }
        });
    }
    push(url){
        if (this.current < this.visited.length - 1) {
            this.visited = this.visited.slice(0, this.current + 1);
        }
        const abs = new URL(url, location.href).href;
        this.visited.push(abs);
        this.current = this.visited.length - 1;
        history.pushState({from: 'tracker', index: this.current}, '', abs);
        console.log('push -> index:', this.current);
        console.log('visited:', this.visited);
    }
    back(){
        history.back();
    }
    forward(){
        history.forward();
    }
}
const tracker = new HistoryTracker();
tracker.push('?page=1');
tracker.back();
tracker.push('?page=2');
tracker.back();
tracker.forward();
tracker.push('?page=3');*/