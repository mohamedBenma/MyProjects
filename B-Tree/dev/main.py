from logging import root
from Node import Node
from Btree import Btree
import sys
def main(args):
    #creation d'un arbre b aprtire de quelque neoud
    #U=2
    #L=4

    racine = Node()
    neud1=Node()
    neud2=Node()
    neud3=Node()
    neud4=Node()
    neud5=Node()
    neud6=Node()
    neud7=Node()
    neud8=Node()
    neud9=Node()
    neud10=Node()
    neud11=Node()
    neud12=Node()
    noeudRac=Node()
    neud1.add_key(2)
    neud2.add_key(6)
    neud3.add_key(12)
    neud4.add_key(1)
    neud5.add_key(3)
    neud6.add_key(5)
    neud7.add_key(7)
    neud8.add_key(11)
    neud9.add_key(13)
    racine.add_key(4)
    racine.add_key(10)
    #structure d'un arbre b simple
    neud1.add_child(neud4)
    neud1.add_child(neud5)
    neud2.add_child(neud6)
    neud2.add_child(neud7)
    neud3.add_child(neud8)
    neud3.add_child(neud9)
    racine.add_child(neud1)
    racine.add_child(neud2)
    racine.add_child(neud3)

    #lancer la recheche dans l'arbre
    arbre=Btree(racine,2,4)
    arbre1=Btree(noeudRac,2,4)
    arbre1.insert(4)
    arbre1.insert(10)
    arbre1.insert(2)
    arbre1.insert(11)
    arbre1.insert(13)
    arbre1.print_tree(noeudRac)
    noeudRac.root=False
    for i in range(6):
        print("la cles '" + str(i) +"' est dans l'abre  : " +str(arbre1.search(i,arbre1.get_root()))        )
    print(arbre1.linear_tree(noeudRac))
    for i in arbre1.get_all_node(noeudRac):
            print(i.get_keys())

    for i in arbre1.get_root().get_keys():
        print(i)


if __name__ == "__main__":
	print("execution du programme")
	main(sys.argv)
