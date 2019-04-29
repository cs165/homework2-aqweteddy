const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  // node = node.innerHTML
  // console.log(node)
  // for(var pat in MATCH_LIST){
  //   // console.log(pat)
  //   node = node.replace(pat, MATCH_LIST[pat])
  // }
  if (node.nodeType == Node.TEXT_NODE) {
    for (var pat in MATCH_LIST)
      node.textContent = node.textContent.replace(pat, MATCH_LIST[pat])
  }
  for (son of node.childNodes)
    transformTextNodes(son)
  // TODO(you): Implement this function! See HW spec for details.
}

transformTextNodes(document.body)

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!')
console.log('Extension updated')
