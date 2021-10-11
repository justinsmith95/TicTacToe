function generateHTML({ type, classes, text = '', href = '', parent = null, id = '' }) {
        let element = document.createElement(type)
        element.className = classes
        element.innerText = text
        element.id = id

        // TODO:
        // event listeners
        // id
        // value, data, checked, clicked

        // this is not the limit to what can be done in this helper function
        if (href.length > 0) {
            element.href = href
        }
        if (parent) {
            parent.appendChild(element)
        }
        return element
    }
    let container = generateHTML({ type: 'div', classes: 'container vh-100', parent: app })
    let row = generateHTML({ type: 'div', classes: 'row h-75', parent: container, id: 'Board' });
    
    let elementArray = [];
    
    //dynamic rendering
    for (let index = 0; index < 9; index++) {
        let element = generateHTML({ type: 'div', classes: 'col-4 border border-dark', parent: row, id: ('column' + index) });
        elementArray.push(element)
    };
    
    for (let index = 0; index < 9; index++) {
        let element = generateHTML({ type: 'button', classes: 'btn btn-danger btn-lg', parent: elementArray[index], id: ('button' + index), text: 'press', value: 0 })
        elementArray.push(element)
    };    
    
    console.log(elementArray);
    console.log(parent.button0);
