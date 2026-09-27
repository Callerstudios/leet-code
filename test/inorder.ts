type CustomNode = {
  value: number;
  left: CustomNode | null;
  right: CustomNode | null;
};

function inOrder(node: CustomNode | null) {
  if (node === null) {
    return;
  }

  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}

const root: CustomNode = {
  value: 4,
  left: {
    value: 2,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 3,
      left: null,
      right: null,
    },
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
};

inOrder(root);
