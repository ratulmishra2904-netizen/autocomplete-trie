# autocomplete-trie
autocomplete_trie.js is a high-performance, zero-dependency prefix tree (Trie) library built entirely in vanilla JavaScript. Designed specifically for developers needing blazing-fast string matching, it serves as the perfect underlying engine for real-time search bars, dynamic autocomplete dropdowns, and complex text-filtering applications.
# ⚡ autocomplete-trie.js 

A lightning-fast, zero-dependency Trie (Prefix Tree) data structure written in vanilla JavaScript. 

Perfect for building high-performance autocomplete engines, search bar predictions, and real-time text filtering.

## ✨ Features
* **Zero Dependencies:** Extremely lightweight and fast.
* **Full ASCII Support:** Seamlessly handles spaces, numbers, and punctuation—not just a 26-letter alphabet.
* **Case-Insensitive:** Automatically normalizes inputs so "Algorithm" and "algorithm" match perfectly.
* **Plug & Play:** Easily drop it into any standard HTML/JS project via CDN.

## 🚀 Quick Start

You don't need NPM or Webpack to use this library. Just drop this `<script>` tag into the `<head>` of your HTML file:

```html
<script src="(https://cdn.jsdelivr.net/gh/ratulmishra2904-netizen/autocomplete-trie@main/autocomplete_trie.js)">
// 1. Initialize the dictionary
const searchEngine = new PrefixTree();

// 2. Insert your dataset 
searchEngine.insertAll([
    "Dijkstra's shortest path",
    "Decision tree entropy",
    "Depth-first search (DFS)",
    "Dynamic programming",
    "K-Means clustering"
]);

// 3. Search for a prefix
searchEngine.autocomplete("D");

// 4. Access the results
console.log(searchEngine.list); 
// Output: ["Dijkstra's shortest path", "Decision tree entropy", "Depth-first search (DFS)", "Dynamic programming"]

</script>```

Inserts a single word or phrase into the Trie.

searchEngine.insert("Time complexity");

Safely iterates through an array of strings and inserts them all into the Trie.

searchEngine.insertAll(["Array", "Linked List", "Graph"]);

.autocomplete(string)
Searches the Trie for any words or phrases that begin with the provided prefix. Returns 0 on success, or -1 if no matches exist.

searchEngine.autocomplete("Graph");
