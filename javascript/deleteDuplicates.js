var deleteDuplicates = function(head) {
    let curr = head
    let prev = null
    let seenValues = []
    if(head == null){
        return head
    }
    while(curr?.next !== null){
        if(seenValues.includes(curr.val)){
            prev.next = curr.next
        }
        else{
            seenValues.push(curr.val)
            prev = curr
        }
        curr = curr.next
    }
    if(seenValues.includes(curr.val)){
        prev.next = null
    }
    return head
};