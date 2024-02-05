#!/usr/bin/python3
"""cheking for a sub class"""
def inherits_from(obj, a_class):
    """
    Functions that returns true if object is intance of a class
    Args:
    obj-object to use
    a_class-class to check from.
    REturn:
    boolean 
    """
    if issubclass(type(obj), a_class) and type(obj) != a_class:
        return True
    return False

