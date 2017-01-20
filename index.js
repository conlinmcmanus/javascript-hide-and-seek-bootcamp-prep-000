function getFirstSelector(x) {
  return document.querySelector(x)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var node = document.getElementById('grand-node')
  var nextNode = node.children[0]
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (var i = 0, x = rankedLists.length; i < x; i++) {
    var children = rankedLists[i].children
    for (var y = 0, p = children.length; y < p; y++) {
      children[y].innerHTML = parseInt(children[y].innerHTML) + n
    }
  }
}
