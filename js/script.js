'use strict';
class URLParser {
    constructor(url){
        this.url = new URL(url);
    }
    get protocol() {
        return this.url.protocol;
    }
    get hostname() {
        return this.url.hostname;
    }
    get path() {
        return this.url.pathname;
    }
    get queryParams() {
        const params = {};
        for (const [key, value] of this.url.searchParams.entries()) {
            params[key] = value;
        }
        return params;
    }
}

const parser = new URLParser("https://example.com/products/item?search=book&page=2");
console.log(parser.protocol);
console.log(parser.hostname);
console.log(parser.path);
console.log(parser.queryParams);
