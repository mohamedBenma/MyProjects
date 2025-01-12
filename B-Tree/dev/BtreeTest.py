from logging import root
from Node import Node
from Btree import Btree
import sys

def main(args):
    rac=Node()
    arbre=Btree(rac,2,3)
    arbre.insert(5)
    arbre.insert(2)
    arbre.insert(3)
    #print(arbre.searchNodeKey(arbre.get_root(),7).get_keys())
    
    
    

    #éarbre.insert(10)
    


    
    #arbre.insert(3)
    #arbre.insert(10)
    #arbre.insert(11)
    #arbre.insert(4)
    a=arbre.get_root()
    print("rac",a.get_keys())
    print("children nbr=",len(a.get_children()))
    arbre.print_tree(a)
    
   

   
    

if __name__ == "__main__":
	print("execution du programme")
	main(sys.argv)

