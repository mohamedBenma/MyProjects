import unittest
from Node import Node
class NodeTestMethods(unittest.TestCase):
    def setUp(self):
        self.root=Node()
        self.node1=Node()
        self.node2=Node()
        self.node3=Node()
        self.node1.add_key(1)
        self.node2.add_key(3)
        self.node3.add_key(5)
        self.root.add_key(2)
        self.root.add_key(4)
        self.root.add_child(self.node1)
        self.root.add_child(self.node2)
        self.root.add_child(self.node3)

    def test_isleaf(self):
        self.assertFalse(self.root.isleaf())
        self.assertTrue(self.node1.isleaf())
        self.assertTrue(self.node2.isleaf())

    def test_getANDaddchild(self):
        self.assertEqual(len(self.root.get_child()),3)
        self.node4=Node()
        self.node4.add_key(15)
        self.root.add_child(self.node4)
        self.assertEqual(len(self.root.get_child()),4)

    def test_getANDsetparent(self):
        self.assertEqual(self.node1.get_parent(),self.root)

    def test_addANDsetkey(self):
        self.assertEqual(len(self.root.get_keys()),2)
        self.assertEqual(self.root.get_keys()[1],4)
        self.node3.add_key(7)
        self.assertTrue(len(self.node3.get_keys())==2)

    def test_sizeofAnNode(self):
        self.assertEqual(self.root.get_size(),len(self.root.get_keys()))
        self.node3LastSize=self.node3.get_size()
        self.node3.add_key(10)
        self.assertEqual(self.node3.get_size(),self.node3LastSize+1)

    def test_searchInNode(self):
        self.assertTrue(self.root.searchInNode(2))
        self.assertTrue(self.node1.searchInNode(1))
        self.assertFalse(self.node2.searchInNode(7))
if __name__ == '__main__':
    unittest.main()
