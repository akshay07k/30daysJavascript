class Graph{
    constructor(){
        this.adjacencyList = new Map()
    }

    addVertex(vertex){
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex, [])
        }
    }

    addEdge(ver1, ver2){
        if(this.adjacencyList.has(ver1) && this.adjacencyList.has(ver2)){
            this.adjacencyList.get(ver1).push(ver2);
            this.adjacencyList.get(ver2).push(ver1);
        }
    }

    bfs(startingVertex){
        if(!this.adjacencyList.has(startingVertex)){
            return []
        }

        let visited = new Set();
        let q = [startingVertex];
        let res = [];
        visited[startingVertex] = true;

        while(q.length > 0){
            const curr = q.shift();
            res.push(curr);

            const neighbours = this.adjacencyList.get(curr);
            for(let i of neighbours){
                if(!visited[i]){
                    visited[i] = true;
                    q.push(i);
                }
            }
        }
        return res;
    }


    bfsPro(starting, target){
        if(!this.adjacencyList.has(starting) || !this.adjacencyList.has(target)){
            return []
        }

        let visited = new Set();
        let q = [[starting]];
        let res = [];
        visited.add(starting)

        while(q.length > 0){
            let path = q.shift();
            let node = path[path.length-1];
            if(node == target){
                return path;
            }
            let neighbours = this.adjacencyList.get(node);

            for(let i of neighbours){
                if(!visited.has(i)){
                    visited.add(i);
                    q.push([...path, i]);
                }
            }
        }
        return [];
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

console.log("BFS starting from vertex A:");
console.log(graph.bfs("A").join(" "));
console.log(graph.bfsPro("A","E").join(" "));