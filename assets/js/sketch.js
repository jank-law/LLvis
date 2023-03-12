let backgroundColor;
let canv;
let mainList;
let visList;

let first;
let errorLabel;
let nameLabel;
let nodeNameLabel;

let nodeName;
let nodeNames;

let addButton;
let addLabel;
let addInc;
let addDec;
let addIndex;

let removeButton;
let removeLabel;
let removeInc;
let removeDec;
let removeIndex;



function setup() {
    backgroundColor = 150;
    visList = [];
    nodeNames = ['foo', 'bar', 'ace', 'sol', 'end', 'gas', 'cub', 'cat', 'dog' , 'hat', 'mat', 'bet', 'let', 'hud', 'mud', 'dud', 'poe', 'doe', 'vat']
    mainList = new LinkedList();
    nodeName = nodeNames[Math.floor(Math.random() * nodeNames.length)];

    canv = createCanvas(windowWidth * 0.70, windowHeight*0.9);
    canv.parent('sketch');
    centerCanvas();
    initButtons();
}

function centerCanvas() {
    let x = (windowWidth - width*0.65) / 2;
    let y = (windowHeight - height) /2;
    canv.position(x, y);
}

function windowResized() {
    centerCanvas();
}

function draw() {
    background(backgroundColor);
    //console.log(mainList.toString(), mainList.size);

    if (mainList.isEmpty()) {
        first.text = 'List is empty!';
        first.x = width/2 - 100;
    }

    if (!mainList.isEmpty()) {
        first.text = 'First';
        first.x = 50;
        line(150, height/2 - 50, 250, height/2 - 50);
    }

    if (addInc.clicked) {
        addIndex++;
        addInc.clicked = false;
    }

    if (addDec.clicked) {
        if (addIndex > 0) {
            addIndex--;
        }
        addDec.clicked = false;
    }

    if (removeInc.clicked) {
        removeIndex++;
        removeInc.clicked = false;
    }

    if (removeDec.clicked) {
        if (removeIndex > 0) {
            removeIndex--;
        }
        removeDec.clicked = false;
    }

    if (addButton.clicked) {
        if (addIndex <= mainList.size) {
            mainList.add(nodeName, addIndex);
            nodeName = nodeNames[Math.floor(Math.random() * nodeNames.length)];
            nameLabel.text = nodeName;
        }

        if (addIndex > mainList.size) {
            mainList.add(nodeName, mainList.size);
            nodeName = nodeNames[Math.floor(Math.random() * nodeNames.length)];
            nameLabel.text = nodeName;
        }
        errorLabel.text = '';
        addButton.clicked = false;
    }

    if (removeButton.clicked) {
        if (removeIndex > mainList.size-1) {
            errorLabel.text = 'Cannot remove from this index!';
        }
        else {
            mainList.remove(removeIndex);
            errorLabel.text = '';
        }
        
        removeButton.clicked = false;
    }   


    addLabel.text = 'i = ' + addIndex;
    removeLabel.text = 'i = ' + removeIndex;

    first.display();
    errorLabel.display();
    nameLabel.display();
    nodeNameLabel.display();
    addButton.display();
    addLabel.display();
    addInc.display();
    addDec.display();

    removeButton.display();
    removeLabel.display();
    removeInc.display();
    removeDec.display();

    let nodeStart = 50;

    for (let i = 0; i < mainList.size; i++) {
        nodeStart += 200;
        if (i == mainList.size - 1) {
            drawNode(nodeStart, height/2 - 100, mainList.get(i), false);
        }
        else  {
            drawNode(nodeStart, height/2 - 100, mainList.get(i), true);
        }
    }
}

function mousePressed() {
    addButton.checkClicked();
    addInc.checkClicked();
    addDec.checkClicked();

    removeButton.checkClicked();
    removeInc.checkClicked();
    removeDec.checkClicked();
}

function initButtons() {
    first = new GUIPart(width/2 - 100, height/2 - 100, 100, 100, 'first');
    first.stroke = backgroundColor;
    first.fill = backgroundColor;

    errorLabel = new GUIPart(width/2, height - 100, 100, 100, '');
    errorLabel.textSize = 25;
    errorLabel.stroke = backgroundColor;
    errorLabel.fill = backgroundColor;

    nameLabel = new GUIPart(width - 200, height - 50, 200, 50, nodeName);
    nameLabel.strokeWeight = 0;
    nameLabel.fill = 200;

    nodeNameLabel = new GUIPart(width - 200, height - 100, 200, 50, 'next node:');
    nodeNameLabel.strokeWeight = 0;
    nodeNameLabel.fill = 200;
    nodeNameLabel.textSize = 30;

    addIndex = 0;

    addButton  = new ClickablePart(0, height - 100, 100, 100, 'Add');
    addButton.strokeWeight = 0;
    addButton.fill = 200;

    addLabel  = new GUIPart(100, height - 100, 100, 50, 'i = ' + addIndex);
    addLabel.textSize = 20;
    addLabel.strokeWeight = 0;
    addLabel.fill = 200;

    addInc  = new ClickablePart(150, height - 50, 50, 50, '>');
    addInc.strokeWeight = 0;
    addInc.fill = 200;

    addDec  = new ClickablePart(100, height - 50, 50, 50, '<');
    addDec.strokeWeight = 0;
    addDec.fill = 200;

    removeIndex = 0;

    removeButton  = new ClickablePart(220, height - 100, 100, 100, 'Remove');
    removeButton.textSize = 25;
    removeButton.strokeWeight = 0;
    removeButton.fill = 200;

    removeLabel  = new GUIPart(320, height - 100, 100, 50, 'i = ' + removeIndex);
    removeLabel.textSize = 20;
    removeLabel.strokeWeight = 0;
    removeLabel.fill = 200;

    removeInc  = new ClickablePart(370, height - 50, 50, 50, '>');
    removeInc.strokeWeight = 0;
    removeInc.fill = 200;

    removeDec  = new ClickablePart(320, height - 50, 50, 50, '<');
    removeDec.strokeWeight = 0;
    removeDec.fill = 200;
}

function drawNode(x, y, data, next) {
    let nodeWidth = 100;
    let nodeHeight = 100;
    stroke(0);
    strokeWeight(3);
    fill(255);
    rect(x, y, 100, 100);
    textAlign(CENTER, CENTER);
    strokeWeight(1);
    fill(0);
    textSize(40);
    text(data, x + 50, y + 50);
    stroke(0);
    strokeWeight(3);
    fill(255);
    rect(x + nodeWidth, y, nodeWidth/2.5, nodeHeight);

    if (next) {
        line(x + nodeWidth + nodeWidth/2.5, y + nodeHeight/2, x + nodeWidth + nodeWidth/2.5 + 200, y + nodeHeight/2);
    }
    else {
        line(x + nodeWidth, y, x + nodeWidth + nodeWidth/2.5, y + nodeHeight);
    }
}