import * as scp from "simple-cache-provider";
const { createCache } = scp;

export let cache: any;
function initCache() {
    cache = createCache(initCache);
}
initCache();
