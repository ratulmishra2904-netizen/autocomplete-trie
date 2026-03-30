class TrietreeNode {
    constructor(c) {
        this.value = c;
        this.next = null;
        this.endOfString = false;
    }
}
class PrefixTree {
    constructor() {
        this.root = [];
        this.list = [];
    }
    // insert method
    insert(str){
        let current = this.root;
        const len = str.length;
        for (let j = 0; j < len; j++) {

            let i = str[j].charCodeAt(0) ;
            
            if (!current[i]) {
                current[i] = new TrietreeNode(str[j]);
               
                if (j !== len - 1) {
                    current[i].next = [];
                }
                
            }
            
            else {
                if(!current[i].next && j !== len-1) {
                    current[i].next = [];
                }
            }
            
             (j === len - 1) && (current[i].endOfString = true);
             current = current[i].next;
            
        }

    }
    // insert all
    insertAll(arrayWord){
        arrayWord.forEach((word)=>{
            this.insert(word);
        });
    }
    // display method
    display(root,str){
    
    for(let i = 0 ; i < root.length ; i ++ ){
        
        if(root[i]){
            const tempstr = str + root[i].value;

            if(root[i].endOfString) this.list.push(tempstr) ;

            if(! root[i].next){
                continue;
            }
            
            this.display(root[i].next , tempstr);
        }
        
        else continue;
        
    }
    return ;
    }

    autocomplete(str){
        let current = this.root;
        let tempstring = "";
        let lastNode = null;
        for(let i = 0 ; i < str.length ; i ++ )
            {

            const j = str[i].charCodeAt(0) ;
           

            tempstring += str[i];
             
          

            if(!current || !current[j]){
                return -1;
            }
            lastNode = current[j];

            
            current = current[j].next;
            
            
        }
        if(lastNode && lastNode.endOfString)
            {
                this.list.push(tempstring);
                
            }

        if(current){ 
            this.display(current,str);
        }
       
        return 0 ;

    }
    emptyList(){
        this.list = [];
        return 0 ;
    }
    
    
}


if (typeof window !== 'undefined') {
    window.PrefixTree  = PrefixTree ; 
}
