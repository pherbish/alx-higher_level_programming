#!/usr/bin/python3
"""function checking object instance"""
def is_same_class(obj, a_class):
    """
    Function checks if objects is ann instance of aclass
    Args:
    obj-instance
    a_class-The class to check from
    """
   if type(obj) == a_class:
        return True
    return False
