#!/usr/bin/python3
"""subclass of  list"""
class MyList(list):
    """ A sub class inheriting from the paren class list"""
    def print_sorted(self):
        """
        A function that prints list in ascending order.
        parmeters:
        Takes lists of attributes and methods
        Returns: list of the attributes
        """
        print(sorted(self))
