/**
 * @param {string[]} words
 * @return {number[]}
 */
class TrieNode {
  constructor() {
    this.children = {}
    this.prefixCount = 0
  }
};

class Trie {
  constructor() {
    this.root = new TrieNode()
  }
  insert(word) {
    let node = this.root
    for (const char of word) {
      if (!node.children[char]) { 
        node.children[char] = new TrieNode()
      }
      node = node.children[char]
      node.prefixCount++
    }
  }

  getPrefixScore(word) {
    let node = this.root
    let score = 0
    for (const char of word) {
      node = node.children[char]
      score += node.prefixCount
    }
    return score
  }
};

var sumPrefixScores = function(words) {
  const trie = new Trie()
  for (const word of words) {
    trie.insert(word)
  }
  const result = words.map(word => trie.getPrefixScore(word))

  return result
};