class list{
  constructor(data){
    this.head = {
      value:data,
      next:null,
    }
    this.tail = this.head;
    this.size = 1
  }
  addNode(node){
    let newNode = {
      value:node,
      next:null,
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  traversing(){
    let counter = 0;
    let currentNode = this.head;
    while(counter<this.size){
      console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }
  deletion(index){
    let count = 1;
    let lead = this.head;
    if(index === 1){
      this.head = this.head.next;
    }else{
      while(count < index-1){
        lead = lead.next;
        count++
      }
      let nextNode = lead.next.next;
      lead.next = nextNode;
    }
    console.log(lead)

  }
 
}
list = new list(500);
list.addNode(600);
list.addNode(700);
list.addNode(800);
list.addNode(900);
list.addNode(1000);
list.addNode(1100);
// list.traversing();
list.deletion(6)
console.log(list);
