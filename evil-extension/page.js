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
  if (node.nodeType === Node.TEXT_NODE) {
    var text = ""
    for (word of node.textContent.split(' ')) {
      var fl = false

      for (var pat in MATCH_LIST) {
        if (word.indexOf(pat) != -1) {
          console.log(word)
          text = text.concat(' ', word.replace(pat, MATCH_LIST[pat]))
          fl = true
          break
        }
      }
      if(fl == false){
        text = text.concat(' ', word)
      }
    }
    node.textContent = text
    return
  }

  for (son of node.childNodes) {
    if (son.tagName != 'style' && son.tagName != 'script')
      transformTextNodes(son)
  }
  // TODO(you): Implement this function! See HW spec for details.
}

transformTextNodes(document.body)

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!')
console.log('Extension updated')
