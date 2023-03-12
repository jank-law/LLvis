class GUIPart {
    constructor(x, y, w, h, text) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.text = text;

        this.strokeWeight = 10;
        this.textSize = 40;
        this.fill = 255;
        this.stroke = 0;
    }

    display() {
        stroke(this.stroke);
        strokeWeight(this.strokeWeight);
        fill(this.fill);
        rect(this.x, this.y, this.width, this.height);
        textAlign(CENTER, CENTER);
        strokeWeight(1);
        fill(0);
        textSize(this.textSize);
        text(this.text, this.x + this.width/2, this.y + this.height/2);
    }
}

class ClickablePart extends GUIPart {
    constructor(x, y, w, h, text) {
        super(x, y, w, h, text)
        this.clicked = false;
    }

    checkClicked() {
        if (mouseX > this.x && mouseX < this.x + this.width) {
            if (mouseY > this.y && mouseY < this.y + this.height) {
                this.clicked = true;
            }
        }
    }
}

class NodePart extends GUIPart {
    constructor(x, y, w, h, text, next) {
        super(x, y, w, h, text);
        this.next = next;
    }

    display() {
        super.display();
        stroke(this.stroke);
        strokeWeight(this.strokeWeight);
        fill(this.fill);
        rect(this.x + this.width, this.y, this.width/2.5, this.height);

        if (this.next == null) {
            line(this.x + this.width, this.y, this.x + this.width + this.width/2.5, this.y + this.height)
        }
        else {
            line(this.x + this.width + this.width/2.5, this.y + this.height/2, this.next.x, this.next.y + this.next.height/2)
        }
    }
}