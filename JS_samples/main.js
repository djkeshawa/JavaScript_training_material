function Node(data,right,left){
  this.value = data;
  this.right = right;
  this.left = left;
}

function addRecursive(root,data){
  if(root === undefined)
    return new Node(data);

  if(data > root.value)
    root.right = addRecursive(root.right,data);
  else if(data < root.value)
    root.left = addRecursive(root.left,data);
  else
    return root

  return root
}

  var Tree = {
  add : function(data){
    this.root = addRecursive(this.root,data);
  },
  peek: function(){
    return this.root;
  },
};

var treeObj = Object.create(Tree);

treeObj.add(1);
treeObj.add(2);
treeObj.add(0.5);
treeObj.add(0.75);
treeObj.add(23);
console.log(treeObj);


