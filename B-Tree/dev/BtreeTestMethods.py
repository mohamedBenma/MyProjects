import unittest
from Node import Node
from Btree import Btree
class BtreeTestMethods(unittest.TestCase):
    def setUp(self):
        self.root=Node()
        self.node1=Node()
        self.node2=Node()
        self.node3=Node()
        self.node4=Node()
        self.node5=Node()
        self.node6=Node()
        self.node7=Node()
        self.node8=Node()
        self.node9=Node()
        self.node10=Node()
        self.node11=Node()
        self.node12=Node()
        self.node1.add_key(2)
        self.node2.add_key(6)
        self.node3.add_key(12)
        self.node4.add_key(1)
        self.node5.add_key(3)
        self.node6.add_key(5)
        self.node7.add_key(7)
        self.node8.add_key(11)
        self.node9.add_key(13)
        self.root.add_key(4)
        self.root.add_key(10)
        self.node1.add_child(self.node4)
        self.node2.add_child(self.node6)
        self.node1.add_child(self.node5)
        self.node2.add_child(self.node7)
        self.node3.add_child(self.node8)
        self.node3.add_child(self.node9)
        self.root.add_child(self.node1)
        self.root.add_child(self.node2)
        self.root.add_child(self.node3)
        self.tree=Btree(self.root,2,4)


    def test_linear_tree(self):
        linear=self.tree.linear_tree(self.root)
        allKeys=[]
        allNode=self.tree.get_all_node(self.root)
        for i in allNode:
            for j in i.get_keys():
                allKeys.append(j)
        for i in allKeys :
            self.assertTrue(i in linear)

    def test_search(self):
        for key in self.tree.linear_tree(self.root):
                self.assertTrue(self.tree.search(key,self.root))

if __name__ == '__main__':
    unittest.main()
