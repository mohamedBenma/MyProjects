
from Node import Node
class Btree:
    def __init__(self,root,L,U):
        self._root=root
        self._L=L
        self._U=U
        self._res=[]
        self._allNode=[root]

    def get_L(self):
        return self._L

    def get_U(self):
        return self._U

    def get_rootNode(self):
        return self._root

    def isRootNode(self,node):
        return node==self.get_rootNode()

    def get_root(self):
        return self._root

    def linear_tree(self,node):
        i=0
        if(node.isleaf()):
            k=0
            while(k<node.get_size()):
                self._res.append(node.get_keys()[k])
                k+=1
        else:
            while(i<node.get_size()):
                self.linear_tree(node.get_child()[i])
                self._res.append(node.get_keys()[i])
                i+=1
            self.linear_tree(node.get_child()[i])
        return self._res

    def get_all_node(self,node):
        if(not node.isleaf()):
            for i in node.get_child():
                self._allNode.append(i)
            for i in node.get_child():
                self.get_all_node(i)
        return self._allNode

    def search(self,val,root):
        print("search")
        test=root.searchInNode(val)
        if (type(test)==bool):
            return test
        else:
            return self.search(val,test)
    
    def searchNodeKey(self,root,val):
        r=root.searchInNode(val)
        if(r==root):
            return r
        else:
            return self.searchNodeKey(r,val)

    def is_root(self,node):
        return node == self._root

    def node_limit_keys(self,node):
        return (node.get_size()>=self._L-1) and (node.get_size()<=self._U-1 )and (not is_root(node))
    def insert(self,key):
        node=Node()
        print("insertion key\n: ",key)
        print("rootkeys",len(self.get_root().get_children()))
        node =self.searchNodeKey(self.get_root(),key)
        print("voisins",node.get_keys())
        print("node==racine=>",node==self.get_root())

        parentNodefull= node!=self.get_root() and node.get_parent().isFull(self.get_L()) 
        print(parentNodefull)
        # Root is handled explicitly since it requires creating 2 new nodes instead of the usual one.
        if node.isFull(self.get_L()):
            print("noeud est full impossible d'inserer")
            if not parentNodefull:
                
                print("size",node.get_size())
                print("node isFull")
                parent_root = Node()
                parent_root.add_child(node)

                parent_root.leaf = False
                # node is being set to the node containing the ranges we want for payload insertion.
                node = node.split(parent_root, key)
                
                print("root keys",self.get_root().get_keys())
                print("node keys",node.get_keys())
                print("root",len(node.get_children()))
                print("node child 1",node.get_children()[0].get_keys())
                print("node child 2",node.get_children()[1].get_keys())
            else:
                print("inserer dans le noeud parent ")
                node=node.get_parent()
        while not node.isleaf() and node.get_size()!=0:
            print("node is not a leaf")
            i = node.get_size() - 1
            print("size noeud",i)
            print("mynode",(node.get_children()[0]))

            while i > 0 and key < node.get_keys()[i] :
                print("while insert")
                i -= 1

            if key > node.get_keys()[i]:
                print("first if while")
                i += 1
            print("i",i)
            next = node.get_children()[i]
            print(next.get_size(),len(next.get_keys()))
            print("next",node.get_children()[i].get_keys())
            if len(next.get_keys())>=self.get_L():
                print("L",self.get_L())
                print(next.isFull(self.get_L()))
                print(next.get_keys())
                print("second if while")
                node = next.split(node, key)
            else:
                print("else")
                node = next
        node.add_key(key)
        
        node.get_keys().sort()
        print("insert executé..",key,self.get_root().get_keys(),len(node.get_children()))
        print("nodefinal",node.get_keys())
        


    def print_tree(self, x, l=0):
        print(x.get_keys())
        print("Level ", l, " ", len(x.get_keys()), end=":")
        for i in x.get_keys():
            print(i,end=" ")
        print()
        l += 1
        if len(x.get_children()) > 0:
            print(x.get_keys())
            for i in x.get_children():
                self.print_tree(i, l)
    


"""
    def insert(self,val):
        root =self._root
        if self._root.get_size():
            node=Node()
            self._root=node
            node.add_child_i(0,root)
            self.split_child(node,0)
            self.insert_non_full(node,val)
        else:
            self.insert_non_full(root,k)

    def split_child(self,node,i):
        t=self._U
        y=node.get_child()[i]
        z=Node()
        node.add_child_i(i+1,z)
        node.add_key_i(i,y.get_keys()[t-1])
        z.keys=y.get_keys()[t:(2*t)-1]
        y.keys=y.get_keys()[0:t-1]
        if not y.isleaf():
            z.child=y.get_child()[t:t*2]
            y.child=y.get_child()[0:t-1]

    def insert_non_full(sel,x,k):
        i=x.get_size()
        if x.isleaf():
            x.add_key((None,None))
            while i>=0 and k[0]<x.get_keys()[i][0]:
                x.get_keys()[i+1] = x.get_keys()[i]
                i-=1
            x.add_key_i(i,k)


"""
