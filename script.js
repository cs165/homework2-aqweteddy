// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

function checkAllSelect() {
    const block_img = document.querySelectorAll('.choice-grid > div')
    var dic = { "one": 0, "two": 0, "three": 0 }

    for (div of block_img) {
        if (div.checked == true)
            dic[div.dataset.questionId] = 1
    }
    if (dic['one'] * dic['two'] * dic['three'] == 0) return false
    return true
}

function startCheckBox() {
    const checkboxes = document.querySelectorAll('.choice-grid > div')
    for (box of checkboxes) {
        box.checked = false
        box.children[1].src = 'images/unchecked.png'
        box.style.background = '#f4f4f4'
        box.style.opacity = 1
        box.addEventListener('click', clickCheckBox)
    }
    comment = document.querySelector('div.comment')
    comment.style.display = "none"
    document.querySelector('body').scrollIntoView()

    return checkboxes
}

function clickCheckBox() {
    const question_id = event.currentTarget.dataset.questionId
    const block_img = document.querySelectorAll('.choice-grid > div')

    // unchecked
    for (div of block_img) {
        if (div.dataset.questionId == question_id) {
            div.children[1].src = 'images/unchecked.png'
            div.checked = false
            div.style.background = "#f4f4f4"
            div.style.opacity = 0.6
        }
    }
    // checked
    const sel_img = event.currentTarget
    sel_img.children[1].src = 'images/checked.png'
    sel_img.checked = true
    sel_img.style.background = "#cfe3ff"
    sel_img.style.opacity = 1

    // check all quetions selected
    if (checkAllSelect() == true) {
        for (box of checkboxes)
            box.removeEventListener('click', clickCheckBox)
        comment = document.querySelector('div.comment')
        ans = {}
        for (div of block_img) {
            if (div.checked == true) {
                if (div.dataset.choiceId in ans)
                    ans[div.dataset.choiceId] += 1
                else ans[div.dataset.choiceId] = 1
            }
        }
        var arr = new Array()
        for (var key in ans) {
            arr.push([key, ans[key]])
        }
        var max = ["a", 0]
        for (ele of arr) {
            if (ele[1] > max[1]) {
                max = ele
            }
        }
        comment.children[0].innerHTML = RESULTS_MAP[max[0]]['title']
        comment.children[1].innerHTML = RESULTS_MAP[max[0]]['contents']
        comment.style.display = "block"
    }
}

checkboxes = startCheckBox()
reset = document.querySelector('.comment > button')
reset.addEventListener('click', startCheckBox)