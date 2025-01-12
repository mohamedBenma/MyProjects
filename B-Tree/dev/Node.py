from re import search


class Node:

    def __init__(self,size=0,parent=None,leaf=True):
        self._size=size
        self.keys=[]
        self.leaf=leaf
        self.children=[]
        self._parent=parent
        self._t=None


    def get_size(self):
        """
        returns the number of keys in this Node
        :return : int
        """
        return self._size

    def get_keys(self):
        """
        returns the list of keys for this node
        :retrun: (list)
        """
        return self.keys
    def set_keys(self,l):
        self.keys=l
        self._size=len(l)
    def remove_key(self,val):
        self.keys.remove(val)
        self._size-=1


    def add_key(self,x):
        """
        function that adds a key and sorts the list of keys for this node
        :param x: (int) cle
        """
        self.keys.append(x)
        self._size+=1
        self.keys.sort()

    def add_key_i(self,i,key):
        """
        function that adds a key in position i in this node
        :param x: (int) cle
        """
        self.keys.insert(i,key)
        self._size+=1


    def isleaf(self):
        """
        returns True if the node is a leaf False otherwise
        :return: (boolean)
        """
        return self.leaf

    def set_leaf(self):
        """
        function that changes the state of the node (a leaf or not)
        """
        self.leaf=not(self.leaf)

    def get_children(self):
        """
        returns the list of children of this node
        :return: (list)
        """
        return self.children
    def set_child(self,node):
        self.get_children().remove(node)
    def set_children(self,l):

        for elm in l:
             self.add_child(elm)


    def add_child(self,x):
        """
        function that adds a Node x as a child of this node (list of children)
        :param x: (Noeud)
        """
        self.leaf=False
        self.children.append(x)
        x.set_parent(self)

    def add_child_i(self,i,x):
        """
        function that adds a Node x as a child of this node (list of children)
        :param x: (Noeud)
        """
        self.leaf=False
        self.child.insert(i,x)
        x.set_parent(self)

    def get_parent(self):
        """
        finds the parent Node of this node (if it is not a root)
        :return: (Noeud)
        """
        return self._parent

    def set_parent(self,x):
        """
        fonction qui met ajour le neoud parent de ce noeud
        :param x: (Neoud)
        """
        self._parent = x

    def isFull(self,L):
        print("isfull verify..")
        return self.get_size()>=L


    def searchInNode(self,val):
        print("searchInNode")
        """
        function which searches in this tree for a value (val) from a Noued (root root)
        retroun True if the key is present in the tree False otherwise
        :param val: (int) the search key
        :param root: (Noeud) the root node
        :return: (boolean)

        !!! cette fonction doit etre implementer dans la class arbre
        mais  pour cet etape de dev on l'a implementer comme
        methode des objets Noued et reste  fonctionnel !!!
        """
        i=0
        nbr_keys=self.get_size()
        while (i<nbr_keys-1) and val>self.get_keys()[i]:
            i+=1
        if (self.isleaf()):
            return self
        else:
            if (val == self.get_keys()[i]):
                return self
            elif (i==nbr_keys-1 and val>self.get_keys()[nbr_keys-1]):
                return self.get_children()[nbr_keys]
            else:
                return self.get_children()[i]
    def initT(self,t):
        self._t=t
    def split(self,parent,key):
        newnode=self.__class__()
        list=self.get_keys().copy()
        list.append(key)
        list.sort()

        mid_point=len(list)//2
        split_value=list[mid_point]

        parent.add_key(split_value)
        
        print("parent",parent.get_keys())
        
        newnode.set_children(self.children[mid_point+1:])
        parent.add_child(newnode)
        
        self.set_children(self.children[:mid_point+1])
        print("selfinit",self.get_keys())

        #cote droit>split_key
        newnode.set_keys(list[mid_point+1:])
        print("newnode",newnode.get_keys())
        #cote gauche<split_key
        self.set_keys(list[:mid_point])
        if len(newnode.get_children())> 0:
            newnode.set_leaf()
            parent.set_children(parent.add_child(newnode))
        print("splitvalue",split_value)
        if key< split_value:
            print("inserer dans le noeud gauche")
            #inserer dans le noeud gauche
            self.remove_key(key)
            print("self",self.get_keys())  
            print("newnode",newnode.get_keys())
            print("parent",parent.get_keys())
            return self
            #inserer dans le noeud parent
        if key==split_value:
            print("inserer dans le noeud parent")
            parent.set_keys([])
            
            print("self",self.get_keys())
            print("newnode",newnode.get_keys())
            print("parent",parent.get_keys())
            return parent

        else:
            #inserer dans le noeud droit
        
            print("inserer dans le noeud droit")
            print(newnode.get_keys())
            print(parent.get_keys())
            newnode.remove_key(key)
            print("self",self.get_keys())
            print("newnode",newnode.get_keys())
            print("parent",parent.get_keys())
            return newnode
    
    



        

        
